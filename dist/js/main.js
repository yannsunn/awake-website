// 初期化と設定
document.addEventListener('DOMContentLoaded', function() {
    // ブラウザサポートチェック
    if (typeof browserSupport !== 'undefined') {
        browserSupport.checkSupport();
    }

    // パフォーマンス最適化の初期化
    if (typeof performanceOptimizer !== 'undefined') {
        performanceOptimizer.init();
    }

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
            const button = contactForm.querySelector('button[type="submit"]');
            if (button) {
                button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 送信中...';
                button.disabled = true;
            }
            
            setTimeout(function() {
                alert('お問い合わせを受け付けました。担当者より連絡させていただきます。');
            }, 1000);
        });
    }

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ヘッダースクロール制御
    const header = document.querySelector('.header');
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

    // スクロールトップボタン
    const scrollTopButton = document.querySelector('.scroll-top');
    if (!scrollTopButton) {
        const newScrollTopBtn = document.createElement('button');
        newScrollTopBtn.classList.add('scroll-top');
        newScrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(newScrollTopBtn);
    }

    const handleScrollTopButton = (btn) => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        }, { passive: true });

        btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };

    handleScrollTopButton(scrollTopButton || document.querySelector('.scroll-top'));

    // カードホバーエフェクト
    document.querySelectorAll('.service-card, .product-card, .feature-item').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
    });
}); 