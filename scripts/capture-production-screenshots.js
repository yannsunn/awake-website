const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('🚀 本番サイトの視覚チェックを開始...\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const baseUrl = 'https://www.awakeinc.co.jp';
  const pages = [
    { url: `${baseUrl}/`, name: 'home', scrolls: [0, 1000, 2000, 3000, 4000] },
    { url: `${baseUrl}/about`, name: 'about', scrolls: [0, 1000, 2000] },
    { url: `${baseUrl}/faq`, name: 'faq', scrolls: [0, 1000, 2000] },
    { url: `${baseUrl}/partners`, name: 'partners', scrolls: [0, 1000] },
    { url: `${baseUrl}/services/web`, name: 'service-web', scrolls: [0, 1000, 2000] },
    { url: `${baseUrl}/services/ai`, name: 'service-ai', scrolls: [0, 1000, 2000] },
    { url: `${baseUrl}/services/ec`, name: 'service-ec', scrolls: [0, 1000, 2000] }
  ];

  for (const pageInfo of pages) {
    console.log(`📸 ${pageInfo.name} をチェック中...`);

    try {
      await page.goto(pageInfo.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000);

      // 各スクロール位置でスクリーンショット撮影
      for (let i = 0; i < pageInfo.scrolls.length; i++) {
        const scrollY = pageInfo.scrolls[i];
        await page.evaluate((y) => window.scrollTo(0, y), scrollY);
        await page.waitForTimeout(500);

        const screenshotPath = path.join(screenshotsDir, `${pageInfo.name}-${i + 1}.png`);
        await page.screenshot({
          path: screenshotPath,
          fullPage: false
        });
        console.log(`  ✓ ${pageInfo.name}-${i + 1}.png 保存`);
      }

      // フォントサイズ情報を収集
      const fontSizes = await page.evaluate(() => {
        const results = [];

        // H1, H2, H3タグを取得
        const headings = document.querySelectorAll('h1, h2, h3');
        headings.forEach((el, idx) => {
          if (idx < 10) { // 最初の10個のみ
            const styles = window.getComputedStyle(el);
            const text = el.textContent.trim().substring(0, 50);
            results.push({
              tag: el.tagName,
              fontSize: styles.fontSize,
              text: text
            });
          }
        });

        // Lead text (class含む)を取得
        const leads = document.querySelectorAll('p.text-lg, p.text-xl, p.text-2xl, [class*="lead"]');
        leads.forEach((el, idx) => {
          if (idx < 5) {
            const styles = window.getComputedStyle(el);
            const text = el.textContent.trim().substring(0, 50);
            results.push({
              tag: 'P (lead)',
              fontSize: styles.fontSize,
              text: text
            });
          }
        });

        return results;
      });

      console.log(`\n  📊 ${pageInfo.name} のフォントサイズ:`);
      fontSizes.forEach(item => {
        console.log(`    ${item.tag}: ${item.fontSize} - "${item.text}"`);
      });
      console.log('');

    } catch (error) {
      console.error(`  ❌ ${pageInfo.name} でエラー: ${error.message}`);
    }
  }

  await browser.close();
  console.log('\n✅ すべてのスクリーンショット保存完了');
  console.log(`📁 保存先: ${screenshotsDir}`);
})();
