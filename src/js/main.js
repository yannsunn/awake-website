/**
 * main.js - メインJavaScriptエントリーポイント
 */

// モジュールのインポート
import * as ui from './ui.js';
import { initAllAnimations } from './animations';
import { initPerformanceOptimizations } from './performance';

// ページの読み込み完了時に実行する処理
document.addEventListener('DOMContentLoaded', () => {
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