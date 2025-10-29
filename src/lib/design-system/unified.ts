/**
 * @fileoverview 統一デザインシステム - 完全版
 * @description コーポレートサイトの全デザイン定数を一元管理
 *
 * 目的:
 * 1. スペーシングの完全統一
 * 2. コンテナ幅の標準化
 * 3. レスポンシブブレークポイントの一貫性
 * 4. タイポグラフィの統一
 *
 * すべてのコンポーネントはこのファイルの定数を使用すること
 */

// ============================================
// 1. スペーシングシステム（完全統一版）
// ============================================

/**
 * セクション間のスペーシング定数
 * すべてのセクションコンポーネントでこれを使用
 */
export const SECTION_SPACING = {
  // 標準セクション（ほとんどのセクションで使用）
  default: 'py-16 sm:py-20 lg:py-24',

  // コンパクトセクション（情報密度が高い場合）
  compact: 'py-12 sm:py-16 lg:py-20',

  // ラージセクション（ヒーローセクションなど）
  large: 'py-20 sm:py-24 lg:py-32',

  // 最小（セクション内のサブセクション）
  minimal: 'py-8 sm:py-10 lg:py-12',
} as const

/**
 * コンテンツ間のスペーシング
 */
export const CONTENT_SPACING = {
  // 要素間（見出しと本文など）
  element: 'space-y-4 md:space-y-6',

  // セクション内のコンテンツグループ
  group: 'space-y-8 md:space-y-12',

  // 大きなコンテンツブロック間
  block: 'space-y-12 md:space-y-16 lg:space-y-20',
} as const

/**
 * マージン定数（一貫性のために数値を制限）
 */
export const MARGIN = {
  xs: 'mb-2',
  sm: 'mb-4',
  md: 'mb-6',
  lg: 'mb-8',
  xl: 'mb-12',
  '2xl': 'mb-16',
  '3xl': 'mb-20',
} as const

// ============================================
// 2. コンテナシステム（完全統一版）
// ============================================

/**
 * すべてのコンテナ幅を統一
 * ページやセクションに応じて使い分け
 */
export const CONTAINER = {
  // 標準コンテナ（ほとんどのページ）
  default: {
    wrapper: 'max-w-7xl mx-auto',
    padding: 'px-4 sm:px-6 lg:px-8',
    full: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  },

  // ナローコンテナ（FAQなど読みやすさ重視）
  narrow: {
    wrapper: 'max-w-4xl mx-auto',
    padding: 'px-4 sm:px-6 lg:px-8',
    full: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
  },

  // ワイドコンテナ（ヒーローセクション）
  wide: {
    wrapper: 'max-w-full',
    padding: 'px-4 sm:px-6 lg:px-12',
    full: 'max-w-full px-4 sm:px-6 lg:px-12',
  },

  // エクストラワイド（画像ギャラリーなど）
  extraWide: {
    wrapper: 'max-w-[1600px] mx-auto',
    padding: 'px-4 sm:px-6 lg:px-8',
    full: 'max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8',
  },
} as const

// ============================================
// 3. レスポンシブタイポグラフィ（完全統一版）
// ============================================

/**
 * 見出しサイズ（レスポンシブ対応）
 */
export const HEADING = {
  h1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold',
  h2: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold',
  h3: 'text-2xl sm:text-3xl md:text-4xl font-bold',
  h4: 'text-xl sm:text-2xl md:text-3xl font-semibold',
  h5: 'text-lg sm:text-xl md:text-2xl font-semibold',
  h6: 'text-base sm:text-lg md:text-xl font-semibold',
} as const

/**
 * 本文テキストサイズ
 */
export const TEXT = {
  // リード文（導入文）
  lead: 'text-lg sm:text-xl md:text-2xl',

  // 通常の本文
  body: 'text-base sm:text-lg',

  // 小さいテキスト
  small: 'text-sm sm:text-base',

  // 最小テキスト（注釈など）
  xs: 'text-xs sm:text-sm',
} as const

// ============================================
// 4. カラーシステム
// ============================================

/**
 * テキストカラー（セマンティック）
 */
export const TEXT_COLOR = {
  primary: 'text-gray-900',
  secondary: 'text-gray-600',
  muted: 'text-gray-500',
  inverse: 'text-white',
  brand: 'text-indigo-600',
} as const

/**
 * 背景カラー
 */
export const BG_COLOR = {
  white: 'bg-white',
  gray: {
    50: 'bg-gray-50',
    100: 'bg-gray-100',
    200: 'bg-gray-200',
  },
  brand: 'bg-indigo-600',
  dark: 'bg-gray-900',
} as const

// ============================================
// 5. レイアウトパターン
// ============================================

/**
 * セクションの標準レイアウト
 */
export const SECTION_LAYOUT = {
  // 標準セクション（白背景）
  default: `${SECTION_SPACING.default} ${BG_COLOR.white}`,

  // グレー背景セクション（交互配置用）
  alternate: `${SECTION_SPACING.default} ${BG_COLOR.gray[50]}`,

  // ブランドカラーセクション
  brand: `${SECTION_SPACING.default} ${BG_COLOR.brand} ${TEXT_COLOR.inverse}`,

  // コンパクトセクション
  compact: `${SECTION_SPACING.compact} ${BG_COLOR.white}`,
} as const

