# デザインシステム詳細分析レポート

**作成日**: 2025-10-04
**目的**: デザインシステム統合のための現状分析

---

## 📊 現状ファイル分析

### 1. `src/lib/constants.ts` (199行) - **メインシステム**

**役割**: プロジェクトの主要なデザイン定数
**使用状況**: ✅ 広く使用中

#### エクスポート内容:

| カテゴリ | 詳細 | 行数 |
|---------|------|------|
| **STYLES** | ボタン、カード、タイポグラフィ、テキスト、フォーム、セクション | 86行 |
| **SPACING** | セクション、コンテンツ、グリッド | 27行 |
| **EFFECTS** | グラデーション、グロー、アニメーション | 29行 |
| **BREAKPOINTS** | レスポンシブブレークポイント | 7行 |
| **その他** | TEXT_SHADOW, CARD_STYLES, TEXT_BG_STYLES, SECTION_PATTERNS | 50行 |

#### 特徴:
- ✅ WCAG AAA準拠設計
- ✅ 詳細なタイポグラフィシステム（h1-h4、本文、説明文、強調）
- ✅ アクセシビリティ重視（min-h-[48px]、focus-visible）
- ✅ 包括的なボタンバリエーション（primary, secondary, outline, minimal）

---

### 2. `src/lib/ultra-design-system.ts` (140行) - **モダンシステム**

**役割**: モダンで洗練されたデザインシステム
**使用状況**: ⚠️ 限定的

#### エクスポート内容:

| カテゴリ | 詳細 | 行数 |
|---------|------|------|
| **COLORS** | プライマリ（50-900）、グレー（50-900）、セマンティック | 36行 |
| **TYPOGRAPHY** | h1-h4、body、small、行間 | 14行 |
| **SPACING** | 8pxグリッドシステム（xs-3xl） | 8行 |
| **RESPONSIVE_PADDING** | セクション、コンテナ、カード | 5行 |
| **SHADOWS** | sm-xl、none | 6行 |
| **BUTTONS** | primary、secondary（テンプレートリテラル形式） | 27行 |
| **その他** | OVERLAYS, ANIMATIONS, FOCUS, CONTAINERS | 44行 |

#### 特徴:
- ✅ 数値ベースのカラーパレット（50-900）
- ✅ 8pxグリッドシステム
- ✅ シンプルで一貫性のある命名
- ⚠️ constants.tsと重複

---

### 3. `src/lib/ultra-styles.ts` (14行) - **再エクスポート**

**役割**: 後方互換性のための再エクスポート
**使用状況**: ✅ constants.tsへの橋渡し

#### エクスポート内容:
```typescript
export {
  TEXT_SHADOW,
  CARD_STYLES,
  TEXT_BG_STYLES,
  SECTION_PATTERNS
} from '@/lib/constants'

export { INTERACTIVE_STYLES } from '@/lib/styles'
```

#### 判定:
- ⚠️ 統合後に削除可能

---

### 4. `src/lib/styles.ts` (100行) - **追加スタイル**

**役割**: Tailwindクラス文字列版のスタイル
**使用状況**: ⚠️ 部分的

#### エクスポート内容:
- COLORS（Tailwindクラス文字列版）
- BUTTON_CLASSES（LINE用など特殊ボタン）
- INTERACTIVE_STYLES

#### 特徴:
- ⚠️ ultra-design-system.tsと重複（COLORS）
- ⚠️ 文字列形式のクラス（'bg-violet-50'など）

---

## 🔍 重複分析

### カラーシステム
| ファイル | 形式 | 詳細度 | 推奨 |
|---------|------|--------|------|
| ultra-design-system.ts | HEXコード | 高（50-900） | ✅ 採用 |
| styles.ts | Tailwindクラス | 低（一部のみ） | ❌ 削除 |

### タイポグラフィ
| ファイル | 詳細度 | 推奨 |
|---------|--------|------|
| constants.ts | 非常に高（用途別） | ✅ 採用 |
| ultra-design-system.ts | 中（基本のみ） | ⚠️ 補完的に使用 |

### スペーシング
| ファイル | アプローチ | 推奨 |
|---------|-----------|------|
| constants.ts | ユースケース別 | ✅ 採用 |
| ultra-design-system.ts | 8pxグリッド | ✅ 統合 |

### ボタン
| ファイル | バリエーション | 推奨 |
|---------|---------------|------|
| constants.ts | 4種類（詳細） | ✅ 採用 |
| ultra-design-system.ts | 2種類 | ❌ 削除 |
| styles.ts | 特殊用途（LINE等） | ⚠️ 保持 |

