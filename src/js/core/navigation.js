// navigation.js - ナビゲーション関連の機能

/**
 * ヘッダー機能の初期化
 */
export function initHeader() {
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }
}

/**
 * ナビゲーション機能の初期化
 */
export function initNavigation() {
    // モバイルメニュートグルの実装
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            this.classList.toggle('active');
        });
    }
    
    // ページ内リンクのスムーススクロール
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // 「#」だけのリンクの場合は処理しない
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            // モバイルメニューが開いている場合は閉じる
            if (navMenu && navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                if (menuToggle) menuToggle.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - headerHeight,
                    behavior: 'smooth'
                });
                
                // ナビゲーションのアクティブ状態を更新
                const navLinks = document.querySelectorAll('nav a');
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
} 