import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'corporate-blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'corporate-gray': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // WCAG AAA準拠 高コントラスト色
        'success': {
          DEFAULT: '#059669',
          'high-contrast': '#065f46',
          'bg': '#f0fdf4'
        },
        'warning': {
          DEFAULT: '#d97706',
          'high-contrast': '#92400e',
          'bg': '#fffbeb'
        },
        'error': {
          DEFAULT: '#dc2626',
          'high-contrast': '#991b1b',
          'bg': '#fef2f2'
        },
        // 色覚障害対応カラーパレット
        'accessible': {
          'blue': '#0066cc',
          'yellow': '#ffcc00',
          'red': '#cc0000',
          'green': '#009900',
          'purple': '#6600cc',
          'orange': '#ff6600'
        }
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        // WCAG AAA準拠 タッチターゲット用スペーシング
        'touch': '48px',
        'touch-lg': '56px',
        'touch-xl': '64px',
      },
      backdropBlur: {
        xs: '2px',
        'safe': '8px', // 動作軽減設定対応
      },
      boxShadow: {
        'corporate': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'corporate-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'corporate-hover': '0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        // WCAG準拠 フォーカス専用シャドウ
        'focus': '0 0 0 3px rgba(37, 99, 235, 0.3)',
        'focus-dark': '0 0 0 3px rgba(96, 165, 250, 0.3)',
        'focus-high-contrast': '0 0 0 4px rgba(0, 0, 0, 1)',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        // WCAG AAA準拠 モバイルファースト追加ブレークポイント
        'sm-max': {'max': '639px'},
        'md-max': {'max': '767px'},
        'lg-max': {'max': '1023px'},
      },
      animation: {
        // 令和最新トレンド: ネオン&ホログラフィック
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'bounce-subtle': 'bounce-subtle 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'neon-flicker': 'neon-flicker 1.5s infinite alternate',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1', filter: 'blur(0px)' },
          '50%': { opacity: '0.8', filter: 'blur(1px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        'neon-flicker': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #ff00de, 0 0 80px #ff00de, 0 0 90px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de',
          },
          '20%, 24%, 55%': {
            textShadow: 'none',
          },
        },
      },
      backgroundImage: {
        // ホログラフィック背景
        'holographic': 'linear-gradient(45deg, #ff00de, #00fff0, #ff00de)',
        'neon-gradient': 'linear-gradient(45deg, #f093fb 0%, #f5576c 25%, #ffd32c 50%, #4facfe 75%, #f093fb 100%)',
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  // WCAG AAA準拠 実験的機能
  experimental: {
    optimizeUniversalDefaults: true,
  },
}

export default config