# デザインシステム統一計画

## 📋 現状分析

### 現在の問題点

プロジェクト内に **3つの異なるデザインシステムファイル** が存在し、スタイルの一貫性とメンテナンス性に課題があります。

#### 重複ファイル

1. **`src/lib/constants.ts`** (主要システム)
   - UIスタイル定数（STYLES）
   - ボタン、カード、タイポグラフィ、フォームの定義
   - 使用箇所: 多数のコンポーネントで使用中

2. **`src/lib/ultra-design-system.ts`**
   - カラーパレット（COLORS）
   - タイポグラフィシステム（TYPOGRAPHY）
   - スペーシングシステム（SPACING）
   - 使用状況: 限定的

3. **`src/lib/ultra-styles.ts`**
   - 追加のスタイル定義
   - 使用状況: 限定的

### 問題の影響

- ❌ どのシステムを使うべきか不明確
- ❌ スタイルの一貫性が保てない
- ❌ 保守コストが高い
- ❌ 新規開発者の学習コストが高い

---

## 🎯 統一計画

### フェーズ1: 調査と分析（完了）

- [x] 各ファイルの使用状況を確認
- [x] 重複定義を特定
- [x] 依存関係を分析

### フェーズ2: 統一デザインシステムの設計

#### 新しいファイル構成

```
src/lib/design-system/
├── index.ts              # エクスポート統合
├── colors.ts             # カラーパレット
├── typography.ts         # タイポグラフィシステム
├── spacing.ts            # スペーシングシステム
├── components.ts         # コンポーネントスタイル
└── tokens.ts             # デザイントークン
```

#### 統合方針

**1. `colors.ts` - カラーシステム**
```typescript
export const COLORS = {
  // プライマリ
  primary: {
    50: '#eff6ff',
    // ... ultra-design-system.tsから移行
  },
  // グレースケール
  gray: {
    50: '#f9fafb',
    // ... ultra-design-system.tsから移行
  },
  // WCAG AAA準拠カラー（constants.tsから移行）
  accessible: {
    blue: '#0066cc',
    // ...
  }
} as const
```

**2. `typography.ts` - タイポグラフィ**
```typescript
export const TYPOGRAPHY = {
  // constants.tsのheadingシステムを採用
  heading: {
    h1: {
      primary: 'text-4xl sm:text-5xl md:text-6xl font-extrabold...',
      // ...
    },
    // ...
  },
  // ultra-design-system.tsのレスポンシブシステムも統合
  responsive: {
    h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl...',
    // ...
  }
} as const
```

**3. `spacing.ts` - スペーシング**
```typescript
// 8pxグリッドシステム（ultra-design-system.ts）
export const SPACING = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  '2xl': '4rem',  // 64px
  '3xl': '6rem'   // 96px
} as const

// constants.tsのレスポンシブスペーシングも統合
export const RESPONSIVE_SPACING = {
  section: {
    padding: 'py-12 sm:py-16 lg:py-20',
    // ...
  }
}
```

**4. `components.ts` - コンポーネントスタイル**
```typescript
// constants.tsのSTYLESを整理して移行
export const COMPONENT_STYLES = {
  button: {
    // ...
  },
  card: {
    // ...
  },
  form: {
    // ...
  }
} as const
```

---

### フェーズ3: 段階的な移行

#### ステップ1: 新しいデザインシステム作成
```bash
# 新しいディレクトリ作成
mkdir -p src/lib/design-system

# 各ファイル作成
touch src/lib/design-system/{index,colors,typography,spacing,components,tokens}.ts
```

#### ステップ2: 既存システムから移行
1. `ultra-design-system.ts`の内容を新システムにコピー
2. `constants.ts`のSTYLESを新システムに統合
3. `ultra-styles.ts`の有用な部分を統合

#### ステップ3: 後方互換性の維持
```typescript
// src/lib/constants.ts (一時的)
// 既存のインポートが壊れないように、新システムから再エクスポート
export { COMPONENT_STYLES as STYLES } from './design-system'
export { BUTTON_STYLES } from './design-system/components'
```

#### ステップ4: コンポーネントの更新
```typescript
// 変更前
import { STYLES } from '@/lib/constants'

// 変更後
import { COMPONENT_STYLES } from '@/lib/design-system'
// または
import { button } from '@/lib/design-system/components'
```

#### ステップ5: 旧ファイルの削除
- すべてのコンポーネントを更新後
- `ultra-design-system.ts` 削除
- `ultra-styles.ts` 削除
- `constants.ts` から再エクスポートを削除

---

### フェーズ4: ドキュメント整備

#### Storybook導入（オプション）
```bash
npx sb init
```

デザインシステムの各コンポーネントとスタイルをStorybookで可視化

#### 使用ガイド作成
`docs/DESIGN_SYSTEM_GUIDE.md`を作成し、以下を記載：
- カラーの使い方
- タイポグラフィの使い方
- スペーシングの使い方
- コンポーネントスタイルの適用方法

---

## 📅 実装スケジュール

### 即時対応可能（1-2時間）
- [x] 調査と分析
- [x] 統一計画の策定
- [ ] 新しいデザインシステムディレクトリの作成

### 短期（1週間以内）
- [ ] 新デザインシステムファイルの実装
- [ ] 後方互換性を保ちながら移行開始
- [ ] 主要コンポーネントの更新（5-10ファイル/日）

### 中期（2週間以内）
- [ ] 全コンポーネントの更新完了
- [ ] 旧ファイルの削除
- [ ] テストとリグレッションチェック

### 長期（1ヶ月以内）
- [ ] ドキュメント整備
- [ ] Storybookの導入（オプション）
- [ ] チームトレーニング

---

## ✅ 成功の指標

1. **統一性**: すべてのスタイルが単一のシステムから提供される
2. **保守性**: 新しいスタイル追加が容易になる
3. **開発速度**: コンポーネント開発が20%高速化
4. **一貫性**: UIの一貫性が向上
5. **ドキュメント**: 完全なデザインシステムガイドが存在

---

## ⚠️ リスクと対策

| リスク | 影響 | 対策 |
|--------|------|------|
| 移行中のビルドエラー | 高 | 後方互換性を維持、段階的移行 |
| 既存コンポーネントの破損 | 中 | 各更新後にテスト実行 |
| チームの混乱 | 低 | ドキュメント整備、移行ガイド作成 |

---

## 🚀 次のアクション

このプランを承認後、以下を実行：

1. **新デザインシステムの実装開始**
   ```bash
   mkdir -p src/lib/design-system
   ```

2. **最初のファイルを作成**
   - colors.ts
   - index.ts

3. **1つのコンポーネントでテスト**
   - 小さなコンポーネントで新システムを試す
   - 問題がなければ本格的に移行

---

**作成日**: 2025-10-04
**ステータス**: 計画策定完了 - 実装待ち
**担当**: 開発チーム
