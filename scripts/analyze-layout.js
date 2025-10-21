const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  console.log('🔍 レイアウト分析\n');

  // コンテナ幅を分析
  const containerAnalysis = await page.evaluate(() => {
    const results = [];

    // メインコンテナ
    const containers = document.querySelectorAll('.container, [class*="max-w"]');
    containers.forEach(el => {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);

      results.push({
        element: el.className.split(' ').slice(0, 3).join(' '),
        width: rect.width,
        maxWidth: style.maxWidth,
        padding: style.paddingLeft + ' / ' + style.paddingRight,
        margin: style.marginLeft + ' / ' + style.marginRight
      });
    });

    return results;
  });

  console.log('📏 コンテナ幅分析:');
  containerAnalysis.forEach(item => {
    console.log(`  ${item.element}`);
    console.log(`    実際の幅: ${Math.round(item.width)}px`);
    console.log(`    max-width: ${item.maxWidth}`);
    console.log(`    padding: ${item.padding}`);
    console.log(`    margin: ${item.margin}\n`);
  });

  // ヒーローセクションの分析
  const heroAnalysis = await page.evaluate(() => {
    const hero = document.querySelector('section');
    if (!hero) return null;

    const h1 = hero.querySelector('h1');
    const p = hero.querySelectorAll('p');

    return {
      heroWidth: hero.offsetWidth,
      h1Text: h1 ? h1.textContent : 'N/A',
      h1Width: h1 ? h1.offsetWidth : 0,
      h1Classes: h1 ? h1.className : '',
      priceText: p.length > 1 ? p[1].textContent : 'N/A',
      priceWidth: p.length > 1 ? p[1].offsetWidth : 0,
      priceClasses: p.length > 1 ? p[1].className : ''
    };
  });

  console.log('🎯 ヒーローセクション分析:');
  console.log(`  セクション幅: ${heroAnalysis.heroWidth}px`);
  console.log(`  \n  見出し:`);
  console.log(`    テキスト: "${heroAnalysis.h1Text.substring(0, 50)}..."`);
  console.log(`    幅: ${heroAnalysis.h1Width}px`);
  console.log(`    クラス: ${heroAnalysis.h1Classes}`);
  console.log(`  \n  価格情報:`);
  console.log(`    テキスト: "${heroAnalysis.priceText.substring(0, 60)}..."`);
  console.log(`    幅: ${heroAnalysis.priceWidth}px`);
  console.log(`    クラス: ${heroAnalysis.priceClasses}`);

  // 改行推奨箇所を提案
  console.log('\n💡 改善提案:');

  if (heroAnalysis.h1Width > 1200) {
    console.log('  ⚠️  見出しが長すぎます (1200px超)');
    console.log('     推奨: 「ホームページ制作・AIチャットボット開発・」で改行');
    console.log('     または max-width を狭めて自然に折り返す');
  }

  if (heroAnalysis.priceText.length > 60) {
    console.log('  ⚠️  価格情報が長すぎます');
    console.log('     推奨: <br>タグで明示的に改行');
    console.log('     例: 「適正価格で最大の価値を。<br>ホームページ制作132,000円〜...」');
  }

  // コンテナの最大幅をチェック
  const maxWidthTooSmall = containerAnalysis.some(c =>
    c.maxWidth && parseInt(c.maxWidth) < 1400 && c.width < 1200
  );

  if (maxWidthTooSmall) {
    console.log('  ⚠️  コンテナのmax-widthが狭すぎる可能性');
    console.log('     推奨: max-w-7xl (1280px) → max-w-[1400px] または max-w-[90%]');
  }

  await browser.close();

  console.log('\n✨ 分析完了');
})();
