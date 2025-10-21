# デザインシステムAPI設計書

**作成日**: 2025-10-04
**バージョン**: 1.0.0
**目的**: 新しいデザインシステムのAPI仕様

---

## 📋 概要

統合デザインシステムは以下の原則に基づいて設計されます：

1. **型安全性**: TypeScript の `as const` で厳密な型定義
2. **一貫性**: 命名規則とパターンの統一
3. **拡張性**: 新しいスタイルの追加が容易
4. **アクセシビリティ**: WCAG AAA準拠
5. **パフォーマンス**: ツリーシェイキング対応

---

## 🎨 ファイル構成

```
src/lib/design-system/
├── index.ts           # メインエクスポート
├── colors.ts          # カラーシステム
├── typography.ts      # タイポグラフィ
├── spacing.ts         # スペーシング
├── components.ts      # コンポーネントスタイル
├── effects.ts         # エフェクト
└── tokens.ts          # デザイントークン
```

---

## 📘 API仕様

### 1. `colors.ts` - カラーシステム

#### エクスポート

```typescript
export const COLORS = {
  // プライマリカラー - 青紫系
  primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95'
  },

  // グレースケール
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827'
  },

  // セマンティックカラー
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  }
} as const

// 型定義
export type ColorPalette = typeof COLORS
export type PrimaryColor = keyof typeof COLORS.primary
export type GrayColor = keyof typeof COLORS.gray
```

#### 使用例

```typescript
import { COLORS } from '@/lib/design-system/colors'

// 色の取得
const primaryColor = COLORS.primary[600]  // '#7c3aed'
const textColor = COLORS.gray[700]        // '#374151'
const successColor = COLORS.semantic.success  // '#10b981'
```

---

### 2. `typography.ts` - タイポグラフィシステム

#### エクスポート

```typescript
export const TYPOGRAPHY = {
  // ヘッディング
  heading: {
    h1: {
      primary: 'text-4xl sm:text-5xl md:text-6xl font-extrabold text-black tracking-tight leading-tight',
      hero: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-tight'
    },
    h2: {
      section: 'text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight',
      subsection: 'text-xl sm:text-2xl md:text-3xl font-bold text-black'
    },
    h3: {
      card: 'text-lg sm:text-xl font-bold text-black',
      emphasis: 'text-base sm:text-lg font-bold text-black'
    },
    h4: 'text-base sm:text-lg font-semibold text-black'
  },

  // 本文テキスト
  text: {
    body: {
      large: 'text-lg sm:text-xl text-gray-700 leading-relaxed font-medium',
      medium: 'text-base sm:text-lg text-gray-700 leading-relaxed font-medium',
      small: 'text-sm sm:text-base text-gray-700 leading-normal font-medium'
    },
    description: {
      large: 'text-base sm:text-lg text-gray-600 leading-relaxed font-normal',
      medium: 'text-sm sm:text-base text-gray-600 leading-relaxed font-normal',
      small: 'text-xs sm:text-sm text-gray-600 leading-normal font-normal'
    },
    emphasis: {
      strong: 'font-bold text-black',
      medium: 'font-semibold text-black',
      subtle: 'font-semibold text-gray-700'
    },
    label: {
      primary: 'text-sm font-semibold text-black',
      secondary: 'text-xs font-semibold text-gray-500 uppercase tracking-wider'
    }
  },

  // 行間
  lineHeight: {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed'
  }
} as const

// 型定義
export type TypographySystem = typeof TYPOGRAPHY
```

#### 使用例

```typescript
import { TYPOGRAPHY } from '@/lib/design-system/typography'

// ヘッディング
<h1 className={TYPOGRAPHY.heading.h1.hero}>見出し</h1>

// 本文
<p className={TYPOGRAPHY.text.body.medium}>本文テキスト</p>

// ラベル
<label className={TYPOGRAPHY.text.label.primary}>ラベル</label>
```

---

### 3. `spacing.ts` - スペーシングシステム

#### エクスポート

