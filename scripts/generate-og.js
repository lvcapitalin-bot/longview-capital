const sharp = require("sharp");
const path = require("path");

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  // SVG overlay with Deep Navy luxury background, gold hairline borders, mountain icon and brand typography
  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0c1d35" />
        <stop offset="100%" stop-color="#102542" />
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#C99532" />
        <stop offset="50%" stop-color="#E8D2A7" />
        <stop offset="100%" stop-color="#C99532" />
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

    <!-- Subtle Gold Border Frame -->
    <rect x="30" y="30" width="${width - 60}" height="${height - 60}" rx="16" fill="none" stroke="url(#goldGrad)" stroke-width="1.5" stroke-opacity="0.4" />

    <!-- Brand Label -->
    <text x="600" y="150" font-family="'Times New Roman', serif" font-size="20" font-weight="bold" letter-spacing="4" fill="#C99532" text-anchor="middle">
      LONGVIEW CAPITAL
    </text>

    <!-- Main Headline -->
    <text x="600" y="240" font-family="'Times New Roman', serif" font-size="52" font-weight="bold" fill="#FAF8F5" text-anchor="middle">
      Invest With Perspective.
    </text>
    <text x="600" y="305" font-family="'Times New Roman', serif" font-size="52" font-weight="normal" font-style="italic" fill="url(#goldGrad)" text-anchor="middle">
      Build Wealth With Purpose.
    </text>

    <!-- Divider -->
    <line x1="500" y1="355" x2="700" y2="355" stroke="#C99532" stroke-width="2" stroke-opacity="0.8" />

    <!-- Subheadline -->
    <text x="600" y="415" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="#D1D5DB" text-anchor="middle" font-weight="300">
      Independent Fundamental Stock Research &amp; Wealth Advisory
    </text>

    <!-- Location & Credentials Badge -->
    <rect x="420" y="470" width="360" height="44" rx="22" fill="#FAF8F5" fill-opacity="0.08" stroke="#E8D2A7" stroke-opacity="0.3" stroke-width="1" />
    <text x="600" y="498" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#E8D2A7" text-anchor="middle">
      Bodakdev, Ahmedabad • Independent Equity Research
    </text>

    <!-- Website URL -->
    <text x="600" y="565" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="bold" letter-spacing="3" fill="#FAF8F5" fill-opacity="0.6" text-anchor="middle">
      WWW.LVCAPITAL.IN
    </text>
  </svg>
  `;

  const outputPath = path.join(process.cwd(), "public", "images", "og-image.jpg");
  await sharp(Buffer.from(svgOverlay))
    .jpeg({ quality: 95 })
    .toFile(outputPath);

  console.log("Successfully generated OG image at:", outputPath);
}

generateOgImage().catch(console.error);
