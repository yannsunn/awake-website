// 🚀 ULTRA DESIGN SYSTEM - 限界を超えた統一デザイン

// カラーパレット - プロフェッショナルかつモダン
export const COLORS = {
  // プライマリ - 信頼感のある青紫
  primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95'
  },
  // グレースケール - 読みやすさ重視
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827'
  },
  // セマンティックカラー
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6'
} as const

// タイポグラフィシステム - モバイルファースト最適化
export const TYPOGRAPHY = {
  // レスポンシブクラス
  h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
  h2: 'text-xl sm:text-2xl md:text-3xl font-bold tracking-tight',
  h3: 'text-lg sm:text-xl md:text-2xl font-semibold',
  h4: 'text-base sm:text-lg md:text-xl font-semibold',
  body: 'text-sm sm:text-base font-normal',
  small: 'text-xs sm:text-sm font-normal',
  // 行間
  lineHeight: {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed'
  }
} as const

// スペーシングシステム - 8pxグリッド
export const SPACING = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  '2xl': '4rem',  // 64px
  '3xl': '6rem'   // 96px
} as const

// レスポンシブパディング
export const RESPONSIVE_PADDING = {
  section: 'px-4 sm:px-6 md:px-8 lg:px-12',
  container: 'py-12 sm:py-16 md:py-20 lg:py-24',
  card: 'p-6 sm:p-8 lg:p-10'
} as const

// シャドウシステム - 控えめで洗練
export const SHADOWS = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  none: 'shadow-none'
} as const

// ボタンスタイル - 2種類のみ
export const BUTTONS = {
  primary: `
    inline-flex items-center justify-center
    px-6 py-3 
    bg-gradient-to-r from-slate-700 via-violet-600 to-slate-700 hover:from-slate-600 hover:via-violet-500 hover:to-slate-600 
    text-white font-medium
    rounded-xl shadow-md hover:shadow-lg
    backdrop-blur-sm
    transition-all duration-500 ease-out
    transform hover:scale-[1.01] active:scale-[0.99]
    focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `,
  secondary: `
    inline-flex items-center justify-center
    px-6 py-3
    bg-white/80 hover:bg-white/90
    text-slate-800 font-medium
    border border-slate-200 hover:border-violet-300
    rounded-xl shadow-sm hover:shadow-md
    backdrop-blur-sm
    transition-all duration-500 ease-out
    transform hover:scale-[1.01] active:scale-[0.99]
    focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `
} as const

// 背景オーバーレイ - 3種類のみ
export const OVERLAYS = {
  light: 'bg-white/95 backdrop-blur-sm',
  medium: 'bg-gray-900/70 backdrop-blur-sm',
  dark: 'bg-gray-900/90'
} as const

// アニメーション - 必要最小限
export const ANIMATIONS = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  duration: {
    fast: 'duration-200',
    normal: 'duration-300',
    slow: 'duration-500'
  }
} as const

// フォーカススタイル - 統一
export const FOCUS = {
  ring: 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
} as const

// コンテナ幅
export const CONTAINERS = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl'
} as const