# 🎯 ポートフォリオサイト（portfolio.awakeinc.co.jp）開発引き継ぎドキュメント

**作成日**: 2025-10-28
**プロジェクト**: portfolio.awakeinc.co.jp
**目的**: 別のClaude Codeセッションでポートフォリオサイトを開発するための引き継ぎ

---

## 📋 プロジェクト概要

### サイト情報
- **URL**: https://portfolio.awakeinc.co.jp/
- **目的**: 株式会社Awakeのポートフォリオサイト（実績紹介）
- **関連サイト**: https://www.awakeinc.co.jp/ （メインサイト、既存）

### 現在の状況
- ✅ サイトは既に公開済み
- ✅ SEO基盤は実装済み（Title, Meta, OGP, Schema.org等）
- ❌ Google Search Console未登録
- ⚠️ いくつかのSEO改善点あり

---

## 🔍 SEO現状分析（2025-10-28実施）

### ✅ 実装済みの良好な要素

1. **基本的なSEO設定**
   - Titleタグ: "Awake Inc. - 適正価格でのホームページ制作"
   - Meta Description: "13万2000円からのホームページ制作サービス。必要な機能に絞り込んだ適正価格でご提供します。"
   - Viewport設定済み（モバイル対応）

2. **構造化データ**
   - Schema.org JSON-LD（Organization型）実装済み
   - 組織情報、連絡先、住所を含む

3. **OGPタグ完備**
   - og:title, og:description, og:image等
   - Twitter Card（summary_large_image）設定済み

4. **見出し構造**
   - h1タグ: "Awake Inc. Webとテクノロジーで、ビジネスを加速する"
   - h2, h3の階層構造あり

5. **技術スタック**
   - Next.js使用（高速化に有利）
   - Tailwind CSS（レスポンシブ対応）

### ⚠️ 改善が必要な点

#### 優先度: 高

1. **Google Search Console未登録**
   - 現在、メインサイト（sc-domain:awakeinc.co.jp）のみ登録
   - ポートフォリオサイトは未登録
   - **対応**: サブドメインとして別途登録が必要

2. **画像のalt属性不足**
   - ポートフォリオ画像にalt属性が見当たらない
   - SEO評価とアクセシビリティに悪影響

#### 優先度: 中

3. **キーワード最適化**
   - Meta keywordsがやや一般的
   - ターゲットキーワードの明確化が必要

4. **画像ファイル最適化**
   - 大きな画像の圧縮推奨
   - WebP形式への変換推奨

5. **内部リンク強化**
   - セクションリンク（#portfolio等）はあり
   - 関連ページへの相互リンク強化の余地あり

---

## 📝 実施すべきタスク

### Phase 1: Google Search Console登録（最優先）

#### 1. Google Search Consoleにプロパティ追加

**手順**:
```
1. https://search.google.com/search-console にアクセス
2. 「プロパティを追加」をクリック
3. URLプレフィックスを選択
4. 「https://portfolio.awakeinc.co.jp」を入力
5. 所有権確認方法を選択:
   - 方法A: DNSレコード追加（推奨）
   - 方法B: HTMLファイルアップロード
   - 方法C: HTMLタグ追加
```

**DNSレコード追加の場合**:
```
1. Google Search ConsoleでTXTレコードをコピー
2. ドメイン管理画面（お名前.com等）にログイン
3. DNS設定でTXTレコードを追加:
   - ホスト名: portfolio.awakeinc.co.jp
   - タイプ: TXT
   - 値: google-site-verification=XXXXXXXX
4. 保存後、Google Search Consoleで「確認」をクリック
```

#### 2. サイトマップ提出

**確認事項**:
- portfolio.awakeinc.co.jp/sitemap.xml が存在するか確認
- 存在しない場合、Next.jsでサイトマップ生成

**Next.jsサイトマップ生成（next-sitemap使用）**:
```bash
npm install next-sitemap --save-dev
```

`next-sitemap.config.js` を作成:
```javascript
module.exports = {
  siteUrl: 'https://portfolio.awakeinc.co.jp',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ]
  }
}
```

`package.json` にスクリプト追加:
```json
{
  "scripts": {
    "postbuild": "next-sitemap"
  }
}
```

