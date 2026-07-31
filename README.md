# Hani Yacoub — portfolio

An editorial, data-driven portfolio for a fraud-prevention & AI-abuse analyst.
Built with [Astro](https://astro.build) + content collections, bespoke SVG/CSS
data-viz, a small vanilla-JS interaction layer, and self-hosted variable fonts.

The spine of the site is a single idea: **find the abuse, prove it, and don't
break the legitimate customers doing it.**

## Motion & interactivity

No UI framework — one lightweight island (`src/scripts/site.ts`) drives the
whole site, re-init-safe across navigations and fully neutralized under
`prefers-reduced-motion`:

- **Smooth momentum scroll** — [Lenis](https://github.com/darkroomengineering/lenis).
- **Page transitions** — Astro `<ClientRouter />` (View Transitions).
- **Living hero** — `components/interactive/SignalField.astro`: an animated
  canvas of accounts (legitimate ink dots + an oxblood fraud ring) with a
  detection sweep that "catches" the ring. Pauses offscreen; static frame when
  motion is reduced.
- **Signature interactive figure** — `components/interactive/ThresholdDial.astro`:
  drag the detection threshold and watch recall rise against false-positives in
  real time, with a marked "precision zone."
- **Tabbed work filter** — sliding ink indicator + live count (in `index.astro`).
- **Count-up figures** — every headline numeral ticks up on first view
  (`utils/num.ts` parses `$1.17M` / `740K` / `1,966` / `+34%` and preserves it).
- **Line-by-line headline reveals**, **magnetic** contact links, **chart
  hover tooltips**, and once-on-view chart draw-ins.

```
npm install
npm run dev        # local dev at http://localhost:4321
npm run build      # static build → dist/
npm run preview    # serve the built site
npm run gen:assets # regenerate favicon / OG / touch icons (scripts/generate-assets.mjs)
```

## Design system

Everything resolves to tokens — no raw values live in components.

- `src/styles/tokens.css` — type scale, spacing, color, easing, breakpoints.
  Edit the palette or scale here and it propagates everywhere.
- `src/styles/global.css` — reset, base typography, selection, focus, grid.

**Type:** Fraunces (display, large only) · Hanken Grotesk (body) ·
JetBrains Mono (labels, metadata, **every numeral** — tabular figures).
**Color:** warm paper base, warm near-black ink, one mid-gray, and exactly one
accent (deep oxblood) that doubles as the single data-highlight color in charts.

## Adding a project later — the drop-in workflow

This is the core requirement: **adding a project is one file.**

1. Create `src/content/work/<slug>.md`.
2. Fill in the frontmatter (schema enforced in `src/content/config.ts`). The
   site generates the case-study page, its nav/index entry, and its charts
   automatically. **Do not** edit any page, the nav, or the chart components.
3. Each metric carries a `chart` key that selects its bespoke component. Pick
   the right one per metric. Keep every figure in frontmatter — never hardcode a
   number into a page (figures stay swappable for rounding/genericizing).

### Frontmatter contract

```md
---
title: "..."
role: "Fraud Prevention Analyst — AWS"
period: "2026"
theme: "Root-cause investigation"   # short categorical label
order: 1                            # position in the work index
summary: "One-line hook for the index."
context: "What the situation/threat was."
contribution: "What I specifically did."
outcome: "What changed as a result."
indexMetric: 0                      # which metric to pull onto the index card
tags: ["LLM agents", "Root cause"]
metrics:
  - chart: "stat"          # see chart types below
    label: "Disputed value traced"
    value: "$1.17M"
    context: "..."
    emphasis: true         # accent the figure (use on the one that matters)
---

Long-form case-study body in Markdown.
```

### Chart types (the `chart` key)

| key                    | component            | use for |
|------------------------|----------------------|---------|
| `stat`                 | StatBlock            | one headline figure (`value`, `label`, `unit?`, `context?`, `emphasis`) |
| `delta`                | DeltaStat            | a figure + directional change (`value`, `detail`, `direction`, `good`, `baseline?`) |
| `before-after`         | BeforeAfterBar       | before vs. after (`before`/`after` legs, `betterWhen`) |
| `proportion`           | ProportionBar        | a single proportion (`value` 0–100, `of`, `remainderLabel?`) |
| `caught-vs-collateral` | CaughtVsCollateral   | precision: large caught vs. near-zero collateral (`caught`/`collateral` legs) |
| `signal-matrix`        | SignalMatrix         | a multi-signal framework (`signals[]`, `activeCount?`, `caption?`) |
| `timeline`             | Timeline             | a horizontal timeline (`items[]` of `date`/`org`/`detail?`) |
| `relations-graph`      | RelationsGraph       | interactive whole-population graph; rings as clusters (`population?`, `rings?`, `seed?`, `coverage?`) |
| `abuse-chain`          | AbuseChain           | staged abuse-chain flow to a punchline (`steps[]` of `label`/`value`/`note?`/`punch?`) |
| `coverage-gap`         | CoverageGap          | coverage strip with one highlighted gap (`items[]` of `name`/`covered`) |
| `line`                 | LineChart            | decay/survival/trend line with optional `baseline[]` (`points[]`, `xLabel?`, `yLabel?`) |

A leg (`before`, `after`, `caught`, `collateral`) is
`{ label, value: number, unit?, display? }` — `value` sizes the bar, `display`
overrides the printed text (e.g. show `~1 week` while sizing with `7`).

To add a genuinely new chart **shape**: build it in `src/components/charts/`,
keep it on-brand with the existing ones (data-ink first, direct labels, tabular
figures, accent on the one value that matters, grayscale-legible, draws in once
on view), and register one branch in
`src/components/charts/MetricFigure.astro`.

## Structure

```
src/
  content/work/        ← one Markdown file per case study (the drop-in)
  content/config.ts    ← typed schema = the contract
  components/charts/   ← bespoke SVG/CSS chart components + MetricFigure/Board
  components/layout/    ← BaseLayout, Nav, Footer
  data/                ← site identity, bio facts, career timeline (editable)
  styles/              ← tokens.css (build first), global.css
  pages/
    index.astro            ← opening · selected work · about · contact
    work/[slug].astro      ← generates a page per work file
```

## Accessibility & performance

Semantic landmarks, skip link, full keyboard nav, AA+ contrast, every chart
carries a text equivalent (`aria-label` + visible context), and all motion
respects `prefers-reduced-motion`. Ships effectively zero client JS — only a
tiny IntersectionObserver island for the once-on-view chart entrance.
