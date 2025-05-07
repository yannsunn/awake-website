/**
 * 2025年トレンドに合わせたアニメーションIntersection Observer実装
 * すべてのアニメーション対象要素を自動検出し、効果的にアニメーション適用します
 */

// DOMの読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
    // アニメーション初期化
    initAnimations();
    
    // パララックス効果
    initParallaxEffects();
    
    // SVGアニメーション
    initSvgAnimations();
    
    // テキストアニメーション
    initTextAnimations();
    
    // スクロールプログレス
    initScrollProgress();
    
    // マウス追従エフェクト
    initMouseEffects();
});

/**
 * すべてのアニメーション要素を初期化
 */
function initAnimations() {
    // アニメーション対象クラスの定義
    const animationClasses = [
        '.fade-up', '.fade-down', '.fade-left', '.fade-right',
        '.zoom-in', '.zoom-out', '.rotate-in', '.scale-in',
        '.clip-up', '.clip-down', '.clip-left', '.clip-right', '.clip-circle',
        '.blur-in', '.sns-fade-up', '.sns-fade-left', '.sns-fade-right',
        '.stagger-animation', '.sns-stagger'
    ];
    
    // すべてのアニメーション対象クラスをまとめて取得
    const animationSelector = animationClasses.join(', ');
    const animatedElements = document.querySelectorAll(animationSelector);
    
    // 要素が存在する場合にのみIntersection Observerを設定
    if (animatedElements.length > 0) {
        // Intersection Observerオプションをカスタマイズ
        const observerOptions = {
            root: null, // ビューポートを基準にする
            rootMargin: '0px 0px -100px 0px', // 下部に少し余裕を持たせる
            threshold: 0.15 // 要素の15%が見えたらトリガー
        };
        
        // Intersection Observerの設定
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 要素が画面内に入ったらアニメーションクラスを追加
                    entry.target.classList.add('animate');
                    
                    // 一度表示されたら監視を解除（パフォーマンス向上）
                    animationObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // 各要素を監視対象に追加
        animatedElements.forEach(element => {
            animationObserver.observe(element);
        });
        
        console.log(`Animation initialized for ${animatedElements.length} elements`);
    }
}

/**
 * パララックスエフェクトの初期化
 */
function initParallaxEffects() {
    const parallaxElements = {
        slow: document.querySelectorAll('.parallax-slow'),
        fast: document.querySelectorAll('.parallax-fast')
    };
    
    // パララックス対象要素が存在する場合のみ実行
    if (parallaxElements.slow.length > 0 || parallaxElements.fast.length > 0) {
        // スクロールイベントのためのスロットリング関数
        let ticking = false;
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    const scrollY = window.scrollY;
                    
                    // 遅いパララックス
                    parallaxElements.slow.forEach(element => {
                        const speed = 0.08; // 速度係数
                        const yPos = -(scrollY * speed);
                        element.style.setProperty('--parallax-y', `${yPos}px`);
                    });
                    
                    // 速いパララックス
                    parallaxElements.fast.forEach(element => {
                        const speed = 0.16; // 速度係数
                        const yPos = -(scrollY * speed);
                        element.style.setProperty('--parallax-y-fast', `${yPos}px`);
                    });
                    
                    ticking = false;
                });
                
                ticking = true;
            }
        });
        
        console.log('Parallax effects initialized');
    }
}

/**
 * SVGアニメーションの初期化
 */
function initSvgAnimations() {
    const svgElements = document.querySelectorAll('.animated-svg');
    
    if (svgElements.length > 0) {
        const svgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // SVG内のパス要素を取得
                    const paths = entry.target.querySelectorAll('path, circle, rect, ellipse, polygon, polyline, line');
                    
                    // 各パスに順番にアニメーションを適用
                    paths.forEach((path, index) => {
                        // 描画アニメーション
                        if (path.getTotalLength) {
                            const pathLength = path.getTotalLength();
                            
                            // CSSで初期状態を設定
                            path.style.strokeDasharray = pathLength;
                            path.style.strokeDashoffset = pathLength;
                            
                            // アニメーション開始
                            setTimeout(() => {
                                path.style.transition = `stroke-dashoffset 1.5s ${index * 0.1}s ease`;
                                path.style.strokeDashoffset = '0';
                            }, 100);
                        } else {
                            // パスでない要素（rect, circleなど）の場合
                            path.style.opacity = '0';
                            path.style.transform = 'scale(0.8)';
                            
                            setTimeout(() => {
                                path.style.transition = `opacity 1s ${index * 0.1}s ease, transform 1s ${index * 0.1}s ease`;
                                path.style.opacity = '1';
                                path.style.transform = 'scale(1)';
                            }, 100);
                        }
                    });
                    
                    svgObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        // 各SVG要素を監視
        svgElements.forEach(svg => {
            svgObserver.observe(svg);
        });
        
        console.log('SVG animations initialized');
    }
}

/**
 * テキストアニメーションの初期化
 * 文字ごとのアニメーションを設定
 */
