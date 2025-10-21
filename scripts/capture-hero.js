const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 }
  });

  await page.goto('http://localhost:3003', { waitUntil: 'networkidle', timeout: 15000 });

  // Scroll to top to ensure we're at the hero section
  await page.evaluate(() => window.scrollTo(0, 0));

  // Wait a bit for any animations
  await page.waitForTimeout(1000);

  // Take screenshot of hero section
  await page.screenshot({ path: 'screenshots/hero-section.png' });

  console.log('✓ Hero section screenshot saved');

  // Also check if the zoom animation class exists
  const hasZoomClass = await page.evaluate(() => {
    const elements = document.querySelectorAll('.animate-zoom');
    return elements.length;
  });

  console.log(`✓ Elements with animate-zoom class: ${hasZoomClass}`);

  // Check LINE button width
  const lineButtonText = await page.evaluate(() => {
    const button = document.querySelector('a[href*="line.me"]');
    if (button) {
      const rect = button.getBoundingClientRect();
      return {
        text: button.textContent,
        width: rect.width,
        height: rect.height
      };
    }
    return null;
  });

  console.log('✓ LINE button:', lineButtonText);

  await browser.close();
})();
