/**
 * 2025年コーポレートエリート版 JavaScript
 * 企業プレゼン対応・最高品質インタラクション
 */

document.addEventListener('DOMContentLoaded', function() {
    // 基本機能の初期化
    initDarkModeToggle();
    initPersonalization();
    initMicroInteractions();
    initVideoIntegration();
    initRealTimeFeedback();
    initContextAwareMessaging();
    initSmoothScrollEnhancements();
    init3DEffects();
    
    // 2025年コーポレート拡張機能
    initCorporateAnimations();
    initIntersectionObserver();
    initPerformanceOptimization();
});

/**
 * コーポレート向け高品質アニメーション
 */
function initCorporateAnimations() {
    // カウンターアニメーション（統計セクション用）
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.closest('.stat-number').dataset.target);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(counter, target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter.closest('.stat-card'));
    });
    
    // 証言カルーセル自動切り替え
    initTestimonialCarousel();
    
    // グラデーション動的変更
    initDynamicGradients();
}

/**
 * カウンターアニメーション
 */
function animateCounter(element, target) {
    const duration = 2000; // 2秒
    const start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // イージング関数（ease-out-cubic）
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOutCubic * target);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

/**
 * 証言カルーセル自動切り替え
 */
function initTestimonialCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    const interval = 8000; // 8秒間隔
    
    if (testimonials.length === 0) return;
    
    function showTestimonial(index) {
        // すべてのカードを非表示
        testimonials.forEach((card, i) => {
            card.classList.remove('active');
            if (indicators[i]) {
                indicators[i].classList.remove('active');
                indicators[i].setAttribute('aria-selected', 'false');
            }
        });
        
        // 指定されたカードを表示
        testimonials[index].classList.add('active');
        if (indicators[index]) {
            indicators[index].classList.add('active');
            indicators[index].setAttribute('aria-selected', 'true');
        }
    }
    
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }
    
    // 自動切り替え開始
    let autoPlay = setInterval(nextTestimonial, interval);
    
    // インジケータークリックイベント
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showTestimonial(currentIndex);
            
            // 自動切り替えリセット
            clearInterval(autoPlay);
            autoPlay = setInterval(nextTestimonial, interval);
        });
    });
    
    // ホバー時は自動切り替え停止
    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoPlay);
        });
        
        carousel.addEventListener('mouseleave', () => {
            autoPlay = setInterval(nextTestimonial, interval);
        });
    }
}

/**
 * 動的グラデーション
 */
function initDynamicGradients() {
    const gradientElements = document.querySelectorAll('.holographic-text, .gradient-elite');
    
    gradientElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.backgroundSize = '200% 200%';
            this.style.animation = 'holographic-flow 2s ease-in-out infinite';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.backgroundSize = '100% 100%';
            this.style.animation = 'holographic-flow 3s ease-in-out infinite';
        });
    });
}

/**
 * Intersection Observer（表示時アニメーション）
 */
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // 子要素の遅延アニメーション
                const children = entry.target.querySelectorAll('.service-card, .stat-card, .testimonial-card, .benefit-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 150);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 監視対象要素
    const targets = document.querySelectorAll('.section, .hero');
    targets.forEach(target => observer.observe(target));
}

/**
 * パフォーマンス最適化
 */
function initPerformanceOptimization() {
    // 画像の遅延読み込み
    const images = document.querySelectorAll('img[loading="lazy"]');
    
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
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // スクロールスロットリング
    let scrollTimer;
    window.addEventListener('scroll', () => {
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        
        scrollTimer = setTimeout(() => {
            updateScrollProgress();
        }, 16); // 60fps
    });
}

/**
 * スクロール進捗表示
 */
function updateScrollProgress() {
    const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    // プログレスバーの更新（存在する場合）
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = `${scrolled}%`;
    }
    
    // ヘッダーの透明度調整
    const header = document.querySelector('.header');
    if (header) {
        const opacity = Math.min(scrolled / 10, 1);
        header.style.backgroundColor = `rgba(255, 255, 255, ${0.95 + (opacity * 0.05)})`;
    }
}

/**
 * フォーム拡張機能
 */
function initFormEnhancements() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // リアルタイムバリデーション
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', debounce(validateField, 500));
        });
        
        // 送信時の視覚フィードバック
        form.addEventListener('submit', function(e) {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.classList.add('loading');
                submitBtn.disabled = true;
                
                // 実際の送信処理後に元に戻す
                setTimeout(() => {
                    submitBtn.classList.remove('loading');
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    });
}

/**
 * フィールドバリデーション
 */
function validateField(e) {
    const field = e.target;
    const errorElement = document.getElementById(field.getAttribute('aria-describedby'));
    
    if (!errorElement) return;
    
    // バリデーションロジック
    let isValid = true;
    let errorMessage = '';
    
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        errorMessage = 'この項目は必須です。';
    } else if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
            errorMessage = '正しいメールアドレスを入力してください。';
        }
    }
    
    // エラー表示の切り替え
    if (isValid) {
        field.classList.remove('error');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    } else {
        field.classList.add('error');
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
    }
}

/**
 * デバウンス関数
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * アクセシビリティ向上
 */
function initAccessibilityEnhancements() {
    // フォーカス管理
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // スキップリンク機能
    const skipLink = document.querySelector('.sr-only-focusable');
    if (skipLink) {
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(skipLink.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    initFormEnhancements();
    initAccessibilityEnhancements();
});

// グローバル関数として露出
window.corporateElite2025 = {
    animateCounter,
    showTestimonial: (index) => {
        const testimonials = document.querySelectorAll('.testimonial-card');
        const indicators = document.querySelectorAll('.indicator');
        
        testimonials.forEach((card, i) => {
            card.classList.toggle('active', i === index);
            if (indicators[i]) {
                indicators[i].classList.toggle('active', i === index);
                indicators[i].setAttribute('aria-selected', i === index);
            }
        });
    }
};