/**
 * 2025年最新ウェブトレンド対応JavaScript
 * 高コンバージョン率・高CTR実現機能
 */

// 重複実行防止フラグ
let awake2025Initialized = false;

document.addEventListener('DOMContentLoaded', function() {
    if (awake2025Initialized) return;
    awake2025Initialized = true;
    
    initDarkModeToggle();
    initPersonalization();
    initMicroInteractions();
    initVideoIntegration();
    initRealTimeFeedback();
    initContextAwareMessaging();
    initSmoothScrollEnhancements();
    init3DEffects();
});

/**
 * ダークモード切り替え機能
 */
function initDarkModeToggle() {
    // ダークモード切り替えボタンを作成
    const toggleButton = document.createElement('button');
    toggleButton.className = 'theme-toggle';
    toggleButton.innerHTML = '🌙';
    toggleButton.setAttribute('aria-label', 'ダークモード切り替え');
    
    // 現在のテーマ状態を確認
    const currentTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleButton.innerHTML = '☀️';
    }
    
    // クリックイベント
    toggleButton.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // アイコン更新
        this.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
        
        // スムーズトランジション
        document.body.classList.add('dark-mode-transition');
        setTimeout(() => {
            document.body.classList.remove('dark-mode-transition');
        }, 300);
    });
    
    document.body.appendChild(toggleButton);
}

/**
 * パーソナライゼーション機能
 */
function initPersonalization() {
    const visitCount = parseInt(localStorage.getItem('visitCount') || '0') + 1;
    localStorage.setItem('visitCount', visitCount.toString());
    
    const userType = visitCount === 1 ? 'new' : visitCount < 5 ? 'returning' : 'vip';
    const userName = localStorage.getItem('userName') || '';
    
    // ユーザータイプに応じたコンテンツ適応
    const adaptiveContent = document.querySelectorAll('.adaptive-content');
    adaptiveContent.forEach(element => {
        element.setAttribute('data-user-type', userType);
    });
    
    // パーソナライズされたメッセージ表示
    showPersonalizedMessage(userType, userName, visitCount);
    
    // スマートレコメンデーション生成
    generateSmartRecommendations(userType);
}

/**
 * パーソナライズされたメッセージ表示
 */
function showPersonalizedMessage(userType, userName, visitCount) {
    // 既存のメッセージがある場合は削除
    const existingMessages = document.querySelectorAll('.context-message');
    existingMessages.forEach(msg => msg.remove());
    
    const messages = {
        new: `🎉 初回訪問ありがとうございます！${userName ? userName + 'さん、' : ''}最適なサービスをご提案いたします。`,
        returning: `👋 お帰りなさい！${userName ? userName + 'さん、' : ''}前回ご覧いただいたサービスの続きはいかがですか？`,
        vip: `⭐ ${userName ? userName + 'さん、' : ''}いつもありがとうございます！VIP限定の特別オファーをご用意しました。`
    };
    
    if (messages[userType]) {
        const messageElement = document.createElement('div');
        messageElement.className = 'context-message personalized-message';
        messageElement.innerHTML = messages[userType];
        
        const hero = document.querySelector('.hero-content');
        if (hero) {
            hero.insertBefore(messageElement, hero.firstChild);
        }
    }
}

/**
 * スマートレコメンデーション生成
 */
function generateSmartRecommendations(userType) {
    const recommendations = {
        new: [
            { title: 'ホームページ制作', desc: '初心者におすすめ', link: '/services/web/' },
            { title: 'サービス概要', desc: '全サービス比較', link: '#services' }
        ],
        returning: [
            { title: '前回の続きから', desc: '閲覧履歴に基づく', link: '#' },
            { title: 'アップデート情報', desc: '新機能のご紹介', link: '#' }
        ],
        vip: [
            { title: 'VIP専用プラン', desc: '特別価格でご提供', link: '#contact' },
            { title: '優先サポート', desc: '24時間対応', link: '#' }
        ]
    };
    
    const container = document.querySelector('.smart-recommendation');
    if (container && recommendations[userType]) {
        const itemsContainer = container.querySelector('.recommendation-items');
        if (itemsContainer) {
            itemsContainer.innerHTML = '';
            recommendations[userType].forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'recommendation-item';
                itemElement.innerHTML = `
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>
                    <a href="${item.link}" class="btn btn-outline btn-small">詳細を見る</a>
                `;
                itemsContainer.appendChild(itemElement);
            });
        }
    }
}

/**
 * マイクロインタラクション初期化
 */
function initMicroInteractions() {
    // リップル効果
    document.querySelectorAll('.ripple-effect').forEach(element => {
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-animation');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // マグネティックホバー効果
    document.querySelectorAll('.magnetic-hover').forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0) scale(1)';
        });
    });
    
    // フローティングラベル
    document.querySelectorAll('.floating-label input, .floating-label textarea').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // 初期状態チェック
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
}

/**
 * 動画統合機能
 */
function initVideoIntegration() {
    // 動画プレイボタン
    document.querySelectorAll('.video-play-button').forEach(button => {
        button.addEventListener('click', function() {
            const container = this.closest('.video-background, .interactive-video-container');
            const video = container?.querySelector('video');
            
            if (video) {
                if (video.paused) {
                    video.play();
                    this.style.opacity = '0';
                } else {
                    video.pause();
                    this.style.opacity = '1';
                }
            }
        });
    });
    
    // ビデオサムネイル
    document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoUrl = this.dataset.videoUrl;
            if (videoUrl) {
                openVideoModal(videoUrl);
            }
        });
    });
}

/**
 * ビデオモーダル表示
 */
