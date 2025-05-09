# My Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/a6db04dd-b6c9-4b3a-bc87-db5599c6fa25/deploy-status)](https://app.netlify.com/sites/awakeinc/deploys)

Modern website built with Next.js and TailwindCSS.

## プロジェクト概要

株式会社Awakeの公式ウェブサイトのソースコードです。ネット通販、AI事業、保険紹介などのサービスを提供する会社のコーポレートサイトとして、モダンな技術とデザインを採用しています。

## 技術スタック

- React
- Vite
- TailwindCSS
- JavaScript ES6+
- CSS3 / SCSS

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# 本番用ビルド
npm run build

# ビルドのプレビュー
npm run preview
```

## プロジェクト構造

```
/
├── public/               # 静的アセット
│   └── assets/
│       ├── images/       # 画像ファイル
│       └── ...
├── src/                  # ソースコード
│   ├── components/       # Reactコンポーネント
│   ├── js/               # JavaScriptファイル
│   │   └── core/         # コアモジュール
│   ├── pages/            # ページコンポーネント
│   ├── styles/           # CSSファイル
│   │   ├── animations/   # アニメーション関連
│   │   ├── base/         # ベーススタイル
│   │   ├── components/   # コンポーネントスタイル
│   │   ├── layouts/      # レイアウトスタイル
│   │   └── main/         # メインスタイル
│   └── index.jsx         # エントリーポイント
├── .github/              # GitHub設定
│   └── workflows/        # GitHub Actions
├── netlify.toml          # Netlify設定
├── vercel.json           # Vercel設定
├── vite.config.js        # Vite設定
├── tailwind.config.js    # Tailwind設定
└── package.json          # npm設定
```

## デプロイ方法

### Netlify

1. Netlifyアカウントを作成し、新しいサイトを追加
2. GitHubリポジトリと連携
3. 以下の設定を行う:
   - ビルドコマンド: `npm run build`
   - 公開ディレクトリ: `dist`

または、GitHub Actions経由でデプロイする場合は、以下の環境変数を設定:
- `NETLIFY_AUTH_TOKEN`: Netlify個人アクセストークン
- `NETLIFY_SITE_ID`: デプロイ先のNetlifyサイトID

### Vercel

1. Vercelアカウントを作成し、新しいプロジェクトを追加
2. GitHubリポジトリと連携
3. フレームワークプリセットとして「Vite」を選択

設定はすべて`vercel.json`ファイルに含まれています。

## パフォーマンス最適化

- 画像の遅延読み込み
- CSSとJSの最小化
- モジュール分割によるコード最適化
- コンポーネントの条件付きレンダリング
- アニメーションの最適化

## ブランチ戦略

- `main`: 本番環境用の安定版コード
- `develop`: 開発環境用のコード
- `feature/*`: 新機能開発用
- `bugfix/*`: バグ修正用

## コントリビューション

1. フォークしてブランチを作成
2. 変更をコミット
3. プルリクエストを送信

## ライセンス

MIT

## 連絡先

株式会社Awake
contact@awakeinc.co.jp

## Netlifyフォームのテスト方法

ローカル環境でNetlifyフォームの動作をテストするには以下の手順を実行してください：

1. Netlify CLIをインストールします
```bash
npm install -g netlify-cli
```

2. ローカルサーバーを起動します
```bash
netlify dev
```

3. ブラウザで `http://localhost:8888` にアクセスしてください

**注意**: ローカル環境では実際にフォームデータが送信されず、コンソールに出力されます。実際の送信テストはデプロイ環境で行ってください。

## ダークモード対応

サイトはダークモードに対応しています。ユーザーのシステム設定に応じて自動的に切り替わります。
カスタマイズは `css/style.css` の `@media (prefers-color-scheme: dark)` セクションで行えます。 