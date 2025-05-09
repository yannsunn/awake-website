// faq.js - FAQアコーディオン機能

/**
 * FAQアコーディオン機能の初期化
 */
export function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (!faqItems.length) return;
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
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
        }
    });
}