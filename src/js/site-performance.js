// site-performance.js - パフォーマンス最適化関連の機能

/**
 * パフォーマンス最適化機能の初期化
 */
export function initSitePerformance() {
    // 画像の遅延読み込み
    lazyLoadImages();
    
    // リソースのプリフェッチ
    prefetchResources();
    
    // アニメーションフレームレート最適化
    optimizeAnimationFrameRate();
    
    // インターセクションオブザーバーの最適化
    optimizeIntersectionObserver();
}

/**
 * 画像の遅延読み込み
 */
function lazyLoadImages() {
    // IntersectionObserverのサポートチェック
    if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        // data-src属性を持つすべての画像を監視
        document.querySelectorAll('img[data-src]').forEach(img => {
            imgObserver.observe(img);
        });
    } else {
        // IntersectionObserverをサポートしていない古いブラウザ向けのフォールバック
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
}

/**
 * リソースのプリフェッチ
 */
function prefetchResources() {
    // ビューポートに入る可能性が高いページのプリフェッチ
    const links = document.querySelectorAll('a[data-prefetch]');
    
    if ('IntersectionObserver' in window) {
        const linkObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const link = entry.target;
                    const href = link.getAttribute('href');
                    
                    if (href && !link.hasAttribute('data-prefetched')) {
                        // プリフェッチリンクを作成
                        const prefetchLink = document.createElement('link');
                        prefetchLink.rel = 'prefetch';
                        prefetchLink.href = href;
                        document.head.appendChild(prefetchLink);
                        
                        // プリフェッチ済みとしてマーク
                        link.setAttribute('data-prefetched', 'true');
                        
                        // 監視を解除
                        observer.unobserve(link);
                    }
                }
            });
        }, {
            rootMargin: '200px 0px',
            threshold: 0.01
        });
        
        // リンクを監視
        links.forEach(link => {
            linkObserver.observe(link);
        });
    }
}

/**
 * アニメーションフレームレート最適化
 */
function optimizeAnimationFrameRate() {
    // ページがバックグラウンドにある場合やバッテリー消費を抑えるために
    // アニメーションのフレームレートを調整
    if ('requestIdleCallback' in window) {
        // 低優先度のタスクをアイドル時間に延期
        requestIdleCallback(() => {
            document.querySelectorAll('.animated-element').forEach(el => {
                el.style.animationDuration = '0.8s';
            });
        });
    }
}

/**
 * インターセクションオブザーバーの最適化
 */
function optimizeIntersectionObserver() {
    // インターセクションオブザーバーのプーリング
    // 複数のオブザーバーを作成するのではなく、可能な限り1つのオブザーバーを再利用
    
    if ('IntersectionObserver' in window) {
        // 複数の要素タイプに対して1つのオブザーバーを使用
        const sharedObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    
                    // 要素の種類に基づいて異なる処理を行う
                    if (target.hasAttribute('data-animate')) {
                        target.classList.add('visible');
                    }
                    
                    if (target.hasAttribute('data-counter')) {
                        // カウンターアニメーションを開始
                        const finalValue = parseInt(target.getAttribute('data-counter'), 10);
                        animateCounter(target, finalValue);
                    }
                    
                    // 一度表示されたら監視を解除
                    sharedObserver.unobserve(target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // 監視対象を追加
        document.querySelectorAll('[data-animate], [data-counter]').forEach(el => {
            sharedObserver.observe(el);
        });
    }
}

/**
 * カウンターアニメーション
 */
function animateCounter(element, finalValue) {
    let startValue = 0;
    const duration = 2000; // 2秒間
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        
        if (elapsedTime < duration) {
            const progress = elapsedTime / duration;
            const currentValue = Math.floor(progress * finalValue);
            
            element.textContent = currentValue.toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = finalValue.toLocaleString();
        }
    }
    
    requestAnimationFrame(updateCounter);
} 