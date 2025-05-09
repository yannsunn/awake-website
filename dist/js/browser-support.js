// ブラウザ機能の検出と代替機能の提供
const browserSupport = {
    // 機能検出
    features: {
        flexbox: typeof document.createElement('div').style.flex !== 'undefined',
        grid: typeof document.createElement('div').style.grid !== 'undefined',
        customProperties: window.CSS && CSS.supports('color', 'var(--primary)'),
        intersectionObserver: 'IntersectionObserver' in window,
        smoothScroll: 'scrollBehavior' in document.documentElement.style
    },

    // ポリフィルの読み込み
    loadPolyfills: async () => {
        const needed = [];

        if (!browserSupport.features.smoothScroll) {
            needed.push('https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/smoothscroll.min.js');
        }

        if (!browserSupport.features.intersectionObserver) {
            needed.push('https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver');
        }

        // 必要なポリフィルの動的読み込み
        needed.forEach(url => {
            const script = document.createElement('script');
            script.src = url;
            document.head.appendChild(script);
        });
    },

    // スタイルの互換性対応
    applyCompatibilityFixes: () => {
        const style = document.createElement('style');
        style.textContent = `
            /* IE11のFlexbox対応 */
            @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
                .service-grid,
                .product-grid,
                .feature-grid {
                    display: block;
                }
                .service-card,
                .product-card,
                .feature-item {
                    width: calc(33.333% - 2rem);
                    float: left;
                    margin: 1rem;
                }
                .footer-content {
                    display: block;
                }
                .footer-section {
                    float: left;
                    width: calc(33.333% - 2rem);
                    margin: 1rem;
                }
            }
        `;
        document.head.appendChild(style);
    },

    // タッチデバイスの検出と最適化
    optimizeForTouchDevices: () => {
        if ('ontouchstart' in window) {
            document.body.classList.add('touch-device');
            
            // ホバーエフェクトの調整
            const style = document.createElement('style');
            style.textContent = `
                .touch-device .service-card:hover,
                .touch-device .product-card:hover {
                    transform: none;
                }
            `;
            document.head.appendChild(style);
        }
    },

    // 画像の代替テキスト確認
    checkAccessibility: () => {
        const images = document.querySelectorAll('img:not([alt])');
        if (images.length > 0) {
            console.warn('Accessibility: Images without alt text found:', images);
        }
    },

    // フォームの互換性チェック
    validateForms: () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            // HTML5バリデーション非対応のブラウザ対応
            if (!form.checkValidity) {
                form.addEventListener('submit', (e) => {
                    const inputs = form.querySelectorAll('input[required], textarea[required]');
                    inputs.forEach(input => {
                        if (!input.value.trim()) {
                            e.preventDefault();
                            input.classList.add('error');
                        }
                    });
                });
            }
        });
    },

    // 初期化
    init: async () => {
        console.log('Browser Features:', browserSupport.features);
        await browserSupport.loadPolyfills();
        browserSupport.applyCompatibilityFixes();
        browserSupport.optimizeForTouchDevices();
        browserSupport.checkAccessibility();
        browserSupport.validateForms();
    }
};

// 初期化の実行
document.addEventListener('DOMContentLoaded', () => {
    browserSupport.init();
}); 