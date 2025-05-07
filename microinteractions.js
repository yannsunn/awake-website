/**
 * マイクロインタラクション機能拡張
 * ユーザー体験向上とコンバージョン率改善のための機能
 */

document.addEventListener('DOMContentLoaded', function() {
    // 各機能の初期化
    initScrollAnimations();
    initButtonEffects();
    initFormEnhancements();
    initSocialProof();
    initPageTransitions();
    initUserFeedback();
    
    // 緊急性要素を追加（オプション - 必要に応じてコメントを外す）
    // addUrgencyElements();
});

/**
 * スクロールアニメーション初期化
 */
function initScrollAnimations() {
    // アニメーション要素の取得
    const animatedElements = document.querySelectorAll(
        '.fade-in-element, .fade-in-left, .fade-in-right, .scale-in, .stagger-animation'
    );
    
    // 要素が存在する場合のみIntersection Observerを設定
    if (animatedElements.length > 0) {
        // Intersection Observerの設定
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    // 一度表示されたら監視を解除
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // 各要素を監視対象に追加
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // スクロールプロンプトのフェードアウト
    const scrollPrompt = document.querySelector('.scroll-prompt');
    if (scrollPrompt) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                scrollPrompt.style.opacity = '0';
            } else {
                scrollPrompt.style.opacity = '1';
            }
        });
    }
}

/**
 * ボタン効果の初期化
 */
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn, .cta-button');
    
    // ボタン要素が存在する場合のみイベントリスナーを設定
    if (buttons.length > 0) {
        buttons.forEach(button => {
            // リップルエフェクト
            button.addEventListener('click', function(e) {
                const x = e.clientX - e.target.getBoundingClientRect().left;
                const y = e.clientY - e.target.getBoundingClientRect().top;
                
                const ripple = document.createElement('span');
                ripple.classList.add('btn-ripple');
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 700);
            });
            
            // ホバーエフェクト強化
            button.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            });
        });
    }
    
    // CTAボタンの特別強調
    const ctaButtons = document.querySelectorAll('.primary-cta');
    if (ctaButtons.length > 0) {
        ctaButtons.forEach(button => {
            setInterval(() => {
                button.classList.add('pulse-attention');
                setTimeout(() => {
                    button.classList.remove('pulse-attention');
                }, 1000);
            }, 10000); // 10秒ごとに注目を集める
        });
    }
}

/**
 * フォーム機能強化
 */
function initFormEnhancements() {
    const forms = document.querySelectorAll('form');
    
    // フォーム要素が存在する場合のみ処理を実行
    if (forms.length > 0) {
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');
            
            // フォーム入力フィードバック
            inputs.forEach(input => {
                // ラベル効果
                input.addEventListener('focus', function() {
                    const label = this.previousElementSibling;
                    if (label && label.tagName === 'LABEL') {
                        label.classList.add('active');
                    }
                    this.parentElement.classList.add('focused');
                });
                
                input.addEventListener('blur', function() {
                    const label = this.previousElementSibling;
                    if (label && label.tagName === 'LABEL' && this.value === '') {
                        label.classList.remove('active');
                    }
                    this.parentElement.classList.remove('focused');
                    
                    // シンプルなバリデーション
                    if (this.required && this.value === '') {
                        this.parentElement.classList.add('error');
                    } else {
                        this.parentElement.classList.remove('error');
                    }
                });
                
                // 入力中の視覚フィードバック
                input.addEventListener('input', function() {
                    if (this.value !== '') {
                        this.classList.add('has-value');
                    } else {
                        this.classList.remove('has-value');
                    }
                });
            });
            
            // フォーム送信エフェクト
            form.addEventListener('submit', function(e) {
                // 実際の送信処理は別に行う想定
                if (!form.classList.contains('no-animation')) {
                    e.preventDefault();
                    
                    const submitBtn = this.querySelector('[type="submit"]');
                    if (submitBtn) {
                        submitBtn.disabled = true;
                        submitBtn.classList.add('submitting');
                        
                        // 送信成功演出 (実際の送信はAJAXなどで行う)
                        setTimeout(() => {
                            submitBtn.classList.remove('submitting');
                            submitBtn.classList.add('success');
                            submitBtn.textContent = '送信完了！';
                            
                            // フォームをリセット
                            setTimeout(() => {
                                this.reset();
                                submitBtn.disabled = false;
                                submitBtn.classList.remove('success');
                                submitBtn.textContent = '送信する';
                                
                                // 成功メッセージ
                                const successMessage = document.createElement('div');
                                successMessage.classList.add('form-success-message');
                                successMessage.textContent = 'お問い合わせありがとうございます。24時間以内にご連絡いたします。';
                                
                                // 親要素が存在することを確認
                                if (this.parentNode) {
                                    this.parentNode.appendChild(successMessage);
                                    
                                    setTimeout(() => {
                                        if (successMessage.parentNode) {
                                            successMessage.parentNode.removeChild(successMessage);
                                        }
                                    }, 5000);
                                }
                            }, 2000);
                        }, 1500);
                    }
                }
            });
        });
    }
}

