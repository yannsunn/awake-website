// モジュールのインポート
import performanceOptimizer from './performance-optimizer.js';
import browserSupport from './browser-support.js';

// メイン処理
(function() {
    'use strict';

    // AOS（Animate On Scroll）の初期化
    const initAOS = () => {
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
    };

    // ヘッダーのスクロール制御
    const initHeaderScroll = () => {
        const header = document.querySelector('.header');
        if (!header) return;
        
        let lastScroll = 0;

        const updateHeaderClass = () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            if (currentScroll > lastScroll && currentScroll > 80) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
        };

        updateHeaderClass();
        window.addEventListener('scroll', updateHeaderClass, { passive: true });
    };

    // スムーズスクロール
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // スクロールトップボタン
    const initScrollTopButton = () => {
        let scrollTopButton = document.querySelector('.scroll-top');
        
        // ボタンが存在しない場合は作成
        if (!scrollTopButton) {
            scrollTopButton = document.createElement('button');
            scrollTopButton.classList.add('scroll-top');
            scrollTopButton.setAttribute('aria-label', 'トップへスクロール');
            scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
            document.body.appendChild(scrollTopButton);
        }

        // スクロールイベント
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopButton.classList.add('visible');
            } else {
                scrollTopButton.classList.remove('visible');
            }
        }, { passive: true });

        // クリックイベント
        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };

    // フォームバリデーション
    const initFormValidation = () => {
        const form = document.getElementById('contact-form');
        if (!form) return;

        const validateEmail = (email) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };

        const showError = (input, message) => {
            const formGroup = input.closest('.form-group');
            let errorElement = formGroup.querySelector('.error-message');
            
            if (!errorElement) {
                errorElement = document.createElement('div');
                errorElement.className = 'error-message';
                formGroup.appendChild(errorElement);
            }
            
            errorElement.textContent = message;
            input.classList.add('invalid');
        };

        const clearError = (input) => {
            const formGroup = input.closest('.form-group');
            const errorElement = formGroup.querySelector('.error-message');
            if (errorElement) {
                errorElement.remove();
            }
            input.classList.remove('invalid');
        };

        const validateInput = (input) => {
            clearError(input);

            if (input.required && !input.value.trim()) {
                showError(input, '必須項目です');
                return false;
            }

            if (input.type === 'email' && !validateEmail(input.value)) {
                showError(input, '有効なメールアドレスを入力してください');
                return false;
            }

            return true;
        };

        // リアルタイムバリデーション
        form.querySelectorAll('input, textarea, select').forEach(input => {
            input.addEventListener('blur', () => validateInput(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('invalid')) {
                    validateInput(input);
                }
            });
        });

        // フォーム送信時のバリデーション
        form.addEventListener('submit', (e) => {
            let isValid = true;

            form.querySelectorAll('input, textarea, select').forEach(input => {
                if (!validateInput(input)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                e.preventDefault();
            }
        });
    };

    // モバイルメニュー
    const initMobileMenu = () => {
        const header = document.querySelector('.header');
        if (!header) return;

        // すでにモバイルメニューのボタンがある場合は何もしない
        if (document.querySelector('.mobile-menu-button')) return;

        // ナビゲーションメニュー
        const nav = header.querySelector('nav');
        if (!nav) return;

        // モバイルメニューボタンの作成
        const mobileMenuButton = document.createElement('button');
        mobileMenuButton.className = 'mobile-menu-button';
        mobileMenuButton.setAttribute('aria-label', 'メニュー');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenuButton.innerHTML = '<span></span>';
        
        // ヘッダーコンテナの最初の子要素の後に挿入
        const container = header.querySelector('.container');
        if (container && container.firstChild) {
            container.insertBefore(mobileMenuButton, container.firstChild.nextSibling);
        } else if (header.firstChild) {
            header.insertBefore(mobileMenuButton, header.firstChild.nextSibling);
        } else {
            header.appendChild(mobileMenuButton);
        }

        // クリックイベントの設定
        mobileMenuButton.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            
            // アクセシビリティのための属性設定
            const expanded = this.classList.contains('active') ? 'true' : 'false';
            this.setAttribute('aria-expanded', expanded);
        });

        // メニュー外クリックで閉じる
        document.addEventListener('click', function(event) {
            if (!header.contains(event.target) && nav.classList.contains('active')) {
                mobileMenuButton.classList.remove('active');
                nav.classList.remove('active');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        });

        // メニュー内のリンククリックで閉じる
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuButton.classList.remove('active');
                nav.classList.remove('active');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            });
        });
    };

    // 実行
    document.addEventListener('DOMContentLoaded', () => {
        // ブラウザサポートの初期化
        browserSupport.init();
        
        // パフォーマンス最適化の初期化
        performanceOptimizer.init();

        initAOS();
        initHeaderScroll();
        initSmoothScroll();
        initScrollTopButton();
        initFormValidation();
        initMobileMenu();
    });
})();

// カードホバーエフェクト
function initCardHoverEffects() {
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