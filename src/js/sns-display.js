/**
 * SNS実績表示最適化コンポーネント
 * モダンな表示とエンゲージメント促進のための機能
 */

document.addEventListener('DOMContentLoaded', function() {
    // SNS統計カウンターの初期化
    initSnsCounters();
    
    // SNSフィードの表示
    initSocialFeed();
    
    // SNSシェアボタンの設定
    initSocialSharing();
    
    // フローティングSNSナビゲーションの追加
    createFloatingSocialNav();
    
    // SNSリンクのトラッキング設定
    initSocialTracking();
    
    // 問い合わせフォーム送信処理の初期化
    initContactForm();
});

/**
 * SNSフォロワー数などの統計情報を動的にカウントアップ表示
 */
function initSnsCounters() {
    const counters = document.querySelectorAll('.sns-metric-value, [data-count-up]');
    
    counters.forEach(counter => {
        const targetValue = parseInt(counter.getAttribute('data-count-up') || counter.textContent, 10);
        const duration = parseInt(counter.getAttribute('data-duration') || '2000', 10);
        const countUnit = counter.getAttribute('data-unit') || '';
        const startValue = 0;
        
        // カウンター初期値に0を設定
        counter.textContent = '0';
        
        // Intersection Observerを使用して画面内に入ったときにカウント開始
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const startTime = performance.now();
                    
                    function updateCounter(currentTime) {
                        const elapsedTime = currentTime - startTime;
                        
                        if (elapsedTime < duration) {
                            const progress = elapsedTime / duration;
                            // イージング関数を適用してより自然なアニメーションに
                            const easedProgress = 1 - Math.pow(1 - progress, 3);
                            const currentValue = Math.floor(startValue + (targetValue - startValue) * easedProgress);
                            
                            // 桁区切りを適用
                            const formattedValue = currentValue.toLocaleString();
                            counter.textContent = formattedValue + countUnit;
                            
                            requestAnimationFrame(updateCounter);
                        } else {
                            // カウント完了時
                            counter.textContent = targetValue.toLocaleString() + countUnit;
                            
                            // カウント完了後にハイライトエフェクト
                            counter.classList.add('counter-completed');
                            setTimeout(() => {
                                counter.classList.remove('counter-completed');
                            }, 1000);
                        }
                    }
                    
                    requestAnimationFrame(updateCounter);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(counter);
    });
}

/**
 * SNS投稿のモダンなフィードを表示
 */
function initSocialFeed() {
    const socialFeedContainer = document.querySelector('.social-feed');
    if (!socialFeedContainer) return;
    
    // モックデータ - 実際の実装では各SNSのAPIから取得
    const feedItems = [
        {
            platform: 'tiktok',
            thumbnail: 'assets/images/tiktok-achievement.jpg',
            engagement: '10.2k いいね',
            views: '100k 再生',
            date: '3日前',
            caption: 'AI活用事例とトレンド解説 #AI #テクノロジー'
        },
        {
            platform: 'instagram',
            thumbnail: 'assets/images/instagram-achievement.jpg',
            engagement: '5.3k いいね',
            comments: '127 コメント',
            date: '1週間前',
            caption: 'AIを活用した業務効率化のビフォーアフター #業務効率化 #DX'
        },
        {
            platform: 'youtube',
            thumbnail: 'assets/images/youtube-achievement.jpg',
            engagement: '8.7k 高評価',
            views: '52k 再生',
            date: '2週間前',
            caption: '【AIウェビナー】5分でわかるチャットボット導入のメリット'
        }
    ];
    
    // フィードアイテムをDOMに追加
    let feedHTML = '';
    
    feedItems.forEach(item => {
        // プラットフォーム別のアイコンとカラー設定
        const platformColors = {
            'tiktok': '#000000',
            'instagram': '#C13584',
            'youtube': '#FF0000'
        };
        
        const platformIcons = {
            'tiktok': 'fab fa-tiktok',
            'instagram': 'fab fa-instagram',
            'youtube': 'fab fa-youtube'
        };
        
        // モダンなカードレイアウトを作成
        feedHTML += `
            <div class="social-feed-item ${item.platform}-feed fade-up">
                <div class="feed-platform" style="background-color: ${platformColors[item.platform]}">
                    <i class="${platformIcons[item.platform]}"></i>
                </div>
                <div class="feed-thumbnail">
                    <img src="${item.thumbnail}" alt="${item.platform} 投稿" loading="lazy">
                    <div class="feed-overlay">
                        <div class="feed-stats">
                            <span class="feed-views"><i class="fas fa-eye"></i> ${item.views}</span>
                            <span class="feed-likes"><i class="fas fa-heart"></i> ${item.engagement}</span>
                            ${item.comments ? `<span class="feed-comments"><i class="fas fa-comment"></i> ${item.comments}</span>` : ''}
                        </div>
                    </div>
                </div>
                <div class="feed-content">
                    <div class="feed-caption">${item.caption}</div>
                    <div class="feed-date">${item.date}</div>
                </div>
                <a href="#" class="feed-link" aria-label="${item.platform}で見る">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;
    });
    
    socialFeedContainer.innerHTML = feedHTML;
    
    // アニメーション設定
    setTimeout(() => {
        document.querySelectorAll('.social-feed-item').forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 200); // アイテムごとに表示タイミングをずらす
        });
    }, 300);
}

/**
 * SNSシェアボタンの設定
 */
function initSocialSharing() {
    const shareBtns = document.querySelectorAll('.share-btn');
    
    shareBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.getAttribute('data-platform');
            const shareTitle = document.title;
            const shareUrl = encodeURIComponent(window.location.href);
            const shareText = encodeURIComponent(this.getAttribute('data-text') || 'AI開発・SNSコンサルティングのプロフェッショナル。お気軽にお問い合わせください。');
            
            let shareLink = '';
            
            switch(platform) {
                case 'twitter':
                    shareLink = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
                    break;
                case 'facebook':
                    shareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
                    break;
                case 'linkedin':
                    shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
                    break;
                case 'line':
                    shareLink = `https://social-plugins.line.me/lineit/share?url=${shareUrl}`;
                    break;
                default:
                    return;
            }
            
            // シェアウィンドウをポップアップ表示
            window.open(shareLink, 'share-window', 'width=600,height=400');
            
            // クリックアニメーションを追加
            this.classList.add('share-clicked');
            setTimeout(() => {
                this.classList.remove('share-clicked');
            }, 1000);
            
            // シェア分析データを送信（実際の実装ではアナリティクスサービスに連携）
            trackSocialShare(platform);
        });
    });
}

