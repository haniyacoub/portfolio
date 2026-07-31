/**
 * parseFigure — split a display figure into the parts the count-up animation
 * needs, while preserving its exact formatting.
 *   "$1.17M" → { prefix:"$", value:1.17, suffix:"M", decimals:2 }
 *   "740K"   → { value:740, suffix:"K" }
 *   "+34%"   → { prefix:"+", value:34, suffix:"%" }
 *   "1,966"  → { value:1966, group:true }
 *   "~0", "≈ 0" → animatable:false (render static)
 */
export interface Figure {
  prefix: string;
  value: number;
  suffix: string;
  decimals: number;
  group: boolean;
  animatable: boolean;
}

export function parseFigure(raw: string): Figure {
  const m = raw.match(/^(\D*?)([\d.,]+)(\D*)$/);
  if (!m) {
    return { prefix: "", value: 0, suffix: "", decimals: 0, group: false, animatable: false };
  }
  const [, prefix, body, suffix] = m;
  const group = body.includes(",");
  const dotParts = body.replace(/,/g, "").split(".");
  const decimals = dotParts[1]?.length ?? 0;
  const value = parseFloat(body.replace(/,/g, ""));
  return {
    prefix,
    value: Number.isFinite(value) ? value : 0,
    suffix,
    decimals,
    group,
    animatable: Number.isFinite(value),
  };
}
