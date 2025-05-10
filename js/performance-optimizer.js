// パフォーマンス最適化のためのユーティリティ
const performanceOptimizer = {
    // 初期化関数
    init: function() {
        this.setupLazyLoading();
        this.optimizeScrollEvents();
        this.setupResourcePrefetch();
        this.measurePerformanceSimple();
        
        return this;
    },
    
    // 画像の遅延読み込み
    setupLazyLoading: function() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('loading' in HTMLImageElement.prototype) {
            images.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
            });
        } else {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
            document.body.appendChild(script);
        }
    },
    
    // スクロールイベントの最適化
    optimizeScrollEvents: function() {
        const scrollTopBtn = document.querySelector('.scroll-top');
        
        // 一定時間後に実行する関数（パフォーマンス向上のため）
        const debounce = (func, wait = 20) => {
            let timeout;
            return function(...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), wait);
            };
        };
        
        const optimizedScroll = debounce(() => {
            const scrollTop = window.pageYOffset;
            
            if (scrollTopBtn) {
                if (scrollTop > 300) {
                    scrollTopBtn.classList.add('visible');
                } else {
                    scrollTopBtn.classList.remove('visible');
                }
            }
        }, 16);
        
        window.addEventListener('scroll', optimizedScroll, { passive: true });
    },
    
    // リソースのプリフェッチ
    setupResourcePrefetch: function() {
        // プリフェッチするリソースのリスト
        const resources = [
            '/services/ec.html',
            '/services/ai.html',
            '/services/insurance.html',
            '/services/furniture.html'
        ];
    
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                resources.forEach(url => {
                    const link = document.createElement('link');
                    link.rel = 'prefetch';
                    link.href = url;
                    document.head.appendChild(link);
                });
            }, { timeout: 2000 });
        } else {
            setTimeout(() => {
                resources.forEach(url => {
                    const link = document.createElement('link');
                    link.rel = 'prefetch';
                    link.href = url;
                    document.head.appendChild(link);
                });
            }, 1000);
        }
    },
    
    // シンプルなパフォーマンス測定（非推奨APIは使用しない）
    measurePerformanceSimple: function() {
        window.addEventListener('load', () => {
            try {
                // Navigation Timing API 2を使用
                if (performance.getEntriesByType) {
                    const navEntries = performance.getEntriesByType("navigation");
                    if (navEntries.length > 0) {
                        const navTiming = navEntries[0];
                        console.log('Page Load Time:', Math.round(navTiming.loadEventEnd) + 'ms');
                    } else {
                        console.log('Page Load Time measurement not available');
                    }
                }
                
                // シンプルな方法でCWVを近似
                console.log('Performance Metrics:', {
                    'Page Loaded': new Date().toISOString()
                });
            } catch (e) {
                console.warn('Performance measurement error:', e);
            }
        });
    }
};

// エクスポート
export default performanceOptimizer; 