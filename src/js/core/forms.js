// forms.js - フォーム処理関連の機能

/**
 * フォーム処理の初期化
 */
export function initFormHandling() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // 送信ボタンを無効化
            const submitButton = this.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.classList.add('loading');
            }
            
            // フォームデータの取得
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            try {
                // APIエンドポイントへの送信（実際のエンドポイントに合わせて変更）
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                if (response.ok) {
                    // 成功メッセージの表示
                    showNotification('メッセージを送信しました', 'success');
                    // フォームのリセット
                    this.reset();
                } else {
                    throw new Error('送信に失敗しました');
                }
            } catch (error) {
                // エラーメッセージの表示
                showNotification(error.message, 'error');
            } finally {
                // 送信ボタンを再有効化
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.classList.remove('loading');
                }
            }
        });
    }
    
    // その他のフォームのバリデーション設定
    initFormValidation();
}

/**
 * フォームバリデーションの初期化
 */
function initFormValidation() {
    const forms = document.querySelectorAll('form.validate');
    
    forms.forEach(form => {
        // 送信時のバリデーション
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
            }
        });
        
        // 入力フィールドのバリデーション
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    });
}

/**
 * フォーム全体のバリデーション
 */
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

/**
 * 個別フィールドのバリデーション
 */
function validateField(field) {
    // 必須チェック
    if (field.hasAttribute('required') && !field.value.trim()) {
        setFieldError(field, '入力してください');
        return false;
    }
    
    // メールアドレスの形式チェック
    if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            setFieldError(field, '有効なメールアドレスを入力してください');
            return false;
        }
    }
    
    // エラー表示をクリア
    clearFieldError(field);
    return true;
}

/**
 * フィールドにエラーを設定
 */
function setFieldError(field, message) {
    field.classList.add('error');
    
    // エラーメッセージ要素の取得または作成
    let errorElement = field.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error-message')) {
        errorElement = document.createElement('span');
        errorElement.classList.add('error-message');
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }
    
    errorElement.textContent = message;
}

/**
 * フィールドのエラーをクリア
 */
function clearFieldError(field) {
    field.classList.remove('error');
    
    const errorElement = field.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.textContent = '';
    }
}

/**
 * 通知メッセージの表示
 */
function showNotification(message, type = 'info') {
    // 既存の通知を削除
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // 新しい通知を作成
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 通知を追加
    document.body.appendChild(notification);
    
    // アニメーション効果
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // 数秒後に自動的に閉じる
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
} 