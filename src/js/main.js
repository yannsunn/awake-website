/**
 * main.js - メインJavaScriptエントリーポイント
 */

// モジュールのインポート
import * as ui from './ui.js';
import { initAllAnimations } from './animations';
import { initPerformanceOptimizations } from './performance';

// パフォーマンス最適化スクリプトのインポート
import './performance.js';

// 2025年トレンドのアニメーションスクリプトをインポート
import { initAllAnimations2025 } from './animations-2025.js';

// ページの読み込み完了時に実行する処理
document.addEventListener('DOMContentLoaded', () => {
  console.log('📱 Awake Website initialized');
  
  // アニメーション初期化
  initAllAnimations();
  
  // UI関連の初期化
  ui.initMobileNavigation();
  ui.initSmoothScroll();
  ui.initScrollSpy();
  ui.initTooltips();
  
  // パフォーマンス最適化
  initPerformanceOptimizations();
  
  // フォームバリデーション初期化
  initFormValidation();
  
  // 2025年トレンドのアニメーションを初期化
  initAllAnimations2025();
});

// フォームバリデーション
function initFormValidation() {
  const forms = document.querySelectorAll('form.validate');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (!validateForm(this)) {
        e.preventDefault();
      }
    });
    
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateField(this);
      });
    });
  });
}

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input, textarea, select');
  
  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });
  
  return isValid;
}

function validateField(field) {
  if (field.hasAttribute('required') && !field.value.trim()) {
    setFieldError(field, '入力してください');
    return false;
  }
  
  if (field.type === 'email' && field.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
      setFieldError(field, '有効なメールアドレスを入力してください');
      return false;
    }
  }
  
  clearFieldError(field);
  return true;
}

function setFieldError(field, message) {
  field.classList.add('error');
  
  let errorElement = field.nextElementSibling;
  if (!errorElement || !errorElement.classList.contains('error-message')) {
    errorElement = document.createElement('span');
    errorElement.classList.add('error-message');
    field.parentNode.insertBefore(errorElement, field.nextSibling);
  }
  
  errorElement.textContent = message;
}

function clearFieldError(field) {
  field.classList.remove('error');
  
  const errorElement = field.nextElementSibling;
  if (errorElement && errorElement.classList.contains('error-message')) {
    errorElement.textContent = '';
  }
}

// 画像の遅延読み込み
function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
          }
          
          observer.unobserve(img);
        }
      });
    });
    
    // 遅延読み込み対象の画像を監視
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      imgObserver.observe(img);
    });
  } else {
    // IntersectionObserverがサポートされていない場合のフォールバック
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    function lazyLoad() {
      const scrollTop = window.pageYOffset;
      
      lazyImages.forEach(img => {
        if (img.offsetTop < window.innerHeight + scrollTop) {
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
          }
        }
      });
      
      // 全ての画像が読み込まれたらイベントリスナーを削除
      if (lazyImages.length === 0) {
        document.removeEventListener('scroll', lazyLoad);
        window.removeEventListener('resize', lazyLoad);
        window.removeEventListener('orientationchange', lazyLoad);
      }
    }
    
    // イベントリスナーを追加
    document.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);
    
    // 初回実行
    lazyLoad();
  }
}

// ハンバーガーメニューの動作
function initNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }
}

// ダークモード切り替え
function initDarkMode() {
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  
  if (darkModeToggle) {
    // システム設定の確認
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // ローカルストレージから以前の設定を取得
    const savedMode = localStorage.getItem('darkMode');
    const isDarkMode = savedMode ? savedMode === 'true' : prefersDarkMode;
    
    // 初期状態の設定
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      darkModeToggle.classList.add('active');
    }
    
    // クリックイベント
    darkModeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark-mode');
      darkModeToggle.classList.toggle('active');
      
      // 状態を保存
      const currentDarkMode = document.documentElement.classList.contains('dark-mode');
      localStorage.setItem('darkMode', currentDarkMode);
    });
  }
}

// スクロールトップボタン
function initScrollToTopButton() {
  const scrollButton = document.querySelector('.scroll-to-top');
  
  if (scrollButton) {
    // スクロール位置に応じてボタンの表示/非表示
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
      } else {
        scrollButton.classList.remove('visible');
      }
    });
    
    // クリックイベント - スムーススクロール
    scrollButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
} 