function initTextAnimations() {
    const textElements = document.querySelectorAll('.text-reveal');
    
    if (textElements.length > 0) {
        // 各テキスト要素を文字ごとに分割
        textElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            
            // 各文字をspanで包む
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                const span = document.createElement('span');
                span.className = 'char';
                span.textContent = char === ' ' ? '\u00A0' : char; // スペースを保持
                span.style.transitionDelay = `${i * 0.03}s`; // 文字ごとに遅延を付ける
                element.appendChild(span);
            }
        });
        
        // Intersection Observerでアニメーション開始
        const textObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    textObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        // 各テキスト要素を監視
        textElements.forEach(text => {
            textObserver.observe(text);
        });
        
        console.log('Text animations initialized');
    }
    
    // タイピングアニメーション
    const typingElements = document.querySelectorAll('.typing');
    
    if (typingElements.length > 0) {
        typingElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            
            const typingObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        let i = 0;
                        const typingInterval = setInterval(() => {
                            if (i < text.length) {
                                element.textContent += text.charAt(i);
                                i++;
                            } else {
                                clearInterval(typingInterval);
                            }
                        }, 50); // タイピング速度
                        
                        typingObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            typingObserver.observe(element);
        });
    }
}

/**
 * スクロールプログレスバーの初期化
 */
function initScrollProgress() {
    const progressLine = document.querySelector('.progress-line');
    
    if (progressLine) {
        window.addEventListener('scroll', function() {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            
            progressLine.style.width = scrolled + '%';
        });
        
        console.log('Scroll progress initialized');
    }
}

/**
 * マウスに連動するエフェクトの初期化
 */
function initMouseEffects() {
    // マグネットエフェクト対象要素
    const magnetElements = document.querySelectorAll('.magnet-effect');
    
    if (magnetElements.length > 0) {
        magnetElements.forEach(element => {
            element.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                // マウスからの距離に基づいて移動量を計算
                const maxMove = 15; // 最大移動ピクセル
                const moveX = ((e.clientX - centerX) / (rect.width / 2)) * maxMove;
                const moveY = ((e.clientY - centerY) / (rect.height / 2)) * maxMove;
                
                // 要素を移動
                this.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
            
            // マウスが離れたら元に戻す
            element.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0)';
            });
        });
        
        console.log('Magnet effects initialized');
    }
    
    // カーソルフォロワー
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (cursorFollower) {
        document.addEventListener('mousemove', function(e) {
            // カーソルフォロワーをマウス位置に設定
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        });
        
        // ホバー対象要素にカーソルスタイル変更
        const hoverElements = document.querySelectorAll('.hover-effect');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                cursorFollower.classList.add('hover');
            });
            
            element.addEventListener('mouseleave', function() {
                cursorFollower.classList.remove('hover');
            });
        });
        
        console.log('Cursor follower initialized');
    }
}

/**
 * カウントアップアニメーション
 */
function initCountUpAnimations() {
    const countElements = document.querySelectorAll('.count-up');
    
    if (countElements.length > 0) {
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const target = parseInt(element.getAttribute('data-target'), 10);
                    const duration = parseInt(element.getAttribute('data-duration') || '2000', 10);
                    const delay = parseInt(element.getAttribute('data-delay') || '0', 10);
                    const easing = element.getAttribute('data-easing') || 'easeOutExpo';
                    
                    // アニメーション前の初期値（0またはカスタム値）
                    const startValue = parseInt(element.getAttribute('data-start') || '0', 10);
                    element.textContent = startValue;
                    
                    // イージング関数
                    const easingFunctions = {
                        linear: t => t,
                        easeInQuad: t => t * t,
                        easeOutQuad: t => t * (2 - t),
                        easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
                        easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
                    };
                    
                    // 設定された遅延後にアニメーション開始
                    setTimeout(() => {
                        const startTime = performance.now();
                        
                        function updateCount(currentTime) {
                            const elapsedTime = currentTime - startTime;
                            const progress = Math.min(elapsedTime / duration, 1);
                            
                            // イージング適用
                            const easedProgress = easingFunctions[easing](progress);
                            
                            // 現在値を計算
                            const currentValue = Math.floor(startValue + (target - startValue) * easedProgress);
                            
                            // テキスト更新（数値フォーマット対応）
                            const format = element.getAttribute('data-format');
                            if (format === 'comma') {
                                element.textContent = currentValue.toLocaleString();
                            } else if (format === 'plus') {
                                element.textContent = '+' + currentValue;
                            } else {
                                element.textContent = currentValue;
                            }
                            
                            // アニメーション継続判定
                            if (progress < 1) {
                                requestAnimationFrame(updateCount);
                            } else {
                                // アニメーション完了時のクラス適用
                                element.classList.add('count-completed');
                            }
                        }
                        
                        requestAnimationFrame(updateCount);
                    }, delay);
                    
                    countObserver.unobserve(element);
                }
            });
        }, { threshold: 0.5 });
        
        // 各カウントアップ要素を監視
        countElements.forEach(element => {
            countObserver.observe(element);
        });
        
        console.log('Count up animations initialized');
    }
}

