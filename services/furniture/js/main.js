/**
 * 株式会社Awake 家具製作オーダーメイドページ - 最適化JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimation();
    initHoverEffects();
    initTextTyping();
    initCounterAnimation();
    initImageGallery();
    initOrderForm();
    initMaterialSelector();
});

/**
 * モバイルメニューの初期化
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const mobileMenu = document.querySelector('.header__nav');
    
    if (!menuToggle || !mobileMenu) return;
    
    menuToggle.addEventListener('click', function() {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        
        menuToggle.setAttribute('aria-expanded', !isOpen);
        mobileMenu.classList.toggle('is-active');
        document.body.classList.toggle('menu-open');
        
        menuToggle.setAttribute('aria-label', !isOpen ? 'メニューを閉じる' : 'メニューを開く');
    });
}

/**
 * スムーススクロールの初期化（最適化版）
 */
function initSmoothScroll() {
    try {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const href = this.getAttribute('href');
                if (!href || href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: 'smooth'
                    });
                    
                    // モバイルメニューを閉じる
                    const mobileMenu = document.querySelector('.header__nav');
                    const menuToggle = document.querySelector('.header__menu-toggle');
                    
                    if (mobileMenu?.classList.contains('is-active')) {
                        mobileMenu.classList.remove('is-active');
                        document.body.classList.remove('menu-open');
                        menuToggle?.setAttribute('aria-expanded', 'false');
                        menuToggle?.setAttribute('aria-label', 'メニューを開く');
                    }
                }
            });
        });
    } catch (error) {
        console.warn('スムーススクロール初期化エラー:', error);
    }
}

/**
 * スクロールアニメーションの初期化（Intersection Observer使用）
 */
function initScrollAnimation() {
    const animElements = document.querySelectorAll('.scroll-fade-in, .js-scroll-anim, .gallery-item, .process-item');
    
    if (animElements.length === 0) return;
    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(callback, options);
    
    animElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * ホバーエフェクトの初期化
 */
function initHoverEffects() {
    // ギャラリーアイテムのホバーエフェクト
    const galleryItems = document.querySelectorAll('.gallery-item, .portfolio-item, .material-option');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-5px)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
            this.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = '';
            this.style.zIndex = '';
        });
    });
    
    // ボタンのホバーエフェクト
    const buttons = document.querySelectorAll('.btn, .cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.filter = 'brightness(1.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.filter = 'brightness(1)';
        });
    });
}

/**
 * テキストタイピングアニメーションの初期化
 */
function initTextTyping() {
    const typingElements = document.querySelectorAll('.js-typing');
    
    if (typingElements.length === 0) return;
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        const observer = new IntersectionObserver(async (entries) => {
            entries.forEach(async (entry) => {
                if (entry.isIntersecting) {
                    await typeText(element, text);
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(element);
    });
}

/**
 * テキストをタイプライター風にアニメーション表示
 */
function typeText(element, text, speed = 50) {
    return new Promise((resolve) => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                element.classList.add('typing-completed');
                resolve();
            }
        }, speed);
    });
}

/**
 * 数値カウントアップアニメーションの初期化
 */
function initCounterAnimation() {
    const counterElements = document.querySelectorAll('.counter, .js-counter');
    
    if (counterElements.length === 0) return;
    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.dataset.target || target.textContent) || 0;
                const duration = parseInt(target.dataset.duration) || 2000;
                
                countUp(target, targetValue, duration);
                observer.unobserve(target);
            }
        });
    }, options);
    
    counterElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * 数値をカウントアップするアニメーション
 */
function countUp(element, targetValue, duration) {
    const startTime = performance.now();
    const startValue = 0;
    
    function updateCount(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentValue = Math.floor(progress * (targetValue - startValue) + startValue);
        
        element.textContent = currentValue.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = targetValue.toLocaleString();
        }
    }
    
    requestAnimationFrame(updateCount);
}

/**
 * 画像ギャラリーの初期化
 */
function initImageGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item img, .portfolio-image img');
    
    galleryItems.forEach(img => {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            showImageModal(this);
        });
    });
}

/**
 * 画像モーダルを表示
 */
function showImageModal(imgElement) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close" aria-label="モーダルを閉じる">&times;</button>
                <img src="${imgElement.src}" alt="${imgElement.alt}" class="modal-image">
                <p class="modal-caption">${imgElement.alt}</p>
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
 * オーダーフォームの初期化
 */
function initOrderForm() {
    const orderButtons = document.querySelectorAll('.order-button, .btn[href*="contact"]');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 選択された家具タイプやサイズを取得
            const furnitureType = this.closest('.gallery-item, .service-item')?.querySelector('h3, h4')?.textContent || '';
            
            // 問い合わせフォームに移動
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                
                // フォームに情報を自動入力
                setTimeout(() => {
                    const serviceField = document.querySelector('#inquiry_service');
                    if (serviceField && furnitureType) {
                        serviceField.value = `家具製作オーダーメイド - ${furnitureType}`;
                    }
                }, 1000);
            }
        });
    });
}

/**
 * 素材セレクターの初期化
 */
function initMaterialSelector() {
    const materialOptions = document.querySelectorAll('.material-option, .wood-type');
    
    materialOptions.forEach(option => {
        option.addEventListener('click', function() {
            // 同じグループの他の選択を解除
            const group = this.closest('.material-selector, .wood-selector');
            if (group) {
                group.querySelectorAll('.material-option, .wood-type').forEach(item => {
                    item.classList.remove('selected');
                });
            }
            
            // 現在の選択をハイライト
            this.classList.add('selected');
            
            // 選択された素材情報を表示
            const materialName = this.querySelector('h4, .material-name')?.textContent || this.textContent;
            showMaterialInfo(materialName);
        });
    });
}

/**
 * 選択された素材の情報を表示
 */
function showMaterialInfo(materialName) {
    // 既存の情報パネルを削除
    const existingPanel = document.querySelector('.material-info-panel');
    if (existingPanel) {
        existingPanel.remove();
    }
    
    // 新しい情報パネルを作成
    const infoPanel = document.createElement('div');
    infoPanel.className = 'material-info-panel';
    infoPanel.innerHTML = `
        <div class="panel-content">
            <h5>${materialName}の特徴</h5>
            <p>選択された素材の詳細情報がここに表示されます。価格や納期についてはお問い合わせください。</p>
            <button class="close-panel" aria-label="パネルを閉じる">&times;</button>
        </div>
    `;
    
    // パネルを挿入
    const materialSelector = document.querySelector('.material-selector, .wood-selector');
    if (materialSelector) {
        materialSelector.appendChild(infoPanel);
        
        // 閉じるボタンの処理
        infoPanel.querySelector('.close-panel').addEventListener('click', function() {
            infoPanel.remove();
        });
        
        // 5秒後に自動で閉じる
        setTimeout(() => {
            if (infoPanel.parentNode) {
                infoPanel.remove();
            }
        }, 5000);
    }
}