import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  // ローカルストレージからテーマ設定を取得、またはシステム設定を確認
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('color-theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs;
      }

      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
    }

    return 'light'; // デフォルトのテーマ
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // テーマの変更をDOMとローカルストレージに反映
  const applyTheme = (newTheme) => {
    const root = window.document.documentElement;
    const isDark = newTheme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
    
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    localStorage.setItem('color-theme', newTheme);
  };

  // テーマ切り替え
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // 初期ロード時にテーマを適用
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle relative w-10 h-10 focus:outline-none"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
    >
      <Sun
        size={20}
        className={`absolute inset-0 m-auto sun-icon transition-all duration-300 ${
          theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
        }`}
      />
      <Moon
        size={20}
        className={`absolute inset-0 m-auto moon-icon transition-all duration-300 ${
          theme === 'dark' ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
        }`}
      />
    </button>
  );
};

export default ThemeToggle; 