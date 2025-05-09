/**
 * ダークモードの管理を行うモジュール
 */

const DARK_MODE_KEY = 'darkMode';
const DARK_MODE_CLASS = 'dark-mode';
const DARK_MODE_TOGGLE_SELECTOR = '#dark-mode-toggle';

/**
 * ダークモードの初期化
 */
export function initDarkMode() {
  // ダークモードの状態を復元
  const isDarkMode = localStorage.getItem(DARK_MODE_KEY) === 'true';
  setDarkMode(isDarkMode);

  // システムのダークモード設定の監視
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', handleSystemThemeChange);

  // トグルボタンのイベントリスナー設定
  const toggleButton = document.querySelector(DARK_MODE_TOGGLE_SELECTOR);
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleDarkMode);
    updateToggleButton(isDarkMode);
  }
}

/**
 * ダークモードの切り替え
 */
function toggleDarkMode() {
  const isDarkMode = document.documentElement.classList.contains(DARK_MODE_CLASS);
  setDarkMode(!isDarkMode);
}

/**
 * ダークモードの設定
 * @param {boolean} enable - ダークモードを有効にするかどうか
 */
function setDarkMode(enable) {
  // HTML要素のクラスを更新
  document.documentElement.classList.toggle(DARK_MODE_CLASS, enable);
  
  // ローカルストレージに設定を保存
  localStorage.setItem(DARK_MODE_KEY, enable);
  
  // トグルボタンの状態を更新
  updateToggleButton(enable);
  
  // カスタムイベントを発火
  document.dispatchEvent(new CustomEvent('darkModeChange', { detail: { isDarkMode: enable } }));
}

/**
 * トグルボタンの状態を更新
 * @param {boolean} isDarkMode - ダークモードが有効かどうか
 */
function updateToggleButton(isDarkMode) {
  const toggleButton = document.querySelector(DARK_MODE_TOGGLE_SELECTOR);
  if (toggleButton) {
    toggleButton.setAttribute('aria-checked', isDarkMode);
    toggleButton.setAttribute('aria-label', isDarkMode ? 'ダークモードを無効にする' : 'ダークモードを有効にする');
    
    // アイコンの更新
    const icon = toggleButton.querySelector('i');
    if (icon) {
      icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    }
  }
}

/**
 * システムのテーマ変更を処理
 * @param {MediaQueryListEvent} event - メディアクエリの変更イベント
 */
function handleSystemThemeChange(event) {
  const userPreference = localStorage.getItem(DARK_MODE_KEY);
  
  // ユーザーが明示的に設定していない場合のみ、システム設定に従う
  if (userPreference === null) {
    setDarkMode(event.matches);
  }
}

/**
 * 現在のダークモードの状態を取得
 * @returns {boolean} ダークモードが有効かどうか
 */
export function isDarkMode() {
  return document.documentElement.classList.contains(DARK_MODE_CLASS);
}

/**
 * ダークモードの設定をリセット
 */
export function resetDarkMode() {
  localStorage.removeItem(DARK_MODE_KEY);
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setDarkMode(systemPrefersDark);
}

/**
 * ダークモードの変更を監視
 * @param {Function} callback - ダークモードが変更されたときに呼び出されるコールバック関数
 * @returns {Function} イベントリスナーの解除関数
 */
export function onDarkModeChange(callback) {
  const handler = (event) => callback(event.detail.isDarkMode);
  document.addEventListener('darkModeChange', handler);
  return () => document.removeEventListener('darkModeChange', handler);
} 