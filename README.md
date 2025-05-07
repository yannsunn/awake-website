# 株式会社Awake 公式ウェブサイト

このリポジトリは株式会社Awakeの公式ウェブサイトのソースコードを含んでいます。

## 主な特徴

- モダンなReactベースのコンポーネント設計
- レスポンシブデザイン
- TailwindCSSによるスタイリング
- ダークモード対応
- アニメーションとインタラクティブな要素
- SEO最適化

## UI/UX最適化

このプロジェクトでは、以下のUI/UX最適化が行われています：

### 1. ダークモード
- システム設定に基づく自動テーマ切り替え
- カスタムダークモードスタイル
- スムーズな切り替えアニメーション

### 2. アニメーション
- スクロールに基づくフェードイン
- スタガーアニメーション（連続表示効果）
- パラレックス効果
- ホバーエフェクト

### 3. インタラクティブな要素
- スクロールトップボタン
- タブインターフェース
- カードフリップ機能
- フォームバリデーション

### 4. パフォーマンス最適化
- コンポーネントの分割
- 非同期ローディング
- スケルトンローディング

## 技術スタック

- React 18
- Vite
- TailwindCSS
- Lucide Icons
- PostCSS

## 開発方法

### 必要条件

- Node.js 18以上
- npm 8以上

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/awake-website.git
cd awake-website

# 依存関係をインストール
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

## プロジェクト構造

```
/
├── public/         # 静的アセット
├── src/
│   ├── components/ # Reactコンポーネント
│   ├── js/         # JavaScriptユーティリティ
│   └── styles/     # CSSスタイル
├── index.html      # エントリーポイント
└── vite.config.js  # Vite設定
```

## コンポーネント構造

- `AwakeWebsite.jsx` - メインコンポーネント
- `Header.jsx` - ヘッダーとナビゲーション
- `Hero.jsx` - ヒーローセクション
- `About.jsx` - 会社概要セクション
- `Services.jsx` - サービス内容セクション
- `Contact.jsx` - お問い合わせセクション
- `Footer.jsx` - フッターセクション
- `ThemeToggle.jsx` - テーマ切り替えボタン
- `ScrollToTopButton.jsx` - トップスクロールボタン

## ライセンス

All Rights Reserved - 株式会社Awake 