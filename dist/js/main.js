import browserSupport from './browser-support.js';
import performanceOptimizer from './performance-optimizer.js';
import { MobileMenu } from './components/mobile-menu.js';
import { ScrollManager } from './utils/scroll-manager.js';
import { ErrorHandler } from './utils/error-handler.js';

// エラーハンドラーの初期化
ErrorHandler.setupGlobalHandlers();

// 初期化と設定
document.addEventListener('DOMContentLoaded', function() {
    try {
        // ブラウザサポートチェック
        browserSupport.init();

        // パフォーマンス最適化の初期化
        performanceOptimizer.init();

        // モバイルメニューの初期化
        new MobileMenu();

        // スクロール管理の初期化
        new ScrollManager();

        // AOSの初期化
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 100
            });
            
            // 画像ロード後にAOSリフレッシュ
            window.addEventListener('load', function() {
                AOS.refresh();
            });
        }

        // フォーム処理
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                try {
                    // フォーム送信時のボタン状態変更
                    const button = contactForm.querySelector('button[type="submit"]');
                    if (button) {
                        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 送信中...';
                        button.disabled = true;
                    }
                } catch (error) {
                    ErrorHandler.handle(error, 'フォーム送信処理');
                }
            });
        }

        // カードホバーエフェクト
        initCardHoverEffects();
    } catch (error) {
        ErrorHandler.handle(error, '初期化処理');
    }
});

// カードホバーエフェクト
function initCardHoverEffects() {
    try {
        const cards = document.querySelectorAll('.service-card, .product-card, .feature-card, .feature-item');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            });
        });
    } catch (error) {
        ErrorHandler.handle(error, 'カードホバーエフェクト');
    }
}

// 遅延読み込み
function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
        // ネイティブの遅延読み込みをサポートしているブラウザ
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
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
}

// スクロールイベントの最適化
function optimizeScrollEvents() {
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    const optimizedScroll = debounce(() => {
        const scrollTop = window.pageYOffset;
        const scrollTopBtn = document.querySelector('.scroll-top');
        
        if (scrollTopBtn) {
            if (scrollTop > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
        
        const header = document.querySelector('.header');
        if (header) {
            if (scrollTop > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }, 16);

    window.addEventListener('scroll', optimizedScroll, { passive: true });
} 