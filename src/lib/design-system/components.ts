/**
 * @fileoverview コンポーネントスタイル - ボタン、カード、フォーム等
 * @description WCAG AAA準拠、アクセシビリティ重視の統一スタイル
 */

/**
 * コンポーネントスタイルシステム
 */
export const COMPONENT_STYLES = {
  // コンテナ
  container: 'mx-auto max-w-7xl px-6 lg:px-8',

  // ボタンスタイル - WCAG AAA準拠
  button: {
    primary: 'inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-indigo-700 text-black px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-indigo-800 transition-colors duration-300 ease-out min-h-[48px] min-w-[48px] border-2 border-indigo-700 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 touch-manipulation select-none',
    secondary: 'inline-flex items-center justify-center bg-white border-2 border-gray-300 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300 ease-out min-h-[48px] min-w-[48px] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 touch-manipulation select-none',
    outline: 'inline-flex items-center justify-center border-2 border-indigo-600 text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-800 hover:border-indigo-700 transition-colors duration-300 ease-out min-h-[48px] min-w-[48px] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 touch-manipulation select-none',
    minimal: 'inline-flex items-center justify-center text-gray-900 font-bold px-4 py-2 hover:text-indigo-700 hover:bg-gray-100 rounded-lg transition-colors duration-300 ease-out min-h-[48px] min-w-[48px] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 touch-manipulation select-none'
  },

  // カードスタイル - WCAG AAA準拠
  card: {
    default: 'bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-700/50 transition-colors duration-300 ease-out hover:bg-gray-800/90 hover:scale-[1.01] focus-within:ring-3 focus-within:ring-blue-500 focus-within:ring-offset-3',
    featured: 'bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border-2 border-indigo-500/60 shadow-xl shadow-indigo-500/10 hover:shadow-2xl hover:from-gray-900 hover:to-gray-950 transition-colors duration-300 ease-out hover:scale-[1.01] focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2',
    compact: 'bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-700/50 transition-colors duration-300 ease-out hover:bg-gray-800/90 hover:scale-[1.01] focus-within:ring-3 focus-within:ring-blue-500 focus-within:ring-offset-3',
    // 追加: 白背景カード（新規）
    premium: 'bg-white border-2 border-slate-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]',
    standard: 'bg-white border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01]'
  },

  // フォーム要素 - WCAG AAA準拠
  form: {
    input: 'block w-full rounded-xl border-2 border-gray-600 px-4 py-3 min-h-[48px] text-black placeholder-gray-400 bg-gray-800 focus:bg-gray-700 focus:border-blue-500 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 transition-colors duration-300 ease-out',
    textarea: 'block w-full rounded-xl border-2 border-gray-600 px-4 py-3 min-h-[120px] text-black placeholder-gray-400 bg-gray-800 focus:bg-gray-700 focus:border-blue-500 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 resize-vertical transition-colors duration-300 ease-out',
    label: 'block text-sm font-semibold text-black mb-2 cursor-pointer',
    error: 'text-sm font-medium text-red-700 mt-2 p-2 bg-red-50 rounded border-l-4 border-red-600',
    success: 'text-sm font-medium text-green-700 mt-2 p-2 bg-green-50 rounded border-l-4 border-green-600'
  }
} as const

/**
 * Ultra Design System互換のボタンスタイル
 * コーポレートブルーに統一
 */
export const BUTTONS = {
  primary: `
    inline-flex items-center justify-center whitespace-nowrap
    px-6 py-3
    bg-blue-600 hover:bg-blue-700
    text-white font-semibold
    rounded-lg shadow-md hover:shadow-lg
    transition-all duration-300 ease-out
    transform hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `,
  secondary: `
    inline-flex items-center justify-center whitespace-nowrap
    px-6 py-3
    bg-white hover:bg-blue-50
    text-blue-600 font-semibold
    border-2 border-blue-600 hover:border-blue-700
    rounded-lg shadow-sm hover:shadow-md
    transition-all duration-300 ease-out
    transform hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `
} as const

/**
 * レガシーエクスポート（後方互換性）
 */
export const BUTTON_STYLES = COMPONENT_STYLES.button
export const CARD_STYLES = {
  premium: COMPONENT_STYLES.card.premium,
  standard: COMPONENT_STYLES.card.standard,
  compact: COMPONENT_STYLES.card.compact
}

/**
 * コンポーネントスタイルの型定義
 */
export type ComponentStyles = typeof COMPONENT_STYLES
export type ButtonVariant = keyof typeof COMPONENT_STYLES.button
export type CardVariant = keyof typeof COMPONENT_STYLES.card
