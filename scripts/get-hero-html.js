const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3003', { waitUntil: 'networkidle', timeout: 15000 });

  // Get the hero section HTML
  const heroHTML = await page.evaluate(() => {
    const hero = document.querySelector('section');
    return hero ? hero.outerHTML.substring(0, 2000) : 'Hero not found';
  });

  console.log('Hero section HTML:');
  console.log(heroHTML);

  // Check for specific text
  const hasCorrectTitle = await page.evaluate(() => {
    return document.body.textContent.includes('ホームページ制作・AIチャットボット開発・Amazon代理店');
  });

  console.log('\nCorrect title present:', hasCorrectTitle);

  // Check for LINE button
  const lineButtonInfo = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('a, button'));
    const lineButton = buttons.find(btn => btn.textContent.includes('LINE'));
    if (lineButton) {
      return {
        text: lineButton.textContent.trim(),
        classes: lineButton.className,
        href: lineButton.getAttribute('href')
      };
    }
    return null;
  });

  console.log('\nLINE button:', JSON.stringify(lineButtonInfo, null, 2));

  await browser.close();
})();
