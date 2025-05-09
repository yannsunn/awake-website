// cards.js - カード関連の機能

/**
 * カード最適化機能の初期化
 */
export function initCardOptimizations() {
    const cards = document.querySelectorAll('.card');
    
    if (!cards.length) return;
    
    // 画像の遅延読み込み設定
    cards.forEach(card => {
        const image = card.querySelector('img');
        if (image) {
            image.loading = 'lazy';
        }
        
        // カードのホバーエフェクト
        card.addEventListener('mouseenter', () => {
            card.classList.add('card-hover');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('card-hover');
        });
    });
    
    // カード高さの均一化（レスポンシブ対応）
    equalizeCardHeights();
    window.addEventListener('resize', equalizeCardHeights);
}

/**
 * カードの高さを均一化する
 */
function equalizeCardHeights() {
    // モバイル表示の場合は均一化しない
    if (window.innerWidth <= 768) return;
    
    // サービスカードの場合
    const serviceCards = document.querySelectorAll('.service-cards .card');
    if (serviceCards.length > 0) {
        let maxHeight = 0;
        
        // 高さをリセットして最大値を取得
        serviceCards.forEach(card => {
            card.style.height = 'auto';
            const height = card.offsetHeight;
            maxHeight = Math.max(maxHeight, height);
        });
        
        // すべてのカードに最大の高さを設定
        serviceCards.forEach(card => {
            card.style.height = `${maxHeight}px`;
        });
    }
} 