import { performanceUtils } from '../utils/performance.js';

export class Footer {
    constructor() {
        this.footer = document.querySelector('.footer');
        this.scrollTopButton = document.querySelector('.scroll-top');
        this.init();
    }

    init() {
        if (!this.footer || !this.scrollTopButton) return;
        
        this.setupScrollTopButton();
        this.setupSocialLinks();
        this.setupFooterLinks();
    }

    setupScrollTopButton() {
        // スクロールイベントの最適化
        const handleScroll = performanceUtils.throttle(() => {
            if (window.pageYOffset > 300) {
                this.scrollTopButton.classList.add('visible');
            } else {
                this.scrollTopButton.classList.remove('visible');
            }
        }, 100);

        window.addEventListener('scroll', handleScroll, { passive: true });

        // クリックイベント
        this.scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // キーボード操作
        this.scrollTopButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }

    setupSocialLinks() {
        const socialLinks = this.footer.querySelectorAll('.footer-social a');
        
        socialLinks.forEach(link => {
            // ホバーエフェクト
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-3px)';
            });

            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0)';
            });

            // アクセシビリティ
            link.addEventListener('focus', () => {
                link.style.transform = 'translateY(-3px)';
                link.style.boxShadow = '0 5px 15px rgba(0, 123, 255, 0.2)';
            });

            link.addEventListener('blur', () => {
                link.style.transform = 'translateY(0)';
                link.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            });
        });
    }

    setupFooterLinks() {
        const footerLinks = this.footer.querySelectorAll('.footer-links a');
        
        footerLinks.forEach(link => {
            // アクセシビリティとホバーエフェクト
            link.addEventListener('mouseenter', () => {
                link.style.color = '#007bff';
            });

            link.addEventListener('mouseleave', () => {
                link.style.color = '#666';
            });

            link.addEventListener('focus', () => {
                link.style.color = '#007bff';
                link.style.outline = '2px solid rgba(0, 123, 255, 0.5)';
                link.style.outlineOffset = '3px';
            });

            link.addEventListener('blur', () => {
                link.style.color = '#666';
                link.style.outline = 'none';
            });
        });
    }
} 