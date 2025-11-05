/**
 * CEO写真の最適化スクリプト
 * JPEG → WebP変換で高品質を維持しつつファイルサイズを削減
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeCEOImage() {
  const inputPath = path.join(__dirname, '..', 'public', 'assets', 'images', 'ceo-profile.jpg');
  const outputPath = path.join(__dirname, '..', 'public', 'assets', 'images', 'ceo-profile-optimized.webp');

  try {
    // 元画像の情報を取得
    const metadata = await sharp(inputPath).metadata();
    console.log('元画像の情報:');
    console.log(`  サイズ: ${metadata.width}x${metadata.height}px`);
    console.log(`  フォーマット: ${metadata.format}`);

    const inputSize = fs.statSync(inputPath).size;
    console.log(`  ファイルサイズ: ${(inputSize / 1024).toFixed(2)} KB\n`);

    // WebP形式に変換（高品質設定）
    await sharp(inputPath)
      .resize(800, 800, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({
        quality: 85,
        effort: 6
      })
      .toFile(outputPath);

    // 最適化後のファイルサイズを確認
    const outputSize = fs.statSync(outputPath).size;
    const reduction = ((1 - outputSize / inputSize) * 100).toFixed(2);

    console.log('最適化完了:');
    console.log(`  出力: ${outputPath}`);
    console.log(`  ファイルサイズ: ${(outputSize / 1024).toFixed(2)} KB`);
    console.log(`  削減率: ${reduction}%\n`);

    console.log('✅ 最適化が完了しました！');
    console.log('\n次のステップ:');
    console.log('1. src/app/about/page.tsx で画像パスを更新:');
    console.log('   src="/assets/images/ceo-profile.jpg"');
    console.log('   ↓');
    console.log('   src="/assets/images/ceo-profile-optimized.webp"');

  } catch (error) {
    console.error('エラーが発生しました:', error);
    process.exit(1);
  }
}

optimizeCEOImage();
