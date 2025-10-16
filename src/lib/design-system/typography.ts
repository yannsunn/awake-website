/**
 * @fileoverview タイポグラフィシステム - 統一されたフォント定義
 * @description WCAG AAA準拠、レスポンシブ対応、用途別に最適化
 */

/**
 * ヘディングスタイル - 詳細な用途別定義
 */
export const TYPOGRAPHY = {
  // ヘディング - 階層別スタイル（日本語最適化）
  heading: {
    // H1 - ページタイトル
    h1: {
      primary: 'text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1f2937] tracking-tight leading-tight jp-wrap',
      hero: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1f2937] tracking-tight leading-tight jp-wrap'
    },
    // H2 - セクションヘッダー
    h2: {
      section: 'text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2937] tracking-tight jp-wrap',
      subsection: 'text-xl sm:text-2xl md:text-3xl font-bold text-[#1f2937] jp-wrap'
    },
    // H3 - サブヘッダー
    h3: {
      card: 'text-lg sm:text-xl font-bold text-[#1f2937] jp-wrap',
      emphasis: 'text-base sm:text-lg font-bold text-[#1f2937] jp-wrap'
    },
    // H4 - 小見出し
    h4: 'text-base sm:text-lg font-semibold text-[#1f2937] jp-wrap'
  },

  // 本文テキスト - サイズ別定義（日本語最適化）
  text: {
    // メイン本文
    body: {
      large: 'text-lg sm:text-xl text-[#374151] leading-relaxed font-medium jp-wrap no-orphan',
      medium: 'text-base sm:text-lg text-[#374151] leading-relaxed font-medium jp-wrap no-orphan',
      small: 'text-sm sm:text-base text-[#374151] leading-normal font-medium jp-wrap no-orphan'
    },
    // 説明文
    description: {
      large: 'text-base sm:text-lg text-[#4b5563] leading-relaxed font-normal jp-wrap no-orphan',
      medium: 'text-sm sm:text-base text-[#4b5563] leading-relaxed font-normal jp-wrap no-orphan',
      small: 'text-xs sm:text-sm text-[#4b5563] leading-normal font-normal jp-wrap no-orphan'
    },
    // 強調テキスト
    emphasis: {
      strong: 'font-bold text-[#1f2937]',
      medium: 'font-semibold text-[#1f2937]',
      subtle: 'font-semibold text-[#374151]'
    },
    // ラベル・キャプション
    label: {
      primary: 'text-sm font-semibold text-[#1f2937]',
      secondary: 'text-xs font-semibold text-[#6b7280] uppercase tracking-wider'
    }
  },

  // レスポンシブクラス - シンプル版（日本語最適化）
  responsive: {
    h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight jp-wrap',
    h2: 'text-xl sm:text-2xl md:text-3xl font-bold tracking-tight jp-wrap',
    h3: 'text-lg sm:text-xl md:text-2xl font-semibold jp-wrap',
    h4: 'text-base sm:text-lg md:text-xl font-semibold jp-wrap',
    body: 'text-sm sm:text-base font-normal jp-wrap no-orphan',
    small: 'text-xs sm:text-sm font-normal jp-wrap no-orphan'
  },

  // 行間設定
  lineHeight: {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed'
  },

  // フォントウェイト
  fontWeight: {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'
  },

  // トラッキング（字間）
  tracking: {
    tighter: 'tracking-tighter',
    tight: 'tracking-tight',
    normal: 'tracking-normal',
    wide: 'tracking-wide',
    wider: 'tracking-wider'
  }
} as const

/**
 * タイポグラフィの型定義
 */
export type Typography = typeof TYPOGRAPHY
export type HeadingLevel = keyof typeof TYPOGRAPHY.heading
export type TextVariant = keyof typeof TYPOGRAPHY.text
