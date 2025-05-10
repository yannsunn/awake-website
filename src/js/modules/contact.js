/**
 * お問い合わせフォーム制御用クラス
 */
export class Contact {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.submitButton = this.form ? this.form.querySelector('button[type="submit"]') : null;
        this.fields = this.form ? this.form.querySelectorAll('input, textarea, select') : [];
        this.errorMessages = {
            required: '必須項目です',
            email: 'メールアドレスの形式が正しくありません',
            minLength: (min) => `${min}文字以上で入力してください`,
            maxLength: (max) => `${max}文字以内で入力してください`
        };
        
        this.init();
    }

    init() {
        if (!this.form) return;
        
        this.setupValidation();
        this.setupSubmitHandler();
    }

    /**
     * フォームのバリデーション設定
     */
    setupValidation() {
        this.fields.forEach(field => {
            // 入力時のバリデーション
            field.addEventListener('input', () => {
                this.validateField(field);
            });
            
            // フォーカスが外れた時のバリデーション
            field.addEventListener('blur', () => {
                this.validateField(field);
            });
        });
    }

    /**
     * フィールドのバリデーション
     * @param {HTMLElement} field - バリデーション対象のフィールド
     * @returns {boolean} - バリデーション結果
     */
    validateField(field) {
        // エラーメッセージ表示用の要素（なければ作成）
        let errorElement = field.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error-message')) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            field.parentNode.insertBefore(errorElement, field.nextSibling);
        }
        
        const value = field.value.trim();
        let error = '';
        
        // 必須項目チェック
        if (field.hasAttribute('required') && value === '') {
            error = this.errorMessages.required;
        }
        
        // メールアドレス形式チェック
        else if (field.type === 'email' && value !== '' && !this.isValidEmail(value)) {
            error = this.errorMessages.email;
        }
        
        // 最小文字数チェック
        else if (field.minLength && value.length < field.minLength && value !== '') {
            error = this.errorMessages.minLength(field.minLength);
        }
        
        // 最大文字数チェック
        else if (field.maxLength && value.length > field.maxLength) {
            error = this.errorMessages.maxLength(field.maxLength);
        }
        
        // エラーメッセージの表示/非表示
        if (error) {
            errorElement.textContent = error;
            errorElement.style.display = 'block';
            field.classList.add('error');
            return false;
        } else {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            field.classList.remove('error');
            return true;
        }
    }

    /**
     * フォーム全体のバリデーション
     * @returns {boolean} - バリデーション結果
     */
    validateForm() {
        let isValid = true;
        
        this.fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    /**
     * メールアドレスの形式チェック
     * @param {string} email - チェック対象のメールアドレス
     * @returns {boolean} - 有効なメールアドレスかどうか
     */
    isValidEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    /**
     * フォーム送信処理の設定
     */
    setupSubmitHandler() {
        this.form.addEventListener('submit', (e) => {
            // まずすべてのフィールドを検証
            const isValid = this.validateForm();
            
            if (!isValid) {
                e.preventDefault();
                // 最初のエラーにフォーカス
                const firstErrorField = this.form.querySelector('.error');
                if (firstErrorField) {
                    firstErrorField.focus();
                }
                return;
            }
            
            // フォーム送信中の表示
            if (this.submitButton) {
                this.submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 送信中...';
                this.submitButton.disabled = true;
            }
            
            // Netlifyフォームの場合は通常の送信を許可
            // カスタムフォーム処理が必要な場合はここでe.preventDefault()して
            // 非同期送信などを実装
        });
    }
} 