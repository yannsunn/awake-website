const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const messages = [];
  const errors = [];

  page.on('console', msg => {
    messages.push({ type: msg.type(), text: msg.text() });
    console.log(`[${msg.type().toUpperCase()}]`, msg.text());
  });

  page.on('pageerror', error => {
    errors.push(error.message);
    console.log('[PAGE ERROR]', error.message);
  });

  page.on('response', response => {
    if (response.status() >= 400) {
      console.log(`[HTTP ${response.status()}]`, response.url());
    }
  });

  try {
    await page.goto('http://localhost:3003', { timeout: 10000, waitUntil: 'networkidle' });

    // Wait a bit more
    await page.waitForTimeout(2000);

    // Check if any sections exist
    const sections = await page.$$('section');
    console.log(`\n✓ Found ${sections.length} section elements`);

    // Check body content
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);
    console.log(`\n✓ Body HTML length: ${bodyHTML.length} characters`);

    if (bodyHTML.length < 1000) {
      console.log('\n⚠ Body HTML is very short. Content:');
      console.log(bodyHTML.substring(0, 500));
    }

    // Take screenshot
    await page.screenshot({ path: 'screenshots/console-check.png' });

    console.log(`\n✓ Total console messages: ${messages.length}`);
    console.log(`✓ Total errors: ${errors.length}`);

  } catch (error) {
    console.error('Error:', error.message);
  }

  await browser.close();
})();
