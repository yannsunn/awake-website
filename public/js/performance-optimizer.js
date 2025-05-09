// パフォーマンス最適化のためのユーティリティ
const performanceOptimizer = {
    // 画像の遅延読み込み
    setupLazyLoading: function() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('loading' in HTMLImageElement.prototype) {
            // ネイティブの遅延読み込みをサポートしているブラウザ
            images.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
            });
        } else {
            // ポリフィルの読み込み
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
            document.body.appendChild(script);
            
            // data-src属性を持つ画像にlazyloadクラスを追加
            document.querySelectorAll('img[data-src]').forEach(img => {
                img.classList.add('lazyload');
            });
        }
        
        // 画像の読み込み完了処理
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        });
    },
    
    // インタラクション最適化
    optimizeInteractions: function() {
        // スクロールイベントの最適化
        this.setupOptimizedScroll();
        
        // フォーム入力の最適化
        this.setupFormInputOptimization();
        
        // リソースのプリフェッチ
        this.setupResourcePrefetch();
    },
    
    // スクロールイベントの最適化
    setupOptimizedScroll: function() {
        const scrollTopBtn = document.querySelector('.scroll-top');
        if (!scrollTopBtn) return;
        
        // スクロールイベントのパフォーマンス最適化
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }, { passive: true }); // パッシブリスナーでパフォーマンス向上
    },
    
    // フォーム入力の最適化
    setupFormInputOptimization: function() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');
            
            inputs.forEach(input => {
                input.addEventListener('input', this.debounce(function(e) {
                    // 入力値を処理（バリデーションなど）
                    // ここでは必要最小限の処理のみ実施
                }, 300), { passive: true });
            });
        });
    },
    
    // リソースのプリフェッチ
    setupResourcePrefetch: function() {
        // プリフェッチするリソースのリスト
        const resources = [
            '/services/ec.html',
            '/services/ai.html',
            '/services/insurance.html',
            '/services/furniture.html'
        ];
    
        // ユーザーがアイドル状態の時にプリフェッチ
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                resources.forEach(url => {
                    const link = document.createElement('link');
                    link.rel = 'prefetch';
                    link.href = url;
                    document.head.appendChild(link);
                });
            }, { timeout: 2000 });
        } else {
            // requestIdleCallback非対応ブラウザ向けのフォールバック
            setTimeout(() => {
                resources.forEach(url => {
                    const link = document.createElement('link');
                    link.rel = 'prefetch';
                    link.href = url;
                    document.head.appendChild(link);
                });
            }, 1000);
        }
    },
    
    // 一定時間後に実行する関数（パフォーマンス向上のため）
    debounce: function(func, wait = 20) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    },
    
    // サービスワーカーの登録（キャッシュ最適化）
    setupServiceWorker: function() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                // サービスワーカーが実装されている場合はここで登録
                // navigator.serviceWorker.register('/sw.js');
            });
        }
    },
    
    // モダンなパフォーマンスメトリクスの取得
    measurePerformance: function() {
        // ページの読み込み完了後に測定
        window.addEventListener('load', () => {
            // 非推奨APIの代わりに新しいAPIを使用
            if (window.performance && window.performance.timing) {
                setTimeout(() => {
                    // Navigation Timing API
                    const timing = window.performance.timing;
                    const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
                    console.log('Page Load Time:', pageLoadTime + 'ms');
                    
                    // Mark/Measure APIを使用した代替手段
                    window.performance.mark('measurement-end');
                    window.performance.measure('total-page-load', 'navigationStart', 'measurement-end');
                    
                    // Web Vitalsの近似測定
                    if ('PerformanceObserver' in window) {
                        this.logCoreWebVitals();
                    }
                }, 0);
            }
        });
    },
    
    // Core Web Vitalsのレポート
    logCoreWebVitals: function() {
        try {
            // レイアウトシフト（CLS）
            let cumulativeLayoutShift = 0;
            
            // 非推奨のAPIを使用せず、PerformanceObserverを使用
            const clsObserver = new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    if (!entry.hadRecentInput) {
                        cumulativeLayoutShift += entry.value;
                    }
                }
                console.log('Cumulative Layout Shift:', cumulativeLayoutShift);
            });
            
            // 可能な場合のみAPIを使用
            if (PerformanceObserver.supportedEntryTypes.includes('layout-shift')) {
                clsObserver.observe({ type: 'layout-shift', buffered: true });
            }
            
            // 最大コンテンツフルペイント（LCP）
            if (PerformanceObserver.supportedEntryTypes.includes('largest-contentful-paint')) {
                const lcpObserver = new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    console.log('Largest Contentful Paint:', lastEntry.startTime);
                });
                lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
            }
            
            // 初回入力遅延（FID）
            if (PerformanceObserver.supportedEntryTypes.includes('first-input')) {
                const fidObserver = new PerformanceObserver((entryList) => {
                    for (const entry of entryList.getEntries()) {
                        const delay = entry.processingStart - entry.startTime;
                        console.log('First Input Delay:', delay);
                    }
                });
                fidObserver.observe({ type: 'first-input', buffered: true });
            }
        } catch (e) {
            console.warn('Core Web Vitals measurement not supported', e);
        }
    },
    
    // 初期化
    init: function() {
        this.setupLazyLoading();
        this.optimizeInteractions();
        // this.setupServiceWorker(); // 必要に応じて有効化
        this.measurePerformance();
        
        return this;
    }
};

// エクスポート
export default performanceOptimizer; 