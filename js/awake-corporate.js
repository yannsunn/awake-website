/**
 * 株式会社Awake - コーポレートサイト JavaScript
 * シンプル・クリーン・読みやすさ最優先
 */

(function() {
    'use strict';

    // 重複実行防止
    if (window.awakeInitialized) return;
    window.awakeInitialized = true;

    // ユーティリティ関数
    const utils = {
        $(selector) {
            return document.querySelector(selector);
        },

        $$(selector) {
            return document.querySelectorAll(selector);
        },

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
        }
    };

    // === ナビゲーション機能 ===
    const navigation = {
        init() {
            this.setupSmoothScroll();
            this.setupActiveStates();
            this.setupMobileMenu();
        },

        setupSmoothScroll() {
            utils.$$('a[href^="#"]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = utils.$(targetId);
                    if (targetElement) {
                        const headerHeight = 80;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        },

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
            updateActiveStates();
        },

        setupMobileMenu() {
            // モバイルメニュー機能（必要に応じて実装）
            const mobileToggle = utils.$('.mobile-menu-toggle');
            const nav = utils.$('.header__nav');
            
            if (mobileToggle && nav) {
                mobileToggle.addEventListener('click', () => {
                    nav.classList.toggle('active');
                });
            }
        }
    };

    // === フォーム機能 ===
    const forms = {
        init() {
            this.setupValidation();
        },

        setupValidation() {
            const formElements = utils.$$('form');
            
            formElements.forEach(form => {
                const inputs = form.querySelectorAll('input, textarea, select');
                
                inputs.forEach(input => {
                    input.addEventListener('blur', () => {
                        this.validateField(input);
                    });

                    input.addEventListener('input', utils.debounce(() => {
                        if (input.classList.contains('error')) {
                            this.validateField(input);
                        }
                    }, 300));
                });

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
                    }
                });
            });
        },

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

            this.updateFieldStatus(field, isValid, message);
            return isValid;
        },

        updateFieldStatus(field, isValid, message) {
            const errorElement = field.parentNode.querySelector('.error-message') || 
                               this.createErrorElement(field);

            if (isValid) {
                field.classList.remove('error');
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            } else {
                field.classList.add('error');
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            }
        },

        createErrorElement(field) {
            const errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            field.parentNode.appendChild(errorElement);
            return errorElement;
        },

        async submitForm(form) {
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // ローディング状態
            submitButton.textContent = '送信中...';
            submitButton.disabled = true;

            try {
                const formData = new FormData(form);
                
                if (form.hasAttribute('data-netlify')) {
                    await this.submitToNetlify(formData);
                }

                this.showSuccessMessage('お問い合わせを送信しました。24時間以内にご返信いたします。');
                form.reset();

            } catch (error) {
                console.error('Form submission error:', error);
                this.showErrorMessage('送信に失敗しました。しばらく後に再度お試しください。');
            } finally {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        },

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

        showSuccessMessage(message) {
            this.showMessage(message, 'success');
        },

        showErrorMessage(message) {
            this.showMessage(message, 'error');
        },

        showMessage(message, type) {
            const messageElement = document.createElement('div');
            messageElement.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: ${type === 'success' ? '#10b981' : '#ef4444'};
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 6px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
                z-index: 10000;
                max-width: 400px;
                font-size: 14px;
            `;
            messageElement.textContent = message;

            document.body.appendChild(messageElement);

            setTimeout(() => {
                messageElement.remove();
            }, 5000);
        }
    };

    // === スクロール効果 ===
    const scrollEffects = {
        init() {
            this.setupHeaderScroll();
            this.setupScrollAnimations();
        },

        setupHeaderScroll() {
            const header = utils.$('.header');
            if (!header) return;

            const handleScroll = utils.throttle(() => {
                const scrollY = window.pageYOffset;
                
                if (scrollY > 50) {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                    header.style.boxShadow = 'none';
                }
            }, 16);

            window.addEventListener('scroll', handleScroll);
        },

        setupScrollAnimations() {
            const animateElements = utils.$$('.feature-card, .service-card');
            
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                            observer.unobserve(entry.target);
                        }
                    });
                }, {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                });

                animateElements.forEach(el => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(20px)';
                    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    observer.observe(el);
                });
            }
        }
    };

    // === アクセシビリティ ===
    const accessibility = {
        init() {
            this.setupKeyboardNavigation();
            this.setupFocusManagement();
        },

        setupKeyboardNavigation() {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    document.body.classList.add('keyboard-navigation');
                }
            });

            document.addEventListener('mousedown', () => {
                document.body.classList.remove('keyboard-navigation');
            });
        },

        setupFocusManagement() {
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
        }
    };

    // === 初期化 ===
    const init = () => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        try {
            navigation.init();
            forms.init();
            scrollEffects.init();
            accessibility.init();

            console.log('✅ Awake Corporate Site Initialized');
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
        forms,
        scrollEffects,
        accessibility
    };

})();