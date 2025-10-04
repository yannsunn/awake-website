# 株式会社Awake コーポレートサイト

> 適正コストで最大の価値を

株式会社Awakeの公式コーポレートサイトです。Next.js 15 App Routerで構築された、モダンでアクセシブルなWebサイトです。

## 🚀 特徴

- ✅ **Next.js 15** - 最新のApp Router使用
- ✅ **TypeScript** - 完全な型安全性
- ✅ **Tailwind CSS** - モダンなスタイリング
- ✅ **WCAG AAA準拠** - アクセシビリティ対応
- ✅ **SEO最適化** - 構造化データ、メタタグ完備
- ✅ **パフォーマンス最適化** - 画像最適化、コード分割
- ✅ **AIチャットボット** - Claude API統合

## 📋 提供サービス

1. **ホームページ制作** - 売上を生むサイトを適正価格で
2. **AIチャットボット開発** - 24時間対応の顧客サポート
3. **Amazon代理店サービス** - EC運営の完全サポート

## 🛠️ 技術スタック

### フレームワーク・ライブラリ
- **Next.js** 15.3.3
- **React** 18.3.1
- **TypeScript** 5.7.2

### スタイリング
- **Tailwind CSS** 3.4.16
- **Framer Motion** 12.23.12 (アニメーション)

### その他
- **Lucide React** - アイコン
- **clsx & tailwind-merge** - クラス名管理

## 📁 プロジェクト構造

```
awake-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # 会社概要
│   │   ├── faq/               # よくある質問
│   │   ├── partners/          # パートナー企業
│   │   ├── services/[slug]/   # サービス詳細
│   │   ├── legal/             # 法的ページ
│   │   └── api/               # APIルート
│   ├── components/
│   │   ├── ui/                # 基本UIコンポーネント
│   │   ├── sections/          # セクションコンポーネント
│   │   ├── layout/            # レイアウトコンポーネント
│   │   ├── chat/              # チャットボット
│   │   └── effects/           # ビジュアルエフェクト
│   ├── lib/                   # ユーティリティ・定数
│   └── hooks/                 # カスタムフック
├── public/
│   ├── images/                # 画像アセット
│   └── assets/                # その他アセット
└── docs/                      # ドキュメント

```

## 🚦 セットアップ

### 必要要件
- Node.js 18.0.0以上
- npm または yarn

### インストール

```bash
# リポジトリのクローン
git clone [repository-url]
cd awake-website

# 依存関係のインストール
npm install

# 環境変数の設定
cp .env.example .env.local
# .env.localを編集してANTHROPIC_API_KEYなどを設定
```

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
# プロダクションビルド
npm run build

# ビルドの実行
npm run start
```

### その他のコマンド

```bash
# ESLint実行
npm run lint

# TypeScript型チェック
npm run type-check

# バンドルサイズ分析
ANALYZE=true npm run build
```

## 🔐 環境変数

```env
# .env.local
ANTHROPIC_API_KEY=your_anthropic_api_key_here
NEXT_PUBLIC_SITE_URL=https://awakeinc.co.jp
```

## 📱 対応ブラウザ

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- iOS Safari (iOS 12+)
- Android Chrome (Android 5+)

## ♿ アクセシビリティ

本サイトは **WCAG 2.1 AAA基準** に準拠しています：

- ✅ キーボードナビゲーション対応
- ✅ スクリーンリーダー対応
- ✅ 高コントラストモード対応
- ✅ タッチターゲット最小48px
- ✅ スキップリンク実装

## 📄 ライセンス

Copyright © 2020-2025 株式会社Awake. All rights reserved.

## 📞 お問い合わせ

- **会社名**: 株式会社Awake
- **所在地**: 〒207-0013 東京都東大和市向原5-1129-61 渡辺ビル1F
- **電話**: 050-7115-4948
- **メール**: shop@awakeinc.co.jp
- **Website**: https://awakeinc.co.jp/
- **営業時間**: 平日 9:00-18:00（土日祝日休み）

---

Built with ❤️ by Awake Inc.
