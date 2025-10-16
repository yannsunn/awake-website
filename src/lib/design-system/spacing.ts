/**
 * @fileoverview スペーシングシステム - 8pxグリッド + ユースケース別
 * @description 一貫したスペーシングによるデザイン統一
 */

/**
 * 8pxグリッドシステム - 基本スケール
 */
export const SPACING_SCALE = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  '2xl': '4rem',  // 64px
  '3xl': '6rem'   // 96px
} as const

/**
 * ユースケース別スペーシング
 */
export const SPACING = {
  // セクションスペーシング
  section: {
    padding: 'py-12 sm:py-16 lg:py-20',
    container: 'px-4 sm:px-6 lg:px-8',
    maxWidth: 'max-w-7xl mx-auto',
    // セクション種類別
    hero: 'py-12 sm:py-16 lg:py-20',
    content: 'py-12 sm:py-16 lg:py-20',
    cta: 'py-12 sm:py-16 lg:py-20 bg-gray-100 text-gray-900',
    features: 'py-12 sm:py-16 lg:py-20 bg-gray-50',
    pricing: 'py-12 sm:py-16 lg:py-20'
  },

  // コンテンツスタック（縦方向の間隔）
  content: {
    stack: {
      sm: 'space-y-2',
      md: 'space-y-4',
      lg: 'space-y-6',
      xl: 'space-y-8'
    }
  },

  // グリッドレイアウト
  grid: {
    cols: {
      '2': 'grid grid-cols-1 md:grid-cols-2',
      '3': 'grid grid-cols-1 md:grid-cols-3',
      '4': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    },
    gap: {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8'
    }
  },

  // レスポンシブパディング（ultra-design-systemから）
  responsive: {
    section: 'px-4 sm:px-6 md:px-8 lg:px-12',
    container: 'py-12 sm:py-16 md:py-20 lg:py-24',
    card: 'p-6 sm:p-8 lg:p-10'
  }
} as const

/**
 * コンテナ幅定義
 */
export const CONTAINERS = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full'
} as const

/**
 * スペーシングの型定義
 */
export type SpacingScale = typeof SPACING_SCALE
export type SpacingKey = keyof typeof SPACING_SCALE
export type ContainerSize = keyof typeof CONTAINERS
