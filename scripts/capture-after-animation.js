const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 }
  });

  await page.goto('http://localhost:3003', { waitUntil: 'networkidle', timeout: 15000 });

  // Wait for animations to complete
  await page.waitForTimeout(3000);

  // Scroll to top
  await page.evaluate(() => window.scrollTo(0, 0));

  // Take screenshot
  await page.screenshot({ path: 'screenshots/final-check.png' });

  console.log('✓ Screenshot saved after animations completed');

  await browser.close();
})();