/**
 * フローティングSNSナビゲーションの作成
 */
function createFloatingSocialNav() {
    const socialFloatContainer = document.querySelector('.social-float-container');
    if (!socialFloatContainer) return;
    
    // SNSプラットフォーム情報
    const platforms = [
        { name: 'tiktok', icon: 'fab fa-tiktok', color: '#000000', url: '#' },
        { name: 'instagram', icon: 'fab fa-instagram', color: '#C13584', url: '#' },
        { name: 'youtube', icon: 'fab fa-youtube', color: '#FF0000', url: '#' },
        { name: 'twitter', icon: 'fab fa-twitter', color: '#1DA1F2', url: '#' }
    ];
    
    // フローティングナビゲーションを生成
    let floatHTML = `
        <div class="social-float-toggle">
            <i class="fas fa-share-alt"></i>
        </div>
        <div class="social-float-links">
    `;
    
    platforms.forEach(platform => {
        floatHTML += `
            <a href="${platform.url}" class="social-float-link ${platform.name}-link" 
               style="--platform-color: ${platform.color}" target="_blank" rel="noopener" 
               aria-label="${platform.name}をフォロー">
                <i class="${platform.icon}"></i>
                <span class="social-float-tooltip">${platform.name}</span>
            </a>
        `;
    });
    
    floatHTML += '</div>';
    socialFloatContainer.innerHTML = floatHTML;
    
    // トグルボタンのイベント設定
    const toggleBtn = socialFloatContainer.querySelector('.social-float-toggle');
    toggleBtn.addEventListener('click', function() {
        socialFloatContainer.classList.toggle('active');
        
        // アクティブ時にプラットフォームアイコンを連続的に表示
        if (socialFloatContainer.classList.contains('active')) {
            document.querySelectorAll('.social-float-link').forEach((link, index) => {
                setTimeout(() => {
                    link.classList.add('visible');
                }, index * 100);
            });
        } else {
            document.querySelectorAll('.social-float-link').forEach(link => {
                link.classList.remove('visible');
            });
        }
    });
    
    // スクロールに応じて表示/非表示
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            socialFloatContainer.classList.add('show');
        } else {
            socialFloatContainer.classList.remove('show');
        }
    });
}

/**
 * SNSエンゲージメントのトラッキング
 */
