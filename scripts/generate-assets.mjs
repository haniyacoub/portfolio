import sharp from "sharp";
import { writeFileSync } from "node:fs";

const OUT = "./public/";

/* ---- OG image (1200x630) — the single most-seen surface of this site, since
   it renders every time a link is pasted into Slack, LinkedIn or iMessage.
   It MUST carry the same headline as site.tagline and the same accent as
   tokens.css; it previously shipped the retired fraud positioning and the
   abandoned oxblood accent, which is worse than having no card at all.
   Uses system serif/mono so it rasterizes crisp without embedding fonts. --- */
const ACCENT = "#4d70e0"; // indigo, lifted for contrast on the dark OG ground
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="80%" cy="38%" r="55%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#100d0c"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="1200" height="8" fill="${ACCENT}"/>
  <line x1="80" y1="96" x2="1120" y2="96" stroke="#2a2421" stroke-width="1"/>
  <text x="80" y="84" font-family="'Courier New', monospace" font-size="20" letter-spacing="3" fill="#8a7e6e">DATA &amp; RISK ANALYST — BERLIN</text>

  <text font-family="Georgia, 'Times New Roman', serif" font-size="82" fill="#ece4d7">
    <tspan x="78" y="252">I make expensive</tspan>
    <tspan x="78" y="342">decisions <tspan font-style="italic" fill="${ACCENT}">measurable</tspan>.</tspan>
    <tspan x="78" y="432">Most of them are</tspan>
    <tspan x="78" y="522">about fraud.</tspan>
  </text>

  <line x1="80" y1="562" x2="1120" y2="562" stroke="#2a2421" stroke-width="1"/>
  <text x="80" y="596" font-family="Georgia, serif" font-size="30" fill="#ece4d7">Hani Yacoub</text>
  <text x="1120" y="594" text-anchor="end" font-family="'Courier New', monospace" font-size="18" letter-spacing="1" fill="#8a7e6e">haniyacoub.com</text>
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
  <rect x="8" y="6" width="3.6" height="3.6" rx="0.4" fill="${ACCENT}"/>
</svg>`;
await sharp(Buffer.from(touch)).png().toFile(OUT + "apple-touch-icon.png");
console.log("wrote apple-touch-icon.png");

/* ---- favicon.ico (32x32) ------------------------------------------------ */
const ico = await sharp(Buffer.from(touch)).resize(32, 32).png().toBuffer();
writeFileSync(OUT + "favicon.ico", ico); // PNG-encoded .ico; modern browsers accept it
console.log("wrote favicon.ico");
