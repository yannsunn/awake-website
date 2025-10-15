/**
 * @fileoverview レガシー互換性レイヤー - 統一デザインシステムへの再エクスポート
 * @description 既存のインポートを壊さないための後方互換性レイヤー
 * @deprecated 新規コードでは @/lib/design-system から直接インポートしてください
 */

import { COMPONENT_STYLES, BUTTON_STYLES as _BUTTON_STYLES, CARD_STYLES as _CARD_STYLES } from './design-system/components'
import { TYPOGRAPHY as _TYPOGRAPHY } from './design-system/typography'

// レガシーSTYLESオブジェクト - 完全な後方互換性を維持
export const STYLES = {
  ...COMPONENT_STYLES,
  heading: _TYPOGRAPHY.heading,
  text: _TYPOGRAPHY.text
} as const

// その他のエクスポート
export const BUTTON_STYLES = _BUTTON_STYLES
export const CARD_STYLES = _CARD_STYLES

export {
  SPACING
} from './design-system/spacing'

export {
  EFFECTS,
  TEXT_SHADOW,
  TEXT_BG_STYLES
} from './design-system/effects'

export {
  BREAKPOINTS,
  SECTION_PATTERNS
} from './design-system/tokens'

export {
  TYPOGRAPHY
} from './design-system/typography'

export {
  COLORS
} from './design-system/colors'

/**
 * 新しいデザインシステムの推奨インポート方法：
 *
 * @example
 * ```typescript
 * // 新しい方法（推奨）
 * import { COLORS, TYPOGRAPHY, COMPONENT_STYLES } from '@/lib/design-system'
 *
 * // 旧方法（互換性のために動作するが非推奨）
 * import { STYLES, SPACING, EFFECTS } from '@/lib/constants'
 * ```
 */