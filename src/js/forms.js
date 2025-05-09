/**
 * フォームのバリデーションと送信を管理するモジュール
 */

// バリデーションルール
const validationRules = {
  required: value => value.trim() !== '',
  email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  phone: value => /^[\d\s-+()]*$/.test(value),
  minLength: (value, length) => value.length >= length,
  maxLength: (value, length) => value.length <= length
};

// エラーメッセージ
const errorMessages = {
  required: '必須項目です',
  email: '有効なメールアドレスを入力してください',
  phone: '有効な電話番号を入力してください',
  minLength: length => `${length}文字以上で入力してください`,
  maxLength: length => `${length}文字以下で入力してください`
};

/**
 * フォームバリデーションを初期化
 */
export function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');
  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
    initializeFormFields(form);
  });
}

/**
 * フォームフィールドの初期化
 * @param {HTMLFormElement} form - 初期化するフォーム
 */
function initializeFormFields(form) {
  const fields = form.querySelectorAll('[data-validate]');
  fields.forEach(field => {
    field.addEventListener('input', () => validateField(field));
    field.addEventListener('blur', () => validateField(field));
  });
}

/**
 * フォーム送信のハンドリング
 * @param {Event} event - フォーム送信イベント
 */
async function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  
  if (validateForm(form)) {
    try {
      await submitForm(form);
      showSuccessMessage(form);
      form.reset();
    } catch (error) {
      showErrorMessage(form, error.message);
    }
  }
}

/**
 * フォーム全体のバリデーション
 * @param {HTMLFormElement} form - バリデーションするフォーム
 * @returns {boolean} バリデーション結果
 */
function validateForm(form) {
  const fields = form.querySelectorAll('[data-validate]');
  let isValid = true;

  fields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  return isValid;
}

/**
 * フィールドのバリデーション
 * @param {HTMLElement} field - バリデーションするフィールド
 * @returns {boolean} バリデーション結果
 */
function validateField(field) {
  const rules = field.dataset.validate.split(' ');
  const value = field.value;
  let isValid = true;
  let errorMessage = '';

  for (const rule of rules) {
    const [ruleName, param] = rule.split(':');
    
    if (!validationRules[ruleName](value, param)) {
      isValid = false;
      errorMessage = param ? 
        errorMessages[ruleName](param) : 
        errorMessages[ruleName];
      break;
    }
  }

  toggleFieldError(field, !isValid, errorMessage);
  return isValid;
}

/**
 * フィールドのエラー表示を切り替え
 * @param {HTMLElement} field - 対象フィールド
 * @param {boolean} hasError - エラーの有無
 * @param {string} message - エラーメッセージ
 */
function toggleFieldError(field, hasError, message) {
  const errorElement = field.nextElementSibling;
  
  if (hasError) {
    field.classList.add('error');
    if (errorElement && errorElement.classList.contains('error-message')) {
      errorElement.textContent = message;
    } else {
      const error = document.createElement('div');
      error.className = 'error-message';
      error.textContent = message;
      field.parentNode.insertBefore(error, field.nextSibling);
    }
  } else {
    field.classList.remove('error');
    if (errorElement && errorElement.classList.contains('error-message')) {
      errorElement.remove();
    }
  }
}

/**
 * フォームを送信
 * @param {HTMLFormElement} form - 送信するフォーム
 * @returns {Promise} 送信結果のPromise
 */
async function submitForm(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const response = await fetch(form.action, {
    method: form.method,
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': getCsrfToken()
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('送信に失敗しました');
  }

  return response.json();
}

/**
 * CSRFトークンを取得
 * @returns {string} CSRFトークン
 */
function getCsrfToken() {
  return document.querySelector('meta[name="csrf-token"]')?.content || '';
}

/**
 * 成功メッセージを表示
 * @param {HTMLFormElement} form - 対象フォーム
 */
function showSuccessMessage(form) {
  const message = document.createElement('div');
  message.className = 'success-message';
  message.textContent = '送信が完了しました';
  form.parentNode.insertBefore(message, form.nextSibling);
  
  setTimeout(() => message.remove(), 3000);
}

/**
 * エラーメッセージを表示
 * @param {HTMLFormElement} form - 対象フォーム
 * @param {string} error - エラーメッセージ
 */
function showErrorMessage(form, error) {
  const message = document.createElement('div');
  message.className = 'error-message';
  message.textContent = error;
  form.parentNode.insertBefore(message, form.nextSibling);
  
  setTimeout(() => message.remove(), 3000);
}

/**
 * お問い合わせフォームの初期化
 */
export function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactFormSubmit);
  }
}

/**
 * お問い合わせフォーム送信のハンドリング
 * @param {Event} event - フォーム送信イベント
 */
async function handleContactFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  
  if (validateForm(form)) {
    try {
      const submitButton = form.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      submitButton.textContent = '送信中...';
      
      await submitForm(form);
      showSuccessMessage(form);
      form.reset();
    } catch (error) {
      showErrorMessage(form, error.message);
    } finally {
      const submitButton = form.querySelector('button[type="submit"]');
      submitButton.disabled = false;
      submitButton.textContent = '送信';
    }
  }
} 