const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  console.log('📸 LINEボタンのスクリーンショット撮影中...\n');

  // ホームページ
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // ヒーローセクションのLINEボタン
  await page.screenshot({
    path: 'screenshots/line-buttons/home-hero-button.png',
    clip: { x: 600, y: 400, width: 700, height: 200 }
  });
  console.log('✅ ホームページ - ヒーローセクションLINEボタン');

  // ページ下部までスクロール
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);

  // フッター付近のLINEボタン
  await page.screenshot({
    path: 'screenshots/line-buttons/home-footer-area.png',
    clip: { x: 0, y: 800, width: 1920, height: 280 }
  });
  console.log('✅ ホームページ - フッター付近');

  // パートナーページ
  await page.goto('http://localhost:3000/partners', { waitUntil: 'networkidle' });
  await page.screenshot({
    path: 'screenshots/line-buttons/partners-header.png',
    clip: { x: 0, y: 0, width: 1920, height: 100 }
  });
  console.log('✅ パートナーページ - ヘッダー');

  // FAQページ
  await page.goto('http://localhost:3000/faq', { waitUntil: 'networkidle' });
  await page.screenshot({
    path: 'screenshots/line-buttons/faq-header.png',
    clip: { x: 0, y: 0, width: 1920, height: 100 }
  });
  console.log('✅ FAQページ - ヘッダー');

  // ページ下部
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: 'screenshots/line-buttons/faq-bottom.png',
    clip: { x: 400, y: 800, width: 1120, height: 280 }
  });
  console.log('✅ FAQページ - 下部');

  await browser.close();
  console.log('\n🎉 すべてのスクリーンショット撮影完了！');
})();
