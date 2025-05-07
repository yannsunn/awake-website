import React from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = ({ isMenuOpen, setIsMenuOpen, scrolled, activeSection }) => {
  // ナビゲーションリンク
  const navLinks = [
    { id: 'home', label: 'ホーム' },
    { id: 'about', label: '私たちについて' },
    { id: 'services', label: 'サービス' },
    { id: 'contact', label: 'お問い合わせ' }
  ];

  return (
    <header 
      className={`header fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white bg-opacity-90 shadow-md dark:bg-opacity-90' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* ロゴ */}
          <a href="#home" className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Awake株式会社" 
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-blue-600 dark:text-blue-400">Awake</span>
          </a>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* お問い合わせボタン */}
            <a
              href="#contact"
              className="btn-primary ml-4 px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              お問い合わせ
            </a>
            
            {/* テーマ切り替えボタン */}
            <ThemeToggle />
          </nav>

          {/* モバイルメニューボタン */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="メニューを開く"
            >
              {isMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <nav className="px-4 pt-2 pb-4 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === link.id
                  ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-gray-800'
                  : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            お問い合わせ
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 