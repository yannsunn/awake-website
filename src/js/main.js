import { Header } from './modules/header';
import { MobileMenu } from './components/mobile-menu';
import { LazyLoader } from './utils/lazy-loader';
import { ScrollManager } from './utils/scroll-manager';
import { config } from './config/app-config';
import { ErrorHandler } from './utils/error-handler';

class App {
    constructor() {
        this.init();
    }

    async init() {
        try {
            this.initializeComponents();
            this.setupEventListeners();
        } catch (error) {
            ErrorHandler.handle(error, 'アプリケーションの初期化');
        }
    }

    initializeComponents() {
        new Header();
        new MobileMenu();
        new LazyLoader();
        new ScrollManager();
    }

    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof AOS !== 'undefined') {
                AOS.init(config.animations);
            }
        });
    }
}

new App(); 