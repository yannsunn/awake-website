/**
 * 画像と動画の遅延読み込みを管理するユーティリティ
 */
export class LazyLoader {
    constructor(options = {}) {
        this.options = {
            rootMargin: options.rootMargin || '100px 0px',
            threshold: options.threshold || 0.1,
            loadingClass: options.loadingClass || 'loading',
            loadedClass: options.loadedClass || 'loaded',
            errorClass: options.errorClass || 'error',
            priority: options.priority || false,
            preload: options.preload || false,
            preloadDistance: options.preloadDistance || '200px',
            enableMetrics: options.enableMetrics || false
        };
        
        this.observers = new Map();
        this.retryCount = new Map();
        this.maxRetries = 3;
        this.metrics = {
            loadTimes: new Map(),
            errors: new Map(),
            totalLoaded: 0,
            totalErrors: 0
        };
        this.preloadObserver = null;
        this.mutationObserver = null;
        this.init();
    }

    init() {
        try {
            if (!('IntersectionObserver' in window)) {
                console.warn('IntersectionObserver not supported, falling back to immediate loading');
                this.loadImagesImmediately();
                return;
            }

            this.setupPreloadObserver();
            this.observeElements();
            this.setupMutationObserver();
        } catch (error) {
            console.error('LazyLoader initialization failed:', error);
            this.loadImagesImmediately();
        }
    }

    /**
     * プリロード用のIntersectionObserverを設定
     */
    setupPreloadObserver() {
        if (!this.options.preload) return;

        this.preloadObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        const priority = element.dataset.priority || 'low';
                        this.preloadElement(element, priority);
                        this.preloadObserver.unobserve(element);
                    }
                });
            },
            {
                rootMargin: this.options.preloadDistance,
                threshold: 0
            }
        );
    }

    /**
     * 要素のプリロード
     */
    preloadElement(element, priority) {
        const url = element.dataset.src;
        if (!url) return;

        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = element.nodeName.toLowerCase();
        link.href = url;
        link.priority = priority;
        document.head.appendChild(link);
    }

    /**
     * 要素の監視を開始
     */
    observeElements() {
        const elements = document.querySelectorAll('img[loading="lazy"], video[loading="lazy"], iframe[loading="lazy"]');
        elements.forEach(element => {
            if (this.options.priority) {
                const priority = element.dataset.priority || 'low';
                this.setPriority(element, priority);
            }
            this.observeElement(element);
        });
    }

    /**
     * 要素の優先度を設定
     */
    setPriority(element, priority) {
        element.dataset.priority = priority;
        if (priority === 'high') {
            this.options.rootMargin = '200px 0px';
            this.options.threshold = 0;
        }
    }

    /**
     * 単一要素の監視を設定
     */
    observeElement(element) {
        if (!element.dataset.src && !element.dataset.srcset) return;

        const observer = new IntersectionObserver(this.onIntersection.bind(this), this.options);
        observer.observe(element);
        this.observers.set(element, observer);
        element.classList.add(this.options.loadingClass);
    }

    /**
     * DOM変更の監視を設定
     */
    setupMutationObserver() {
        const mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.matches('[loading="lazy"]')) {
                        this.observeElement(node);
                    }
                });
            });
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    /**
     * Intersection Observer コールバック
     */
    onIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                this.observers.delete(entry.target);
                this.loadElement(entry.target);
            }
        });
    }

    /**
     * 要素を読み込む
     */
    async loadElement(element) {
        const startTime = performance.now();
        try {
            const isImage = element.nodeName === 'IMG';
            const isVideo = element.nodeName === 'VIDEO';
            const isIframe = element.nodeName === 'IFRAME';

            if (isImage || isVideo) {
                await this.loadMediaElement(element);
            } else if (isIframe) {
                await this.loadIframe(element);
            }

            element.classList.remove(this.options.loadingClass);
            element.classList.add(this.options.loadedClass);
            this.cleanup(element);

            if (this.options.enableMetrics) {
                this.updateMetrics(element, startTime);
            }
        } catch (error) {
            this.handleLoadError(element, error);
        }
    }

    /**
     * メディア要素（画像・動画）の読み込み
     */
    loadMediaElement(element) {
        return new Promise((resolve, reject) => {
            const onLoad = () => {
                element.removeEventListener('load', onLoad);
                element.removeEventListener('error', onError);
                resolve();
            };

            const onError = (error) => {
                element.removeEventListener('load', onLoad);
                element.removeEventListener('error', onError);
                reject(error);
            };

            element.addEventListener('load', onLoad);
            element.addEventListener('error', onError);

            if (element.dataset.src) {
                element.src = element.dataset.src;
            }
            if (element.dataset.srcset) {
                element.srcset = element.dataset.srcset;
            }
        });
    }

    /**
     * iframeの読み込み
     */
    loadIframe(iframe) {
        return new Promise((resolve, reject) => {
            iframe.onload = () => resolve();
            iframe.onerror = (error) => reject(error);
            iframe.src = iframe.dataset.src;
        });
    }

    /**
     * メトリクスの更新
     */
    updateMetrics(element, startTime) {
        const loadTime = performance.now() - startTime;
        this.metrics.loadTimes.set(element, loadTime);
        this.metrics.totalLoaded++;
    }

    /**
     * メトリクスの取得
     */
    getMetrics() {
        const averageLoadTime = Array.from(this.metrics.loadTimes.values()).reduce((a, b) => a + b, 0) / this.metrics.totalLoaded;
        return {
            totalLoaded: this.metrics.totalLoaded,
            totalErrors: this.metrics.totalErrors,
            averageLoadTime,
            errorRate: (this.metrics.totalErrors / this.metrics.totalLoaded) * 100
        };
    }

    /**
     * 読み込みエラーの処理
     */
    handleLoadError(element, error) {
        console.error(`Failed to load element:`, error);
        
        if (this.options.enableMetrics) {
            this.metrics.errors.set(element, error);
            this.metrics.totalErrors++;
        }

        const retries = this.retryCount.get(element) || 0;
        if (retries < this.maxRetries) {
            this.retryCount.set(element, retries + 1);
            setTimeout(() => this.loadElement(element), 1000 * Math.pow(2, retries));
        } else {
            element.classList.remove(this.options.loadingClass);
            element.classList.add(this.options.errorClass);
            this.cleanup(element);
        }
    }

    /**
     * 要素のクリーンアップ
     */
    cleanup(element) {
        delete element.dataset.src;
        delete element.dataset.srcset;
        this.retryCount.delete(element);
    }

    /**
     * 即時読み込み
     */
    loadImagesImmediately() {
        const elements = document.querySelectorAll('img[loading="lazy"], video[loading="lazy"], iframe[loading="lazy"]');
        elements.forEach(element => this.loadElement(element));
    }

    /**
     * インスタンスの破棄
     */
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        if (this.preloadObserver) {
            this.preloadObserver.disconnect();
        }
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
        }
        this.observers.clear();
        this.retryCount.clear();
        this.metrics.loadTimes.clear();
        this.metrics.errors.clear();
    }
} 