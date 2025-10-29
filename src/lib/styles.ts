// 🎨 統一されたスタイルシステム
export const COLORS = {
  // Primary Brand Colors - 紫系に統一
  primary: {
    50: 'bg-violet-50',
    100: 'bg-violet-100',
    500: 'bg-violet-500',
    600: 'bg-violet-600',
    700: 'bg-violet-700',
    hover: 'hover:bg-violet-700',
    text: 'text-violet-600',
    border: 'border-violet-600'
  },
  
  // Secondary - 青系
  secondary: {
    500: 'bg-blue-500',
    600: 'bg-blue-600',
    text: 'text-blue-600',
    border: 'border-blue-600'
  },
  
  // Success - 緑系
  success: {
    500: 'bg-green-500',
    600: 'bg-green-600',
    text: 'text-green-600'
  },
  
  // Grayscale
  gray: {
    50: 'bg-gray-50',
    100: 'bg-gray-100',
    200: 'bg-gray-200',
    300: 'bg-gray-300',
    600: 'text-gray-600',
    700: 'text-gray-700',
    800: 'bg-gray-800',
    900: 'bg-gray-900'
  }
} as const

// 🚀 統一されたボタンスタイル
export const BUTTON_CLASSES = {
  line: {
    filled: `
      inline-flex items-center justify-center
      px-8 py-4 ${COLORS.success[600]} text-gray-900 
      font-medium rounded-lg hover:bg-green-700
      transition-all duration-200 shadow-lg
      focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
    `,
    outline: `
      inline-flex items-center justify-center
      px-8 py-4 border-2 border-green-600 text-green-600
      font-medium rounded-lg hover:bg-green-50
      transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
    `
  },
  
  standard: {
    primary: `
      inline-flex items-center justify-center
      px-8 py-4 bg-gray-900 text-gray-900
      font-medium rounded-lg hover:bg-gray-800
      transition-all duration-200 shadow-lg
      focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2
    `,
    secondary: `
      inline-flex items-center justify-center
      px-8 py-4 bg-white text-gray-900
      font-medium rounded-lg hover:bg-gray-100
      transition-all duration-200 shadow-sm border border-gray-200
      focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2
    `
  }
} as const

// 📏 統一されたスペーシング
export const SPACING = {
  section: 'py-12 sm:py-16 lg:py-20',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  card: 'p-6 sm:p-8',
  button: 'px-8 py-4'
} as const

// テキストシャドウ - ultra-stylesから移行
export const TEXT_SHADOW = {
  heading: { textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' },
  body: { textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' },
  small: { textShadow: 'none' },
  glow: { textShadow: 'none' }
} as const

// インタラクティブ要素の共通スタイル
export const INTERACTIVE_STYLES = {
  focusRing: 'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3',
  hoverScale: 'hover:scale-[1.02] active:scale-[0.98]',
  transition: 'transition-all duration-300 ease-out'
} as const