```typescript
export const SPACING = {
  // 8pxグリッドシステム
  scale: {
    xs: '0.5rem',   // 8px
    sm: '1rem',     // 16px
    md: '1.5rem',   // 24px
    lg: '2rem',     // 32px
    xl: '3rem',     // 48px
    '2xl': '4rem',  // 64px
    '3xl': '6rem'   // 96px
  },

  // セクションスペーシング
  section: {
    padding: 'py-12 sm:py-16 lg:py-20',
    container: 'px-4 sm:px-6 lg:px-8',
    maxWidth: 'max-w-7xl mx-auto',
    hero: 'py-12 sm:py-16 lg:py-20',
    content: 'py-12 sm:py-16 lg:py-20',
    cta: 'py-12 sm:py-16 lg:py-20 bg-gray-100',
    features: 'py-12 sm:py-16 lg:py-20 bg-gray-50',
    pricing: 'py-12 sm:py-16 lg:py-20'
  },

  // コンテンツスペーシング
  content: {
    stack: {
      sm: 'space-y-2',
      md: 'space-y-4',
      lg: 'space-y-6',
      xl: 'space-y-8'
    }
  },

  // グリッドスペーシング
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

  // レスポンシブパディング
  responsive: {
    section: 'px-4 sm:px-6 md:px-8 lg:px-12',
    container: 'py-12 sm:py-16 md:py-20 lg:py-24',
    card: 'p-6 sm:p-8 lg:p-10'
  }
} as const

// 型定義
export type SpacingSystem = typeof SPACING
```

#### 使用例

```typescript
import { SPACING } from '@/lib/design-system/spacing'

// セクション
<section className={SPACING.section.padding}>

// グリッド
<div className={`${SPACING.grid.cols['3']} ${SPACING.grid.gap.md}`}>
```

---

### 4. `components.ts` - コンポーネントスタイル

#### エクスポート

```typescript
export const COMPONENTS = {
  // コンテナ
  container: 'mx-auto max-w-7xl px-6 lg:px-8',

  // ボタン
  button: {
    primary: 'inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-indigo-700 text-black px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-indigo-800 transition-colors duration-300 ease-out min-h-[48px] min-w-[48px] border-2 border-indigo-700 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 touch-manipulation select-none',
    secondary: 'inline-flex items-center justify-center bg-white border-2 border-gray-300 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300 ease-out min-h-[48px] min-w-[48px] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 touch-manipulation select-none',
    outline: 'inline-flex items-center justify-center border-2 border-indigo-600 text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-800 hover:border-indigo-700 transition-colors duration-300 ease-out min-h-[48px] min-w-[48px] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 touch-manipulation select-none',
    minimal: 'inline-flex items-center justify-center text-gray-900 font-bold px-4 py-2 hover:text-indigo-700 hover:bg-gray-100 rounded-lg transition-colors duration-300 ease-out min-h-[48px] min-w-[48px] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 touch-manipulation select-none'
  },

  // カード
  card: {
    default: 'bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-700/50 transition-colors duration-300 ease-out hover:bg-gray-800/90 hover:scale-[1.01] focus-within:ring-3 focus-within:ring-blue-500 focus-within:ring-offset-3',
    featured: 'bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border-2 border-indigo-500/60 shadow-xl shadow-indigo-500/10 hover:shadow-2xl hover:from-gray-900 hover:to-gray-950 transition-colors duration-300 ease-out hover:scale-[1.01] focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2',
    compact: 'bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-700/50 transition-colors duration-300 ease-out hover:bg-gray-800/90 hover:scale-[1.01] focus-within:ring-3 focus-within:ring-blue-500 focus-within:ring-offset-3',
    premium: 'bg-white border-2 border-slate-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]',
    standard: 'bg-white border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01]'
  },

  // フォーム
  form: {
    input: 'block w-full rounded-xl border-2 border-gray-600 px-4 py-3 min-h-[48px] text-black placeholder-gray-400 bg-gray-800 focus:bg-gray-700 focus:border-blue-500 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 transition-colors duration-300 ease-out',
    textarea: 'block w-full rounded-xl border-2 border-gray-600 px-4 py-3 min-h-[120px] text-black placeholder-gray-400 bg-gray-800 focus:bg-gray-700 focus:border-blue-500 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 resize-vertical transition-colors duration-300 ease-out',
    label: 'block text-sm font-semibold text-black mb-2 cursor-pointer',
    error: 'text-sm font-medium text-red-700 mt-2 p-2 bg-red-50 rounded border-l-4 border-red-600',
    success: 'text-sm font-medium text-green-700 mt-2 p-2 bg-green-50 rounded border-l-4 border-green-600'
  }
} as const

// 型定義
export type ComponentStyles = typeof COMPONENTS

// レガシーエクスポート（後方互換性）
export const BUTTON_STYLES = COMPONENTS.button
```

#### 使用例

```typescript
import { COMPONENTS } from '@/lib/design-system/components'

// ボタン
<button className={COMPONENTS.button.primary}>クリック</button>

// カード
<div className={COMPONENTS.card.default}>カード内容</div>

// フォーム
<input className={COMPONENTS.form.input} />
```

---

### 5. `effects.ts` - エフェクト

