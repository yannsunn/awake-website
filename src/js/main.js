/**
 * main.js - メインJavaScriptエントリーポイント
 */

// モジュールのインポート
import * as animations from './animations.js';
import * as ui from './ui.js';

// ページの読み込み完了時に実行する処理
document.addEventListener('DOMContentLoaded', () => {
  // アニメーション初期化
  animations.initScrollAnimations();
  animations.initRippleEffect();
  animations.initCounterAnimations();
  animations.initTypingAnimation();
  animations.initSmoothScroll();
  
  // UI機能初期化
  ui.initMobileMenu();
  ui.initScrollEffects();
  ui.initScrollSpy();
  ui.initTabs();
  ui.initAccordion();
  ui.initStickySidebar();
  ui.initLightbox();
  
  // フォームバリデーション初期化
  initFormValidation();
  
  // パフォーマンス最適化
  lazyLoadImages();
});

// フォームバリデーション
function initFormValidation() {
  const forms = document.querySelectorAll('form.validate');
  
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      let isValid = true;
      
      // 必須フィールドの検証
      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
          
          // エラーメッセージの表示
          let errorMsg = field.nextElementSibling;
          if (!errorMsg || !errorMsg.classList.contains('form-error')) {
            errorMsg = document.createElement('div');
            errorMsg.classList.add('form-error');
            errorMsg.textContent = '入力が必要です';
            field.parentNode.insertBefore(errorMsg, field.nextSibling);
          }
        } else {
          field.classList.remove('error');
          
          // エラーメッセージの削除
          const errorMsg = field.nextElementSibling;
          if (errorMsg && errorMsg.classList.contains('form-error')) {
            errorMsg.remove();
          }
        }
      });
      
      // メールアドレスの検証
      const emailFields = form.querySelectorAll('input[type="email"]');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      emailFields.forEach(field => {
        if (field.value.trim() && !emailRegex.test(field.value)) {
          isValid = false;
          field.classList.add('error');
          
          // エラーメッセージの表示
          let errorMsg = field.nextElementSibling;
          if (!errorMsg || !errorMsg.classList.contains('form-error')) {
            errorMsg = document.createElement('div');
            errorMsg.classList.add('form-error');
            errorMsg.textContent = 'メールアドレスの形式が正しくありません';
            field.parentNode.insertBefore(errorMsg, field.nextSibling);
          } else {
            errorMsg.textContent = 'メールアドレスの形式が正しくありません';
          }
        }
      });
      
      // バリデーションが失敗した場合、送信をキャンセル
      if (!isValid) {
        e.preventDefault();
        return false;
      }
      
      // AJAX送信の処理（オプション）
      if (form.getAttribute('data-ajax') === 'true') {
        e.preventDefault();
        
        const formData = new FormData(form);
        const submitButton = form.querySelector('[type="submit"]');
        
        // 送信ボタンの状態を変更
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = '送信中...';
        }
        
        // API送信処理
        fetch(form.action, {
          method: form.method,
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          // 成功メッセージの表示
          const successMsg = document.createElement('div');
          successMsg.classList.add('form-success');
          successMsg.textContent = '送信が完了しました';
          form.parentNode.insertBefore(successMsg, form.nextSibling);
          
          // フォームのリセット
          form.reset();
          
          // 3秒後にメッセージを非表示
          setTimeout(() => {
            successMsg.remove();
          }, 3000);
        })
        .catch(error => {
          console.error('送信エラー:', error);
          
          // エラーメッセージの表示
          const errorMsg = document.createElement('div');
          errorMsg.classList.add('form-error');
          errorMsg.textContent = '送信中にエラーが発生しました。後ほど再度お試しください。';
          form.parentNode.insertBefore(errorMsg, form.nextSibling);
        })
        .finally(() => {
          // 送信ボタンの状態を元に戻す
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = '送信';
          }
        });
      }
    });
    
    // フィールドの入力時にエラー表示をクリア
    const formFields = form.querySelectorAll('input, textarea, select');
    formFields.forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('error');
        
        const errorMsg = field.nextElementSibling;
        if (errorMsg && errorMsg.classList.contains('form-error')) {
          errorMsg.remove();
        }
      });
    });
  });
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