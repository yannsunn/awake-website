// 🚀 ULTRA STYLES - 限界突破デザインシステム

import { cn } from '@/lib/utils'

// テキストシャドウ統一システム
export const TEXT_SHADOW = {
  // 見出し用（最も強い影）
  heading: { textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' },
  // 本文用（中程度の影）
  body: { textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' },
  // 小テキスト用（軽い影）
  small: { textShadow: '0 1px 1px rgba(0, 0, 0, 0.15)' },
  // 特殊効果用
  glow: { textShadow: '0 0 20px rgba(147, 51, 234, 0.5)' }
} as const

// セクション背景パターン
export const SECTION_PATTERNS = {
  // 最も濃い背景（メインセクション）
  dark: {
    wrapper: 'py-16 md:py-24 relative',
    overlay: 'absolute inset-0 bg-gray-900/80',
    content: 'relative z-10 w-full px-4 sm:px-6 lg:px-8'
  },
  // 中間の背景（サブセクション）
  medium: {
    wrapper: 'py-16 md:py-24 relative',
    overlay: 'absolute inset-0 bg-gray-800/60',
    content: 'relative z-10 w-full px-4 sm:px-6 lg:px-8'
  },
  // 軽い背景（補助セクション）
  light: {
    wrapper: 'py-16 md:py-24 relative',
    overlay: 'absolute inset-0 bg-gray-700/40',
    content: 'relative z-10 w-full px-4 sm:px-6 lg:px-8'
  }
} as const

// カードスタイル統一
export const CARD_STYLES = {
  // プレミアムカード
  premium: 'bg-gray-800/95 border-2 border-indigo-500/30 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300',
  // スタンダードカード
  standard: 'bg-gray-800/90 border border-gray-700 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300',
  // コンパクトカード
  compact: 'bg-gray-800/90 border border-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300'
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
  default: 'bg-gray-800/90 rounded-lg px-6 py-3 inline-block shadow-xl',
  compact: 'bg-gray-800/90 rounded-md px-4 py-2 inline-block shadow-lg',
  large: 'bg-gray-800/90 rounded-xl px-8 py-4 inline-block shadow-2xl'
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