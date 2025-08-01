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