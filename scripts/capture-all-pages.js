const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// 全ページのURL定義
const pages = [
  { name: 'home', url: 'http://localhost:3003/', description: 'トップページ' },
  { name: 'about', url: 'http://localhost:3003/about', description: '会社概要' },
  { name: 'ai-service', url: 'http://localhost:3003/services/ai', description: 'AIサービス' },
  { name: 'web-service', url: 'http://localhost:3003/services/web', description: 'Web制作' },
  { name: 'amazon-service', url: 'http://localhost:3003/services/amazon', description: 'Amazon代理店' },
  { name: 'partners', url: 'http://localhost:3003/partners', description: 'パートナー企業' },
  { name: 'faq', url: 'http://localhost:3003/faq', description: 'FAQ' }
];

(async () => {
  console.log('🚀 全ページスクリーンショット撮影開始\n');

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  // スクリーンショット保存ディレクトリ
  const screenshotDir = 'screenshots/all-pages';
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const results = [];

  for (const pageInfo of pages) {
    console.log(`📸 ${pageInfo.description} (${pageInfo.name}) をキャプチャ中...`);

    try {
      // ページに移動
      await page.goto(pageInfo.url, {
        waitUntil: 'networkidle',
        timeout: 15000
      });

      // アニメーション完了を待つ
      await page.waitForTimeout(2000);

      // トップにスクロール
      await page.evaluate(() => window.scrollTo(0, 0));

      // ヒーローセクションのスクリーンショット（viewport単位）
      await page.screenshot({
        path: `${screenshotDir}/${pageInfo.name}-hero.png`
      });

      // 中間部分をキャプチャ（ページ全体を分割）
      const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
      const viewportHeight = 1080;
      const scrollSteps = Math.ceil(bodyHeight / viewportHeight);

      console.log(`   ページ高さ: ${bodyHeight}px, ${scrollSteps}分割でキャプチャ`);

      // 最大3分割まで（長すぎるページ対策）
      const maxSteps = Math.min(scrollSteps, 3);

      for (let i = 1; i < maxSteps; i++) {
        await page.evaluate((step) => {
          window.scrollTo(0, step * 1080);
        }, i);
        await page.waitForTimeout(500);

        await page.screenshot({
          path: `${screenshotDir}/${pageInfo.name}-section${i}.png`
        });
      }

      // コンソールエラーをチェック
      const errors = [];
      page.on('pageerror', error => {
        errors.push(error.message);
      });

      // LINEボタンのチェック
      const lineButtonCheck = await page.evaluate(() => {
        const lineButtons = Array.from(document.querySelectorAll('a, button'))
          .filter(btn => btn.textContent.includes('LINE'));

        return lineButtons.map(btn => ({
          text: btn.textContent.trim(),
          isOneLine: btn.offsetHeight < 60, // 1行なら高さ60px以下
          classes: btn.className
        }));
      });

      // 背景アニメーションのチェック
      const hasBackgroundAnimation = await page.evaluate(() => {
        const animated = document.querySelector('[class*="animate"]') ||
                        document.querySelector('[style*="transform"]');
        return !!animated;
      });

      results.push({
        page: pageInfo.description,
        url: pageInfo.url,
        status: '✅ 成功',
        lineButtons: lineButtonCheck,
        hasAnimation: hasBackgroundAnimation,
        errors: errors.length > 0 ? errors : null
      });

      console.log(`   ✅ ${pageInfo.description} 完了\n`);

    } catch (error) {
      console.error(`   ❌ ${pageInfo.description} エラー: ${error.message}\n`);
      results.push({
        page: pageInfo.description,
        url: pageInfo.url,
        status: `❌ エラー: ${error.message}`,
        lineButtons: null,
        hasAnimation: null,
        errors: [error.message]
      });
    }
  }

  await browser.close();

  // 結果をサマリー表示
  console.log('\n' + '='.repeat(60));
  console.log('📊 全ページチェック結果サマリー');
  console.log('='.repeat(60) + '\n');

  results.forEach(result => {
    console.log(`${result.status} ${result.page}`);
    if (result.lineButtons && result.lineButtons.length > 0) {
      console.log(`   LINEボタン: ${result.lineButtons.length}個`);
      result.lineButtons.forEach(btn => {
        console.log(`      - "${btn.text}" ${btn.isOneLine ? '✅ 1行' : '⚠️ 複数行'}`);
      });
    }
    console.log(`   背景アニメーション: ${result.hasAnimation ? '✅ あり' : '❌ なし'}`);
    if (result.errors) {
      console.log(`   ⚠️ エラー: ${result.errors.length}件`);
    }
    console.log('');
  });

  console.log('✨ すべてのスクリーンショットを screenshots/all-pages/ に保存しました');
})();
