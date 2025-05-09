// page-animations.js - ページアニメーション関連の機能

/**
 * スクロールアニメーションの初期化
 */
export function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (!animatedElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.dataset.delay || 0;
                
                setTimeout(() => {
                    element.classList.add('animated');
                }, delay);
                
                // 一度表示されたら監視を解除
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // 各要素を監視対象に追加
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // スクロールプロンプトのフェードアウト
    const scrollPrompt = document.querySelector('.scroll-prompt');
    if (scrollPrompt) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                scrollPrompt.style.opacity = '0';
            } else {
                scrollPrompt.style.opacity = '1';
            }
        });
    }
} 