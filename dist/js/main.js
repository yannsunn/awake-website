// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Netlifyが自動的に処理するので、ここでは特別な処理は不要
            // 確認用のメッセージを表示
            setTimeout(function() {
                alert('お問い合わせを受け付けました。担当者より連絡させていただきます。');
            }, 1000);
        });
    }

    // Smooth scroll for navigation links - ヘッダー内のリンクに制限
    document.querySelectorAll('.header a[href^="#"], a.cta-button[href^="#"]').forEach(anchor => {
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

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    // スクロール位置に応じたヘッダースタイル変更関数
    const updateHeaderClass = () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // 上スクロールでヘッダーを表示（オプション）
        if (currentScroll < lastScroll) {
            header.style.transform = 'translateY(0)';
        } else if (currentScroll > lastScroll && currentScroll > 200) {
            header.style.transform = 'translateY(-100%)';
        }
        
        lastScroll = currentScroll;
    };

    // 初期ロード時にもチェック（リロード時のスクロール位置保持対応）
    updateHeaderClass();

    window.addEventListener('scroll', updateHeaderClass, { passive: true });

    // Scroll to top button
    const scrollTopButton = document.querySelector('.scroll-top');

    if (scrollTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopButton.classList.add('visible');
            } else {
                scrollTopButton.classList.remove('visible');
            }
        }, { passive: true });

        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Animation initialization (AOS)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
        
        // 画像ロード後にAOSリフレッシュ（アニメーションズレ防止）
        window.addEventListener('load', function() {
            AOS.refresh();
        });
    }
}); 