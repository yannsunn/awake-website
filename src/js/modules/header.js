import { performanceUtils } from '../utils/performance.js';

export class Header {
    constructor() {
        this.header = document.querySelector('.header');
        this.lastScroll = 0;
        this.init();
    }

    init() {
        if (!this.header) return;
        
        this.setupScrollBehavior();
        this.setupActiveNavigation();
        this.setupMobileNavigation();
    }

    setupScrollBehavior() {
        const handleScroll = performanceUtils.throttle(() => {
            const currentScroll = window.pageYOffset;
            
            // ヘッダーの背景透過制御
            if (currentScroll > 50) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
            
            // ヘッダーの表示/非表示制御
            if (currentScroll > this.lastScroll && currentScroll > 80) {
                this.header.classList.add('header-hidden');
            } else {
                this.header.classList.remove('header-hidden');
            }
            
            this.lastScroll = currentScroll;
        }, 100);

        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    setupActiveNavigation() {
        const navLinks = this.header.querySelectorAll('nav a');
        const currentPath = window.location.pathname;

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
            
            // スムーズスクロール（ページ内リンク）
            if (link.getAttribute('href').startsWith('#')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').slice(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            }
        });
    }

    setupMobileNavigation() {
        const mobileMenuButton = this.header.querySelector('.mobile-menu-button');
        const nav = this.header.querySelector('nav');

        if (!mobileMenuButton || !nav) return;

        mobileMenuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuButton.classList.toggle('active');
            mobileMenuButton.setAttribute('aria-expanded', 
                nav.classList.contains('active').toString());
        });

        // メニュー外クリックで閉じる
        document.addEventListener('click', (e) => {
            if (!this.header.contains(e.target) && nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuButton.classList.remove('active');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        });
    }
} 