function initSocialTracking() {
    // SNSリンクのクリック追跡
    document.querySelectorAll('a[href*="instagram.com"], a[href*="tiktok.com"], a[href*="youtube.com"], a[href*="twitter.com"]')
    .forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            let platform = '';
            
            if (href.includes('instagram.com')) platform = 'instagram';
            else if (href.includes('tiktok.com')) platform = 'tiktok';
            else if (href.includes('youtube.com')) platform = 'youtube';
            else if (href.includes('twitter.com')) platform = 'twitter';
            
            // 分析データを送信（実際の実装ではアナリティクスサービスに連携）
            trackSocialClick(platform);
        });
    });
}

/**
 * SNSシェアイベントのトラッキング
 */
function trackSocialShare(platform) {
    // 実際の実装ではGoogle AnalyticsやFacebook Pixelなどに連携
    console.log(`Shared on ${platform}`);
    
    // データレイヤーへのイベント送信例
    if (window.dataLayer) {
        window.dataLayer.push({
            'event': 'socialShare',
            'socialPlatform': platform,
            'socialAction': 'share',
            'socialTarget': window.location.href
        });
    }
}

/**
 * SNSリンククリックのトラッキング
 */
function trackSocialClick(platform) {
    // 実際の実装ではアナリティクスサービスに連携
    console.log(`Clicked ${platform} link`);
    
    // データレイヤーへのイベント送信例
    if (window.dataLayer) {
        window.dataLayer.push({
            'event': 'socialClick',
            'socialPlatform': platform,
            'socialAction': 'click',
            'socialTarget': platform + '.com'
        });
    }
}

/**
 * SNS表示用のCSSを動的に追加
 */
function addSocialStyles() {
    // すでにスタイルが追加されているか確認
    if (document.getElementById('dynamic-social-styles')) return;
    
    const styleSheet = document.createElement('style');
    styleSheet.id = 'dynamic-social-styles';
    styleSheet.innerHTML = `
        /* SNSフィードスタイル */
        .social-feed {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 30px;
            margin: 40px 0;
        }
        
        .social-feed-item {
            position: relative;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(0,0,0,0.12);
            transition: all 0.3s ease;
            opacity: 0;
            transform: translateY(30px);
        }
        
        .social-feed-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .social-feed-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }
        
        .feed-platform {
            position: absolute;
            top: 15px;
            left: 15px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
            z-index: 2;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }
        
        .feed-thumbnail {
            position: relative;
            height: 200px;
            overflow: hidden;
        }
        
        .feed-thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }
        
        .social-feed-item:hover .feed-thumbnail img {
            transform: scale(1.05);
        }
        
        .feed-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
            padding: 15px;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .social-feed-item:hover .feed-overlay {
            opacity: 1;
        }
        
        .feed-stats {
            display: flex;
            gap: 15px;
            color: white;
            font-size: 14px;
        }
        
        .feed-content {
            padding: 20px;
        }
        
        .feed-caption {
            font-size: 16px;
            margin-bottom: 10px;
            color: #333;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        .feed-date {
            color: #888;
            font-size: 14px;
        }
        
        .feed-link {
            position: absolute;
            top: 15px;
            right: 15px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #333;
            text-decoration: none;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            opacity: 0;
            transform: translateY(-10px);
        }
        
        .social-feed-item:hover .feed-link {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* SNSカウンター */
        .sns-counter-container {
            display: flex;
            gap: 30px;
            margin: 40px 0;
            flex-wrap: wrap;
            justify-content: center;
        }
        
        .sns-counter-box {
            flex: 1;
            min-width: 180px;
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.08);
            text-align: center;
            transition: all 0.3s ease;
        }
        
        .sns-counter-box:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }
        
        .sns-platform-icon {
            font-size: 32px;
            margin-bottom: 15px;
        }
        
        .tiktok-platform .sns-platform-icon { color: #000000; }
        .instagram-platform .sns-platform-icon { color: #C13584; }
        .youtube-platform .sns-platform-icon { color: #FF0000; }
        .twitter-platform .sns-platform-icon { color: #1DA1F2; }
        
        .sns-counter {
            font-size: 42px;
            font-weight: 700;
            margin-bottom: 10px;
            background: linear-gradient(135deg, #4361EE, #F72585);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: all 0.3s ease;
        }
        
        .counter-completed {
            transform: scale(1.1);
        }
        
        .sns-counter-label {
            color: #666;
            font-size: 16px;
        }
        
        /* シェアボタン */
        .share-btn.share-clicked {
            animation: share-pulse 0.5s ease;
        }
        
        @keyframes share-pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        /* フローティングSNSナビゲーション拡張スタイル */
        .social-float-container.active .social-float-toggle {
            transform: rotate(45deg);
        }
        
        .social-float-container.active .social-float-links {
            opacity: 1;
        }
        
        .social-float-link {
            transform: translateY(20px);
            opacity: 0;
        }
        
        .social-float-link.visible {
            transform: translateY(0);
            opacity: 1;
        }
        
        .social-float-tooltip {
            position: absolute;
            right: 60px;
            background: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 14px;
            color: #333;
            white-space: nowrap;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            opacity: 0;
            transform: translateX(-10px);
            transition: all 0.3s ease;
            pointer-events: none;
        }
        
        .social-float-link:hover .social-float-tooltip {
            opacity: 1;
            transform: translateX(0);
        }
        
        /* レスポンシブ対応拡張 */
        @media (max-width: 576px) {
            .social-feed-item {
                margin-bottom: 20px;
            }
            
            .social-float-tooltip {
                display: none;
            }
        }
    `;
    
    document.head.appendChild(styleSheet);
}

