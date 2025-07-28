// UI Style Constants
export const STYLES = {
  // Container
  container: 'mx-auto max-w-7xl px-6 lg:px-8',
  
  // Modern Button styles
  button: {
    primary: 'inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-200 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    secondary: 'inline-flex items-center justify-center bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    outline: 'inline-flex items-center justify-center border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl font-medium hover:bg-indigo-50 transition-all duration-200 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    minimal: 'inline-flex items-center justify-center text-gray-700 px-4 py-2 font-medium hover:text-indigo-600 transition-colors duration-200 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
  },
  
  // Section spacing
  section: {
    hero: 'py-12 sm:py-16 lg:py-20',
    content: 'py-12 sm:py-16 lg:py-20',
    cta: 'py-12 sm:py-16 lg:py-20 bg-gray-900 text-white',
    features: 'py-12 sm:py-16 lg:py-20 bg-gray-50',
    pricing: 'py-12 sm:py-16 lg:py-20'
  },
  
  // Modern Card styles - 高透明度で背景を見えるように
  card: {
    default: 'bg-white/30 backdrop-blur-none rounded-2xl p-8 shadow-sm hover:shadow-lg border border-gray-200 transition-shadow duration-300',
    featured: 'bg-white/35 rounded-2xl p-8 border border-gray-200 shadow-xl',
    compact: 'bg-white/30 backdrop-blur-none rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-200 transition-all duration-300'
  },
  
  // Modern Typography - 統一されたフォントシステム（超可読性強化）
  heading: {
    // メインヘッダー（ページタイトル）
    h1: {
      primary: 'text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight leading-tight text-shadow-lg heading-emphasis',
      hero: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-tight text-shadow-lg heading-emphasis'
    },
    // セクションヘッダー
    h2: {
      section: 'text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight text-shadow-lg heading-emphasis',
      subsection: 'text-xl sm:text-2xl md:text-3xl font-bold text-black text-shadow-md'
    },
    // サブヘッダー
    h3: {
      card: 'text-lg sm:text-xl font-bold text-black text-shadow-md',
      emphasis: 'text-base sm:text-lg font-bold text-black text-shadow-md'
    },
    // 小見出し
    h4: 'text-base sm:text-lg font-bold text-black text-shadow-sm'
  },
  
  // 本文テキスト統一システム（超可読性強化）
  text: {
    // メイン本文
    body: {
      large: 'text-lg sm:text-xl text-black leading-relaxed text-shadow-md font-medium',
      medium: 'text-base sm:text-lg text-black leading-relaxed text-shadow-md font-medium',
      small: 'text-sm sm:text-base text-black leading-relaxed text-shadow-sm font-medium'
    },
    // 説明文
    description: {
      large: 'text-base sm:text-lg text-gray-900 leading-relaxed text-shadow-md font-medium',
      medium: 'text-sm sm:text-base text-gray-900 leading-relaxed text-shadow-md font-medium',
      small: 'text-xs sm:text-sm text-gray-900 leading-relaxed text-shadow-sm font-medium'
    },
    // 強調テキスト
    emphasis: {
      strong: 'font-bold text-black text-shadow-md',
      medium: 'font-bold text-black text-shadow-md',
      subtle: 'font-bold text-gray-900 text-shadow-sm'
    },
    // ラベル・キャプション
    label: {
      primary: 'text-sm font-bold text-black text-shadow-sm',
      secondary: 'text-xs font-bold text-gray-900 uppercase tracking-wider text-shadow-sm'
    }
  },
  
  // Modern Form elements
  form: {
    input: 'block w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200',
    textarea: 'block w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 bg-gray-50 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none transition-all duration-200',
    label: 'block text-sm font-medium text-gray-700 mb-2',
    error: 'text-sm text-red-600 mt-1'
  }
} as const

// Legacy exports for compatibility
export const BUTTON_STYLES = STYLES.button

// Common breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const