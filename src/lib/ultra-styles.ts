// 🚀 ULTRA STYLES - 限界突破デザインシステム

import { cn } from '@/lib/utils'

// テキストシャドウ - 最小限の影で洗練された見た目
export const TEXT_SHADOW = {
  // 見出し用（控えめな影）
  heading: { textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' },
  // 本文用（ほぼ影なし）
  body: { textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' },
  // 小テキスト用（影なし）
  small: { textShadow: 'none' },
  // 特殊効果用（廃止）
  glow: { textShadow: 'none' }
} as const

// セクション背景パターン
export const SECTION_PATTERNS = {
  // 最も濃い背景（メインセクション）
  dark: {
    wrapper: 'pt-20 md:pt-24 py-12 sm:py-16 md:py-20 relative',
    overlay: 'absolute inset-0 bg-gray-900/90',
    content: 'relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8'
  },
  // 中間の背景（サブセクション）
  medium: {
    wrapper: 'pt-20 md:pt-24 py-12 sm:py-16 md:py-20 relative',
    overlay: 'absolute inset-0 bg-gray-900/70 backdrop-blur-sm',
    content: 'relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8'
  },
  // 軽い背景（補助セクション）
  light: {
    wrapper: 'pt-20 md:pt-24 py-12 sm:py-16 md:py-20 relative',
    overlay: 'absolute inset-0 bg-white/95 backdrop-blur-sm',
    content: 'relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8'
  }
} as const

// カードスタイル統一
export const CARD_STYLES = {
  // プレミアムカード
  premium: 'bg-gray-800/95 border-2 border-indigo-500/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]',
  // スタンダードカード
  standard: 'bg-gray-800/90 border border-gray-700 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]',
  // コンパクトカード
  compact: 'bg-gray-800/90 border border-gray-700 rounded-lg p-3 sm:p-4 lg:p-6 shadow-md hover:shadow-lg transition-all duration-300'
} as const

// 統一セクションコンポーネント
export function createSection(
  variant: keyof typeof SECTION_PATTERNS = 'dark',
  className?: string
) {
  const pattern = SECTION_PATTERNS[variant]
  return {
    wrapper: cn(pattern.wrapper, className),
    overlay: pattern.overlay,
    content: pattern.content
  }
}

// ヒーローセクションスタイル
export const HERO_STYLES = {
  wrapper: 'relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-32 pb-20',
  heading: (className?: string) => cn('text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white', className),
  subheading: 'text-xl sm:text-2xl text-white font-semibold mb-4 bg-gray-800/90 rounded-lg px-6 py-3 inline-block shadow-xl',
  description: 'text-base sm:text-lg text-gray-200 bg-gray-800/90 rounded-lg px-6 py-3 inline-block shadow-xl'
} as const

// CTAセクションスタイル
export const CTA_STYLES = {
  wrapper: 'text-center',
  heading: 'text-2xl sm:text-3xl font-bold text-white mb-6',
  description: 'text-lg text-white mb-8 bg-gray-800/90 rounded-lg px-6 py-3 inline-block shadow-xl',
  button: 'inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-xl font-bold rounded-lg transition-all'
} as const

// テキスト背景スタイル（最も使用頻度が高い）
export const TEXT_BG_STYLES = {
  default: 'bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-md rounded-lg px-6 py-3 inline-block shadow-xl border border-purple-500/30',
  compact: 'bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-md rounded-md px-4 py-2 inline-block shadow-lg border border-purple-500/20',
  large: 'bg-gradient-to-r from-purple-900/60 to-indigo-900/60 backdrop-blur-md rounded-xl px-8 py-4 inline-block shadow-2xl border border-purple-500/40'
} as const

// インタラクティブ要素の共通スタイル
export const INTERACTIVE_STYLES = {
  focusRing: 'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3',
  hoverScale: 'hover:scale-[1.02] active:scale-[0.98]',
  transition: 'transition-all duration-300 ease-out'
} as const

// 限界突破アニメーション
export const ANIMATIONS = {
  fadeInUp: 'animate-fade-in-up',
  slideIn: 'animate-slide-in',
  pulse: 'animate-pulse-slow',
  glow: 'animate-glow-pulse'
} as const