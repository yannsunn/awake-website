// main-app.js - メインJavaScriptエントリーポイント

// 必要なモジュールをインポート
import { initHeader, initNavigation } from './core/navigation.js';
import { initFaqAccordion } from './core/faq.js';
import { initFormHandling } from './core/forms.js';
import { initScrollAnimations } from './core/page-animations.js';
import { initCardOptimizations } from './core/cards.js';
import { initMicrointeractions } from './core/interactions.js';
import { initDarkMode } from './core/dark-mode.js';
import { initSNSDisplay } from './core/sns-display.js';
import { initSitePerformance } from './site-performance.js';
import { initPageEffects } from './page-effects.js';

// メインアプリケーションの初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('📱 Awake Website initialized');
    
    // 主要機能の初期化
    initHeader();
    initNavigation();
    initFaqAccordion();
    initFormHandling();
    initScrollAnimations();
    initCardOptimizations();
    initMicrointeractions();
    
    // オプション機能の初期化
    initDarkMode();
    initSNSDisplay();
    initSitePerformance();
    initPageEffects();
});
