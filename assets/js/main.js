/**
 * 株式会社Awake Webサイト共通JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initSmoothScroll();
    initScrollAnimation();
    initParallaxEffect();
    initHoverEffects();
    initTextTyping();
    initCounterAnimation();
});

/**
 * モバイルメニューの初期化
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.js-menu-toggle');
    const mobileMenu = document.querySelector('.js-mobile-menu');
    
    if (!menuToggle || !mobileMenu) return;
    
    menuToggle.addEventListener('click', function() {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        
        menuToggle.setAttribute('aria-expanded', !isOpen);
        mobileMenu.classList.toggle('is-active');
        document.body.classList.toggle('menu-open');
        
        if (!isOpen) {
            // メニューが開いたときの処理
            menuToggle.setAttribute('aria-label', 'メニューを閉じる');
        } else {
            // メニューが閉じたときの処理
            menuToggle.setAttribute('aria-label', 'メニューを開く');
        }
    });
}

/**
 * スムーススクロールの初期化
 */
function initSmoothScroll() {
    // ページ内リンクをクリックしたときの処理
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // ハッシュ値の取得
            const href = this.getAttribute('href');
            
            // 移動先の要素を取得
            const target = document.querySelector(href);
            
            // 移動先の要素が存在する場合のみスクロール
            if (target) {
                // スクロールのオフセット（ヘッダーの高さなど）
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                // スムーススクロール
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // モバイルメニューが開いていれば閉じる
                const mobileMenu = document.querySelector('.js-mobile-menu');
                const menuToggle = document.querySelector('.js-menu-toggle');
                
                if (mobileMenu?.classList.contains('is-active')) {
                    mobileMenu.classList.remove('is-active');
                    document.body.classList.remove('menu-open');
                    menuToggle?.setAttribute('aria-expanded', 'false');
                    menuToggle?.setAttribute('aria-label', 'メニューを開く');
                }
            }
        });
    });
}

/**
 * スクロールアニメーションの初期化（改良版）
 */
function initScrollAnimation() {
    // アニメーション対象の要素
    const animElements = document.querySelectorAll('.js-scroll-anim');
    
    if (animElements.length === 0) return;
    
    // Intersection Observerの設定
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15  // 要素の15%が見えたらコールバックを実行
    };
    
    // Intersection Observerのコールバック
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 要素が画面内に入ったら.is-visibleクラスを追加
                entry.target.classList.add('is-visible');
                
                // 一度表示したら監視を解除（オプション）
                // observer.unobserve(entry.target);
            } else {
                // スクロールで要素が画面外に出たら.is-visibleクラスを削除（再アニメーションを有効にする場合）
                // entry.target.classList.remove('is-visible');
            }
        });
    };
    
    // Intersection Observerを作成
    const observer = new IntersectionObserver(callback, options);
    
    // 監視する要素を登録
    animElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * パララックス効果の初期化
 */
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.js-parallax');
    
    if (parallaxElements.length === 0) return;
    
    // スクロールイベントでパララックス効果を適用
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const offset = scrollTop * speed;
            element.style.transform = `translateY(${offset}px)`;
        });
    });
}

/**
 * ホバーエフェクトの初期化
 */
function initHoverEffects() {
    // サービスカードのホバーエフェクト
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.service-card__link').classList.add('is-hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.service-card__link').classList.remove('is-hover');
        });
    });
    
    // ボタンのホバーエフェクト
    const buttons = document.querySelectorAll('.cta-button, .submit-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('is-hover');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('is-hover');
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
    let i = 0;
    const originalText = text;
    element.innerText = '';
    
    return new Promise((resolve) => {
    const timer = setInterval(() => {
            if (i < originalText.length) {
                element.innerText += originalText.charAt(i);
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
    const counterElements = document.querySelectorAll('.js-counter');
    
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
                const targetValue = parseInt(target.dataset.value) || 0;
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
        
        element.innerText = currentValue.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCount);
        } else {
            element.innerText = targetValue.toLocaleString();
        }
    }
    
    requestAnimationFrame(updateCount);
} 