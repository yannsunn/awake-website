/**
 * 画像と動画の遅延読み込みを管理するユーティリティ
 */
export class LazyLoader {
    constructor() {
        this.options = {
            rootMargin: '100px 0px',
            threshold: 0.1
        };
        this.images = document.querySelectorAll('img[loading="lazy"], video[loading="lazy"]');
        this.init();
    }

    init() {
        // IntersectionObserverがサポートされていない場合
        if (!('IntersectionObserver' in window)) {
            this.loadImagesImmediately();
            return;
        }

        const observer = new IntersectionObserver(this.onIntersection.bind(this), this.options);
        
        this.images.forEach(image => {
            // データ属性にソースが設定されている場合のみ監視
            if (image.dataset.src || image.dataset.srcset) {
                observer.observe(image);
            }
        });
    }

    /**
     * Intersection Observer コールバック
     */
    onIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.loadImage(entry.target);
                entry.target._observer.unobserve(entry.target);
            }
        });
    }

    /**
     * 画像を読み込む
     */
    loadImage(image) {
        const isImage = image.nodeName === 'IMG';
        const isVideo = image.nodeName === 'VIDEO';

        if (isImage) {
            // data-srcから通常のsrcへ
            if (image.dataset.src) {
                image.src = image.dataset.src;
            }

            // data-srcsetから通常のsrcsetへ
            if (image.dataset.srcset) {
                image.srcset = image.dataset.srcset;
            }
        } else if (isVideo) {
            // ビデオの場合はソースを設定
            if (image.dataset.src) {
                image.src = image.dataset.src;
            }
        }

        // ロード後にクラスを追加
        image.classList.add('loaded');
        
        // data属性を削除してメモリ解放
        delete image.dataset.src;
        delete image.dataset.srcset;
    }

    /**
     * IntersectionObserverがサポートされていない場合は即時ロード
     */
    loadImagesImmediately() {
        this.images.forEach(image => {
            this.loadImage(image);
        });
    }
} 