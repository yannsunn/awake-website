# 🤖 AI検索エンジン最適化（AI SEO）

**作成日**: 2025-10-28
**対象サイト**: https://www.awakeinc.co.jp/

---

## 📊 AI検索エンジン対応状況

### ✅ 実装済み（2025-10-28）

#### 1. robots.txt - AI検索エンジンクローラー対応

**ファイル**: `public/robots.txt`

**対応AI検索エンジン**:
- ✅ OpenAI ChatGPT（GPTBot, ChatGPT-User）
- ✅ Anthropic Claude（anthropic-ai, Claude-Web）
- ✅ Google Gemini/Bard（Google-Extended）
- ✅ Perplexity（PerplexityBot）
- ✅ Cohere（cohere-ai）
- ✅ Meta AI（FacebookBot）
- ✅ Common Crawl（CCBot）

**設定内容**:
```
User-agent: GPTBot
Allow: /

User-agent: anthropic-ai
Allow: /
...
```

すべてのAI検索エンジンクローラーが全ページにアクセス可能です。

---

#### 2. sitemap.xml - 完全なサイト構造

**ファイル**: 自動生成（Next.js）

**登録ページ**:
- トップページ（priority: 1.0）
- サービス3ページ（priority: 0.9）
  - /services/ai
  - /services/ec
  - /services/web
- 会社情報（priority: 0.8）
- パートナー（priority: 0.7）
- FAQ（priority: 0.7）
- プライバシーポリシー（priority: 0.3）

更新頻度: weekly（サービスページ）、monthly（会社情報）

---

#### 3. 構造化データ（Schema.org JSON-LD）

**ファイル**: `src/lib/enhanced-schema.ts`

**実装内容**:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "株式会社Awake（アウェイク）",
  "legalName": "株式会社Awake",
  "alternateName": ["Awake Inc.", "アウェイク"],
  "description": "東京都東大和市のWeb制作・AI開発・EC運営支援企業",
  "url": "https://www.awakeinc.co.jp",
  "logo": "https://www.awakeinc.co.jp/assets/images/logo.svg",
  "address": {...},
  "contactPoint": {...},
  "taxID": "T8012801020829",
  "vatID": "8012801020829",
  "aggregateRating": {
    "ratingValue": "4.9",
    "reviewCount": "47"
  },
  "service": [
    {
      "@type": "Service",
      "name": "チャットボット搭載ホームページ制作",
      "description": "...",
      "offers": {
        "price": "198000",
        "priceCurrency": "JPY"
      }
    },
    ...
  ]
}
```

AI検索エンジンが企業情報を正確に理解できます。

---

#### 4. メタデータ最適化

**ファイル**: `src/app/layout.tsx`

**実装内容**:
- Title: キーワード最適化済み
- Description: 180文字、明確な説明
- OGP tags: 完全対応
- Twitter Card: summary_large_image
- AI検索向けメタタグ: `ai-content-declaration: transparent`

---

#### 5. FAQ構造化データ

**ファイル**: `src/app/faq/page.tsx`

全21個のFAQが構造化データとして実装済み。AI検索エンジンが質問と回答を直接理解できます。

---

## 📈 AI検索最適化の効果

### AI検索エンジンでの表示例

#### ChatGPT Search（予想）
```
ユーザー: 「東大和市でホームページ制作を依頼できる会社は？」

ChatGPT回答:
「株式会社Awake（アウェイク）は東京都東大和市にあるWeb制作・AI開発企業です。

主なサービス:
- チャットボット搭載ホームページ制作: 19.8万円〜
- 月額制AI顧問・システム導入: 3.3万円〜
- Amazon代理店サービス: 初期費用0円

評価: 4.9/5（47件のレビュー）
連絡先: 042-843-4403
URL: https://www.awakeinc.co.jp/」
```

#### Perplexity（予想）
```
ユーザー: 「AIチャットボット開発の相場は？」

Perplexity回答:
「AIチャットボット開発の相場は、初期費用3.3万円〜、月額3.3万円〜です。
株式会社Awakeの月額制AI顧問サービスでは、業務効率化のための
AIチャットボット導入を低価格で提供しています。[1]

[1] 株式会社Awake | 月額制AI顧問・システム導入
    https://www.awakeinc.co.jp/services/ai」
```

---

## 🎯 今後の改善案

### 優先度: 高（今週中）

#### 1. ブログコンテンツの追加

**理由**: AI検索エンジンはテキストコンテンツを重視

**推奨記事**:
```
1. 「【2025年版】ホームページ制作の適正価格とは？」
   - 1,500文字以上
   - キーワード: ホームページ制作、相場、適正価格、東大和市

2. 「AIチャットボット導入で業務効率化を実現する方法」
   - 1,500文字以上
   - キーワード: AIチャットボット、業務効率化、導入方法

3. 「Amazon販売代行サービスの選び方」
   - 1,500文字以上
   - キーワード: Amazon代行、EC運営、初期費用0円
```

**効果**: AI検索エンジンが専門知識を持つ企業として認識

---

#### 2. 顧客事例（ケーススタディ）の追加

**ファイル**: `src/app/case-studies/page.tsx`（新規）

**内容例**:
```markdown
## 導入事例1: 製造業A社様

