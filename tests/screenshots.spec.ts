import { test, expect } from '@playwright/test';

const pages = [
  { url: 'http://localhost:3003', name: 'home' },
  { url: 'http://localhost:3003/about', name: 'about' },
  { url: 'http://localhost:3003/partners', name: 'partners' },
  { url: 'http://localhost:3003/faq', name: 'faq' },
  { url: 'http://localhost:3003/services/web', name: 'services-web' },
  { url: 'http://localhost:3003/services/ai', name: 'services-ai' },
  { url: 'http://localhost:3003/services/ec', name: 'services-ec' },
];

test.describe('Screenshot all pages', () => {
  for (const page of pages) {
    test(`Screenshot ${page.name}`, async ({ browser }) => {
      const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
      });
      const browserPage = await context.newPage();

      // Navigate to the page
      await browserPage.goto(page.url, { waitUntil: 'networkidle' });

      // Wait a bit for animations to settle
      await browserPage.waitForTimeout(2000);

      // Take screenshot
      await browserPage.screenshot({
        path: `page-${page.name}.png`,
        fullPage: false,
      });

      await context.close();
    });
  }
});
