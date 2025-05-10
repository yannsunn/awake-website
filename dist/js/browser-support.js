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
        for (const url of needed) {
            await new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = url;
                script.onload = resolve;
                script.onerror = resolve; // エラーでも続行
                document.head.appendChild(script);
            });
        }
        
        return true;
    },

    // スタイルの互換性対応
    applyCompatibilityFixes: () => {
        // IE11サポートがまだ必要な場合のみ
        if (navigator.userAgent.indexOf('Trident/') > -1) {
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
                    .feature-item,
                    .feature-card {
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
        }
    },

    // タッチデバイスの検出と最適化
    optimizeForTouchDevices: () => {
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            document.body.classList.add('touch-device');
            
            // ホバーエフェクトの調整
            const style = document.createElement('style');
            style.textContent = `
                .touch-device .service-card:hover,
                .touch-device .product-card:hover,
                .touch-device .feature-card:hover,
                .touch-device .feature-item:hover {
                    transform: none !important;
                }
                
                /* タッチデバイス用のタップハイライト */
                .touch-device .service-card:active,
                .touch-device .product-card:active,
                .touch-device .feature-card:active,
                .touch-device .feature-item:active {
                    background-color: rgba(0,123,255,0.05);
                }
            `;
            document.head.appendChild(style);
        }
    },

    // 画像の代替テキスト確認
    checkAccessibility: () => {
        const images = document.querySelectorAll('img:not([alt])');
        if (images.length > 0) {
            console.warn('アクセシビリティ警告: alt属性のない画像が見つかりました:', images);
            
            // 空のalt属性を追加（装飾的な画像用）
            images.forEach(img => {
                if (!img.hasAttribute('alt')) {
                    img.setAttribute('alt', '');
                }
            });
        }
    },

    // フォームの互換性チェック
    validateForms: () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            // HTML5バリデーション非対応のブラウザ対応
            if (!('checkValidity' in form)) {
                form.addEventListener('submit', (e) => {
                    let valid = true;
                    const inputs = form.querySelectorAll('input[required], textarea[required]');
                    
                    inputs.forEach(input => {
                        if (!input.value.trim()) {
                            e.preventDefault();
                            input.classList.add('error');
                            
                            // エラーメッセージの表示
                            let errorMsg = input.nextElementSibling;
                            if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                                errorMsg = document.createElement('div');
                                errorMsg.classList.add('error-message');
                                errorMsg.textContent = '入力してください';
                                input.parentNode.insertBefore(errorMsg, input.nextSibling);
                            }
                            
                            valid = false;
                        }
                    });
                    
                    return valid;
                });
            }
        });
    },

    // ブラウザ機能のチェック（デバッグ用）
    logSupport: () => {
        console.log('ブラウザ機能サポート状況:', browserSupport.features);
    },

    // 初期化
    init: async () => {
        try {
            // ポリフィルの読み込み
            await browserSupport.loadPolyfills();
            
            // 各種互換性対応の適用
            browserSupport.applyCompatibilityFixes();
            browserSupport.optimizeForTouchDevices();
            browserSupport.checkAccessibility();
            browserSupport.validateForms();
            
            if (window.location.search.includes('debug=1')) {
                browserSupport.logSupport();
            }
            
            return true;
        } catch (error) {
            console.error('ブラウザサポート初期化エラー:', error);
            return false;
        }
    }
};

// 自動初期化（main.jsから明示的に呼び出されなくても動作するように）
document.addEventListener('DOMContentLoaded', () => {
    if (typeof browserSupport.init === 'function') {
        browserSupport.init().catch(error => {
            console.error('ブラウザサポートの初期化に失敗しました:', error);
        });
    }
}); 