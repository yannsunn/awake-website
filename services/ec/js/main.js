/**
 * 株式会社Awake ECサービスページ - 最適化JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimation();
    initHoverEffects();
    initTextTyping();
    initCounterAnimation();
    initFAQAccordion();
});

/**
 * モバイルメニューの初期化
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const mobileMenu = document.querySelector('.header__nav');
    
    if (!menuToggle || !mobileMenu) return;
    
    menuToggle.addEventListener('click', function() {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        
        menuToggle.setAttribute('aria-expanded', !isOpen);
        mobileMenu.classList.toggle('is-active');
        document.body.classList.toggle('menu-open');
        
        menuToggle.setAttribute('aria-label', !isOpen ? 'メニューを閉じる' : 'メニューを開く');
    });
}

/**
 * スムーススクロールの初期化（最適化版）
 */
function initSmoothScroll() {
    try {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const href = this.getAttribute('href');
                if (!href || href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: 'smooth'
                    });
                    
                    // モバイルメニューを閉じる
                    const mobileMenu = document.querySelector('.header__nav');
                    const menuToggle = document.querySelector('.header__menu-toggle');
                    
                    if (mobileMenu?.classList.contains('is-active')) {
                        mobileMenu.classList.remove('is-active');
                        document.body.classList.remove('menu-open');
                        menuToggle?.setAttribute('aria-expanded', 'false');
                        menuToggle?.setAttribute('aria-label', 'メニューを開く');
                    }
                }
            });
        });
    } catch (error) {
        console.warn('スムーススクロール初期化エラー:', error);
    }
}

/**
 * スクロールアニメーションの初期化（Intersection Observer使用）
 */
function initScrollAnimation() {
    const animElements = document.querySelectorAll('.scroll-fade-in, .js-scroll-anim');
    
    if (animElements.length === 0) return;
    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(callback, options);
    
    animElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * ホバーエフェクトの初期化
 */
function initHoverEffects() {
    // サービスカードのホバーエフェクト
    const serviceCards = document.querySelectorAll('.service-card, .benefit-card, .success-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ボタンのホバーエフェクト
    const buttons = document.querySelectorAll('.btn, .service-card__link');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

/**
 * テキストタイピングアニメーションの初期化
 */
function initTextTyping() {
    const typingElements = document.querySelectorAll('.js-typing');
    
    if (typingElements.length === 0) return;
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        const observer = new IntersectionObserver(async (entries) => {
            entries.forEach(async (entry) => {
                if (entry.isIntersecting) {
                    await typeText(element, text);
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(element);
    });
}

/**
 * テキストをタイプライター風にアニメーション表示
 */
function typeText(element, text, speed = 50) {
    return new Promise((resolve) => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                element.classList.add('typing-completed');
                resolve();
            }
        }, speed);
    });
}

/**
 * 数値カウントアップアニメーションの初期化
 */
function initCounterAnimation() {
    const counterElements = document.querySelectorAll('.counter, .js-counter');
    
    if (counterElements.length === 0) return;
    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.dataset.target || target.textContent) || 0;
                const duration = parseInt(target.dataset.duration) || 2000;
                
                countUp(target, targetValue, duration);
                observer.unobserve(target);
            }
        });
    }, options);
    
    counterElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * 数値をカウントアップするアニメーション
 */
function countUp(element, targetValue, duration) {
    const startTime = performance.now();
    const startValue = 0;
    
    function updateCount(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentValue = Math.floor(progress * (targetValue - startValue) + startValue);
        
        element.textContent = currentValue.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = targetValue.toLocaleString();
        }
    }
    
    requestAnimationFrame(updateCount);
}

/**
 * FAQ アコーディオンの初期化
 */
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item details');
    
    faqItems.forEach(item => {
        item.addEventListener('toggle', function() {
            if (this.open) {
                // 他のFAQを閉じる（オプション）
                faqItems.forEach(otherItem => {
                    if (otherItem !== this && otherItem.open) {
                        otherItem.open = false;
                    }
                });
            }
        });
    });
}