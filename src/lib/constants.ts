// UI Style Constants
export const STYLES = {
  // Container
  container: 'mx-auto max-w-7xl px-6 lg:px-8',
  
  // 視認性最優先のボタンスタイル
  button: {
    primary: 'inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-3 rounded-xl font-bold shadow-2xl shadow-indigo-500/30 hover:shadow-3xl hover:shadow-indigo-500/40 hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 min-h-[48px] border-2 border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    secondary: 'inline-flex items-center justify-center bg-white border-2 border-gray-300 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    outline: 'inline-flex items-center justify-center border-2 border-indigo-600 text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-800 hover:border-indigo-700 transition-all duration-300 min-h-[48px] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    minimal: 'inline-flex items-center justify-center text-gray-900 font-bold px-4 py-2 hover:text-indigo-700 hover:bg-gray-100 rounded-lg transition-all duration-300 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
  },
  
  // Section spacing
  section: {
    hero: 'py-12 sm:py-16 lg:py-20',
    content: 'py-12 sm:py-16 lg:py-20',
    cta: 'py-12 sm:py-16 lg:py-20 bg-gray-900 text-white',
    features: 'py-12 sm:py-16 lg:py-20 bg-gray-50',
    pricing: 'py-12 sm:py-16 lg:py-20'
  },
  
  // 視認性と美しさを両立するカードスタイル
  card: {
    default: 'bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl hover:shadow-3xl border border-gray-200 transition-all duration-300 hover:bg-white/95',
    featured: 'bg-gradient-to-br from-white/95 to-white/90 rounded-2xl p-8 border-2 border-indigo-300 shadow-2xl shadow-indigo-500/20 hover:shadow-3xl hover:from-white hover:to-white/95 transition-all duration-300',
    compact: 'bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-2xl border border-gray-200 transition-all duration-300 hover:bg-white/95'
  },
  
  // Modern Typography - 統一されたフォントシステム（超可読性強化）
  heading: {
    // メインヘッダー（ページタイトル）
    h1: {
      primary: 'text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight',
      hero: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight'
    },
    // セクションヘッダー
    h2: {
      section: 'text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight',
      subsection: 'text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'
    },
    // サブヘッダー
    h3: {
      card: 'text-lg sm:text-xl font-bold text-gray-900',
      emphasis: 'text-base sm:text-lg font-bold text-gray-900'
    },
    // 小見出し
    h4: 'text-base sm:text-lg font-semibold text-gray-900'
  },
  
  // 本文テキスト統一システム（超可読性強化）
  text: {
    // メイン本文
    body: {
      large: 'text-lg sm:text-xl text-gray-800 leading-relaxed font-medium',
      medium: 'text-base sm:text-lg text-gray-800 leading-relaxed font-medium',
      small: 'text-sm sm:text-base text-gray-800 leading-normal font-medium'
    },
    // 説明文
    description: {
      large: 'text-base sm:text-lg text-gray-700 leading-relaxed font-normal',
      medium: 'text-sm sm:text-base text-gray-700 leading-relaxed font-normal',
      small: 'text-xs sm:text-sm text-gray-700 leading-normal font-normal'
    },
    // 強調テキスト
    emphasis: {
      strong: 'font-bold text-gray-900',
      medium: 'font-semibold text-gray-900',
      subtle: 'font-semibold text-gray-800'
    },
    // ラベル・キャプション
    label: {
      primary: 'text-sm font-semibold text-gray-900',
      secondary: 'text-xs font-semibold text-gray-700 uppercase tracking-wider'
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