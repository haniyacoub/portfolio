import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/* =========================================================================
   Content collection schema — THE CONTRACT.

   To add a project, Hani drops one Markdown file into src/content/work/.
   Its frontmatter (validated below) generates the work-index entry and a
   fully styled, charted case-study page. No chart code, page, or nav edits.

   Every metric carries a `chart` key that selects which bespoke chart
   component renders it (see src/components/charts/MetricFigure.astro).
   All figures live here as editable values — never hardcoded into a page —
   so they can be rounded or genericized before publishing.
   ========================================================================= */

/* A single numeric leg used by comparison charts. `value` is a number so the
   chart can size bars proportionally; `display` optionally overrides the
   printed text (e.g. show "~1 week" while sizing the bar with 7). */
const leg = z.object({
  label: z.string(),
  value: z.number(),
  unit: z.string().optional(),
  display: z.string().optional(),
});

/* ---- The chart metric union. Discriminated on `chart`. ---------------- */
const metric = z.discriminatedUnion("chart", [
  /* One headline figure. The workhorse. */
  z.object({
    chart: z.literal("stat"),
    label: z.string(),
    value: z.string(), // kept as string so "$1.17M", "740K", "6+" all work
    unit: z.string().optional(),
    context: z.string().optional(),
    // Set false for a supporting figure that should stay ink, not accent.
    emphasis: z.boolean().default(true),
  }),

  /* A figure plus a directional change. */
  z.object({
    chart: z.literal("delta"),
    label: z.string(),
    value: z.string(), // the headline figure, e.g. "+34%"
    detail: z.string(), // what it measures, e.g. "more disputed dollars caught"
    direction: z.enum(["up", "down", "flat"]).default("up"),
    // Whether the movement is good — drives accent vs. neutral, not just arrow.
    good: z.boolean().default(true),
    baseline: z.string().optional(), // optional "from X" context line
    context: z.string().optional(),
  }),

  /* Two horizontal bars: a before vs. after state. */
  z.object({
    chart: z.literal("before-after"),
    label: z.string(),
    before: leg,
    after: leg,
    // Which direction is the win, so the chart marks the right bar.
    betterWhen: z.enum(["lower", "higher"]).default("lower"),
    context: z.string().optional(),
  }),

  /* A single 100%-width bar showing one proportion. */
  z.object({
    chart: z.literal("proportion"),
    label: z.string(),
    value: z.number().min(0).max(100), // the percentage
    of: z.string(), // denominator phrase, e.g. "of ring members"
    remainderLabel: z.string().optional(),
    context: z.string().optional(),
  }),

  /* The signature precision visual: large caught vs. near-zero collateral. */
  z.object({
    chart: z.literal("caught-vs-collateral"),
    label: z.string(),
    caught: leg,
    collateral: leg,
    context: z.string().optional(),
  }),

  /* Dot-matrix of a multi-signal scoring framework; cells light up. */
  z.object({
    chart: z.literal("signal-matrix"),
    label: z.string(),
    signals: z.array(z.string()), // signal names, e.g. ["Device fingerprint", ...]
    // How many of the signals the matrix marks as "shared/active".
    activeCount: z.number().optional(),
    // Optional caption restating the point in words.
    caption: z.string().optional(),
    context: z.string().optional(),
  }),

  /* A horizontal timeline (also usable site-wide for the career arc). */
  z.object({
    chart: z.literal("timeline"),
    label: z.string(),
    items: z.array(
      z.object({
        date: z.string(),
        org: z.string(),
        detail: z.string().optional(),
      }),
    ),
    context: z.string().optional(),
  }),

  /* Interactive whole-population relations graph; rings surface as clusters. */
  z.object({
    chart: z.literal("relations-graph"),
    label: z.string().optional(),
    caption: z.string().optional(),
    context: z.string().optional(),
    population: z.number().optional(),
    rings: z.number().optional(),
    seed: z.number().optional(),
    coverage: z.string().optional(),
  }),

  /* Staged abuse-chain flow ending on a punchline figure. */
  z.object({
    chart: z.literal("abuse-chain"),
    label: z.string(),
    steps: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
        note: z.string().optional(),
        punch: z.boolean().optional(),
      }),
    ),
    context: z.string().optional(),
  }),

  /* Coverage strip with one highlighted gap (a "one missing pattern" root cause). */
  z.object({
    chart: z.literal("coverage-gap"),
    label: z.string(),
    items: z.array(z.object({ name: z.string(), covered: z.boolean() })),
    caption: z.string().optional(),
    context: z.string().optional(),
  }),

  /* Minimal SVG line for decay / survival / trend, with optional baseline. */
  z.object({
    chart: z.literal("line"),
    label: z.string(),
    points: z.array(z.number()),
    baseline: z.array(z.number()).optional(),
    seriesLabel: z.string().optional(),
    baselineLabel: z.string().optional(),
    xLabel: z.string().optional(),
    yLabel: z.string().optional(),
    caption: z.string().optional(),
    context: z.string().optional(),
  }),

  /* An ORDERED sequence of gates/stages on a single-hue ordinal ramp.
     Use instead of signal-matrix whenever the order carries meaning (gate 6
     only sees what gates 1-5 passed). Add `survivors` to make it a funnel. */
  z.object({
    chart: z.literal("gate-funnel"),
    label: z.string(),
    stages: z.array(
      z.object({
        name: z.string(),
        note: z.string().optional(),
        survivors: z.number().optional(),
        key: z.boolean().optional(),
      }),
    ),
    unit: z.string().optional(),
    caption: z.string().optional(),
    context: z.string().optional(),
  }),

  /* Part-to-whole as one horizontal stacked bar. For "one slice dominates". */
  z.object({
    chart: z.literal("share-bar"),
    label: z.string(),
    segments: z.array(
      z.object({
        name: z.string(),
        value: z.number(),
        display: z.string().optional(),
        key: z.boolean().optional(),
      }),
    ),
    of: z.string().optional(),
    caption: z.string().optional(),
    context: z.string().optional(),
  }),

  /* Ranked magnitude bars with ONE emphasized bar and the rest grayed.
     The honest form when the story is "this one is the outlier". */
  z.object({
    chart: z.literal("ranked-bars"),
    label: z.string(),
    bars: z.array(
      z.object({
        name: z.string(),
        value: z.number(),
        display: z.string().optional(),
        key: z.boolean().optional(),
        note: z.string().optional(),
      }),
    ),
    unit: z.string().optional(),
    sort: z.boolean().optional(),
    caption: z.string().optional(),
    context: z.string().optional(),
  }),

  /* Forensic events on a real elapsed-time axis, where the GAPS are the
     evidence. Use instead of abuse-chain when timing is the finding. */
  z.object({
    chart: z.literal("event-trace"),
    label: z.string(),
    events: z.array(
      z.object({
        at: z.number(), // minutes from T0; fractions for sub-minute
        time: z.string(), // printed offset, authoritative for display
        label: z.string(),
        source: z.string().optional(),
        kind: z.enum(["plain", "good", "fail"]).optional(),
        punch: z.boolean().optional(),
      }),
    ),
    caption: z.string().optional(),
    context: z.string().optional(),
  }),
]);

export type Metric = z.infer<typeof metric>;

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    period: z.string(),
    theme: z.string(), // short categorical label, e.g. "Root-cause investigation"
    // Coarse grouping used by the work-index filter tabs, e.g. "Investigation".
    track: z.string().default("Selected"),
    company: z.string().default(""), // e.g. "AWS", "Zalando" — second filter facet
    featured: z.boolean().default(false), // surfaced on the home landing
    order: z.number(), // controls position in the work index
    summary: z.string(), // one-line hook shown on the index
    context: z.string(), // what the situation / threat was
    contribution: z.string(), // what Hani specifically did
    outcome: z.string(), // what changed as a result
    // Amazon-style: lead with the measurable result, and the cost of inaction.
    impact: z.string().optional(), // the exact, measurable "so what"
    counterfactual: z.string().optional(), // what would have happened without it
    metrics: z.array(metric).default([]),
    tags: z.array(z.string()).default([]),
    // The one figure to pull onto the index card, by metric index.
    indexMetric: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
