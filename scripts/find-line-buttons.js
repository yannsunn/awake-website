const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  console.log('🔍 LINEボタンの位置を特定中...\n');

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // すべてのLINEボタンを探す
  const lineButtons = await page.locator('text=/LINE.*相談/').all();

  console.log(`見つかったLINEボタン: ${lineButtons.length}個\n`);

  for (let i = 0; i < lineButtons.length; i++) {
    const button = lineButtons[i];
    const box = await button.boundingBox();
    const text = await button.textContent();

    if (box) {
      console.log(`ボタン${i + 1}:`);
      console.log(`  テキスト: "${text.trim()}"`);
      console.log(`  位置: x=${Math.round(box.x)}, y=${Math.round(box.y)}`);
      console.log(`  サイズ: 幅=${Math.round(box.width)}px, 高さ=${Math.round(box.height)}px`);

      // ボタンのスクリーンショットを撮影
      await button.screenshot({
        path: `screenshots/line-buttons/button-${i + 1}.png`
      });
      console.log(`  📸 スクリーンショット保存: button-${i + 1}.png\n`);
    }
  }

  await browser.close();
  console.log('✅ 完了');
})();
