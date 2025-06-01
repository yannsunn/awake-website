/**
 * 株式会社Awake 動画編集・制作ページ - 最適化JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimation();
    initHoverEffects();
    initTextTyping();
    initCounterAnimation();
    initPortfolioModal();
    initPricingCalculator();
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
    const animElements = document.querySelectorAll('.scroll-fade-in, .js-scroll-anim, .ai-feature-card, .portfolio-item');
    
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
    // AIフィーチャーカードのホバーエフェクト
    const featureCards = document.querySelectorAll('.ai-feature-card, .pricing-card, .portfolio-item');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // ボタンのホバーエフェクト
    const buttons = document.querySelectorAll('.btn, .service-card__link');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.filter = 'brightness(1.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.filter = 'brightness(1)';
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
 * ポートフォリオモーダルの初期化
 */
function initPortfolioModal() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const playButton = item.querySelector('.play-button');
        if (playButton) {
            playButton.addEventListener('click', function(e) {
                e.preventDefault();
                // 動画プレビューモーダルを表示する処理
                showVideoPreview(item);
            });
        }
    });
}

/**
 * 動画プレビューを表示
 */
function showVideoPreview(portfolioItem) {
    const title = portfolioItem.querySelector('h3')?.textContent || '動画プレビュー';
    const description = portfolioItem.querySelector('p')?.textContent || '';
    
    // モーダルHTML生成
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close" aria-label="モーダルを閉じる">&times;</button>
                <h3>${title}</h3>
                <div class="video-container">
                    <p>動画プレビューはデモ版です</p>
                    <p>${description}</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // 閉じる処理
    const closeModal = () => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    };
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    
    // ESCキーで閉じる
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);
}

/**
 * 料金計算機の初期化
 */
function initPricingCalculator() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        const button = card.querySelector('.btn');
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const planName = card.querySelector('.pricing-title')?.textContent || '';
                const price = card.querySelector('.price-amount')?.textContent || '';
                
                // 選択されたプランをハイライト
                pricingCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                
                // 問い合わせフォームにプラン情報を自動入力
                const contactLink = document.querySelector('a[href*="#contact"]');
                if (contactLink) {
                    contactLink.click();
                    
                    // フォームが表示されたら情報を入力
                    setTimeout(() => {
                        const serviceField = document.querySelector('#inquiry_service');
                        if (serviceField) {
                            serviceField.value = `動画編集・制作 - ${planName}（${price}）`;
                        }
                    }, 1000);
                }
            });
        }
    });
}