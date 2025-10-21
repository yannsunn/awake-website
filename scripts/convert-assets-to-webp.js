const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../public/assets/images');
const pngFiles = ['clemira-products.png', 'clemira-youtube.png', 'clemira-sales.png', 'ai-line-automation.png'];

async function convertToWebP() {
  for (const file of pngFiles) {
    const inputPath = path.join(assetsDir, file);
    const outputPath = path.join(assetsDir, file.replace('.png', '.webp'));

    if (fs.existsSync(inputPath)) {
      try {
        await sharp(inputPath)
          .webp({ quality: 85 })
          .toFile(outputPath);
        console.log(`✅ ${file} → ${file.replace('.png', '.webp')}`);
      } catch (error) {
        console.error(`❌ ${file}の変換に失敗:`, error.message);
      }
    } else {
      console.log(`⚠️  ${file} が見つかりません`);
    }
  }
}

convertToWebP().catch(console.error);
