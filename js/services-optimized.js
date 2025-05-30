/**
 * サービスページ最適化統合JavaScript
 * トップページ品質レベルのインタラクションを提供
 */

class ServicesOptimized {
    constructor() {
        this.init();
    }

    init() {
        // DOM読み込み完了後に実行
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupAll());
        } else {
            this.setupAll();
        }
    }

    setupAll() {
        this.setupSmoothScroll();
        this.setupScrollReveal();
        this.setupMobileMenu();
        this.setupGlassEffects();
        this.setupLazyLoading();
        this.setupServiceNavigation();
        this.setupFormOptimization();
        this.setupPerformanceOptimization();
    }

    // === スムーススクロール === //
    setupSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // === スクロール時のアニメーション === //
    setupScrollReveal() {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // パフォーマンス向上のため、一度表示されたら監視を停止
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // アニメーション対象要素を設定
        const revealElements = document.querySelectorAll(
            '.glass-card, .feature-card, .pricing-card, .portfolio-item, .timeline-item'
        );

        revealElements.forEach((el, index) => {
            el.classList.add('scroll-reveal');
            // 段階的な表示のための遅延
            el.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(el);
        });
    }

    // === モバイルメニュー === //
    setupMobileMenu() {
        const menuToggle = document.querySelector('.header__menu-toggle');
        const nav = document.querySelector('.header__nav');
        
        if (menuToggle && nav) {
            menuToggle.addEventListener('click', () => {
                const isOpen = nav.classList.contains('is-open');
                
                if (isOpen) {
                    nav.classList.remove('is-open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.querySelector('.hamburger-icon').textContent = '☰';
                } else {
                    nav.classList.add('is-open');
                    menuToggle.setAttribute('aria-expanded', 'true');
                    menuToggle.querySelector('.hamburger-icon').textContent = '✕';
                }
            });

            // メニュー外クリックで閉じる
            document.addEventListener('click', (e) => {
                if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
                    nav.classList.remove('is-open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.querySelector('.hamburger-icon').textContent = '☰';
                }
            });
        }
    }

    // === ガラス効果の強化 === //
    setupGlassEffects() {
        const glassCards = document.querySelectorAll('.glass-card');
        
        glassCards.forEach(card => {
            // マウス追従効果
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            });
        });
    }

    // === 遅延読み込み === //
    setupLazyLoading() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(img => {
                img.classList.add('lazy-load');
                imageObserver.observe(img);
            });
        } else {
            // フォールバック
            lazyImages.forEach(img => img.classList.add('loaded'));
        }
    }

    // === サービス間ナビゲーション === //
    setupServiceNavigation() {
        // サービス間の移動を簡単にするナビゲーション
        const currentService = this.getCurrentService();
        const services = [
            { path: '/services/web/', name: 'HP制作・LP制作', icon: '🌐' },
            { path: '/services/ec/', name: 'EC通販', icon: '🛒' },
            { path: '/services/video/', name: '動画編集', icon: '🎬' },
            { path: '/services/furniture/', name: '家具製作', icon: '🪑' }
        ];

        // 関連サービスの提案
        const relatedServices = services.filter(service => 
            !window.location.pathname.includes(service.path.replace('/services/', '').replace('/', ''))
        );

        // フッター前に関連サービスセクションを追加
        this.addRelatedServicesSection(relatedServices);
    }

    getCurrentService() {
        const path = window.location.pathname;
        if (path.includes('/web/')) return 'web';
        if (path.includes('/ec/')) return 'ec';
        if (path.includes('/video/')) return 'video';
        if (path.includes('/furniture/')) return 'furniture';
        return null;
    }

    addRelatedServicesSection(services) {
        const footer = document.querySelector('.footer');
        if (!footer || services.length === 0) return;

        const relatedSection = document.createElement('section');
        relatedSection.className = 'related-services section';
        relatedSection.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title gradient-text">その他のサービス</h2>
                    <p class="section-subtitle">お客様のビジネスをトータルサポート</p>
                </div>
                <div class="related-grid">
                    ${services.map(service => `
                        <a href="${service.path}" class="related-card glass-card">
                            <div class="related-icon">${service.icon}</div>
                            <h3 class="related-title">${service.name}</h3>
                            <div class="related-arrow">→</div>
                        </a>
                    `).join('')}
                </div>
            </div>
        `;

        footer.parentNode.insertBefore(relatedSection, footer);
    }

    // === フォーム最適化 === //
    setupFormOptimization() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');
            
            inputs.forEach(input => {
                // フォーカス効果
                input.addEventListener('focus', () => {
                    input.parentElement.classList.add('focused');
                });
                
                input.addEventListener('blur', () => {
                    input.parentElement.classList.remove('focused');
                    if (input.value) {
                        input.parentElement.classList.add('filled');
                    } else {
                        input.parentElement.classList.remove('filled');
                    }
                });
                
                // リアルタイムバリデーション
                input.addEventListener('input', () => {
                    this.validateInput(input);
                });
            });
        });
    }

    validateInput(input) {
        const value = input.value.trim();
        const type = input.type;
        const required = input.hasAttribute('required');
        
        let isValid = true;
        
        if (required && !value) {
            isValid = false;
        } else if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(value);
        } else if (type === 'tel' && value) {
            const phoneRegex = /^[\d\-\+\(\)\s]+$/;
            isValid = phoneRegex.test(value);
        }
        
        input.parentElement.classList.toggle('error', !isValid);
        input.parentElement.classList.toggle('valid', isValid && value);
    }

    // === パフォーマンス最適化 === //
    setupPerformanceOptimization() {
        // ページロード完了後の最適化
        window.addEventListener('load', () => {
            // ローディングアニメーションを削除
            const loader = document.querySelector('.page-loader');
            if (loader) {
                loader.classList.add('hide');
                setTimeout(() => loader.remove(), 500);
            }
            
            // 非クリティカルなアニメーションを有効化
            document.body.classList.add('animations-enabled');
        });

        // スクロールパフォーマンスの最適化
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // パララックス効果（パフォーマンスを考慮して軽量化）
        const heroElements = document.querySelectorAll('.page-hero::before');
        heroElements.forEach(el => {
            if (scrolled < window.innerHeight) {
                el.style.transform = `translateY(${rate}px)`;
            }
        });
        
        // ヘッダーの透明度調整
        const header = document.querySelector('.header');
        if (header) {
            if (scrolled > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }
}

// === CSS動的スタイル追加 === //
const addDynamicStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        .related-services {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .related-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }
        
        .related-card {
            padding: 2rem 1.5rem;
            text-align: center;
            text-decoration: none;
            color: var(--color-text);
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }
        
        .related-card:hover {
            transform: translateY(-5px);
            border-color: var(--color-primary);
        }
        
        .related-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .related-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }
        
        .related-arrow {
            font-size: 1.5rem;
            opacity: 0.7;
            transition: transform 0.3s ease;
        }
        
        .related-card:hover .related-arrow {
            transform: translateX(5px);
        }
        
        .header.scrolled {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
        }
        
        .form-group.focused .form-label {
            color: var(--color-primary);
            transform: translateY(-5px);
        }
        
        .form-group.error input,
        .form-group.error textarea {
            border-color: #e74c3c;
        }
        
        .form-group.valid input,
        .form-group.valid textarea {
            border-color: #27ae60;
        }
        
        @media (max-width: 768px) {
            .related-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
            }
            
            .related-card {
                padding: 1.5rem 1rem;
            }
        }
    `;
    document.head.appendChild(style);
};

// === 初期化 === //
document.addEventListener('DOMContentLoaded', () => {
    addDynamicStyles();
    new ServicesOptimized();
});

// サービスページ判定とクラス追加
const addServicePageClass = () => {
    const path = window.location.pathname;
    const body = document.body;
    
    if (path.includes('/web/')) body.classList.add('web-page');
    else if (path.includes('/ec/')) body.classList.add('ec-page');
    else if (path.includes('/video/')) body.classList.add('video-page');
    else if (path.includes('/furniture/')) body.classList.add('furniture-page');
};

addServicePageClass();