export class Services {
    constructor() {
        this.init();
    }

    init() {
        this.setupCardInteractions();
        this.setupAOSAnimations();
    }

    setupCardInteractions() {
        const cards = document.querySelectorAll('.service-card');
        
        cards.forEach(card => {
            // マウスホバーエフェクト
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });

            // タッチデバイス対応
            card.addEventListener('touchstart', () => {
                card.style.transform = 'translateY(-5px)';
            });

            card.addEventListener('touchend', () => {
                card.style.transform = 'translateY(0)';
            });

            // アクセシビリティ対応
            const link = card.querySelector('a');
            if (link) {
                link.addEventListener('focus', () => {
                    card.classList.add('focused');
                });

                link.addEventListener('blur', () => {
                    card.classList.remove('focused');
                });
            }
        });
    }

    setupAOSAnimations() {
        // AOSライブラリが利用可能な場合の設定
        if (typeof AOS !== 'undefined') {
            // カードごとに遅延を設定
            const cards = document.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
                card.setAttribute('data-aos-delay', (index * 100).toString());
            });

            // スクロール時のアニメーション最適化
            let scrollTimeout;
            window.addEventListener('scroll', () => {
                if (scrollTimeout) {
                    window.cancelAnimationFrame(scrollTimeout);
                }
                scrollTimeout = window.requestAnimationFrame(() => {
                    AOS.refresh();
                });
            }, { passive: true });
        }
    }
} 