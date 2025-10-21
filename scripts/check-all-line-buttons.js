const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  const pages = [
    { url: 'http://localhost:3000', name: 'home' },
    { url: 'http://localhost:3000/about', name: 'about' },
    { url: 'http://localhost:3000/services/ai', name: 'ai' },
    { url: 'http://localhost:3000/services/ec', name: 'ec' },
    { url: 'http://localhost:3000/partners', name: 'partners' },
    { url: 'http://localhost:3000/faq', name: 'faq' }
  ];

  console.log('📸 全ページのLINEボタンスクリーンショット撮影中...\n');

  for (const pageInfo of pages) {
    const page = await context.newPage();
    await page.goto(pageInfo.url, { waitUntil: 'networkidle' });

    // ヘッダー部分のスクリーンショット
    await page.screenshot({
      path: `screenshots/line-buttons/${pageInfo.name}-header.png`,
      clip: { x: 0, y: 0, width: 1920, height: 100 }
    });

    console.log(`✅ ${pageInfo.name} - ヘッダー撮影完了`);

    await page.close();
  }

  await browser.close();
  console.log('\n🎉 全ページのスクリーンショット撮影完了！');
})();