function openVideoModal(videoUrl) {
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close" aria-label="モーダルを閉じる">&times;</button>
                <div class="video-container">
                    <video controls autoplay>
                        <source src="${videoUrl}" type="video/mp4">
                        お使いのブラウザは動画をサポートしていません。
                    </video>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // 閉じる処理
    const closeModal = () => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    };
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    
    // ESCキーで閉じる
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);
}

/**
 * リアルタイムフィードバック
 */
function initRealTimeFeedback() {
    let scrollPercentage = 0;
    let timeSpent = 0;
    const startTime = Date.now();
    
    // スクロール進捗追跡
    window.addEventListener('scroll', throttle(() => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        scrollPercentage = Math.round((window.pageYOffset / docHeight) * 100);
        
        updateUserJourney(scrollPercentage);
    }, 100));
    
    // 滞在時間追跡
    setInterval(() => {
        timeSpent = Math.round((Date.now() - startTime) / 1000);
        if (timeSpent > 0 && timeSpent % 30 === 0) {
            showEngagementFeedback(timeSpent);
        }
    }, 1000);
}

/**
 * ユーザージャーニー更新
 */
function updateUserJourney(scrollPercentage) {
    const steps = document.querySelectorAll('.journey-step');
    const stepProgress = Math.floor(scrollPercentage / 25); // 25%刻み
    
    steps.forEach((step, index) => {
        step.classList.remove('current', 'completed');
        if (index < stepProgress) {
            step.classList.add('completed');
        } else if (index === stepProgress) {
            step.classList.add('current');
        }
    });
}

/**
 * エンゲージメントフィードバック表示
 */
function showEngagementFeedback(timeSpent) {
    const messages = [
        { time: 30, icon: '👀', text: 'ご興味をお持ちいただき、ありがとうございます！' },
        { time: 60, icon: '💡', text: 'さらに詳しい情報はお問い合わせください。' },
        { time: 120, icon: '🎯', text: '無料相談をご利用いただけます。' }
    ];
    
    const message = messages.find(m => m.time === timeSpent);
    if (message) {
        showRealTimeFeedback(message.icon, message.text);
    }
}

/**
 * リアルタイムフィードバック表示
 */
function showRealTimeFeedback(icon, text) {
    const feedback = document.createElement('div');
    feedback.className = 'real-time-feedback';
    feedback.innerHTML = `
        <div class="feedback-content">
            <div class="feedback-icon">${icon}</div>
            <span>${text}</span>
        </div>
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 500);
    }, 4000);
}

/**
 * コンテキストアウェアメッセージング
 */
function initContextAwareMessaging() {
    const currentHour = new Date().getHours();
    const dayOfWeek = new Date().getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    
    let contextMessage = '';
    
    if (currentHour < 10) {
        contextMessage = '🌅 おはようございます！早朝からのご訪問ありがとうございます。';
    } else if (currentHour < 17) {
        contextMessage = '☀️ 営業時間内です。リアルタイムでお問い合わせ対応可能です！';
    } else if (currentHour < 22) {
        contextMessage = '🌆 夕方のお忙しい時間にありがとうございます。';
    } else {
        contextMessage = '🌙 夜遅くまでお疲れ様です。24時間お問い合わせフォームをご利用ください。';
    }
    
    if (isWeekend) {
        contextMessage += ' 週末もオンライン対応いたします。';
    }
    
    // 位置情報ベースのメッセージ（ユーザー許可があれば）
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // 地域ベースのカスタマイズ（プライバシー配慮）
                contextMessage += ' 地域に合わせたサービスをご提案できます。';
                displayContextMessage(contextMessage);
            },
            () => {
                displayContextMessage(contextMessage);
            }
        );
    } else {
        displayContextMessage(contextMessage);
    }
}

/**
 * コンテキストメッセージ表示
 */
function displayContextMessage(message) {
    if (message) {
        // 既存のコンテキストメッセージがある場合は削除
        const existingContextMessages = document.querySelectorAll('.context-message:not(.personalized-message)');
        existingContextMessages.forEach(msg => msg.remove());
        
        const messageElement = document.createElement('div');
        messageElement.className = 'context-message context-aware-message';
        messageElement.innerHTML = message;
        
        const header = document.querySelector('.header');
        if (header) {
            header.after(messageElement);
        }
    }
}

/**
 * スムーススクロール拡張
 */
function initSmoothScrollEnhancements() {
    // パララックス効果
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', throttle(() => {
            const scrollTop = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrollTop * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        }, 16));
    }
}

/**
 * 3D効果初期化
 */
function init3DEffects() {
    // 3Dカード効果
    document.querySelectorAll('.card-3d').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            const inner = this.querySelector('.card-3d-inner');
            if (inner) {
                inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const inner = this.querySelector('.card-3d-inner');
            if (inner) {
                inner.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
            }
        });
    });
}

/**
 * パフォーマンス最適化：スロットル関数
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * ユーザーインタラクション分析
 */
function trackUserInteraction(element, action) {
    // プライバシーに配慮した匿名分析
    const interaction = {
        element: element.tagName,
        action: action,
        timestamp: Date.now(),
        userType: document.documentElement.getAttribute('data-user-type') || 'anonymous'
    };
    
    // ローカルストレージに保存（プライバシー配慮）
    const interactions = JSON.parse(localStorage.getItem('userInteractions') || '[]');
    interactions.push(interaction);
    
    // 最新100件のみ保持
    if (interactions.length > 100) {
        interactions.splice(0, interactions.length - 100);
    }
    
    localStorage.setItem('userInteractions', JSON.stringify(interactions));
}

// グローバル関数として露出
window.awakeFeatures2025 = {
    trackUserInteraction,
    showRealTimeFeedback,
    displayContextMessage
};