**サイトマップ提出手順**:
```
1. Google Search Consoleの「サイトマップ」セクション
2. 「新しいサイトマップの追加」
3. 「sitemap.xml」と入力
4. 送信
```

#### 3. インデックス登録リクエスト

**主要ページ**:
```
https://portfolio.awakeinc.co.jp/
https://portfolio.awakeinc.co.jp/#portfolio
https://portfolio.awakeinc.co.jp/#services
https://portfolio.awakeinc.co.jp/#about
```

**手順**:
```
1. Google Search Consoleで「URL検査」
2. 各URLを入力
3. 「インデックス登録をリクエスト」をクリック
```

---

### Phase 2: 画像alt属性の追加

#### 対象ファイル確認

ポートフォリオサイトのリポジトリで以下を確認:
```bash
# 画像を含むコンポーネントを検索
grep -r "<img" src/
grep -r "<Image" src/  # Next.js Image component
```

#### alt属性追加例

**Before**:
```jsx
<img src="/portfolio/project1.jpg" />
```

**After**:
```jsx
<img
  src="/portfolio/project1.jpg"
  alt="チャットボット搭載ホームページ制作事例 - 株式会社○○様"
/>
```

**Next.js Imageコンポーネントの場合**:
```jsx
<Image
  src="/portfolio/project1.jpg"
  alt="AIチャットボット開発事例 - 顧客対応自動化システム"
  width={800}
  height={600}
/>
```

#### 推奨alt属性のパターン

```
実績紹介: "[サービス名]事例 - [クライアント名/業種]"
例: "ホームページ制作事例 - 製造業A社様"

サービス画像: "[サービス内容]を表すイメージ"
例: "AIチャットボットによる24時間顧客対応"

ロゴ・アイコン: "[会社名/サービス名] ロゴ"
例: "株式会社Awake ロゴマーク"
```

---

### Phase 3: 画像最適化

#### 1. WebP形式への変換

**既存のスクリプトを活用**（メインサイトで使用）:
```bash
# メインサイトのスクリプトを参照
node scripts/convert-assets-to-webp.js
```

または新規作成:
```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertToWebP(inputPath, outputPath) {
  await sharp(inputPath)
    .webp({ quality: 85 })
    .toFile(outputPath);
}

// 使用例
convertToWebP(
  'public/portfolio/project1.jpg',
  'public/portfolio/project1.webp'
);
```

#### 2. 画像圧縮

**推奨ツール**:
- TinyPNG/TinyJPG（オンライン）
- ImageOptim（Mac）
- sharp（Node.js）

**Next.js Image最適化**:
```jsx
<Image
  src="/portfolio/project1.jpg"
  alt="実績事例"
  width={800}
  height={600}
  quality={85}  // 品質設定
  loading="lazy"  // 遅延読み込み
/>
```

---

### Phase 4: キーワード最適化

#### 現在のキーワード戦略

メインサイトで使用中のキーワード（参考）:
```
- ホームページ制作
- AIチャットボット開発
- Amazon販売代行
- 東大和市
- web制作
```

#### ポートフォリオサイト向けキーワード候補

```
Primary（主要）:
- ホームページ制作 実績
- web制作 事例
- AIチャットボット 導入事例
- EC運営代行 実績

Secondary（補助）:
- 東大和市 ホームページ制作会社
- Awake Inc 制作実績
- 低価格ホームページ制作
- 月額制AI開発
```

#### Metaタグ更新案

**現在**:
```html
<title>Awake Inc. - 適正価格でのホームページ制作</title>
<meta name="description" content="13万2000円からのホームページ制作サービス。必要な機能に絞り込んだ適正価格でご提供します。">
```

**改善案**:
```html
<title>制作実績 | Awake Inc. - ホームページ制作・AIチャットボット開発事例</title>
<meta name="description" content="株式会社Awakeの制作実績。ホームページ制作、AIチャットボット開発、EC運営代行の事例をご紹介。東大和市の実績豊富なweb制作会社です。">
<meta name="keywords" content="ホームページ制作実績,web制作事例,AIチャットボット導入事例,東大和市,株式会社Awake">
```

---

## 🔧 技術的な引き継ぎ情報

### 開発環境

**前提条件**:
- Node.js（v18以上推奨）
- npm または yarn
- Git

