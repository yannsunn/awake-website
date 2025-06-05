/**
 * 株式会社Awake - 究極魅力化JavaScript
 * 高CTA・CTR実現 / インタラクション最適化
 */

(function() {
    'use strict';

    // 重複実行防止
    if (window.awakeInitialized) return;
    window.awakeInitialized = true;

    // DOM要素キャッシュ
    const elements = {};

    // ユーティリティ関数
    const utils = {
        // 要素選択（キャッシュ機能付き）
        $(selector) {
            if (!elements[selector]) {
                elements[selector] = document.querySelector(selector);
            }
            return elements[selector];
        },

        // 複数要素選択
        $$(selector) {
            return document.querySelectorAll(selector);
        },

        // デバウンス関数
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        // スロットル関数
        throttle(func, limit) {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        // 要素が画面内に入っているかチェック
        isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },

        // スムーズスクロール
        smoothScrollTo(target) {
            const targetElement = typeof target === 'string' ? this.$(target) : target;
            if (targetElement) {
                const headerHeight = this.$('.header')?.offsetHeight || 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    // === メインナビゲーション機能 ===
    const navigation = {
        init() {
            this.setupSmoothScroll();
            this.setupActiveStates();
            this.setupHeaderScroll();
        },

        // スムーズスクロール設定
        setupSmoothScroll() {
            utils.$$('a[href^="#"]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    if (targetId === '#') return;
                    
                    utils.smoothScrollTo(targetId);
                    
                    // フォーカス管理
                    const targetElement = utils.$(targetId);
                    if (targetElement) {
                        targetElement.focus();
                    }
                });
            });
        },

        // アクティブ状態管理
        setupActiveStates() {
            const navLinks = utils.$$('.header__nav-item a[href^="#"]');
            
            const updateActiveStates = utils.throttle(() => {
                const sections = utils.$$('section[id]');
                const scrollPosition = window.pageYOffset + 100;

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, 100);

            window.addEventListener('scroll', updateActiveStates);
            updateActiveStates(); // 初期実行
        },

        // ヘッダースクロール効果
        setupHeaderScroll() {
            const header = utils.$('.header');
            if (!header) return;

            const handleScroll = utils.throttle(() => {
                const scrollY = window.pageYOffset;
                
                if (scrollY > 50) {
                    header.classList.add('scrolled');
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    header.classList.remove('scrolled');
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                    header.style.boxShadow = 'none';
                }
            }, 16);

            window.addEventListener('scroll', handleScroll);
        }
    };

    // === CTA最適化機能 ===
    const ctaOptimizer = {
        init() {
            this.setupButtonEffects();
            this.setupFormValidation();
            this.setupConversionTracking();
        },

        // ボタンエフェクト
        setupButtonEffects() {
            utils.$$('.btn').forEach(button => {
                // リップルエフェクト
                button.addEventListener('click', (e) => {
                    const ripple = document.createElement('span');
                    const rect = button.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;
                    
                    ripple.style.cssText = `
                        position: absolute;
                        width: ${size}px;
                        height: ${size}px;
                        left: ${x}px;
                        top: ${y}px;
                        background: rgba(255, 255, 255, 0.4);
                        border-radius: 50%;
                        transform: scale(0);
                        animation: ripple 0.6s linear;
                        pointer-events: none;
                    `;
                    
                    button.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });

                // ホバーエフェクト強化
                button.addEventListener('mouseenter', () => {
                    button.style.transform = 'translateY(-2px) scale(1.02)';
                });

                button.addEventListener('mouseleave', () => {
                    button.style.transform = 'translateY(0) scale(1)';
                });
            });

            // CSSでのリップルアニメーション定義
            if (!document.querySelector('#ripple-style')) {
                const style = document.createElement('style');
                style.id = 'ripple-style';
                style.textContent = `
                    @keyframes ripple {
                        to {
                            transform: scale(2);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
        },

        // フォームバリデーション
        setupFormValidation() {
            const forms = utils.$$('form');
            
            forms.forEach(form => {
                const inputs = form.querySelectorAll('input, textarea, select');
                
                inputs.forEach(input => {
                    // リアルタイムバリデーション
                    input.addEventListener('blur', () => {
                        this.validateField(input);
                    });

                    input.addEventListener('input', utils.debounce(() => {
                        this.validateField(input);
                    }, 300));
                });

                // フォーム送信時バリデーション
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    let isValid = true;
                    inputs.forEach(input => {
                        if (!this.validateField(input)) {
                            isValid = false;
                        }
                    });

                    if (isValid) {
                        this.submitForm(form);
                    } else {
                        this.showErrorMessage('入力内容に誤りがあります。確認してください。');
                    }
                });
            });
        },

        // フィールドバリデーション
        validateField(field) {
            const value = field.value.trim();
            const type = field.type;
            const required = field.hasAttribute('required');
            let isValid = true;
            let message = '';

            // 必須チェック
            if (required && !value) {
                isValid = false;
                message = 'この項目は必須です';
            }

            // Email検証
            else if (type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    message = '正しいメールアドレスを入力してください';
                }
            }

            // 電話番号検証
            else if (field.name === 'phone' && value) {
                const phoneRegex = /^[\d\-\(\)\+\s]+$/;
                if (!phoneRegex.test(value) || value.length < 10) {
                    isValid = false;
                    message = '正しい電話番号を入力してください';
                }
            }

            this.updateFieldStatus(field, isValid, message);
            return isValid;
        },

        // フィールド状態更新
        updateFieldStatus(field, isValid, message) {
            const errorElement = field.parentNode.querySelector('.error-message') || 
                               this.createErrorElement(field);

            if (isValid) {
                field.classList.remove('error');
                field.classList.add('valid');
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            } else {
                field.classList.remove('valid');
                field.classList.add('error');
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            }
        },

        // エラーメッセージ要素作成
        createErrorElement(field) {
            const errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.style.cssText = `
                color: #ef4444;
                font-size: 0.875rem;
                margin-top: 0.25rem;
                display: none;
            `;
            field.parentNode.appendChild(errorElement);
            return errorElement;
        },

        // フォーム送信
        async submitForm(form) {
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // ローディング状態
            submitButton.textContent = '送信中...';
            submitButton.disabled = true;

            try {
                // フォームデータ準備
                const formData = new FormData(form);
                
                // Netlify Forms対応
                if (form.hasAttribute('data-netlify')) {
                    await this.submitToNetlify(formData);
                } else {
                    // 通常のAPI送信
                    await this.submitToAPI(formData);
                }

                this.showSuccessMessage('お問い合わせを送信しました。24時間以内にご返信いたします。');
                form.reset();
                
                // コンバージョン追跡
                this.trackConversion('form_submit');

            } catch (error) {
                console.error('Form submission error:', error);
                this.showErrorMessage('送信に失敗しました。しばらく後に再度お試しください。');
            } finally {
                // ボタン状態復元
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        },

        // Netlify Forms送信
        async submitToNetlify(formData) {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        },

        // API送信
        async submitToAPI(formData) {
            // API エンドポイント送信のロジック
            // 実際のAPIエンドポイントに応じて実装
            console.log('API submission would happen here', formData);
        },

        // 成功メッセージ表示
        showSuccessMessage(message) {
            this.showMessage(message, 'success');
        },

        // エラーメッセージ表示
        showErrorMessage(message) {
            this.showMessage(message, 'error');
        },

        // メッセージ表示共通関数
        showMessage(message, type) {
            const messageElement = document.createElement('div');
            messageElement.className = `message message-${type}`;
            messageElement.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: ${type === 'success' ? '#10b981' : '#ef4444'};
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                z-index: 10000;
                animation: slideInRight 0.3s ease;
                max-width: 400px;
            `;
            messageElement.textContent = message;

            // アニメーション定義
            if (!document.querySelector('#message-style')) {
                const style = document.createElement('style');
                style.id = 'message-style';
                style.textContent = `
                    @keyframes slideInRight {
                        from {
                            transform: translateX(100%);
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }
                `;
                document.head.appendChild(style);
            }

            document.body.appendChild(messageElement);

            // 自動削除
            setTimeout(() => {
                messageElement.style.animation = 'slideInRight 0.3s ease reverse';
                setTimeout(() => {
                    messageElement.remove();
                }, 300);
            }, 5000);
        },

        // コンバージョン追跡
        trackConversion(action) {
            // Google Analytics 4 対応
            if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    action: action,
                    category: 'engagement',
                    label: 'awake_website'
                });
            }

            // カスタム追跡
            console.log(`Conversion tracked: ${action}`);
        },

        // コンバージョン追跡設定
        setupConversionTracking() {
            // CTAボタンクリック追跡
            utils.$$('.btn-primary').forEach(button => {
                button.addEventListener('click', () => {
                    this.trackConversion('cta_click');
                });
            });

            // 外部リンククリック追跡
            utils.$$('a[href^="http"]').forEach(link => {
                link.addEventListener('click', () => {
                    this.trackConversion('external_link_click');
                });
            });
        }
    };

    // === パフォーマンス最適化 ===
    const performance = {
        init() {
            this.setupLazyLoading();
            this.setupIntersectionObserver();
            this.optimizeAnimations();
        },

        // 遅延読み込み
        setupLazyLoading() {
            const images = utils.$$('img[data-src]');
            
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    });
                });

                images.forEach(img => imageObserver.observe(img));
            } else {
                // フォールバック
                images.forEach(img => {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                });
            }
        },

        // スクロールアニメーション
        setupIntersectionObserver() {
            const animateElements = utils.$$('.animate-on-scroll, .feature-card, .service-card');
            
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-in');
                            observer.unobserve(entry.target);
                        }
                    });
                }, {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                });

                animateElements.forEach(el => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    observer.observe(el);
                });

                // アニメーション実行スタイル
                const animateStyle = document.createElement('style');
                animateStyle.textContent = `
                    .animate-in {
                        opacity: 1 !important;
                        transform: translateY(0) !important;
                    }
                `;
                document.head.appendChild(animateStyle);
            }
        },

        // アニメーション最適化
        optimizeAnimations() {
            // Reduced motion対応
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                const style = document.createElement('style');
                style.textContent = `
                    *, *::before, *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }
    };

    // === アクセシビリティ強化 ===
    const accessibility = {
        init() {
            this.setupKeyboardNavigation();
            this.setupFocusManagement();
            this.setupARIA();
        },

        // キーボードナビゲーション
        setupKeyboardNavigation() {
            // Escキーでモーダル閉じる
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    const modals = utils.$$('.modal.active');
                    modals.forEach(modal => {
                        modal.classList.remove('active');
                    });
                }
            });

            // Tabキー順序管理
            const focusableElements = utils.$$('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
            
            focusableElements.forEach((element, index) => {
                element.addEventListener('keydown', (e) => {
                    if (e.key === 'Tab') {
                        // Tabキーナビゲーションの強化
                        if (e.shiftKey && index === 0) {
                            e.preventDefault();
                            focusableElements[focusableElements.length - 1].focus();
                        } else if (!e.shiftKey && index === focusableElements.length - 1) {
                            e.preventDefault();
                            focusableElements[0].focus();
                        }
                    }
                });
            });
        },

        // フォーカス管理
        setupFocusManagement() {
            // スキップリンク
            const skipLink = utils.$('.sr-only-focusable');
            if (skipLink) {
                skipLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = utils.$(skipLink.getAttribute('href'));
                    if (target) {
                        target.focus();
                        target.scrollIntoView();
                    }
                });
            }

            // フォーカス表示強化
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    document.body.classList.add('keyboard-navigation');
                }
            });

            document.addEventListener('mousedown', () => {
                document.body.classList.remove('keyboard-navigation');
            });
        },

        // ARIA属性設定
        setupARIA() {
            // 動的コンテンツのARIA更新
            const updateARIA = () => {
                // ローディング状態
                const loadingElements = utils.$$('[data-loading]');
                loadingElements.forEach(el => {
                    el.setAttribute('aria-busy', el.dataset.loading === 'true');
                });

                // 展開状態
                const expandableElements = utils.$$('[data-expanded]');
                expandableElements.forEach(el => {
                    el.setAttribute('aria-expanded', el.dataset.expanded === 'true');
                });
            };

            // 初期設定
            updateARIA();

            // DOM変更監視
            if ('MutationObserver' in window) {
                const observer = new MutationObserver(updateARIA);
                observer.observe(document.body, {
                    attributes: true,
                    attributeFilter: ['data-loading', 'data-expanded']
                });
            }
        }
    };

    // === 初期化 ===
    const init = () => {
        // DOM読み込み完了後に実行
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        try {
            navigation.init();
            ctaOptimizer.init();
            performance.init();
            accessibility.init();

            console.log('🚀 Awake Website Initialized Successfully');
        } catch (error) {
            console.error('❌ Initialization Error:', error);
        }
    };

    // 初期化実行
    init();

    // パブリックAPI
    window.Awake = {
        utils,
        navigation,
        ctaOptimizer,
        performance,
        accessibility
    };

})();