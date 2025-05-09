/**
 * サイトパフォーマンス最適化スクリプト
 * 2025年のウェブパフォーマンス最適化基準に準拠
 */

// 遅延読み込み設定
document.addEventListener('DOMContentLoaded', function() {
    // 画像の遅延読み込み
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                    
                    // 画像読み込み完了時にアニメーション適用
                    img.onload = function() {
                        img.classList.add('lazy-loaded');
                    };
                }
            });
        }, {
            rootMargin: '100px 0px',
            threshold: 0.1
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // IntersectionObserver非対応ブラウザ用のフォールバック
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // フォントの最適化
    if ('fonts' in document) {
        // 優先度の高いフォントを先に読み込む
        Promise.all([
            document.fonts.load('bold 1em "Helvetica Neue"'),
            document.fonts.load('700 1em "Helvetica Neue"')
        ]).then(() => {
            document.documentElement.classList.add('fonts-loaded');
        });
    }
});

// リソース優先度の最適化
function optimizeResourceLoading() {
    // CTAボタンなどのインタラクティブ要素を特定
    const interactiveElements = document.querySelectorAll('.btn, .btn-service, .btn-submit, .card');
    
    // ユーザーの操作を予測して先読み
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            // マウスオーバー時にリンク先をプリフェッチ
            const link = this.getAttribute('href');
            if (link && !link.startsWith('#') && !link.startsWith('javascript')) {
                const linkPreload = document.createElement('link');
                linkPreload.rel = 'prefetch';
                linkPreload.href = link;
                document.head.appendChild(linkPreload);
            }
        });
    });
}

// 実行コンテキストの最適化
function optimizeExecutionContext() {
    // 非同期スクリプト実行
    window.addEventListener('load', function() {
        setTimeout(() => {
            // 優先度の低いスクリプトを非同期で読み込み
            const lowPriorityScripts = [
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js', async: true, defer: true }
            ];
            
            lowPriorityScripts.forEach(script => {
                const scriptEl = document.createElement('script');
                scriptEl.src = script.src;
                scriptEl.async = script.async;
                scriptEl.defer = script.defer;
                document.body.appendChild(scriptEl);
            });
        }, 1000);
    });
}

// カスタムWebP対応検出と最適化
function detectWebPSupport() {
    const canvas = document.createElement('canvas');
    if (canvas.getContext && canvas.getContext('2d')) {
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
}

// WebP対応環境ではWebP画像を提供
function optimizeImageFormat() {
    if (detectWebPSupport()) {
        document.documentElement.classList.add('webp-support');
        
        // 画像パスをWebP形式に置き換え
        document.querySelectorAll('img[data-webp]').forEach(img => {
            img.src = img.getAttribute('data-webp');
        });
    }
}

// コア Web Vitals 最適化
function optimizeCoreWebVitals() {
    // LCP (Largest Contentful Paint) 最適化
    const lcpElements = document.querySelectorAll('.hero-content h1, .hero-image img');
    lcpElements.forEach(element => {
        element.setAttribute('fetchpriority', 'high');
    });
    
    // CLS (Cumulative Layout Shift) 最適化
    const imageContainers = document.querySelectorAll('.achievement-image, .about-image, .testimonial img');
    imageContainers.forEach(container => {
        // 事前にスペースを確保
        if (container.querySelector('img')) {
            const img = container.querySelector('img');
            if (img.naturalWidth && img.naturalHeight) {
                const aspectRatio = img.naturalHeight / img.naturalWidth;
                container.style.paddingBottom = `${aspectRatio * 100}%`;
            }
        }
    });
    
    // FID (First Input Delay) 最適化
    window.addEventListener('DOMContentLoaded', () => {
        // 入力イベントのリスナーを最適な時期に登録
        requestIdleCallback(() => {
            const interactiveElements = document.querySelectorAll('button, .btn, input, a');
            interactiveElements.forEach(el => {
                // イベント分割で処理を最適化
                el.addEventListener('click', () => {
                    setTimeout(() => {
                        // 最初の応答を早く、重い処理は後回し
                    }, 0);
                });
            });
        });
    });
}

// リソースヒントの最適化
function addResourceHints() {
    // DNS プリフェッチとプリコネクト
    const connections = [
        'https://cdnjs.cloudflare.com',
        'https://fonts.googleapis.com',
        'https://images.unsplash.com'
    ];
    
    connections.forEach(domain => {
        // DNS プリフェッチ
        const dnsPrefetch = document.createElement('link');
        dnsPrefetch.rel = 'dns-prefetch';
        dnsPrefetch.href = domain;
        document.head.appendChild(dnsPrefetch);
        
        // プリコネクト
        const preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = domain;
        preconnect.crossOrigin = 'anonymous';
        document.head.appendChild(preconnect);
    });
}

// 初期化
function initPerformanceOptimizations() {
    optimizeResourceLoading();
    optimizeExecutionContext();
    optimizeImageFormat();
    optimizeCoreWebVitals();
    addResourceHints();
    
    // パフォーマンスメトリクスの記録
    if ('performance' in window && 'mark' in performance) {
        performance.mark('optimizations-applied');
    }
}

// ページ読み込み完了後に実行
if (document.readyState === 'complete') {
    initPerformanceOptimizations();
} else {
    window.addEventListener('load', initPerformanceOptimizations);
}

export { initPerformanceOptimizations };

// 画像の遅延読み込み
export const initLazyLoading = () => {
  const images = document.querySelectorAll('img[data-src]');
  const imageOptions = {
    threshold: 0.1,
    rootMargin: '50px'
  };
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, imageOptions);
  
  images.forEach((img) => imageObserver.observe(img));
};

// クリティカルリソースの最適化
export const initPerformanceOptimizations = () => {
  // 非クリティカルなCSSの遅延読み込み
  const loadDeferredStyles = () => {
    const deferredStyles = document.querySelectorAll('link[rel="preload"][as="style"]');
    deferredStyles.forEach((style) => {
      style.rel = 'stylesheet';
    });
  };
  
  // 非クリティカルなJavaScriptの遅延読み込み
  const loadDeferredScripts = () => {
    const deferredScripts = document.querySelectorAll('script[data-defer]');
    deferredScripts.forEach((script) => {
      const newScript = document.createElement('script');
      Array.from(script.attributes).forEach((attr) => {
        if (attr.name !== 'data-defer') {
          newScript.setAttribute(attr.name, attr.value);
        }
      });
      newScript.textContent = script.textContent;
      script.parentNode.replaceChild(newScript, script);
    });
  };
  
  // FontAwesomeの最適化
  const optimizeFontAwesome = () => {
    const icons = document.querySelectorAll('.fa, .fab, .far, .fas');
    const uniqueIcons = new Set();
    
    icons.forEach((icon) => {
      Array.from(icon.classList).forEach((className) => {
        if (className.startsWith('fa-')) {
          uniqueIcons.add(className);
        }
      });
    });
    
    // 使用されているアイコンのみをロード
    const script = document.createElement('script');
    script.src = `https://kit.fontawesome.com/your-kit-code.js`;
    script.dataset.autoAddCss = 'false';
    script.dataset.searchPseudoElements = 'true';
    script.dataset.observeMutations = 'true';
    script.dataset.icons = Array.from(uniqueIcons).join(',');
    document.head.appendChild(script);
  };
  
  // 実行
  if (document.readyState === 'complete') {
    loadDeferredStyles();
    loadDeferredScripts();
    optimizeFontAwesome();
  } else {
    window.addEventListener('load', () => {
      loadDeferredStyles();
      loadDeferredScripts();
      optimizeFontAwesome();
    });
  }
}; 