// ユーティリティ関数
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// スクロールアニメーション
const handleScrollAnimation = () => {
    $$('.js-scroll-anim').forEach(el => {
        const rect = el.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.8;
        
        if (rect.top <= triggerPoint) {
            el.classList.add('is-visible');
        }
    });
};

// タイピングアニメーション
const typeText = async (element, text, speed = 50) => {
    for (let char of text) {
        element.textContent += char;
        await new Promise(resolve => setTimeout(resolve, speed));
    }
};

// イベントリスナー
document.addEventListener('DOMContentLoaded', () => {
    // スクロールアニメーション
    window.addEventListener('scroll', () => {
        requestAnimationFrame(handleScrollAnimation);
    });
    
    // ヒーローセクションのタイピングアニメーション
    const heroTitle = $('.js-typing');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        typeText(heroTitle, text);
    }
    
    // フォーム送信処理
    const form = $('form[name="contact"]');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            try {
                const formData = new FormData(form);
                await fetch(form.action, {
                    method: 'POST',
                    body: formData
                });
                
                alert('お問い合わせを受け付けました。');
                form.reset();
            } catch (error) {
                console.error('送信エラー:', error);
                alert('送信に失敗しました。時間をおいて再度お試しください。');
            }
        });
    }
}); 