/**
 * 画像をWebP形式に変換するスクリプト
 * PNG/JPGファイルを高品質なWebPに変換し、ファイルサイズを50-70%削減
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = inputDir; // 同じディレクトリに出力

// PNG/JPGファイルを取得
const imageFiles = fs.readdirSync(inputDir)
  .filter(file => /\.(png|jpg|jpeg)$/i.test(file));

console.log(`🚀 画像変換を開始: ${imageFiles.length}個のファイル\n`);

let totalOriginalSize = 0;
let totalWebPSize = 0;

// 各画像を変換
async function convertImages() {
  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));

    try {
      // 元のファイルサイズ
      const originalStats = fs.statSync(inputPath);
      const originalSize = originalStats.size;
      totalOriginalSize += originalSize;

      // WebPに変換
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 }) // 高品質・高圧縮
        .toFile(outputPath);

      // 変換後のファイルサイズ
      const webpStats = fs.statSync(outputPath);
      const webpSize = webpStats.size;
      totalWebPSize += webpSize;

      const reduction = ((1 - webpSize / originalSize) * 100).toFixed(1);

      console.log(`✅ ${file}`);
      console.log(`   ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(webpSize / 1024 / 1024).toFixed(2)}MB (-${reduction}%)`);
    } catch (error) {
      console.error(`❌ ${file}: ${error.message}`);
    }
  }

  // サマリー
  const totalReduction = ((1 - totalWebPSize / totalOriginalSize) * 100).toFixed(1);
  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`📊 変換完了サマリー`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`変換ファイル数: ${imageFiles.length}個`);
  console.log(`元のサイズ合計: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`WebPサイズ合計: ${(totalWebPSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`削減率: ${totalReduction}%`);
  console.log(`削減サイズ: ${((totalOriginalSize - totalWebPSize) / 1024 / 1024).toFixed(2)}MB\n`);
}

convertImages().catch(console.error);
