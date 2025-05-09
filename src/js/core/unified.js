// メインアプリケーションの初期化
document.addEventListener('DOMContentLoaded', function() {
    initHeader();
    initNavigation();
    initFaqAccordion();
    initFormHandling();
    initScrollAnimations();
    initCardOptimizations();
    initMicrointeractions();
});

// ヘッダーの初期化と処理
function initHeader() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

// ナビゲーション処理
function initNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            this.classList.toggle('active');
        });
    }
    
    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            if (navMenu && navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                if (menuToggle) menuToggle.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// FAQアコーディオン
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // 他のアイテムを閉じる
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // 現在のアイテムの状態を切り替え
            item.classList.toggle('active', !isOpen);
        });
    });
}

// フォーム処理
function initFormHandling() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                if (response.ok) {
                    showNotification('メッセージを送信しました', 'success');
                    form.reset();
                } else {
                    throw new Error('送信に失敗しました');
                }
            } catch (error) {
                showNotification(error.message, 'error');
            }
        });
    }
}

// スクロールアニメーション
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => observer.observe(element));
}

// カード最適化
function initCardOptimizations() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const image = card.querySelector('img');
        if (image) {
            image.loading = 'lazy';
        }
        
        card.addEventListener('mouseenter', () => {
            card.classList.add('card-hover');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('card-hover');
        });
    });
}

// マイクロインタラクション
function initMicrointeractions() {
    // ボタンリップル効果
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            
            ripple.className = 'ripple';
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 1000);
        });
    });
    
    // ホバーエフェクト
    document.querySelectorAll('.hover-effect').forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
}

// 通知表示
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
} 