**想定される技術スタック**:
- Next.js（App RouterまたはPages Router）
- React
- Tailwind CSS
- TypeScript（推奨）

### メインサイトとの連携

#### 共通デザインシステム

メインサイト（www.awakeinc.co.jp）で使用中:
```
統一デザインシステム: src/lib/design-system/unified.ts
- CONTAINER（コンテナ幅）
- SECTION_SPACING（セクション間隔）
- HEADING（見出しスタイル）
- TEXT（本文スタイル）
- BUTTON（ボタンスタイル）
- TRANSITION（アニメーション）
```

**ポートフォリオサイトでも同じデザインシステムを使用することを推奨**

#### カラーパレット

```css
Primary: #2563eb (青)
Secondary: #1e40af (濃紺)
Accent: #3b82f6 (ライトブルー)
Background: #ffffff (白)
Text: #1f2937 (ダークグレー)
```

#### フォント

```css
見出し: 'Noto Sans JP', sans-serif
本文: 'Noto Sans JP', sans-serif
```

### API連携（もしある場合）

#### Google Search Console API

**認証情報** (メインサイトで使用中):
- `gsc-credentials.json` - OAuth 2.0 クライアント認証情報
- `gsc-token.json` - リフレッシュトークン

**共有可能**:
同じGoogle Search Consoleアカウントを使用する場合、これらのファイルをコピー可能

**スクリプト**:
```bash
# サイトマップ提出
node scripts/gsc-submit-sitemap.js

# インデックス登録リクエスト
node scripts/gsc-request-indexing.js
```

**注意**: URLをポートフォリオサイトに変更する必要あり

---

## 📊 SEO監視とメンテナンス

### Google Search Consoleで監視する指標

**週次チェック**:
- [ ] インデックス登録数
- [ ] 検索クエリ（表示回数、クリック数、CTR）
- [ ] クロールエラーの有無

**月次チェック**:
- [ ] 検索パフォーマンス推移
- [ ] モバイルユーザビリティ
- [ ] Core Web Vitals（ページ速度）

### Google Analyticsの設定（推奨）

#### GA4プロパティ作成

```
1. Google Analyticsにログイン
2. 管理 → プロパティ作成
3. プロパティ名: "Awake Portfolio Site"
4. 測定ID（G-XXXXXXXXXX）を取得
```

#### Next.jsへの実装

`app/layout.tsx` または `_app.tsx`:
```jsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## 🎯 目標とKPI

### SEO目標（3ヶ月後）

- [ ] Google検索で「東大和市 ホームページ制作」で1ページ目表示
- [ ] Google検索で「Awake Inc 実績」で1位表示
- [ ] 月間オーガニック流入: 100セッション以上
- [ ] Google Search Consoleインデックス登録: 10ページ以上

### コンバージョン目標

- [ ] 問い合わせフォーム送信: 月5件以上
- [ ] 電話問い合わせ: 月3件以上
- [ ] ポートフォリオ詳細ページ閲覧: 月50セッション以上

---

## 📞 連絡先とリソース

### 株式会社Awake 情報

**会社情報**:
- 法人番号: 8012801020829
- 税ID: T8012801020829
- 住所: 東京都東大和市
- 電話: 042-843-4403
- メールアドレス: info@awakeinc.co.jp

**メインサイト**:
- URL: https://www.awakeinc.co.jp/
- リポジトリ: awake-website (このリポジトリ)

**サービス**:
1. ホームページ制作
   - スタンダード: 13.2万円
   - プレミアム: 24.8万円

2. AIチャットボット開発
   - 初期費用: 3.3万円
   - 月額: 3.3万円〜

3. Amazon販売代行
   - 初期費用: 0円
   - 手数料: 10-15%

### 参考ドキュメント

**このリポジトリ内**:
- `docs/SEO_IMPROVEMENT_PLAN.md` - SEO戦略全体
- `docs/GOOGLE_ADS_KEYWORDS.md` - キーワード戦略
- `src/lib/design-system/unified.ts` - デザインシステム
- `CLAUDE.md` - プロジェクト設定

**外部リソース**:
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com/
- Next.js公式ドキュメント: https://nextjs.org/docs

---

## 🚀 Claude Codeでの初回セッション開始時

### セッション開始時に伝える情報

```
「portfolio.awakeinc.co.jp のSEO改善と開発をお願いします。

