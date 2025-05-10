// パフォーマンス最適化
(function() {
    'use strict';

    // 遅延読み込み
    const lazyLoad = () => {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        const lazyIframes = document.querySelectorAll('iframe[loading="lazy"]');
        const lazyBackgrounds = document.querySelectorAll('.lazy-background');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        observer.unobserve(img);
                    }
                });
            });

            const iframeObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const iframe = entry.target;
                        if (iframe.dataset.src) {
                            iframe.src = iframe.dataset.src;
                            iframe.removeAttribute('data-src');
                        }
                        observer.unobserve(iframe);
                    }
                });
            });

            const backgroundObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        if (element.dataset.background) {
                            element.style.backgroundImage = `url(${element.dataset.background})`;
                            element.classList.remove('lazy-background');
                            element.removeAttribute('data-background');
                        }
                        observer.unobserve(element);
                    }
                });
            });

            lazyImages.forEach(img => imageObserver.observe(img));
            lazyIframes.forEach(iframe => iframeObserver.observe(iframe));
            lazyBackgrounds.forEach(bg => backgroundObserver.observe(bg));
        }
    };

    // パフォーマンスメトリクスの収集
    const collectPerformanceMetrics = () => {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = window.performance.timing;
                    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                    const domReadyTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;
                    
                    console.log('Page Load Time:', pageLoadTime);
                    console.log('DOM Ready Time:', domReadyTime);

                    // Google Analyticsにパフォーマンスデータを送信（実装時に追加）
                    if (typeof gtag === 'function') {
                        gtag('event', 'performance', {
                            'page_load_time': pageLoadTime,
                            'dom_ready_time': domReadyTime
                        });
                    }
                }, 0);
            });
        }
    };

    // リソースのプリフェッチ
    const prefetchResources = () => {
        const links = document.querySelectorAll('a');
        const prefetchedUrls = new Set();

        const prefetchObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const link = entry.target;
                    const href = link.getAttribute('href');

                    if (href && !prefetchedUrls.has(href) && href.startsWith('/')) {
                        prefetchedUrls.add(href);
                        const prefetchLink = document.createElement('link');
                        prefetchLink.rel = 'prefetch';
                        prefetchLink.href = href;
                        document.head.appendChild(prefetchLink);
                    }
                }
            });
        }, {
            threshold: 0.1
        });

        links.forEach(link => prefetchObserver.observe(link));
    };

    // 実行
    document.addEventListener('DOMContentLoaded', () => {
        lazyLoad();
        collectPerformanceMetrics();
        if ('IntersectionObserver' in window) {
            prefetchResources();
        }
    });
})(); 