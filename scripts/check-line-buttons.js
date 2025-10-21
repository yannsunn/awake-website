const { chromium } = require('playwright');

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

  console.log('🔍 LINEボタンチェック開始\n');

  for (const pageInfo of pages) {
    const page = await context.newPage();
    await page.goto(pageInfo.url, { waitUntil: 'networkidle' });

    // LINEボタンを全て取得
    const lineButtons = await page.locator('text=/LINE.*相談/').all();

    console.log(`📄 ${pageInfo.name}:`);
    console.log(`   LINEボタン数: ${lineButtons.length}`);

    for (let i = 0; i < lineButtons.length; i++) {
      const button = lineButtons[i];
      const text = await button.textContent();
      const box = await button.boundingBox();

      if (box) {
        console.log(`   ボタン${i + 1}: "${text.trim()}" - 幅: ${Math.round(box.width)}px, 高さ: ${Math.round(box.height)}px`);
      }
    }
    console.log('');

    await page.close();
  }

  await browser.close();
  console.log('✅ チェック完了');
})();
