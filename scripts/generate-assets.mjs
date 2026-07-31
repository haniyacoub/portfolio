import sharp from "sharp";
import { writeFileSync } from "node:fs";

const OUT = "./public/";

/* ---- OG image (1200x630). Uses system serif/mono so it rasterizes crisp
   without embedding fonts; design mirrors the site: paper, ink, one oxblood
   accent word, a single hairline + accent tick. ---------------------------- */
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="80%" cy="38%" r="55%">
      <stop offset="0%" stop-color="#d24b39" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="#d24b39" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#100d0c"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="1200" height="8" fill="#d24b39"/>
  <line x1="80" y1="96" x2="1120" y2="96" stroke="#2a2421" stroke-width="1"/>
  <text x="80" y="84" font-family="'Courier New', monospace" font-size="20" letter-spacing="3" fill="#8a7e6e">FRAUD PREVENTION &amp; AI-ABUSE ANALYST — BERLIN</text>

  <text font-family="Georgia, 'Times New Roman', serif" font-size="82" fill="#ece4d7">
    <tspan x="78" y="240">Find the abuse, <tspan font-style="italic" fill="#d24b39">prove</tspan> it,</tspan>
    <tspan x="78" y="330">and don't break the</tspan>
    <tspan x="78" y="420">legitimate customers</tspan>
    <tspan x="78" y="510">doing it.</tspan>
  </text>

  <line x1="80" y1="556" x2="1120" y2="556" stroke="#2a2421" stroke-width="1"/>
  <text x="80" y="592" font-family="Georgia, serif" font-size="30" fill="#ece4d7">Hani Yacoub</text>
  <text x="1120" y="590" text-anchor="end" font-family="'Courier New', monospace" font-size="18" letter-spacing="1" fill="#8a7e6e">hani_yacoub@hotmail.com</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile(OUT + "og.png");
console.log("wrote og.png");

/* ---- Apple touch icon (180x180) from the favicon mark ------------------- */
const touch = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#1c1916"/>
  <g fill="#f4f1e9">
    <rect x="8" y="6" width="3.6" height="20" rx="0.4"/>
    <rect x="8" y="13.6" width="13.4" height="3.6" rx="0.4"/>
    <rect x="17.8" y="13.6" width="3.6" height="12.4" rx="0.4"/>
  </g>
  <rect x="8" y="6" width="3.6" height="3.6" rx="0.4" fill="#d24b39"/>
</svg>`;
await sharp(Buffer.from(touch)).png().toFile(OUT + "apple-touch-icon.png");
console.log("wrote apple-touch-icon.png");

/* ---- favicon.ico (32x32) ------------------------------------------------ */
const ico = await sharp(Buffer.from(touch)).resize(32, 32).png().toBuffer();
writeFileSync(OUT + "favicon.ico", ico); // PNG-encoded .ico; modern browsers accept it
console.log("wrote favicon.ico");