/**
 * ソーシャルプルーフ要素の初期化
 */
function initSocialProof() {
    // 閲覧者数通知
    const viewCounters = document.querySelectorAll('.view-counter');
    if (viewCounters.length > 0) {
        viewCounters.forEach(counter => {
            const baseCount = parseInt(counter.getAttribute('data-base-count') || '100');
            const randomViews = baseCount + Math.floor(Math.random() * 50);
            counter.textContent = `${randomViews}人が閲覧中`;
            
            // 数値を時間とともに微増
            setInterval(() => {
                if (counter && counter.textContent) {
                    const currentCount = parseInt(counter.textContent);
                    const change = Math.random() > 0.5 ? 1 : -1;
                    if (currentCount + change >= baseCount && currentCount + change <= baseCount + 100) {
                        counter.textContent = `${currentCount + change}人が閲覧中`;
                    }
                }
            }, 30000);
        });
    }
    
    // 最近の購入者通知
    const recentBuyers = [
        { name: '田中さん', location: '東京', time: '5分前' },
        { name: '佐藤さん', location: '大阪', time: '12分前' },
        { name: '鈴木さん', location: '名古屋', time: '18分前' },
        { name: '高橋さん', location: '福岡', time: '24分前' },
        { name: '伊藤さん', location: '北海道', time: '30分前' }
    ];
    
    const purchaseNotifications = document.querySelector('.recent-purchases');
    if (purchaseNotifications) {
        let index = 0;
        
        function showNextPurchase() {
            if (!purchaseNotifications) return; // 要素が存在するか再確認
            
            const buyer = recentBuyers[index];
            const notification = document.createElement('div');
            notification.classList.add('purchase-notification');
            notification.innerHTML = `<strong>${buyer.name}</strong> (${buyer.location})が${buyer.time}にサービスを申し込みました`;
            
            purchaseNotifications.innerHTML = '';
            purchaseNotifications.appendChild(notification);
            
            // フェードインアニメーション
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.style.opacity = '1';
            }, 100);
            
            // 次の購入者へ
            index = (index + 1) % recentBuyers.length;
        }
        
        // 最初の表示
        showNextPurchase();
        
        // 定期的に表示を更新
        setInterval(showNextPurchase, 15000);
    }
}

/**
 * ページ遷移エフェクト
 */
