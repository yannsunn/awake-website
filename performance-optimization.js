/**
 * パフォーマンス最適化のためのJavaScriptファイル
 * 画像の遅延読み込み、リソースの最適化、パフォーマンス計測などを行います
 */

// --------------------------------------------------
// 画像の遅延読み込み
// --------------------------------------------------
function initLazyLoading() {
  // Intersection Observerがサポートされているかチェック
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          
          // srcの設定（data-srcがある場合）
          if (lazyImage.dataset.src) {
            lazyImage.src = lazyImage.dataset.src;
          }
          
          // srcsetの設定（data-srcsetがある場合）
          if (lazyImage.dataset.srcset) {
            lazyImage.srcset = lazyImage.dataset.srcset;
          }
          
          // 読み込み完了時のクラス追加
          lazyImage.addEventListener('load', () => {
            lazyImage.classList.add('loaded');
          });
          
          // 監視を解除
          imageObserver.unobserve(lazyImage);
        }
      });
    }, {
      rootMargin: '200px', // ビューポートの周囲200pxを事前読み込み
      threshold: 0.01 // わずかに表示されたら読み込み開始
    });
    
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Intersection Observerがサポートされていない場合のフォールバック
    let lazyLoadThrottleTimeout;
    
    function lazyLoadImages() {
      if (lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout);
      }
      
      lazyLoadThrottleTimeout = setTimeout(() => {
        const scrollTop = window.pageYOffset;
        
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        if (lazyImages.length === 0) {
          document.removeEventListener('scroll', lazyLoadImages);
          window.removeEventListener('resize', lazyLoadImages);
          window.removeEventListener('orientationchange', lazyLoadImages);
          return;
        }
        
        lazyImages.forEach(img => {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
            }
            img.classList.add('loaded');
            img.removeAttribute('data-src');
            img.removeAttribute('data-srcset');
          }
        });
      }, 20);
    }
    
    document.addEventListener('scroll', lazyLoadImages);
    window.addEventListener('resize', lazyLoadImages);
    window.addEventListener('orientationchange', lazyLoadImages);
  }
}

// --------------------------------------------------
// リソースヒント
// --------------------------------------------------
function addResourceHints() {
  // 主要リソースのプリロード
  const resourcesNeeded = [
    { type: 'style', url: 'styles/sns-display-css.css' },
    { type: 'style', url: 'styles/animations.css' },
    { type: 'script', url: 'intersection-observer.js' }
  ];
  
  const head = document.head;
  
  resourcesNeeded.forEach(resource => {
    // 既存のリンクをチェック
    const existingLink = document.querySelector(`link[href="${resource.url}"]`);
    if (existingLink) return;
    
    // プリロードリンク作成
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.url;
    
    // リソースタイプに応じたasプロパティの設定
    switch (resource.type) {
      case 'style':
        link.as = 'style';
        break;
      case 'script':
        link.as = 'script';
        break;
      case 'font':
        link.as = 'font';
        link.crossOrigin = 'anonymous';
        break;
      case 'image':
        link.as = 'image';
        break;
    }
    
    head.appendChild(link);
  });
}

// --------------------------------------------------
// パフォーマンスモニタリング
// --------------------------------------------------
function monitorPerformance() {
  // Web Vitals API
  if ('web-vitals' in window) {
    import('https://unpkg.com/web-vitals').then(({ getCLS, getFID, getLCP, getFCP, getTTFB }) => {
      getCLS(console.log);  // Cumulative Layout Shift
      getFID(console.log);  // First Input Delay
      getLCP(console.log);  // Largest Contentful Paint
      getFCP(console.log);  // First Contentful Paint
      getTTFB(console.log); // Time to First Byte
    });
  }
  
  // Navigation Timing API
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const timing = window.performance.timing;
        const navigationStart = timing.navigationStart;
        
        // 主要な指標を計算
        const perfMetrics = {
          // DNS解決時間
          dns: timing.domainLookupEnd - timing.domainLookupStart,
          // TCP接続時間
          tcp: timing.connectEnd - timing.connectStart,
          // リクエスト時間
          request: timing.responseStart - timing.requestStart,
          // レスポンス時間
          response: timing.responseEnd - timing.responseStart,
          // DOM構築時間
          dom: timing.domComplete - timing.domLoading,
          // ページロード時間
          load: timing.loadEventEnd - navigationStart,
          // 初回レンダリング時間
          firstPaint: timing.domContentLoadedEventStart - navigationStart
        };
        
        // 開発者向けにコンソールに出力
        if (process.env.NODE_ENV === 'development') {
          console.table(perfMetrics);
        }
        
        // 分析サービスへの送信（本番環境用）
        if (process.env.NODE_ENV === 'production' && window.gtag) {
          Object.keys(perfMetrics).forEach(metric => {
            window.gtag('event', 'timing_complete', {
              name: metric,
              value: perfMetrics[metric],
              event_category: 'Performance'
            });
          });
        }
      }, 0);
    });
  }
}

// --------------------------------------------------
// スクロールのパフォーマンス最適化
// --------------------------------------------------
function optimizeScroll() {
  let ticking = false;
  let lastKnownScrollPosition = 0;
  let scrollHandlers = [];
  
  // スクロールハンドラー登録関数
  function addScrollHandler(handler) {
    scrollHandlers.push(handler);
  }
  
  // スクロールイベント処理
  function onScroll() {
    lastKnownScrollPosition = window.scrollY;
    
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // 登録されたすべてのハンドラーを実行
        scrollHandlers.forEach(handler => {
          handler(lastKnownScrollPosition);
        });
        ticking = false;
      });
      
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', onScroll, { passive: true });
  
  // グローバルに公開
  window.addScrollHandler = addScrollHandler;
}

// --------------------------------------------------
// 初期化と実行
// --------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // 遅延読み込みの初期化
  initLazyLoading();
  
  // リソースヒントの追加
  addResourceHints();
  
  // パフォーマンスモニタリングの初期化
  monitorPerformance();
  
  // スクロール最適化
  optimizeScroll();
});

// モジュールとしてエクスポート
export {
  initLazyLoading,
  addResourceHints,
  monitorPerformance,
  optimizeScroll
}; 