// 🎨 統一されたスタイルシステム
export const COLORS = {
  // Primary Brand Colors
  green: {
    50: 'bg-green-50',
    100: 'bg-green-100',
    600: 'bg-green-600',
    700: 'bg-green-700',
    hover: 'hover:bg-green-700',
    text: 'text-green-600',
    border: 'border-green-600'
  },
  
  // Grayscale
  gray: {
    50: 'bg-gray-50',
    100: 'bg-gray-100',
    200: 'bg-gray-200',
    300: 'bg-gray-300',
    600: 'text-gray-600',
    700: 'text-gray-700',
    900: 'bg-gray-900'
  }
} as const

// 🚀 統一されたボタンスタイル
export const BUTTON_CLASSES = {
  line: {
    filled: `
      inline-flex items-center justify-center
      px-8 py-4 ${COLORS.green[600]} text-white 
      font-medium rounded-lg ${COLORS.green.hover}
      transition-all duration-200 shadow-lg
      focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
    `,
    outline: `
      inline-flex items-center justify-center
      px-8 py-4 border-2 ${COLORS.green.border} ${COLORS.green.text}
      font-medium rounded-lg hover:bg-green-50
      transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
    `
  },
  
  standard: {
    primary: `
      inline-flex items-center justify-center
      px-8 py-4 bg-gray-900 text-white
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