import { test, expect } from '@playwright/test';

test.describe('About and Partners Page Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Set viewport to desktop size
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test('About Page - Full verification', async ({ page }) => {
    console.log('📍 Navigating to About page...');
    await page.goto('http://localhost:3006/about');

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Wait for animations

    // Take full page screenshot
    console.log('📸 Taking full page screenshot...');
    await page.screenshot({
      path: 'about-page-full.png',
      fullPage: true
    });

    // Check if all main sections are visible
    console.log('✅ Checking section visibility...');
    const sections = await page.locator('section').count();
    console.log(`Found ${sections} sections`);

    // Scroll through the page to check smooth scrolling
    console.log('🔄 Testing scroll behavior...');
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'about-page-mid-scroll.png' });

    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(500);

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'about-page-bottom.png' });

    // Check image sections height
    console.log('📏 Checking image section heights...');
    const imageSections = await page.locator('.h-\\[40vh\\], .h-\\[50vh\\]').count();
    console.log(`Found ${imageSections} image sections with proper height`);

    // Check spacing between sections
    console.log('📐 Analyzing section spacing...');
    const sectionSpacing = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      return sections.map((section, index) => {
        const styles = window.getComputedStyle(section);
        return {
          index,
          paddingTop: styles.paddingTop,
          paddingBottom: styles.paddingBottom,
          marginTop: styles.marginTop,
          marginBottom: styles.marginBottom,
        };
      });
    });
    console.log('Section spacing:', JSON.stringify(sectionSpacing, null, 2));
  });

  test('Partners Page - Full verification', async ({ page }) => {
    console.log('📍 Navigating to Partners page...');
    await page.goto('http://localhost:3006/partners');

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // Take full page screenshot
    console.log('📸 Taking full page screenshot...');
    await page.screenshot({
      path: 'partners-page-full.png',
      fullPage: true
    });

    // Check sections
    console.log('✅ Checking section visibility...');
    const sections = await page.locator('section').count();
    console.log(`Found ${sections} sections`);

    // Scroll through the page
    console.log('🔄 Testing scroll behavior...');
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'partners-page-mid-scroll.png' });

    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(500);

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'partners-page-bottom.png' });

    // Check spacing uniformity
    console.log('📐 Analyzing section spacing...');
    const sectionSpacing = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      return sections.map((section, index) => {
        const styles = window.getComputedStyle(section);
        return {
          index,
          paddingTop: styles.paddingTop,
          paddingBottom: styles.paddingBottom,
          marginTop: styles.marginTop,
          marginBottom: styles.marginBottom,
        };
      });
    });
    console.log('Section spacing:', JSON.stringify(sectionSpacing, null, 2));
  });

  test('Responsive - Mobile view verification', async ({ page }) => {
    // Set to mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    console.log('📱 Testing About page on mobile...');
    await page.goto('http://localhost:3006/about');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: 'about-page-mobile.png',
      fullPage: true
    });

    console.log('📱 Testing Partners page on mobile...');
    await page.goto('http://localhost:3006/partners');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: 'partners-page-mobile.png',
      fullPage: true
    });
  });

  test('Interactive elements verification', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Test About page buttons
    console.log('🔘 Testing buttons on About page...');
    await page.goto('http://localhost:3006/about');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    const buttons = await page.locator('button, a[href]').all();
    console.log(`Found ${buttons.length} interactive elements`);

    // Take screenshot with hover states
    if (buttons.length > 0) {
      await buttons[0].hover();
      await page.waitForTimeout(500);
      await page.screenshot({ path: 'about-page-button-hover.png' });
    }

    // Test Partners page buttons
    console.log('🔘 Testing buttons on Partners page...');
    await page.goto('http://localhost:3006/partners');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    const partnersButtons = await page.locator('button, a[href]').all();
    console.log(`Found ${partnersButtons.length} interactive elements`);

    if (partnersButtons.length > 0) {
      await partnersButtons[0].hover();
      await page.waitForTimeout(500);
      await page.screenshot({ path: 'partners-page-button-hover.png' });
    }
  });
});
