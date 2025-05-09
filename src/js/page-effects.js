// page-effects.js - サイト全体のアニメーション機能

/**
 * サイト全体のアニメーション機能を初期化
 */
export function initPageEffects() {
    // スクロールアニメーションの初期化
    initScrollEffects();
    
    // カウントアップアニメーションの初期化
    initCountUpAnimations();
    
    // テキストアニメーションの初期化
    initTextAnimations();
    
    // パララックス効果の初期化
    initParallaxEffects();
}

/**
 * スクロールアニメーションの初期化
 */
function initScrollEffects() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length === 0) return;
    
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
}

/**
 * カウントアップアニメーションの初期化
 */
function initCountUpAnimations() {
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'), 10);
                const duration = parseInt(counter.getAttribute('data-duration') || 2000, 10);
                
                let startTime = null;
                
                function updateCounter(timestamp) {
                    if (!startTime) startTime = timestamp;
                    
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    const current = Math.floor(progress * target);
                    
                    counter.textContent = current.toLocaleString();
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    }
                }
                
                requestAnimationFrame(updateCounter);
                
                // 一度アニメーションさせたら監視を解除
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.1
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

/**
 * テキストアニメーションの初期化
 */
function initTextAnimations() {
    const textElements = document.querySelectorAll('.text-animation');
    
    if (textElements.length === 0) return;
    
    textElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        // 文字を個別のspan要素に分割
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.animationDelay = `${i * 0.1}s`;
            element.appendChild(span);
        }
        
        // アニメーション開始トリガー設定
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    element.classList.add('animate');
                    observer.unobserve(element);
                }
            });
        }, {
            threshold: 0.5
        });
        
        observer.observe(element);
    });
}

/**
 * パララックス効果の初期化
 */
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length === 0) return;
    
    function updateParallax() {
        const scrollY = window.scrollY;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const offset = scrollY * speed;
            element.style.transform = `translateY(${offset}px)`;
        });
    }
    
    window.addEventListener('scroll', updateParallax);
    updateParallax(); // 初期位置を設定
} 