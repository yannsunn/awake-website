# LLMO(Large Language Model Optimization) 対策

## 概要
LLMOとは、大規模言語モデル(Claude, ChatGPT, Gemini等)がウェブサイトのコンテンツを効率的にクロール・理解・引用できるように最適化する施策です。

## 実装済み対策

### 1. 構造化データ(JSON-LD) ✅
- **ファイル**: `src/lib/enhanced-schema.ts`
- **実装内容**:
  - Organization schema (会社情報)
  - Service schema (全サービス詳細)
  - BreadcrumbList schema (サイト構造)
  - LocalBusiness schema (地域情報)
- **効果**: LLMが会社概要、サービス内容、料金を正確に理解可能

### 2. セマンティックHTML ✅
- 適切な見出し階層 (h1 → h2 → h3)
- `<article>`, `<section>`, `<nav>` タグの使用
- ARIA ラベルの適切な使用

### 3. メタデータ最適化 ✅
- **ファイル**: `src/app/layout.tsx`, 各ページの `page.tsx`
- タイトルに重要情報を含む
- descriptionに簡潔な説明
- OGPタグでソーシャル共有最適化

## 追加実装すべき対策

### 4. robots.txt 最適化 (高優先度)
```txt
# Allow all AI agents
User-agent: *
Allow: /

# AI-specific agents
User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Omgilibot
Allow: /

# Important files
Sitemap: https://awake-kk.jp/sitemap.xml
```

### 5. AIクローラー専用メタタグ
各ページに以下を追加:
```html
<meta name="ai-content-declaration" content="allow-training" />
<meta name="ai-crawl-priority" content="high" />
```

### 6. FAQ構造化データ追加
- **対象ファイル**: FAQ.tsx, AmazonFAQ.tsx, AIFaq.tsx
- FAQPage schema追加でLLMが直接回答可能に

### 7. サービスページにHowTo Schema追加
利用手順をステップ化して構造化

### 8. サイトマップ強化
- 優先度(priority)を明示
- 更新頻度(changefreq)を設定
- LLM向けの説明的なメタデータ

## 効果測定

### KPI
1. AI検索エンジン(Perplexity, You.com)での表示回数
2. LLMによる正確な情報引用率
3. "株式会社Awake AI" での認識精度

### モニタリングツール
- Google Search Console (インデックス状況)
- Bing Webmaster Tools
- カスタムログ (User-Agent: GPTBot, Claude-Web等)

## 実装優先順位

### Phase 1 (即実施)
1. ✅ 構造化データ完備
2. ✅ メタデータ最適化
3. ⏳ robots.txt最適化
4. ⏳ AIメタタグ追加

### Phase 2 (1週間以内)
1. FAQ構造化データ
2. HowTo Schema
3. サイトマップ強化

### Phase 3 (継続的)
1. コンテンツ品質向上
2. 定期的な構造化データ更新
3. AI検索結果モニタリング

---

最終更新: 2025-10-30
次回レビュー: 2025-11-06