#### エクスポート

```typescript
export const EFFECTS = {
  // グラデーション
  gradient: {
    neon: {
      purple: 'bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500',
      cyan: 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600',
      sunset: 'bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600'
    },
    holographic: 'bg-gradient-to-br from-purple-400/20 via-pink-500/20 to-cyan-400/20 animate-gradient-shift',
    primary: 'bg-gradient-to-r from-indigo-600 to-purple-600',
    glass: 'bg-gradient-to-br from-white/10 to-white/5'
  },

  // グロウ
  glow: {
    purple: 'shadow-[0_0_15px_rgba(147,51,234,0.3)]',
    cyan: 'shadow-[0_0_15px_rgba(34,211,238,0.3)]',
    pink: 'shadow-[0_0_15px_rgba(236,72,153,0.3)]'
  },

  // アニメーション
  animation: {
    float: 'animate-float',
    pulse: 'animate-pulse-slow',
    gradient: 'animate-gradient-shift',
    glow: 'animate-glow-pulse',
    slide: 'animate-slide-up',
    fadeIn: 'animate-fade-in'
  },

  // シャドウ
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    none: 'shadow-none'
  },

  // オーバーレイ
  overlay: {
    light: 'bg-white/95 backdrop-blur-sm',
    medium: 'bg-gray-900/70 backdrop-blur-sm',
    dark: 'bg-gray-900/90'
  }
} as const

// 型定義
export type EffectSystem = typeof EFFECTS
```

---

### 6. `tokens.ts` - デザイントークン

#### エクスポート

```typescript
export const TOKENS = {
  // ブレークポイント
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  },

  // テキストシャドウ
  textShadow: {
    heading: { textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' },
    body: { textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' },
    small: { textShadow: 'none' },
    glow: { textShadow: 'none' }
  },

  // セクションパターン
  sectionPatterns: {
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
  },

  // コンテナ幅
  containers: {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl'
  },

  // フォーカススタイル
  focus: {
    ring: 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
  }
} as const

// 型定義
export type DesignTokens = typeof TOKENS

// レガシーエクスポート（後方互換性）
export const BREAKPOINTS = TOKENS.breakpoints
export const TEXT_SHADOW = TOKENS.textShadow
export const SECTION_PATTERNS = TOKENS.sectionPatterns
```

---

### 7. `index.ts` - メインエクスポート

#### エクスポート

```typescript
// 個別エクスポート
export * from './colors'
export * from './typography'
export * from './spacing'
export * from './components'
export * from './effects'
export * from './tokens'

// デフォルトエクスポート（統合オブジェクト）
export { default as DesignSystem } from './system'
```

#### 使用例

```typescript
// 個別インポート（推奨 - ツリーシェイキング対応）
import { COLORS } from '@/lib/design-system/colors'
import { TYPOGRAPHY } from '@/lib/design-system/typography'

// または統合インポート
import { COLORS, TYPOGRAPHY, SPACING } from '@/lib/design-system'

// またはすべて
import * as DS from '@/lib/design-system'
const color = DS.COLORS.primary[600]
```

---

## 🔄 後方互換性

### `src/lib/constants.ts`（一時的）

```typescript
// 新システムから再エクスポート
export {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  COMPONENTS as STYLES,
  EFFECTS,
  TOKENS,
  BUTTON_STYLES,
  BREAKPOINTS,
  TEXT_SHADOW,
  SECTION_PATTERNS
} from './design-system'

// レガシーエイリアス
export { COMPONENTS as STYLES } from './design-system/components'
```

---

## 📊 移行ガイド

### Before（旧システム）

```typescript
import { STYLES } from '@/lib/constants'

<button className={STYLES.button.primary}>ボタン</button>
```

### After（新システム）

```typescript
import { COMPONENTS } from '@/lib/design-system'

<button className={COMPONENTS.button.primary}>ボタン</button>
```

### 移行期間（両方サポート）

```typescript
// どちらも動作
import { STYLES } from '@/lib/constants'           // OK（再エクスポート）
import { COMPONENTS } from '@/lib/design-system'   // OK（新システム）
```

---

## ✅ テスト要件

### 1. 型チェック

```typescript
// 型安全性の確認
const color: string = COLORS.primary[600]  // OK
const invalidColor = COLORS.primary[1000]  // エラー
```

### 2. ビルドテスト

```bash
npm run build  # エラーなく完了すること
```

### 3. 互換性テスト

```bash
# 既存コンポーネントがすべて動作
npm run dev
```

---

**API設計完了日**: 2025-10-04
**ステータス**: 実装フェーズへ移行準備完了