function initPageTransitions() {
    // ページ内リンクのスムーズスクロール
    const pageLinks = document.querySelectorAll('a[href^="#"]');
    
    if (pageLinks.length > 0) {
        pageLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // スムーズスクロール
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // ヘッダーの高さを考慮
                        behavior: 'smooth'
                    });
                    
                    // URLの更新（オプション）
                    history.pushState(null, null, targetId);
                    
                    // ナビゲーションのアクティブ状態更新
                    const navLinks = document.querySelectorAll('nav a');
                    if (navLinks.length > 0) {
                        navLinks.forEach(navLink => {
                            navLink.classList.remove('active');
                        });
                        this.classList.add('active');
                    }
                }
            });
        });
    }
    
    // セクションが存在するか確認
    const sections = document.querySelectorAll('section[id]');
    if (sections.length > 0) {
        // スクロール位置に基づくナビゲーションのアクティブ状態更新
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            
            // 各セクションをチェック
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    const correspondingNavLink = document.querySelector(`nav a[href="#${section.id}"]`);
                    if (correspondingNavLink) {
                        const navLinks = document.querySelectorAll('nav a');
                        if (navLinks.length > 0) {
                            navLinks.forEach(link => {
                                link.classList.remove('active');
                            });
                            correspondingNavLink.classList.add('active');
                        }
                    }
                }
            });
        });
    }
}

/**
 * ユーザーフィードバック強化
 */
function initUserFeedback() {
    // カードのホバーエフェクト強化
    const cards = document.querySelectorAll('.card');
    if (cards.length > 0) {
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const otherCards = document.querySelectorAll('.card:not(:hover)');
                if (otherCards.length > 0) {
                    otherCards.forEach(otherCard => {
                        otherCard.style.opacity = '0.8';
                        otherCard.style.transform = 'scale(0.95)';
                    });
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const allCards = document.querySelectorAll('.card');
                if (allCards.length > 0) {
                    allCards.forEach(c => {
                        c.style.opacity = '1';
                        c.style.transform = '';
                    });
                }
            });
        });
    }
    
    // トースト通知システム
    window.showToast = function(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.classList.add('toast', `toast-${type}`);
        toast.textContent = message;
        
        // 既存のトースト要素を確認
        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.classList.add('toast-container');
            document.body.appendChild(toastContainer);
        }
        
        toastContainer.appendChild(toast);
        
        // アニメーション
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // 自動消去
        setTimeout(() => {
            if (toast) {
                toast.classList.remove('show');
                setTimeout(() => {
                    if (toast && toast.parentNode) {
                        toast.parentNode.removeChild(toast);
                        
                        // コンテナが空になったら削除
                        if (toastContainer && toastContainer.children.length === 0 && toastContainer.parentNode) {
                            toastContainer.parentNode.removeChild(toastContainer);
                        }
                    }
                }, 300);
            }
        }, duration);
    };
    
    // ページ滞在時間トラッキング
    let pageEntryTime = new Date();
    
    window.addEventListener('beforeunload', function() {
        const timeSpent = (new Date() - pageEntryTime) / 1000; // 秒単位
        
        // 長時間滞在した場合のフィードバック（例：アンケート表示）
        if (timeSpent > 120) { // 2分以上滞在
            // 実際のサイトではここでアンケートや再訪問促進の処理
            console.log('長時間滞在ユーザー: ' + timeSpent + '秒');
        }
    });
}

/**
 * 緊急性を演出する要素の追加
 */
