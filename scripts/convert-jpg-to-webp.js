const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../public/assets/images');
const jpgFiles = ['ceo-profile.jpg', 'clemira-athletes.jpg', 'clemira-insole.jpg', 'ogp.jpg', 'og-ai.png', 'og-ec.png', 'og-web.png'];

async function convertToWebP() {
  for (const file of jpgFiles) {
    const inputPath = path.join(assetsDir, file);
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const outputPath = path.join(assetsDir, `${baseName}.webp`);

    if (fs.existsSync(inputPath)) {
      try {
        await sharp(inputPath)
          .webp({ quality: 85 })
          .toFile(outputPath);
        console.log(`✅ ${file} → ${baseName}.webp`);
      } catch (error) {
        console.error(`❌ ${file}の変換に失敗:`, error.message);
      }
    } else {
      console.log(`⚠️  ${file} が見つかりません`);
    }
  }
}

convertToWebP().catch(console.error);