/**
 * グリッドレイアウト（カード配置など）
 */
export const GRID = {
  // 2カラム（タブレット以上）
  two: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8',

  // 3カラム
  three: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8',

  // 4カラム
  four: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6',

  // カスタマブルギャップ
  custom: (cols: number, gap: string = 'gap-6 md:gap-8') =>
    `grid grid-cols-1 md:grid-cols-${cols} ${gap}`,
} as const

// ============================================
// 6. アニメーション/トランジション
// ============================================

export const TRANSITION = {
  default: 'transition-all duration-300 ease-out',
  fast: 'transition-all duration-150 ease-out',
  slow: 'transition-all duration-500 ease-out',
  colors: 'transition-colors duration-300 ease-out',
  transform: 'transition-transform duration-300 ease-out',
} as const

export const HOVER = {
  scale: 'hover:scale-105',
  scaleSmall: 'hover:scale-[1.02]',
  lift: 'hover:-translate-y-1',
  shadow: 'hover:shadow-xl',
} as const

// ============================================
// 7. ボタンスタイル（統一版）
// ============================================

/**
 * ボタンの基本スタイル
 */
const BUTTON_BASE = 'inline-flex items-center justify-center font-semibold rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300'

/**
 * ボタンサイズ
 */
export const BUTTON_SIZE = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
} as const

/**
 * ボタンバリアント
 */
export const BUTTON_VARIANT = {
  // プライマリ（メインCTA）
  primary: `${BUTTON_BASE} bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500`,

  // セカンダリ（サブCTA）
  secondary: `${BUTTON_BASE} bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500`,

  // アウトライン
  outline: `${BUTTON_BASE} border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus-visible:ring-indigo-500`,

  // ゴースト（背景なし）
  ghost: `${BUTTON_BASE} text-indigo-600 hover:bg-indigo-50 focus-visible:ring-indigo-500`,

  // LINE専用
  line: `${BUTTON_BASE} bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500`,
  lineOutline: `${BUTTON_BASE} border-2 border-green-600 text-green-600 hover:bg-green-50 focus-visible:ring-green-500`,
} as const

// ============================================
// 8. カードスタイル（統一版）
// ============================================

const CARD_BASE = 'rounded-xl overflow-hidden transition-all duration-300'

export const CARD_VARIANT = {
  // 標準カード（白背景）
  default: `${CARD_BASE} bg-white border border-gray-200 hover:shadow-lg`,

  // エレベーテッドカード（影あり）
  elevated: `${CARD_BASE} bg-white shadow-md hover:shadow-xl`,

  // アウトラインカード
  outline: `${CARD_BASE} bg-white border-2 border-gray-300 hover:border-indigo-500`,

  // グラデーションカード（プロフェッショナル版）
  gradient: `${CARD_BASE} bg-gradient-to-br from-blue-600 to-blue-800 text-white`,

  // フラット（影なし）
  flat: `${CARD_BASE} bg-gray-50`,
} as const

// ============================================
// 9. ユーティリティ関数
// ============================================

/**
 * クラス名を結合するヘルパー
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * セクションの完全なクラス名を生成
 *
 * @example
 * section({ spacing: 'default', container: 'default' })
 * // => "py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
 */
export function section({
  spacing = 'default',
  container = 'default',
  background = 'white',
}: {
  spacing?: keyof typeof SECTION_SPACING
  container?: keyof typeof CONTAINER
  background?: string
} = {}) {
  return cn(
    SECTION_SPACING[spacing],
    CONTAINER[container].full,
    background
  )
}

/**
 * ボタンの完全なクラス名を生成
 */
export function button({
  variant = 'primary',
  size = 'md',
  className,
}: {
  variant?: keyof typeof BUTTON_VARIANT
  size?: keyof typeof BUTTON_SIZE
  className?: string
} = {}) {
  return cn(
    BUTTON_VARIANT[variant],
    BUTTON_SIZE[size],
    className
  )
}

/**
 * カードの完全なクラス名を生成
 */
export function card({
  variant = 'default',
  className,
}: {
  variant?: keyof typeof CARD_VARIANT
  className?: string
} = {}) {
  return cn(
    CARD_VARIANT[variant],
    className
  )
}

// ============================================
// エクスポート一覧
// ============================================

export const UNIFIED = {
  SECTION_SPACING,
  CONTENT_SPACING,
  MARGIN,
  CONTAINER,
  HEADING,
  TEXT,
  TEXT_COLOR,
  BG_COLOR,
  SECTION_LAYOUT,
  GRID,
  TRANSITION,
  HOVER,
  BUTTON_SIZE,
  BUTTON_VARIANT,
  CARD_VARIANT,
  // ヘルパー関数
  cn,
  section,
  button,
  card,
} as const

// デフォルトエクスポート
export default UNIFIED
