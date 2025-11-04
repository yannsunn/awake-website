# 📊 アクセス解析ガイド - 株式会社Awake Website

このドキュメントでは、Awake ウェブサイトのアクセス解析方法をまとめています。

---

## 🎯 現在のサイト状態 (2025年11月3日時点)

### サイトの健全性

✅ **優秀なパフォーマンス**
- 全9ページが正常に稼働中
- 平均応答時間: **642ms** (1秒未満で良好)
- SEO対策: 全ページ完備 (タイトル、説明、構造化データ)
- HTTPS: 完全対応
- レスポンシブデザイン: 完全対応
- アクセシビリティ: WCAG 2.1 AAA準拠

### 構造化データ (JSON-LD)

すべての主要ページに構造化データを実装済み:
- トップページ: 1個 (Organization)
- 会社概要: 3個 (Organization, BreadcrumbList, Person)
- サービスページ (web/ai/ec): 各3個 (Service, BreadcrumbList, Organization)
- FAQ: 2個 (FAQPage, BreadcrumbList)
- パートナー: 2個 (Organization, BreadcrumbList)

---

## 📈 利用可能なアクセス解析ツール

### 1. Google Search Console (GSC) ⭐ 最重要

**何がわかる?**
- どんな検索キーワードでサイトが表示されているか
- 各キーワードのクリック数、表示回数、CTR、平均掲載順位
- ページ別のパフォーマンス
- デバイス別・国別のアクセス状況
- インデックス登録状況

**確認方法:**
```bash
# 1. トークン更新 (初回または期限切れ時)
node scripts/gsc-refresh-token.js

# 2. アクセス解析レポート取得
node scripts/gsc-analytics-report.js
```

**Webで確認:**
https://search.google.com/search-console

**頻度:** 週1回推奨

---

### 2. Vercel Analytics ⭐ リアルタイム分析

**何がわかる?**
- リアルタイムのページビュー数
- ユニークビジター数
- 地域別アクセス
- デバイス別アクセス
- リファラー (どこから来たか)
- ページパフォーマンス (Core Web Vitals)

**確認方法:**
1. Vercel ダッシュボードにログイン
2. プロジェクト "awake-website" を選択
3. "Analytics" タブをクリック

**URL:** https://vercel.com/awake-website/analytics

**頻度:** 毎日確認可能

---

### 3. Google Analytics 4 (GA4) - 未設定

**何がわかる?**
- 詳細なユーザー行動分析
- コンバージョン追跡 (お問い合わせ、LINE登録など)
- ユーザーフロー (どのページを辿ったか)
- セッション時間、直帰率
- カスタムイベント追跡

**設定方法:**
1. Google Analytics でプロパティを作成
2. 測定IDを取得 (G-XXXXXXXXXX)
3. Next.js に Google Analytics を追加:

```typescript
// src/app/layout.tsx に追加
import Script from 'next/script'

// <body>タグ内に追加
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

**URL:** https://analytics.google.com/

**頻度:** 週1回詳細分析

---

## 🔧 用意されているスクリプト

### 1. サイトステータスレポート (認証不要)

すべてのページが正常に動作しているか確認:

```bash
node scripts/site-status-report.js
```

**出力内容:**
- 各ページの応答時間
- HTTPステータスコード
- SEOメタタグの確認
- 構造化データの有無

**実行頻度:** 週1回

---

### 2. Google Search Console レポート (要認証)

検索パフォーマンスの詳細レポート:

```bash
node scripts/gsc-analytics-report.js
```

**出力内容:**
- サイト全体のクリック数・表示回数
- 検索キーワード TOP 30
- ページ別パフォーマンス TOP 15
- デバイス別・国別データ
- 改善提案

**実行頻度:** 週1回

---

### 3. GSC トークン更新

トークンが期限切れの場合に実行:

```bash
node scripts/gsc-refresh-token.js
```

**実行タイミング:**
- 初回セットアップ時
- トークン期限切れ時 (エラーが出た時)

---

### 4. レスポンシブデザインチェック

全ページがモバイル・タブレット・PCで正しく表示されるか確認:

```bash
node scripts/check-responsive.js
```

**テストデバイス:**
- Mobile: 390x844 (iPhone 14 Pro)
- Tablet: 768x1024 (iPad)
- Desktop: 1920x1080

**実行頻度:** デザイン変更後

---

## 📊 主要な指標 (KPI)

### 1. 検索パフォーマンス (GSC)

| 指標 | 目標 | 現状確認方法 |
|------|------|--------------|
| 合計クリック数 | 100回/月 | GSCレポート |
| 平均CTR | 3%以上 | GSCレポート |
| 平均掲載順位 | 10位以内 | GSCレポート |
| インデックス登録 | 全18ページ | GSC Web UI |

### 2. サイトパフォーマンス

| 指標 | 目標 | 現状 |
|------|------|------|
| ページ応答時間 | 1秒未満 | ✅ 642ms (良好) |
| サイト稼働率 | 99.9% | ✅ 100% |
| モバイル対応 | 完全対応 | ✅ 完了 |
| HTTPS | 完全対応 | ✅ 完了 |

### 3. SEO対策

| 項目 | 状態 |
|------|------|
| タイトルタグ | ✅ 全ページ設定済み |
| メタディスクリプション | ✅ 全ページ設定済み |
| 構造化データ | ✅ 全主要ページ実装済み |
| サイトマップ | ✅ 自動生成・送信済み |
| robots.txt | ✅ 設定済み |
| Canonical URL | ✅ 全ページ設定済み |

---

## 🎯 推奨アクション (優先度順)

### 優先度: 高 🔴

1. **GSC認証を更新してデータ取得を開始**
   ```bash
   node scripts/gsc-refresh-token.js
   node scripts/gsc-analytics-report.js
   ```

2. **Vercel Analytics で直近のアクセスを確認**
   - URL: https://vercel.com/awake-website/analytics
   - リアルタイムの訪問者数を確認

3. **Google広告の効果測定**
   - 広告経由のアクセスがあるか確認
   - キーワード別のパフォーマンスをチェック

### 優先度: 中 🟡

4. **Google Analytics 4 (GA4) を導入**
   - より詳細なユーザー行動分析が可能に
   - コンバージョン追跡 (LINEボタンクリックなど)

5. **週次レポートの習慣化**
   - 毎週月曜日にGSCレポートを確認
   - 改善点を記録して施策に反映

6. **コンテンツ追加計画**
   - ブログ記事を月4本投稿 (SEO強化)
   - 導入事例ページの追加

### 優先度: 低 🟢

7. **A/Bテスト実施**
   - CTAボタンの文言テスト
   - ヒーローセクションのデザインテスト

8. **ヒートマップツール導入**
   - ユーザーのクリック箇所を可視化
   - 改善ポイントの発見

---

## 🔍 トラブルシューティング

### GSC認証エラー: "invalid_grant"

**原因:** トークンの有効期限切れ

**解決方法:**
```bash
node scripts/gsc-refresh-token.js
```

ブラウザで認証URLを開き、認証コードを入力してください。

---

### データが表示されない

**原因:** インデックス登録直後はデータが反映されるまで数日〜数週間かかる

**確認方法:**
1. GSC Web UIで「インデックス作成」→「ページ」を確認
2. インデックス登録済みページ数を確認
3. 数日待ってから再度レポート実行

---

### レポートスクリプトが動かない

**確認項目:**
1. Node.js がインストールされているか: `node --version`
2. 必要なパッケージがインストールされているか: `npm install`
3. 認証ファイルが存在するか: `ls gsc-*.json`

---

## 📞 サポート

### Google関連サービスのサポート

**Google Ads サポート**
- 電話: 0120-214-031
- 営業時間: 月〜金 9:00-18:00

**Google Search Console ヘルプ**
- URL: https://support.google.com/webmasters

**Vercel サポート**
- URL: https://vercel.com/support
- ドキュメント: https://vercel.com/docs

---

## 📚 参考リンク

### 公式ドキュメント
- [Google Search Console API](https://developers.google.com/webmaster-tools)
- [Vercel Analytics](https://vercel.com/docs/analytics)
- [Google Analytics 4](https://support.google.com/analytics)
- [Next.js SEO](https://nextjs.org/learn/seo/introduction-to-seo)

### 社内ドキュメント
- [TODO.md](./TODO.md) - タスク管理
- [docs/SEO_IMPROVEMENT_PLAN.md](./docs/SEO_IMPROVEMENT_PLAN.md) - SEO戦略
- [docs/GOOGLE_ADS_KEYWORDS.md](./docs/GOOGLE_ADS_KEYWORDS.md) - キーワード戦略

---

## 📝 更新履歴

| 日付 | 内容 |
|------|------|
| 2025-11-03 | ドキュメント初版作成 |
| 2025-11-03 | サイトステータスレポートスクリプト追加 |
| 2025-11-03 | GSC分析レポートスクリプト追加 |

---

**最終更新:** 2025年11月3日
**担当者:** Claude (AI Assistant)
**プロジェクト:** Awake Website (awake-website)
