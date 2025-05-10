/**
 * 株式会社Awake Webサイト共通JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimation();
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
 * スクロールアニメーションの初期化
 */
function initScrollAnimation() {
    // アニメーション対象の要素
    const animElements = document.querySelectorAll('.js-scroll-anim');
    
    if (animElements.length === 0) return;
    
    // 要素が画面内に入ったかどうかをチェック
    const checkInView = () => {
        animElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            // 要素が画面内に入ったら.is-visibleクラスを追加
            if (rect.top <= windowHeight * 0.8) {
                element.classList.add('is-visible');
            }
        });
    };
    
    // スクロールイベントの登録
    window.addEventListener('scroll', checkInView);
    
    // 初期チェック
    checkInView();
} 