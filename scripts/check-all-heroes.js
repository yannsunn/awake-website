const { chromium } = require('playwright');

const pages = [
  { name: 'home', url: 'http://localhost:3000/', hasHero: true },
  { name: 'about', url: 'http://localhost:3000/about', hasHero: true },
  { name: 'ai-service', url: 'http://localhost:3000/services/ai', hasHero: true },
  { name: 'web-service', url: 'http://localhost:3000/services/web', hasHero: true },
  { name: 'ec-service', url: 'http://localhost:3000/services/ec', hasHero: true },
  { name: 'partners', url: 'http://localhost:3000/partners', hasHero: true },
  { name: 'faq', url: 'http://localhost:3000/faq', hasHero: true },
  { name: 'terms', url: 'http://localhost:3000/legal/terms', hasHero: true },
  { name: 'privacy', url: 'http://localhost:3000/legal/privacy-policy', hasHero: true },
  { name: 'tokusho', url: 'http://localhost:3000/legal/tokusho', hasHero: true }
];

(async () => {
  console.log('🎯 全ページのヒーローセクションチェック\n');

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  const results = [];

  for (const pageInfo of pages) {
    console.log(`📸 ${pageInfo.name}...`);

    try {
      await page.goto(pageInfo.url, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(2000);

      // ヒーローセクションの背景画像をチェック
      const heroInfo = await page.evaluate(() => {
        const heroSection = document.querySelector('section');
        if (!heroSection) return { exists: false };

        const style = window.getComputedStyle(heroSection);
        const bgImage = style.backgroundImage;

        // 背景画像を持つdivを探す
        const bgDiv = heroSection.querySelector('div[class*="absolute"]');
        const hasBgImage = bgDiv && bgDiv.querySelector('img');

        // Framer Motionのアニメーション
        const hasMotionDiv = !!heroSection.querySelector('[style*="transform"]');

        return {
          exists: true,
          hasBgImage: !!hasBgImage,
          hasMotion: hasMotionDiv,
          bgImageSrc: hasBgImage ? hasBgImage.getAttribute('src') : null,
          className: heroSection.className
        };
      });

      // スクリーンショット撮影
      await page.screenshot({
        path: `screenshots/heroes/${pageInfo.name}-hero.png`
      });

      results.push({
        page: pageInfo.name,
        url: pageInfo.url,
        ...heroInfo
      });

      const status = heroInfo.hasBgImage ? '✅' : '⚠️';
      console.log(`  ${status} 背景画像: ${heroInfo.hasBgImage ? 'あり' : 'なし'}`);
      if (heroInfo.bgImageSrc) {
        console.log(`     画像: ${heroInfo.bgImageSrc.substring(0, 60)}...`);
      }

    } catch (error) {
      console.log(`  ❌ エラー: ${error.message}`);
      results.push({
        page: pageInfo.name,
        url: pageInfo.url,
        error: error.message
      });
    }

    console.log('');
  }

  await browser.close();

  // サマリー
  console.log('\n' + '='.repeat(60));
  console.log('📊 ヒーローセクション背景画像サマリー');
  console.log('='.repeat(60) + '\n');

  const withBg = results.filter(r => r.hasBgImage);
  const withoutBg = results.filter(r => !r.hasBgImage && !r.error);

  console.log(`✅ 背景画像あり: ${withBg.length}ページ`);
  withBg.forEach(r => console.log(`   - ${r.page}`));

  console.log(`\n⚠️  背景画像なし: ${withoutBg.length}ページ`);
  withoutBg.forEach(r => console.log(`   - ${r.page} (${r.url})`));

  console.log('\n✨ スクリーンショット保存: screenshots/heroes/');
})();
