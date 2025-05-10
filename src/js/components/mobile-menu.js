/**
 * モバイルメニュー制御用コンポーネント
 */
export class MobileMenu {
    constructor() {
        this.header = document.querySelector('.header');
        this.mobileButton = null;
        this.nav = null;
        this.init();
    }

    init() {
        if (!this.header) return;
        
        this.nav = this.header.querySelector('nav');
        if (!this.nav) return;
        
        this.createMenuButton();
        this.setupEventListeners();
    }

    createMenuButton() {
        // すでにモバイルメニューのボタンがある場合は何もしない
        if (document.querySelector('.mobile-menu-button')) {
            this.mobileButton = document.querySelector('.mobile-menu-button');
            return;
        }
        
        // モバイルメニューボタンの作成
        this.mobileButton = document.createElement('button');
        this.mobileButton.className = 'mobile-menu-button';
        this.mobileButton.setAttribute('aria-label', 'メニュー');
        this.mobileButton.setAttribute('aria-expanded', 'false');
        this.mobileButton.innerHTML = '<span></span>';
        
        // ヘッダーコンテナの最初の子要素の後に挿入
        const container = this.header.querySelector('.container');
        if (container && container.firstChild) {
            container.insertBefore(this.mobileButton, container.firstChild.nextSibling);
        } else if (this.header.firstChild) {
            this.header.insertBefore(this.mobileButton, this.header.firstChild.nextSibling);
        } else {
            this.header.appendChild(this.mobileButton);
        }
    }

    setupEventListeners() {
        if (!this.mobileButton || !this.nav) return;
        
        // モバイルボタンクリックイベント
        this.mobileButton.addEventListener('click', () => {
            this.toggleMenu();
        });

        // メニュー外クリックで閉じる
        document.addEventListener('click', (e) => {
            if (!this.header.contains(e.target) && this.nav.classList.contains('active')) {
                this.closeMenu();
            }
        });

        // メニュー内のリンククリックで閉じる
        const navLinks = this.nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });
    }

    toggleMenu() {
        this.mobileButton.classList.toggle('active');
        this.nav.classList.toggle('active');
        
        // アクセシビリティのための属性設定
        const expanded = this.nav.classList.contains('active') ? 'true' : 'false';
        this.mobileButton.setAttribute('aria-expanded', expanded);
    }

    closeMenu() {
        this.mobileButton.classList.remove('active');
        this.nav.classList.remove('active');
        this.mobileButton.setAttribute('aria-expanded', 'false');
    }
} 