function addUrgencyElements() {
    // 残り席数表示
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length > 0) {
        serviceCards.forEach(card => {
            const remainingSpots = Math.floor(Math.random() * 5) + 1;
            const urgencyBadge = document.createElement('div');
            urgencyBadge.classList.add('urgency-badge');
            urgencyBadge.textContent = `残り${remainingSpots}席のみ`;
            card.appendChild(urgencyBadge);
        });
    }
    
    // カウントダウンタイマー
    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) {
        const now = new Date();
        const endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        endTime.setHours(23, 59, 59, 0);
        
        const countdownTimer = document.createElement('div');
        countdownTimer.classList.add('countdown-timer');
        countdownTimer.innerHTML = `
            <div class="countdown-label">期間限定オファー終了まで</div>
            <div class="countdown-time">
                <span class="countdown-hours">00</span>:
                <span class="countdown-minutes">00</span>:
                <span class="countdown-seconds">00</span>
            </div>
        `;
        
        ctaSection.insertBefore(countdownTimer, ctaSection.firstChild);
        
        // カウントダウン更新
        function updateCountdown() {
            if (!countdownTimer || !document.contains(countdownTimer)) return;
            
            const now = new Date();
            const timeLeft = endTime - now;
            
            if (timeLeft <= 0) {
                countdownTimer.innerHTML = '<div class="countdown-ended">オファー終了しました</div>';
                return;
            }
            
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            const hoursElement = countdownTimer.querySelector('.countdown-hours');
            const minutesElement = countdownTimer.querySelector('.countdown-minutes');
            const secondsElement = countdownTimer.querySelector('.countdown-seconds');
            
            if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
            if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
            if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
}

// ボタンリップルエフェクト
function initButtonRipples() {
    // リップルエフェクト対象のボタン要素
    const buttons = document.querySelectorAll('.btn, .btn-white, .btn-float, .share-btn, .case-study-cta');
    
    if (buttons.length === 0) return;
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 既存のリップルエフェクトをクリア
            const existingRipples = this.querySelectorAll('.ripple');
            existingRipples.forEach(ripple => ripple.remove());
            
            // クリック位置を取得
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // リップル要素の作成
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            
            // リップルサイズの計算（ボタンの対角線長）
            const diameter = Math.max(rect.width, rect.height);
            const radius = diameter / 2;
            
            // スタイル設定
            ripple.style.width = ripple.style.height = `${diameter}px`;
            ripple.style.left = `${x - radius}px`;
            ripple.style.top = `${y - radius}px`;
            
            // DOM追加
            this.appendChild(ripple);
            
            // 一定時間後に削除
            setTimeout(() => {
                ripple.remove();
            }, 600); // アニメーション時間に合わせる
        });
    });
}

// ホバーエフェクト
function initHoverEffects() {
    // SNSカード要素
    const cards = document.querySelectorAll('.sns-achievement-card, .sns-metric-card');
    
    if (cards.length === 0) return;
    
    cards.forEach(card => {
        // マウスムーブ時の影の動的な変更
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            
            // マウス位置を正規化（-1〜1の範囲）
            const xPos = (e.clientX - rect.left) / rect.width - 0.5;
            const yPos = (e.clientY - rect.top) / rect.height - 0.5;
            
            // 影の位置をマウスの反対側に
            const shadowX = xPos * -20;
            const shadowY = yPos * -20;
            
            // 影のスタイル更新
            this.style.boxShadow = `
                ${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.1),
                0 10px 30px rgba(0, 0, 0, 0.08)
            `;
        });
        
        // マウス離脱時のリセット
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    // SNSタグのホバーエフェクト強化
    const tags = document.querySelectorAll('.sns-tag');
    
    if (tags.length > 0) {
        tags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }
}

// カーソルフォロワー
function initCursorFollower() {
    // ページ内で要素が存在するか確認
    const cursorFollower = document.querySelector('.cursor-follower');
    
    // 要素がなければ作成
    if (!cursorFollower) {
        const follower = document.createElement('div');
        follower.className = 'cursor-follower';
        document.body.appendChild(follower);
        
        // 初期スタイル設定
        const style = follower.style;
        style.position = 'fixed';
        style.width = '30px';
        style.height = '30px';
        style.borderRadius = '50%';
        style.backgroundColor = 'rgba(67, 97, 238, 0.2)';
        style.pointerEvents = 'none';
        style.zIndex = '9999';
        style.transform = 'translate(-50%, -50%)';
        style.transition = 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease, transform 0.05s ease';
        style.opacity = '0';
        
        // 少し遅延させて表示
        setTimeout(() => {
            style.opacity = '1';
        }, 500);
        
        // マウス追従
        document.addEventListener('mousemove', e => {
            style.left = `${e.clientX}px`;
            style.top = `${e.clientY}px`;
        });
        
        // ホバー要素の検出とエフェクト
        const hoverElements = document.querySelectorAll('a, button, .sns-card-badge, .sns-tag, .sns-metric-card, .sns-achievement-card');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                follower.classList.add('hover');
                style.width = '50px';
                style.height = '50px';
                style.backgroundColor = 'rgba(67, 97, 238, 0.1)';
                style.mixBlendMode = 'difference';
            });
            
            element.addEventListener('mouseleave', () => {
                follower.classList.remove('hover');
                style.width = '30px';
                style.height = '30px';
                style.backgroundColor = 'rgba(67, 97, 238, 0.2)';
                style.mixBlendMode = 'normal';
            });
        });
    }
}

