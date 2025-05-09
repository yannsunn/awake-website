// 画像の遅延読み込み
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
        images.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
});

// インタラクション最適化
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// スクロールイベントの最適化
const optimizedScroll = debounce(() => {
    // スクロール関連の処理
    const scrollTop = window.pageYOffset;
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    if (scrollTop > 300) {
        scrollTopBtn?.classList.add('visible');
    } else {
        scrollTopBtn?.classList.remove('visible');
    }
}, 16);

window.addEventListener('scroll', optimizedScroll);

// フォーム入力の最適化
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    const formData = new FormData();
    
    form.addEventListener('input', debounce((e) => {
        const input = e.target;
        formData.set(input.name, input.value);
    }, 300));
});

// リソースのプリフェッチ
document.addEventListener('DOMContentLoaded', () => {
    // プリフェッチするリソースのリスト
    const resources = [
        '/services/ec.html',
        '/services/ai.html',
        '/services/insurance.html',
        '/services/furniture.html'
    ];

    // ユーザーがアイドル状態の時にプリフェッチ
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            resources.forEach(url => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = url;
                document.head.appendChild(link);
            });
        });
    }
});

// キャッシュの最適化
if ('caches' in window) {
    caches.open('static-v1').then(cache => {
        cache.addAll([
            '/css/style.css',
            '/js/main.js',
            '/js/performance.js'
        ]);
    });
}

// パフォーマンスモニタリング
if ('performance' in window) {
    window.addEventListener('load', () => {
        const timing = performance.getEntriesByType('navigation')[0];
        console.log('Page Load Time:', timing.loadEventEnd - timing.navigationStart);
        
        // Core Web Vitals
        const cls = performance.getEntriesByType('layout-shift');
        const fid = performance.getEntriesByType('first-input');
        const lcp = performance.getEntriesByType('largest-contentful-paint');
        
        console.log('Performance Metrics:', {
            CLS: cls.length ? cls[0].value : 'Not available',
            FID: fid.length ? fid[0].processingStart - fid[0].startTime : 'Not available',
            LCP: lcp.length ? lcp[0].renderTime : 'Not available'
        });
    });
} 