// dark-mode.js - ダークモード切り替え機能

/**
 * ダークモード機能の初期化
 */
export function initDarkMode() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    
    if (!darkModeToggle) return;
    
    // システム設定の確認
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // ローカルストレージから以前の設定を取得
    const savedMode = localStorage.getItem('darkMode');
    const isDarkMode = savedMode ? savedMode === 'true' : prefersDarkMode;
    
    // 初期状態の設定
    if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
        darkModeToggle.classList.add('active');
    }
    
    // クリックイベント
    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');
        darkModeToggle.classList.toggle('active');
        
        // 状態を保存
        const currentDarkMode = document.documentElement.classList.contains('dark-mode');
        localStorage.setItem('darkMode', currentDarkMode);
    });
    
    // システム設定の変更を監視
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // ユーザーが明示的に設定していない場合のみ、システム設定に従う
        if (localStorage.getItem('darkMode') === null) {
            const shouldBeDark = e.matches;
            document.documentElement.classList.toggle('dark-mode', shouldBeDark);
            darkModeToggle.classList.toggle('active', shouldBeDark);
        }
    });
} 