### 課題
- 問い合わせ対応に1日3時間かかっていた
- 夜間・休日の対応ができず機会損失

### 導入サービス
- 月額制AI顧問（チャットボット導入）

### 効果
- 問い合わせ対応時間が80%削減（3時間→36分）
- 24時間自動対応で機会損失ゼロ
- 月間問い合わせ数が150%増加
```

**効果**: AI検索エンジンが具体的な成果を引用可能

---

### 優先度: 中（今月中）

#### 3. サービス詳細ページの拡充

**現状**: 各サービスページは基本情報のみ

**改善案**:
```
各サービスページに以下を追加:

- 導入プロセス（5ステップ）
- 料金詳細（プラン比較表）
- よくある質問（サービス別10個）
- 導入事例（3件以上）
- お客様の声（5件以上）
```

**効果**: AI検索が詳細情報を提供可能

---

#### 4. 会社概要の拡充

**ファイル**: `src/app/about/page.tsx`

**追加すべき情報**:
```
- 代表挨拶（500文字以上）
- 会社の理念・ミッション
- 沿革（設立から現在まで）
- チームメンバー紹介
- 受賞歴・メディア掲載実績
```

**効果**: AI検索が企業の信頼性を評価

---

### 優先度: 低（将来的に）

#### 5. 業界別ページの作成

**ファイル**: `src/app/industries/[industry]/page.tsx`

**対象業界**:
- 製造業
- 小売業
- 飲食業
- 医療・福祉
- 士業（弁護士・税理士等）

**効果**: 業界特化の検索クエリに対応

---

## 🔍 AI検索エンジンのクロール確認方法

### 1. ログ確認

**サーバーログで以下のUser-Agentを確認**:
```
GPTBot
ChatGPT-User
anthropic-ai
Claude-Web
Google-Extended
PerplexityBot
cohere-ai
FacebookBot
CCBot
```

**ログの場所**:
- Vercel: https://vercel.com/dashboard → Logs
- Google Search Console: クロール統計情報

---

### 2. 実際の検索テスト

**テストクエリ**:
```
1. 「東大和市 ホームページ制作」
   → 期待: 株式会社Awakeが言及される

2. 「AIチャットボット 開発 相場」
   → 期待: 月額3.3万円〜の情報が表示される

3. 「Amazon販売代行 初期費用」
   → 期待: 初期費用0円のサービスが紹介される
```

**テスト頻度**: 月1回

---

## 📊 効果測定

### KPI（3ヶ月後）

| 指標 | 現状 | 目標 |
|------|------|------|
| AI検索エンジンからの流入 | 0セッション/月 | 50セッション/月 |
| AI検索での言及回数 | 0回/月 | 10回/月 |
| ブランド検索（「株式会社Awake」） | 未計測 | 30セッション/月 |

### 測定方法

**Google Analytics 4**:
```
1. トラフィック獲得レポート
2. 参照元に「ChatGPT」「Perplexity」「Claude」を含むセッション
3. カスタムディメンション「AI Referrer」の設定
```

---

## 🚀 実装ロードマップ

### Phase 1: 基盤整備（完了 2025-10-28）
- ✅ robots.txt作成
- ✅ sitemap.xml確認
- ✅ 構造化データ実装
- ✅ メタデータ最適化

### Phase 2: コンテンツ拡充（今週中）
- [ ] ブログ記事3本作成
- [ ] 顧客事例ページ作成
- [ ] サービス詳細ページ拡充

### Phase 3: 継続改善（今月中〜）
- [ ] 月4本のブログ記事投稿
- [ ] 業界別ページ作成
- [ ] AI検索エンジンからの流入測定

---

## 📚 参考情報

### AI検索エンジンのクローラー一覧

| AI検索エンジン | User-Agent | 公式ドキュメント |
|--------------|-----------|----------------|
| ChatGPT | GPTBot, ChatGPT-User | https://platform.openai.com/docs/gptbot |
| Claude | anthropic-ai, Claude-Web | https://www.anthropic.com/robots |
| Gemini | Google-Extended | https://developers.google.com/search/docs/crawling-indexing/google-extended |
| Perplexity | PerplexityBot | https://docs.perplexity.ai/docs/perplexitybot |
| Common Crawl | CCBot | https://commoncrawl.org/ccbot |

### AI SEOベストプラクティス

1. **コンテンツの質**
   - 1,000文字以上の詳細な説明
   - 専門用語の定義を含める
   - 具体的な数値・事例を記載

2. **構造化データ**
   - Schema.orgの最新仕様に準拠
   - できるだけ多くの情報を含める
   - 価格、評価、住所等は必須

3. **メタデータ**
   - タイトルは60文字以内
   - Descriptionは180文字前後
   - キーワードは自然な文章に含める

4. **アクセシビリティ**
   - 明確な見出し構造（H1→H2→H3）
   - リストや表を活用
   - 画像にはalt属性を必ず設定

---

**最終更新**: 2025年10月28日
**担当**: 株式会社Awake
**次回レビュー**: 2025年11月28日
