// UI Style Constants
export const STYLES = {
  // Container
  container: 'mx-auto max-w-7xl px-6 lg:px-8',
  
  // WCAG AAA準拠 + 限界突破ボタンスタイル
  button: {
    primary: 'inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 ease-out min-h-[48px] min-w-[48px] border-2 border-indigo-700 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 will-change-transform touch-manipulation select-none',
    secondary: 'inline-flex items-center justify-center bg-white border-2 border-gray-300 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 ease-out min-h-[48px] min-w-[48px] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 will-change-transform touch-manipulation select-none',
    outline: 'inline-flex items-center justify-center border-2 border-indigo-600 text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-800 hover:border-indigo-700 transition-all duration-300 ease-out min-h-[48px] min-w-[48px] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 will-change-transform touch-manipulation select-none',
    minimal: 'inline-flex items-center justify-center text-gray-900 font-bold px-4 py-2 hover:text-indigo-700 hover:bg-gray-100 rounded-lg transition-all duration-300 ease-out min-h-[48px] min-w-[48px] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 will-change-transform touch-manipulation select-none'
  },
  
  // Section spacing
  section: {
    hero: 'py-12 sm:py-16 lg:py-20',
    content: 'py-12 sm:py-16 lg:py-20',
    cta: 'py-12 sm:py-16 lg:py-20 bg-gray-900 text-white',
    features: 'py-12 sm:py-16 lg:py-20 bg-gray-50',
    pricing: 'py-12 sm:py-16 lg:py-20'
  },
  
  // WCAG AAA準拠 + 限界突破カードスタイル
  card: {
    default: 'bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-200/50 transition-all duration-300 ease-out hover:bg-white/85 hover:scale-[1.01] focus-within:ring-3 focus-within:ring-blue-500 focus-within:ring-offset-3',
    featured: 'bg-gradient-to-br from-white/85 to-white/80 rounded-2xl p-8 border-2 border-indigo-300/60 shadow-xl shadow-indigo-500/10 hover:shadow-2xl hover:from-white/90 hover:to-white/85 transition-all duration-300 ease-out hover:scale-[1.01] focus-within:ring-3 focus-within:ring-blue-500 focus-within:ring-offset-3',
    compact: 'bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-200/50 transition-all duration-300 ease-out hover:bg-white/85 hover:scale-[1.01] focus-within:ring-3 focus-within:ring-blue-500 focus-within:ring-offset-3'
  },
  
  // Modern Typography - 統一されたフォントシステム（超可読性強化）
  heading: {
    // メインヘッダー（ページタイトル）
    h1: {
      primary: 'text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight drop-shadow-lg',
      hero: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight drop-shadow-lg'
    },
    // セクションヘッダー
    h2: {
      section: 'text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight drop-shadow-md',
      subsection: 'text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 drop-shadow'
    },
    // サブヘッダー
    h3: {
      card: 'text-lg sm:text-xl font-bold text-gray-900 drop-shadow',
      emphasis: 'text-base sm:text-lg font-bold text-gray-900 drop-shadow'
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
  
  // WCAG AAA準拠 フォーム要素
  form: {
    input: 'block w-full rounded-xl border-2 border-gray-300 px-4 py-3 min-h-[48px] text-gray-900 placeholder-gray-500 bg-white focus:bg-white focus:border-blue-500 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 transition-all duration-300 ease-out',
    textarea: 'block w-full rounded-xl border-2 border-gray-300 px-4 py-3 min-h-[120px] text-gray-900 placeholder-gray-500 bg-white focus:bg-white focus:border-blue-500 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 resize-vertical transition-all duration-300 ease-out',
    label: 'block text-sm font-semibold text-gray-800 mb-2 cursor-pointer',
    error: 'text-sm font-medium text-red-700 mt-2 p-2 bg-red-50 rounded border-l-4 border-red-600',
    success: 'text-sm font-medium text-green-700 mt-2 p-2 bg-green-50 rounded border-l-4 border-green-600'
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