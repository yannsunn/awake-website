// 🚀 ULTRA STYLES - constants.tsへの統合完了
// このファイルは後方互換性のためのre-exportです

export {
  TEXT_SHADOW,
  CARD_STYLES,
  TEXT_BG_STYLES,
  SECTION_PATTERNS
} from '@/lib/constants'

// レガシーエクスポート - 段階的に削除予定
import { INTERACTIVE_STYLES } from '@/lib/styles'
export { INTERACTIVE_STYLES }