// 視差効果（パララックス）
function initParallaxEffect() {
    // パララックス対象要素
    const parallaxElements = document.querySelectorAll('.sns-achievement-card .sns-card-image, .case-study-image');
    
    if (parallaxElements.length === 0) return;
    
    // 視差効果の更新関数
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const centerY = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const distanceFromCenter = centerY - viewportCenter;
            
            // 視界内にある場合のみ計算
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                // 視差効果の強さ（値を小さくすると効果が強くなる）
                const speed = 0.05;
                
                // 要素内の画像を移動
                const img = element.querySelector('img');
                if (img) {
                    // 移動量の計算
                    const translateY = distanceFromCenter * speed;
                    
                    // 移動を適用
                    img.style.transform = `translateY(${translateY}px)`;
                }
            }
        });
    }
    
    // スクロールイベントハンドラ（最適化済み）
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    
    // 初期状態の設定
    updateParallax();
}

// タイピングエフェクト
function initTypingEffect() {
    const typingElements = document.querySelectorAll('[data-typing]');
    
    if (typingElements.length === 0) return;
    
    typingElements.forEach(element => {
        const text = element.getAttribute('data-typing');
        const speed = parseInt(element.getAttribute('data-typing-speed') || '100', 10);
        const delay = parseInt(element.getAttribute('data-typing-delay') || '0', 10);
        
        // 元のテキストを保存
        element.setAttribute('data-original-text', element.textContent);
        // 表示前に空にする
        element.textContent = '';
        
        // Intersection Observerの設定
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 遅延後にタイピング開始
                    setTimeout(() => {
                        let i = 0;
                        
                        // タイピング処理
                        const typeCharacter = () => {
                            if (i < text.length) {
                                element.textContent += text.charAt(i);
                                i++;
                                setTimeout(typeCharacter, speed);
                            } else {
                                // タイピング完了時のクラス追加
                                element.classList.add('typing-completed');
                            }
                        };
                        
                        // タイピング開始
                        typeCharacter();
                    }, delay);
                    
                    // 一度実行したら監視を解除
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.5 });
        
        // 監視開始
        observer.observe(element);
    });
}

// クリック波及効果（ボタン以外の領域）
function initClickWaveEffects() {
    const waveElements = document.querySelectorAll('.wave-effect');
    
    if (waveElements.length === 0) return;
    
    waveElements.forEach(element => {
        element.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const circle = document.createElement('span');
            circle.className = 'click-wave';
            
            // スタイル設定
            const style = circle.style;
            style.position = 'absolute';
            style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            style.borderRadius = '50%';
            style.pointerEvents = 'none';
            style.width = '0';
            style.height = '0';
            style.left = x + 'px';
            style.top = y + 'px';
            style.animation = 'click-wave 0.6s ease-out';
            
            // 要素が相対位置を持つことを確認
            if (getComputedStyle(this).position === 'static') {
                this.style.position = 'relative';
            }
            
            // オーバーフローを隠す
            this.style.overflow = 'hidden';
            
            // 波紋要素を追加
            this.appendChild(circle);
            
            // アニメーション後に削除
            setTimeout(() => {
                circle.remove();
            }, 600);
        });
    });
    
    // 波紋アニメーションをスタイルに追加
    if (!document.querySelector('#wave-animation-style')) {
        const style = document.createElement('style');
        style.id = 'wave-animation-style';
        style.textContent = `
            @keyframes click-wave {
                to {
                    transform: scale(20);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// モジュールとしてエクスポート
export {
    initButtonRipples,
    initHoverEffects,
    initCursorFollower,
    initParallaxEffect,
    initTypingEffect,
    initClickWaveEffects
}; 