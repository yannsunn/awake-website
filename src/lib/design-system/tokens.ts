/**
 * @fileoverview デザイントークン - ブレークポイント、セクションパターン等
 * @description プロジェクト全体で使用する定数トークン
 */

/**
 * レスポンシブブレークポイント
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const

/**
 * セクションパターン - 背景とオーバーレイの組み合わせ
 */
export const SECTION_PATTERNS = {
  dark: {
    wrapper: 'py-12 sm:py-16 md:py-20 relative bg-gradient-to-br from-sky-50 to-blue-50',
    overlay: 'absolute inset-0',
    content: 'relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8'
  },
  medium: {
    wrapper: 'py-12 sm:py-16 md:py-20 relative bg-white',
    overlay: 'absolute inset-0',
    content: 'relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8'
  },
  light: {
    wrapper: 'py-12 sm:py-16 md:py-20 relative bg-white',
    overlay: 'absolute inset-0',
    content: 'relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8'
  }
} as const

/**
 * Z-Index階層定義
 */
export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070
} as const

/**
 * トランジション時間
 */
export const TRANSITION = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '700ms'
} as const

/**
 * ボーダー半径
 */
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.25rem',    // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px'
} as const

/**
 * デザイントークンの型定義
 */
export type Breakpoint = keyof typeof BREAKPOINTS
export type SectionPattern = keyof typeof SECTION_PATTERNS
export type ZIndex = keyof typeof Z_INDEX
export type TransitionDuration = keyof typeof TRANSITION
export type BorderRadius = keyof typeof BORDER_RADIUS
