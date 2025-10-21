const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const pages = [
  { name: 'homepage', url: 'http://localhost:3003', waitFor: 'h1' },
  { name: 'about', url: 'http://localhost:3003/about', waitFor: 'h1' },
  { name: 'partners', url: 'http://localhost:3003/partners', waitFor: 'h1' },
  { name: 'faq', url: 'http://localhost:3003/faq', waitFor: 'h1' },
  { name: 'service-ai', url: 'http://localhost:3003/services/ai', waitFor: 'h1' },
  { name: 'service-ec', url: 'http://localhost:3003/services/ec', waitFor: 'h1' },
  { name: 'service-web', url: 'http://localhost:3003/services/web', waitFor: 'h1' },
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  for (const pageInfo of pages) {
    try {
      console.log(`Capturing ${pageInfo.name}...`);
      await page.goto(pageInfo.url, { waitUntil: 'networkidle' });
      await page.waitForSelector(pageInfo.waitFor, { timeout: 10000 });
      await page.waitForTimeout(2000); // Wait for animations

      // Viewport screenshot (NEVER use fullPage: true - exceeds dimension limits)
      await page.screenshot({
        path: path.join(screenshotsDir, `${pageInfo.name}.png`)
      });

      console.log(`✓ Captured ${pageInfo.name}`);
    } catch (error) {
      console.error(`✗ Failed to capture ${pageInfo.name}:`, error.message);
    }
  }

  await browser.close();
  console.log('All screenshots captured!');
})();
