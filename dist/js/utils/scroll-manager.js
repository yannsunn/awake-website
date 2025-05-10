/**
 * スクロール関連の機能を管理するユーティリティ
 */
export class ScrollManager {
    constructor() {
        this.header = document.querySelector('.header');
        this.scrollTopButton = document.querySelector('.scroll-top');
        this.lastScrollTop = 0;
        this.init();
    }

    init() {
        this.setupScrollTopButton();
        this.setupHeaderScroll();
        this.setupSmoothScroll();
    }

    /**
     * スクロールトップボタンの初期化と制御
     */
    setupScrollTopButton() {
        // ボタンが存在しない場合は作成
        if (!this.scrollTopButton) {
            this.scrollTopButton = document.createElement('button');
            this.scrollTopButton.classList.add('scroll-top');
            this.scrollTopButton.setAttribute('aria-label', 'トップへスクロール');
            this.scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
            document.body.appendChild(this.scrollTopButton);
        }

        // スクロールイベント
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.scrollTopButton.classList.add('visible');
            } else {
                this.scrollTopButton.classList.remove('visible');
            }
        }, { passive: true });

        // クリックイベント
        this.scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // キーボードアクセシビリティ
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

    /**
     * ヘッダーのスクロール挙動制御
     */
    setupHeaderScroll() {
        if (!this.header) return;

        const handleScroll = this.throttle(() => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // ヘッダーの背景透過制御
            if (currentScrollTop > 50) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
            
            // スクロール方向に応じた表示/非表示
            if (currentScrollTop > this.lastScrollTop && currentScrollTop > 80) {
                this.header.classList.add('header-hidden');
            } else {
                this.header.classList.remove('header-hidden');
            }
            
            this.lastScrollTop = currentScrollTop;
        }, 100);

        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    /**
     * ページ内リンクのスムーススクロール
     */
    setupSmoothScroll() {
        const pageLinks = document.querySelectorAll('a[href^="#"]');
        
        pageLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                
                // 空のアンカーや#だけの場合は処理しない
                if (targetId === '#' || targetId === '') return;
                
                const targetElement = document.querySelector(targetId);
                if (!targetElement) return;
                
                e.preventDefault();
                
                const headerOffset = this.header ? this.header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        });
    }

    /**
     * スクロットルヘルパー
     */
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
} 