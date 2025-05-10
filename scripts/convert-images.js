const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sourceDir = path.join(__dirname, '../public/assets/images');
const targetDir = path.join(__dirname, '../public/assets/images/webp');

async function convertToWebP() {
    try {
        // ディレクトリが存在しない場合は作成
        await fs.mkdir(targetDir, { recursive: true });

        // 画像ファイルの一覧を取得
        const files = await fs.readdir(sourceDir);

        for (const file of files) {
            if (file.match(/\.(jpg|jpeg|png)$/i)) {
                const sourcePath = path.join(sourceDir, file);
                const targetPath = path.join(targetDir, `${path.parse(file).name}.webp`);

                // WebPに変換
                await sharp(sourcePath)
                    .webp({ quality: 80 })
                    .toFile(targetPath);

                console.log(`Converted ${file} to WebP format`);
            }
        }

        console.log('All images have been converted successfully!');
    } catch (error) {
        console.error('Error converting images:', error);
    }
}

convertToWebP(); 