プロジェクト引き継ぎドキュメント（docs/PORTFOLIO_SITE_HANDOFF.md）を
確認してください。

優先タスク:
1. Google Search Console登録
2. 画像alt属性の追加
3. サイトマップ生成と提出
4. インデックス登録リクエスト

現在の状況:
- サイトは公開済み（https://portfolio.awakeinc.co.jp/）
- SEO基盤は実装済み
- GSC未登録、画像alt属性不足

メインサイト（www.awakeinc.co.jp）とは別リポジトリです。
デザインシステムは統一してください。」
```

### 最初に実行すべきコマンド

```bash
# リポジトリのクローン（もし別の場合）
git clone [portfolio-site-repo-url]
cd [portfolio-site-directory]

# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# ファイル構造確認
ls -la src/
ls -la public/

# 画像ファイル確認
find public -name "*.jpg" -o -name "*.png"
find src -name "*.tsx" | xargs grep -l "<img\|<Image"
```

---

## ✅ チェックリスト

### Phase 1: GSC登録（今週中）
- [ ] Google Search Consoleにプロパティ追加
- [ ] 所有権確認完了
- [ ] サイトマップ生成
- [ ] サイトマップ提出
- [ ] 主要ページのインデックス登録リクエスト

### Phase 2: 画像最適化（今月中）
- [ ] 全画像ファイルのリストアップ
- [ ] alt属性の追加（全画像）
- [ ] WebP形式への変換
- [ ] ファイルサイズ圧縮

### Phase 3: キーワード最適化（今月中）
- [ ] ターゲットキーワードの決定
- [ ] Titleタグ更新
- [ ] Meta Description更新
- [ ] Meta Keywords追加
- [ ] 見出し構造の確認と改善

### Phase 4: 分析設定（今月中）
- [ ] Google Analytics設定
- [ ] コンバージョントラッキング設定
- [ ] ヒートマップツール検討（オプション）

### Phase 5: 継続改善（月次）
- [ ] SEOパフォーマンスレビュー
- [ ] キーワードランキング確認
- [ ] コンテンツ追加（新規実績）
- [ ] 内部リンク最適化

---

## 📝 メモ・補足

### ドメイン構成

```
awakeinc.co.jp/
├─ www.awakeinc.co.jp      ← メインサイト（コーポレートサイト）
│   ├─ /services/ai        → AIチャットボット紹介
│   ├─ /services/ec        → Amazon販売代行紹介
│   ├─ /services/web       → ホームページ制作紹介
│   ├─ /about              → 会社概要
│   └─ /faq                → よくある質問
│
└─ portfolio.awakeinc.co.jp ← ポートフォリオサイト（実績紹介）
    ├─ /                   → トップ（実績一覧）
    ├─ /#portfolio         → ポートフォリオセクション
    ├─ /#services          → サービスセクション
    └─ /#about             → 会社紹介セクション
```

### 相互リンク推奨

**メインサイトからポートフォリオサイトへ**:
- トップページに「制作実績はこちら」リンク
- サービスページに「導入事例を見る」リンク

**ポートフォリオサイトからメインサイトへ**:
- 各実績に「このサービスの詳細」リンク
- フッターに「サービス一覧」「お問い合わせ」リンク

これにより、SEO評価の相互強化が期待できます。

---

## 🔒 セキュリティ・注意事項

### 機密情報

**Gitにコミットしてはいけないファイル**:
```
gsc-credentials.json
gsc-token.json
google-ads-config.json
.env
.env.local
```

### 環境変数

`.env.local` 作成推奨:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
GOOGLE_CLIENT_ID=XXXXX
GOOGLE_CLIENT_SECRET=XXXXX
```

---

**最終更新**: 2025-10-28
**作成者**: Claude Code (awake-website project)
**次回レビュー**: 2025-11-28

---

## 📞 質問・不明点があれば

このドキュメントで不明な点があれば、メインサイト（awake-website）の
Claude Codeセッションで質問してください。

または、株式会社Awake担当者に直接お問い合わせください。

**Good luck with portfolio.awakeinc.co.jp development! 🚀**
