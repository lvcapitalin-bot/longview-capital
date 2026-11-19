const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function makeFavicons() {
  const size = 128;
  const padding = 16;
  const innerSize = size - (padding * 2);

  // Resize icon-transparent to fit inside innerSize
  const iconBuffer = await sharp(path.join(__dirname, '../public/images/icon-transparent.png'))
    .resize(innerSize, innerSize, { fit: 'inside' })
    .toBuffer();

  // Create rounded rectangle SVG background with clean luxury ivory and champagne gold trim
  const svgBg = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="${size - 4}" height="${size - 4}" rx="28" ry="28" fill="#FFFFFF" stroke="#C99532" stroke-width="4"/>
    </svg>
  `;

  const bgBuffer = await sharp(Buffer.from(svgBg)).png().toBuffer();

  const finalFavicon = await sharp(bgBuffer)
    .composite([{
      input: iconBuffer,
      gravity: 'centre'
    }])
    .png()
    .toBuffer();

  // Write high-res 128x128 favicon.png
  fs.writeFileSync(path.join(__dirname, '../public/favicon.png'), finalFavicon);
  
  // Also create standard 32x32 for legacy browsers / tabs
  const favicon32 = await sharp(finalFavicon).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/favicon-32x32.png'), favicon32);

  console.log('Successfully generated high-visibility favicon.png and favicon-32x32.png');
}

makeFavicons().catch(err => {
  console.error(err);
  process.exit(1);
});
