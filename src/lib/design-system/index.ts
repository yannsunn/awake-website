/**
 * @fileoverview 統一デザインシステム - メインエクスポート
 * @description すべてのデザイントークンとスタイルの統一アクセスポイント
 *
 * @example
 * ```typescript
 * import { COLORS, TYPOGRAPHY, COMPONENT_STYLES } from '@/lib/design-system'
 * ```
 */

// カラーパレット
export {
  COLORS,
  type ColorScale,
  type PrimaryColor,
  type GrayColor,
  type SemanticColor
} from './colors'

// タイポグラフィシステム
export {
  TYPOGRAPHY,
  type Typography,
  type HeadingLevel,
  type TextVariant
} from './typography'

// スペーシングシステム
export {
  SPACING_SCALE,
  SPACING,
  CONTAINERS,
  type SpacingScale,
  type SpacingKey,
  type ContainerSize
} from './spacing'

// コンポーネントスタイル
export {
  COMPONENT_STYLES,
  BUTTON_STYLES,
  CARD_STYLES,
  BUTTONS,
  type ComponentStyles,
  type ButtonVariant,
  type CardVariant
} from './components'

// エフェクト
export {
  EFFECTS,
  TEXT_SHADOW,
  TEXT_BG_STYLES,
  SHADOWS,
  FOCUS,
  type Effects,
  type GradientVariant,
  type AnimationVariant
} from './effects'

// デザイントークン
export {
  BREAKPOINTS,
  SECTION_PATTERNS,
  Z_INDEX,
  TRANSITION,
  BORDER_RADIUS,
  type Breakpoint,
  type SectionPattern,
  type ZIndex,
  type TransitionDuration,
  type BorderRadius
} from './tokens'

/**
 * レガシー互換性エイリアス
 * constants.tsからのインポートを維持するため
 * 注: 完全な後方互換性は constants.ts で提供されます
 */
// export const STYLES = COMPONENT_STYLES  // これは constants.ts で提供
