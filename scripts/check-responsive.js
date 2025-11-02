const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('📱 レスポンシブデザイン完全チェック開始...\n');

  const browser = await chromium.launch({ headless: true });

  const devices = [
    { name: 'mobile', width: 390, height: 844, label: 'iPhone 14 Pro' },
    { name: 'tablet', width: 768, height: 1024, label: 'iPad' },
    { name: 'desktop', width: 1920, height: 1080, label: 'Desktop' }
  ];

  const testPages = [
    { url: 'https://www.awakeinc.co.jp/', name: 'home' },
    { url: 'https://www.awakeinc.co.jp/about', name: 'about' },
    { url: 'https://www.awakeinc.co.jp/services/ai', name: 'service-ai' }
  ];

  const screenshotsDir = path.join(__dirname, '..', 'screenshots', 'responsive');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  for (const device of devices) {
    console.log(`\n📐 ${device.label} (${device.width}x${device.height})`);
    console.log('='.repeat(60));

    const context = await browser.newContext({
      viewport: { width: device.width, height: device.height }
    });
    const page = await context.newPage();

    for (const testPage of testPages) {
      console.log(`\n  📄 ${testPage.name}:`);

      try {
        await page.goto(testPage.url, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForTimeout(2000);

        // スクリーンショット保存
        const screenshotPath = path.join(screenshotsDir, `${testPage.name}-${device.name}.png`);
        await page.screenshot({
          path: screenshotPath,
          fullPage: false
        });
        console.log(`    ✓ スクリーンショット保存: ${testPage.name}-${device.name}.png`);

        // フォントサイズ測定
        const fontSizes = await page.evaluate(() => {
          const h1 = document.querySelector('h1');
          const h2 = document.querySelector('h2');
          const h3 = document.querySelector('h3');
          const lead = document.querySelector('p.text-lg, p.text-xl, [class*="lead"]');
          const body = document.querySelector('p');

          const getSize = (el) => {
            if (!el) return null;
            return window.getComputedStyle(el).fontSize;
          };

          return {
            h1: getSize(h1),
            h2: getSize(h2),
            h3: getSize(h3),
            lead: getSize(lead),
            body: getSize(body)
          };
        });

        console.log(`    📊 フォントサイズ:`);
        if (fontSizes.h1) console.log(`      H1: ${fontSizes.h1}`);
        if (fontSizes.h2) console.log(`      H2: ${fontSizes.h2}`);
        if (fontSizes.h3) console.log(`      H3: ${fontSizes.h3}`);
        if (fontSizes.lead) console.log(`      Lead: ${fontSizes.lead}`);
        if (fontSizes.body) console.log(`      Body: ${fontSizes.body}`);

        // レイアウト崩れチェック
        const layoutIssues = await page.evaluate(() => {
          const issues = [];

          // 横スクロール確認
          if (document.documentElement.scrollWidth > document.documentElement.clientWidth) {
            issues.push('横スクロールが発生しています');
          }

          // オーバーフロー確認
          const overflowing = Array.from(document.querySelectorAll('*')).filter(el => {
            const rect = el.getBoundingClientRect();
            return rect.right > window.innerWidth || rect.bottom > window.innerHeight + 5000;
          });

          if (overflowing.length > 0) {
            issues.push(`${overflowing.length}個の要素がオーバーフローしています`);
          }

          // ボタンサイズ確認（タッチターゲット最小48px）
          const buttons = document.querySelectorAll('button, a[class*="button"]');
          const smallButtons = Array.from(buttons).filter(btn => {
            const rect = btn.getBoundingClientRect();
            return rect.width < 48 || rect.height < 48;
          });

          if (smallButtons.length > 0) {
            issues.push(`${smallButtons.length}個のボタンが48px未満です`);
          }

          return issues;
        });

        if (layoutIssues.length > 0) {
          console.log(`    ⚠️  レイアウト問題:`);
          layoutIssues.forEach(issue => console.log(`      - ${issue}`));
        } else {
          console.log(`    ✅ レイアウト問題なし`);
        }

      } catch (error) {
        console.error(`    ❌ エラー: ${error.message}`);
      }
    }

    await context.close();
  }

  await browser.close();

  console.log('\n' + '='.repeat(60));
  console.log('✅ レスポンシブデザインチェック完了');
  console.log(`📁 スクリーンショット保存先: ${screenshotsDir}`);
})();