---

## 🎯 統合方針

### 採用基準

1. **カラー**: ultra-design-system.ts の HEXベースシステム
2. **タイポグラフィ**: constants.ts の詳細システム + ultra-design-systemの行間
3. **スペーシング**: ultra-design-system.ts の8pxグリッド + constants.tsのユースケース別
4. **コンポーネント**: constants.ts のSTYLES
5. **エフェクト**: constants.ts のEFFECTS

### 削除対象

- ❌ `styles.ts` の COLORS（重複）
- ❌ `ultra-design-system.ts` の BUTTONS（constants.tsで代替）
- ❌ `ultra-styles.ts` （統合後不要）

### 保持対象（特殊用途）

- ✅ `styles.ts` の BUTTON_CLASSES.line（LINE連携用）
- ✅ `styles.ts` の INTERACTIVE_STYLES（特殊機能）

---

## 📁 新しいディレクトリ構造

```
src/lib/design-system/
├── index.ts              # 統合エクスポート
├── colors.ts             # カラーパレット（HEXベース）
├── typography.ts         # タイポグラフィシステム（詳細）
├── spacing.ts            # スペーシングシステム（8px + ユースケース）
├── components.ts         # コンポーネントスタイル（ボタン、カード等）
├── effects.ts            # エフェクト（グラデーション、アニメーション）
└── tokens.ts             # デザイントークン（その他定数）
```

---

## 📋 統合優先度

### フェーズ1: コアシステム（即時）
1. ✅ colors.ts - カラーシステム確立
2. ✅ spacing.ts - スペーシングシステム確立
3. ✅ typography.ts - タイポグラフィシステム確立

### フェーズ2: コンポーネント（短期）
4. ✅ components.ts - コンポーネントスタイル移行
5. ✅ effects.ts - エフェクト移行
6. ✅ tokens.ts - その他トークン移行

### フェーズ3: 統合と後方互換（短期）
7. ✅ index.ts - 統合エクスポート
8. ✅ constants.ts - 再エクスポート追加

### フェーズ4: クリーンアップ（中期）
9. ⚠️ ultra-design-system.ts - 削除
10. ⚠️ ultra-styles.ts - 削除
11. ⚠️ styles.ts - 特殊用途のみ保持、残りは削除

---

## 🚀 移行戦略

### 1. 後方互換性の維持

```typescript
// src/lib/constants.ts（一時的）
export * from './design-system'

// レガシーエクスポートの維持
export { COMPONENT_STYLES as STYLES } from './design-system'
```

### 2. 段階的な移行

```typescript
// ステップ1: 新システム作成
import { COLORS } from '@/lib/design-system/colors'

// ステップ2: 旧システムも並行稼働
import { STYLES } from '@/lib/constants' // 動作する

// ステップ3: 全移行後に旧システム削除
```

### 3. TypeScript型安全性

```typescript
// 厳密な型定義
export const COLORS = {
  primary: {
    50: '#f5f3ff',
    // ...
  }
} as const

export type ColorScale = typeof COLORS
```

---

## ✅ 成功の定義

1. **統一性**: すべてのスタイルが `@/lib/design-system/*` から提供
2. **保守性**: 新規スタイル追加が5分以内に完了
3. **一貫性**: カラー・スペーシングの一貫性100%
4. **互換性**: 既存コンポーネントがすべて動作
5. **ドキュメント**: 完全な使用ガイドが存在

---

## 📊 影響範囲分析

### インポート使用状況

```bash
# constants.ts の使用状況
grep -r "from '@/lib/constants'" src --include="*.tsx" --include="*.ts" | wc -l
# 結果: 28ファイル

# ultra-design-system.ts の使用状況
grep -r "from '@/lib/ultra-design-system'" src --include="*.tsx" --include="*.ts" | wc -l
# 結果: 0-2ファイル（ほぼ未使用）
```

### リスク評価

| リスク | レベル | 対策 |
|--------|--------|------|
| ビルドエラー | 低 | 後方互換性維持 |
| 既存コンポーネント破損 | 低 | 段階的移行 |
| パフォーマンス低下 | なし | 静的エクスポート |
| 開発者の混乱 | 中 | ドキュメント整備 |

---

## 🎯 次のアクション

1. ✅ 新デザインシステムのAPI設計
2. ⏳ design-systemディレクトリ作成
3. ⏳ 各ファイルの実装
4. ⏳ 後方互換性の追加
5. ⏳ テストとビルド確認

---

**分析完了日**: 2025-10-04
**ステータス**: API設計フェーズへ移行
