const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 }
  });

  // Listen for console messages
  page.on('console', msg => console.log('CONSOLE:', msg.type(), msg.text()));

  // Listen for page errors
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  // Navigate to the page
  await page.goto('http://localhost:3001');

  // Wait a bit for content to load
  await page.waitForTimeout(3000);

  // Take screenshot
  await page.screenshot({ path: 'screenshots/debug-homepage.png' });

  // Get the HTML content
  const content = await page.content();
  console.log('Page title:', await page.title());
  console.log('Body classes:', await page.evaluate(() => document.body.className));

  // Check if HomeHero is rendered
  const homeHeroExists = await page.$('section') !== null;
  console.log('Section element exists:', homeHeroExists);

  await browser.close();
})();
