// sns-display.js - SNS表示関連の機能

/**
 * SNS表示機能の初期化
 */
export function initSNSDisplay() {
    // SNSカード要素の確認
    const snsCards = document.querySelectorAll('.sns-card, .sns-achievement-card');
    if (!snsCards.length) return;
    
    // カードのホバーエフェクト
    initSnsCardEffects(snsCards);
    
    // フォロワー数のカウントアップアニメーション
    initFollowerCountAnimation();
    
    // SNSシェアボタンの機能
    initSnsShareButtons();
}

/**
 * SNSカードのエフェクト初期化
 */
function initSnsCardEffects(cards) {
    cards.forEach(card => {
        // ホバーエフェクト
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover');
        });
        
        // 画像の遅延読み込み
        const image = card.querySelector('img');
        if (image) {
            image.loading = 'lazy';
        }
    });
}

/**
 * フォロワー数のカウントアップアニメーション初期化
 */
function initFollowerCountAnimation() {
    const counters = document.querySelectorAll('.sns-metric-value, .follower-count');
    
    if (!counters.length) return;
    
    // Intersection Observerの設定
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count') || counter.innerText, 10);
                const duration = 2000; // アニメーション時間（ミリ秒）
                
                animateCounter(counter, 0, target, duration);
                counter.classList.add('counter-completed');
                
                // 一度実行したら監視を解除
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // 各カウンターを監視
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

/**
 * カウンターのアニメーション
 */
function animateCounter(element, start, end, duration) {
    let startTime = null;
    
    function updateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        element.innerText = value.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

/**
 * SNSシェアボタンの初期化
 */
function initSnsShareButtons() {
    const shareButtons = document.querySelectorAll('.sns-share-button');
    
    if (!shareButtons.length) return;
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const url = this.getAttribute('data-url') || window.location.href;
            const title = this.getAttribute('data-title') || document.title;
            
            let shareUrl = '';
            
            // シェア先の判定
            if (this.classList.contains('share-twitter')) {
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
            } else if (this.classList.contains('share-facebook')) {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            } else if (this.classList.contains('share-line')) {
                shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`;
            }
            
            // 新しいウィンドウでシェア画面を開く
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
} 