# Scripts Directory

このディレクトリには、自動化スクリプトが含まれています。

---

## 📊 Google Ads & SEO Automation Scripts

### Google Ads API Scripts

**キーワード追加**:
- `google-ads-add-all-keywords.js` - ホームページ制作: 26キーワード
- `google-ads-add-ai-chatbot-keywords.js` - AIチャットボット: 18キーワード
- `google-ads-add-amazon-keywords.js` - Amazon販売代行: 15キーワード

**確認**:
- `google-ads-verify-all-keywords.js` - 全59キーワードの確認
- `google-ads-inspect-campaign.js` - キャンペーン詳細確認

**その他**:
- `generate-google-ads-keywords-csv.js` - CSV生成

### Google Search Console API Scripts

- `gsc-submit-sitemap.js` - サイトマップ提出
- `gsc-request-indexing.js` - インデックス登録リクエスト
- `gsc-check-portfolio-site.js` - ポートフォリオサイト確認

### 使用方法

```bash
# キーワード追加（全59個）
node scripts/google-ads-add-all-keywords.js
node scripts/google-ads-add-ai-chatbot-keywords.js
node scripts/google-ads-add-amazon-keywords.js

# SEO
node scripts/gsc-submit-sitemap.js
node scripts/gsc-request-indexing.js
```

---

# Playwright Scripts - Screenshot Guidelines

## 🚨 CRITICAL RULES

### Screenshot Dimension Limits
**NEVER use `fullPage: true` in any Playwright screenshot operation.**

- Maximum dimension limit: 2000px
- Always use viewport-only screenshots
- Standard viewport sizes:
  - Desktop: `{ width: 1920, height: 1080 }`
  - Mobile: `{ width: 390, height: 844 }`

### Correct Usage

```javascript
// ✅ CORRECT - Viewport only
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1920, height: 1080 }
});
await page.screenshot({ path: 'screenshot.png' });

// ✅ CORRECT - With clip
await page.screenshot({
  path: 'screenshot.png',
  clip: { x: 0, y: 0, width: 1920, height: 1080 }
});

// ❌ WRONG - Never use fullPage: true
await page.screenshot({
  path: 'screenshot.png',
  fullPage: true  // THIS WILL CAUSE API ERRORS
});
```

### Why This Matters

Using `fullPage: true` can create images exceeding 8000px dimensions, which:
1. Exceeds API limits (2000px max for many-image requests)
2. Causes `invalid_request_error`
3. Breaks automated testing workflows

### For Long Pages

If you need to capture content beyond the viewport:
1. Use scrolling with multiple viewport screenshots
2. Use clip coordinates within viewport bounds
3. See `capture-all-pages.js` for reference implementation

## All Scripts Must Follow These Rules

Every script in this directory has been updated to comply with these dimension limits.
If you create a new script, always:

1. Set explicit viewport size
2. Never use `fullPage: true`
3. Keep all dimensions under 2000px
