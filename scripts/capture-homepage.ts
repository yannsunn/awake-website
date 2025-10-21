import { chromium } from '@playwright/test';
import path from 'path';

async function captureHomepage() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  try {
    console.log('Navigating to http://localhost:3006...');
    await page.goto('http://localhost:3006', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    console.log('Waiting for page to fully load...');
    await page.waitForTimeout(2000);

    const screenshotPath = path.join(process.cwd(), 'screenshots', 'homepage-test.png');
    console.log(`Taking screenshot and saving to ${screenshotPath}...`);

    await page.screenshot({
      path: screenshotPath,
      fullPage: false  // Viewport only as per instructions
    });

    console.log('Screenshot captured successfully!');

    // Check for key elements
    const header = await page.locator('header').count();
    const footer = await page.locator('footer').count();
    const main = await page.locator('main').count();

    console.log('\nPage Elements Found:');
    console.log(`- Header: ${header > 0 ? '✓' : '✗'}`);
    console.log(`- Main content: ${main > 0 ? '✓' : '✗'}`);
    console.log(`- Footer: ${footer > 0 ? '✓' : '✗'}`);

    // Get page title
    const title = await page.title();
    console.log(`\nPage Title: ${title}`);

  } catch (error) {
    console.error('Error capturing screenshot:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

captureHomepage();
