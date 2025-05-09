// interactions.js - マイクロインタラクション関連の機能

/**
 * マイクロインタラクション機能の初期化
 */
export function initMicrointeractions() {
    // ボタンリップル効果
    initButtonRippleEffect();
    
    // ホバーエフェクト
    initHoverEffects();
}

/**
 * ボタンリップル効果の初期化
 */
function initButtonRippleEffect() {
    const buttons = document.querySelectorAll('.btn');
    
    if (!buttons.length) return;
    
    buttons.forEach(button => {
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
}

/**
 * ホバーエフェクトの初期化
 */
function initHoverEffects() {
    const hoverElements = document.querySelectorAll('.hover-effect');
    
    if (!hoverElements.length) return;
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
} 