// スタイルシートを追加
addSocialStyles();

/**
 * 問い合わせフォーム送信処理の初期化
 */
function initContactForm() {
    const snsConsultationForm = document.getElementById('snsConsultationForm');
    if (!snsConsultationForm) return;
    
    snsConsultationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // フォームのバリデーション
        if (!validateForm(this)) return;
        
        // 送信ボタンの状態を変更
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 送信中...';
        submitBtn.disabled = true;
        
        // フォームデータの収集
        const formData = new FormData(this);
        const formDataObj = {};
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });
        
        // 実際の実装ではここでAPIにデータを送信
        // ここではモックの成功レスポンスを返す
        setTimeout(() => {
            // 送信成功時の処理
            submitBtn.innerHTML = '<i class="fas fa-check"></i> 送信完了';
            submitBtn.classList.add('success');
            
            // フォームをリセット
            snsConsultationForm.reset();
            
            // 成功メッセージを表示
            showFormMessage('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。', 'success');
            
            // 送信ボタンを元に戻す
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('success');
            }, 3000);
            
            // コンバージョントラッキング（実際の実装ではアナリティクスサービスに連携）
            trackFormSubmission(formDataObj);
        }, 1500);
    });
}

/**
 * フォームバリデーション
 */
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    // エラーメッセージをリセット
    const prevErrorMessages = form.querySelectorAll('.error-message');
    prevErrorMessages.forEach(el => el.remove());
    
    // 必須フィールドのチェック
    requiredFields.forEach(field => {
        field.classList.remove('is-invalid');
        
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('is-invalid');
            
            // エラーメッセージを追加
            const errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            errorMsg.textContent = '必須項目です';
            field.parentNode.appendChild(errorMsg);
        }
        
        // メールアドレスの形式チェック
        if (field.type === 'email' && field.value.trim()) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(field.value)) {
                isValid = false;
                field.classList.add('is-invalid');
                
                const errorMsg = document.createElement('div');
                errorMsg.className = 'error-message';
                errorMsg.textContent = '有効なメールアドレスを入力してください';
                field.parentNode.appendChild(errorMsg);
            }
        }
    });
    
    // フォーム全体のメッセージを表示
    if (!isValid) {
        showFormMessage('入力内容に誤りがあります。ご確認ください。', 'error');
    }
    
    return isValid;
}

/**
 * フォームメッセージの表示
 */
function showFormMessage(message, type) {
    const form = document.getElementById('snsConsultationForm');
    if (!form) return;
    
    // 既存のメッセージを削除
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // メッセージ要素を作成
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}-message`;
    messageElement.textContent = message;
    
    // フォームの先頭に挿入
    form.prepend(messageElement);
    
    // スクロールしてメッセージを表示
    messageElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // 一定時間後にメッセージを自動的に消す（エラーメッセージは残す）
    if (type === 'success') {
        setTimeout(() => {
            messageElement.classList.add('fade-out');
            setTimeout(() => {
                messageElement.remove();
            }, 500);
        }, 5000);
    }
}

/**
 * フォーム送信のトラッキング
 */
function trackFormSubmission(formData) {
    // 実際の実装ではアナリティクスサービスに連携
    console.log('Form submitted:', formData);
    
    // データレイヤーへのイベント送信例
    if (window.dataLayer) {
        window.dataLayer.push({
            'event': 'formSubmission',
            'formType': 'snsConsultation',
            'formPlatform': formData.sns_platform
        });
    }
}

// エクスポート
export {
    initSnsCounters,
    initSocialFeed,
    initSocialSharing,
    createFloatingSocialNav,
    initSocialTracking,
    initContactForm
}; 