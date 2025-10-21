const { chromium } = require('playwright');

const viewports = [
  { name: 'desktop', width: 1920, height: 1080 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 }
];

const pages = [
  { name: 'home', url: 'http://localhost:3000/', description: 'トップページ' },
  { name: 'about', url: 'http://localhost:3000/about', description: '会社概要' },
];

(async () => {
  console.log('🔍 レスポンシブデザインチェック開始\n');

  const browser = await chromium.launch();

  for (const viewport of viewports) {
    console.log(`\n📱 ${viewport.name.toUpperCase()} (${viewport.width}x${viewport.height})\n`);

    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height }
    });
    const page = await context.newPage();

    for (const pageInfo of pages) {
      console.log(`  📸 ${pageInfo.description}...`);

      try {
        await page.goto(pageInfo.url, { waitUntil: 'networkidle', timeout: 15000 });
        await page.waitForTimeout(2000);

        // スクリーンショット撮影
        await page.screenshot({
          path: `screenshots/responsive/${viewport.name}-${pageInfo.name}.png`
        });

        // コンテナ幅をチェック
        const containerInfo = await page.evaluate(() => {
          const containers = document.querySelectorAll('.container, .max-w-7xl, .max-w-5xl');
          return Array.from(containers).map(el => ({
            class: el.className,
            width: el.offsetWidth,
            padding: window.getComputedStyle(el).padding
          }));
        });

        // 余白チェック
        const spacingIssues = await page.evaluate(() => {
          const issues = [];

          // 大きすぎる余白を探す
          const allElements = document.querySelectorAll('section, div');
          allElements.forEach(el => {
            const style = window.getComputedStyle(el);
            const marginTop = parseInt(style.marginTop);
            const marginBottom = parseInt(style.marginBottom);
            const paddingTop = parseInt(style.paddingTop);
            const paddingBottom = parseInt(style.paddingBottom);

            if (marginTop > 200 || marginBottom > 200) {
              issues.push({
                type: 'large-margin',
                element: el.tagName + '.' + el.className.split(' ')[0],
                marginTop,
                marginBottom
              });
            }

            if (paddingTop > 200 || paddingBottom > 200) {
              issues.push({
                type: 'large-padding',
                element: el.tagName + '.' + el.className.split(' ')[0],
                paddingTop,
                paddingBottom
              });
            }
          });

          return issues.slice(0, 5); // 最初の5件のみ
        });

        // テキストの折り返しチェック
        const textOverflow = await page.evaluate(() => {
          const issues = [];
          const textElements = document.querySelectorAll('h1, h2, h3, p, span');

          textElements.forEach(el => {
            const isOverflowing = el.scrollWidth > el.clientWidth;
            const hasNoWrap = window.getComputedStyle(el).whiteSpace === 'nowrap';

            if (isOverflowing && hasNoWrap) {
              issues.push({
                element: el.tagName,
                text: el.textContent.substring(0, 50),
                width: el.clientWidth,
                scrollWidth: el.scrollWidth
              });
            }
          });

          return issues.slice(0, 3);
        });

        console.log(`     ✅ 完了`);

        if (spacingIssues.length > 0) {
          console.log(`     ⚠️  大きな余白: ${spacingIssues.length}件`);
        }

        if (textOverflow.length > 0) {
          console.log(`     ⚠️  テキスト溢れ: ${textOverflow.length}件`);
        }

      } catch (error) {
        console.log(`     ❌ エラー: ${error.message}`);
      }
    }

    await context.close();
  }

  await browser.close();

  console.log('\n✨ レスポンシブチェック完了');
  console.log('スクリーンショット: screenshots/responsive/\n');
})();
