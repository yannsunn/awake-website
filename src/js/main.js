import { Header } from './modules/header.js';
import { MobileMenu } from './components/mobile-menu.js';
import { LazyLoader } from './utils/lazy-loader.js';
import { ScrollManager } from './utils/scroll-manager.js';
import { Contact } from './modules/contact.js';
import { config } from './config/app-config.js';
import { ErrorHandler } from './utils/error-handler.js';
import { performanceUtils } from './utils/performance.js';

/**
 * メインアプリケーションクラス
 */
class App {
    constructor() {
        this.init();
    }

    async init() {
        try {
            performanceUtils.startMeasure('appInit');
            
            // グローバルエラーハンドラの設定
            ErrorHandler.setupGlobalHandlers();
            
            // コンポーネントの初期化
            this.initializeComponents();
            
            // イベントリスナーの設定
            this.setupEventListeners();
            
            performanceUtils.endMeasure('appInit', true);
        } catch (error) {
            ErrorHandler.handle(error, 'アプリケーションの初期化');
        }
    }

    initializeComponents() {
        // 各モジュールをインスタンス化
        new Header();
        new MobileMenu();
        new LazyLoader();
        new ScrollManager();
        new Contact();
    }

    setupEventListeners() {
        // DOMロード完了時にAnimation On Scrollを初期化
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof AOS !== 'undefined') {
                AOS.init(config.animations);
            }
        });
        
        // ページが完全に読み込まれたときの処理
        window.addEventListener('load', () => {
            // ローディングインジケーターを非表示
            const loader = document.querySelector('.loading');
            if (loader) {
                loader.classList.add('hide');
            }
            
            // AOSリフレッシュ（すべての要素が読み込まれた後）
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
    }
}

// アプリケーションの開始
new App(); 