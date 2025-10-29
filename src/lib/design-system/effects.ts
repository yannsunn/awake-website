/**
 * @fileoverview エフェクト - グラデーション、アニメーション、グロウ
 * @description モダンなビジュアルエフェクトの統一定義
 */

/**
 * エフェクトシステム
 */
export const EFFECTS = {
  // グラデーション
  gradient: {
    // ネオングラデーション（プロフェッショナル版）
    neon: {
      blue: 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600',
      cyan: 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600',
      ocean: 'bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600'
    },
    // ホログラフィック効果（青系統のみ）
    holographic: 'bg-gradient-to-br from-blue-400/20 via-cyan-500/20 to-blue-600/20 animate-gradient-shift',
    // 既存のグラデーション（プロフェッショナル版）
    primary: 'bg-gradient-to-r from-blue-600 to-blue-800',
    glass: 'bg-gradient-to-br from-white/10 to-white/5'
  },

  // ネオングロウ効果 - 上品で控えめ（プロフェッショナル版）
  glow: {
    blue: 'shadow-[0_0_15px_rgba(37,99,235,0.3)]',
    cyan: 'shadow-[0_0_15px_rgba(34,211,238,0.3)]',
    indigo: 'shadow-[0_0_15px_rgba(67,56,202,0.3)]'
  },

  // アニメーション
  animation: {
    float: 'animate-float',
    pulse: 'animate-pulse-slow',
    gradient: 'animate-gradient-shift',
    glow: 'animate-glow-pulse',
    slide: 'animate-slide-up',
    // ultra-design-systemから
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    duration: {
      fast: 'duration-200',
      normal: 'duration-300',
      slow: 'duration-500'
    }
  },

  // 背景オーバーレイ
  overlays: {
    light: 'bg-white/95 backdrop-blur-sm',
    medium: 'bg-gray-900/70 backdrop-blur-sm',
    dark: 'bg-gray-900/90'
  },

  // シャドウシステム
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    none: 'shadow-none'
  },

  // フォーカススタイル - 統一
  focus: {
    ring: 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    visible: 'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3'
  }
} as const

/**
 * テキストシャドウ - 統一
 */
export const TEXT_SHADOW = {
  heading: { textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' },
  body: { textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' },
  small: { textShadow: 'none' },
  glow: { textShadow: 'none' }
} as const

/**
 * テキスト背景スタイル
 */
export const TEXT_BG_STYLES = {
  default: '',
  compact: '',
  large: ''
} as const

/**
 * Ultra Design System互換エクスポート
 */
export const SHADOWS = EFFECTS.shadows
export const FOCUS = EFFECTS.focus

/**
 * エフェクトの型定義
 */
export type Effects = typeof EFFECTS
export type GradientVariant = keyof typeof EFFECTS.gradient.neon
export type AnimationVariant = keyof typeof EFFECTS.animation