/**
 * クリック波紋効果の初期化
 */
function initRippleEffects() {
    const rippleButtons = document.querySelectorAll('.btn-ripple');
    
    rippleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 既存の波紋を削除
            const ripples = this.querySelectorAll('.ripple-effect');
            ripples.forEach(ripple => ripple.remove());
            
            // クリック位置に基づいて波紋要素を作成
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            
            // 波紋の位置とサイズを設定
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height) * 2;
            
            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            
            // 波紋要素を追加
            this.appendChild(ripple);
            
            // アニメーション終了後に削除
            setTimeout(() => {
                ripple.remove();
            }, 600); // CSSのアニメーション時間と合わせる
        });
    });
    
    console.log('Ripple effects initialized');
}

/**
 * スクロールスナップの初期化
 */
function initScrollSnap() {
    const scrollSnapSections = document.querySelectorAll('.scroll-snap-section');
    
    if (scrollSnapSections.length > 0) {
        const snapContainer = document.querySelector('.scroll-snap-container');
        
        if (snapContainer) {
            // スクロールスナップコンテナにCSSプロパティを設定
            snapContainer.style.overflowY = 'scroll';
            snapContainer.style.scrollSnapType = 'y mandatory';
            
            // 各セクションにスナッププロパティを設定
            scrollSnapSections.forEach(section => {
                section.style.scrollSnapAlign = 'start';
                section.style.minHeight = '100vh';
            });
            
            // スクロールインジケーターを追加
            const indicatorContainer = document.createElement('div');
            indicatorContainer.className = 'scroll-indicators';
            document.body.appendChild(indicatorContainer);
            
            // 各セクションに対応するインジケーターを作成
            scrollSnapSections.forEach((section, index) => {
                const indicator = document.createElement('div');
                indicator.className = 'scroll-indicator';
                indicator.setAttribute('data-index', index);
                
                // インジケータークリックでスクロール
                indicator.addEventListener('click', () => {
                    section.scrollIntoView({ behavior: 'smooth' });
                });
                
                indicatorContainer.appendChild(indicator);
            });
            
            // スクロール時にアクティブなインジケーターを更新
            snapContainer.addEventListener('scroll', function() {
                const scrollPosition = this.scrollTop;
                
                scrollSnapSections.forEach((section, index) => {
                    const sectionTop = section.offsetTop - 100; // オフセット調整
                    const sectionBottom = sectionTop + section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        document.querySelectorAll('.scroll-indicator').forEach(ind => {
                            ind.classList.remove('active');
                        });
                        
                        document.querySelector(`.scroll-indicator[data-index="${index}"]`).classList.add('active');
                    }
                });
            });
            
            console.log('Scroll snap initialized');
        }
    }
}

/**
 * 画像比較スライダーの初期化
 */
function initImageComparison() {
    const comparisons = document.querySelectorAll('.image-comparison');
    
    if (comparisons.length > 0) {
        comparisons.forEach(container => {
            const slider = container.querySelector('.comparison-slider');
            
            if (slider) {
                // スライダーのドラッグ操作を設定
                let isDragging = false;
                
                const moveSlider = function(e) {
                    if (!isDragging) return;
                    
                    const rect = container.getBoundingClientRect();
                    const x = e.clientX || (e.touches && e.touches[0].clientX);
                    let position = ((x - rect.left) / rect.width) * 100;
                    
                    // 範囲制限
                    position = Math.max(0, Math.min(position, 100));
                    
                    // スライダー位置を更新
                    slider.style.left = `${position}%`;
                    
                    // 画像の表示範囲を更新
                    const afterImage = container.querySelector('.comparison-after');
                    if (afterImage) {
                        afterImage.style.width = `${position}%`;
                    }
                };
                
                // イベントリスナー設定
                slider.addEventListener('mousedown', () => {
                    isDragging = true;
                });
                
                slider.addEventListener('touchstart', () => {
                    isDragging = true;
                }, { passive: true });
                
                window.addEventListener('mousemove', moveSlider);
                window.addEventListener('touchmove', moveSlider, { passive: true });
                
                window.addEventListener('mouseup', () => {
                    isDragging = false;
                });
                
                window.addEventListener('touchend', () => {
                    isDragging = false;
                });
                
                // 初期位置設定
                moveSlider({ clientX: container.getBoundingClientRect().left + container.offsetWidth / 2 });
            }
        });
        
        console.log('Image comparison initialized');
    }
}

// 追加のアニメーション機能を初期化
document.addEventListener('DOMContentLoaded', function() {
    // カウントアップアニメーション
    initCountUpAnimations();
    
    // クリック波紋効果
    initRippleEffects();
    
    // スクロールスナップ（必要に応じて）
    // initScrollSnap();
    
    // 画像比較スライダー（必要に応じて）
    // initImageComparison();
}); 