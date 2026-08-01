# Case-study rework brief — read this fully before writing anything

You are improving case studies on Hani Yacoub's portfolio: an Astro site at
`/Users/haniycb/Desktop/Portfolio`. One Markdown file per case study lives in
`src/content/work/`. Frontmatter drives the generated page and its charts.

The site's spine, in one line: **find the abuse, prove it, and don't break the
legitimate customers doing it.**

## The five things the owner asked for

1. **Kill the KPI-card look.** Today most cases lean on three `stat` tiles in a
   row — a bare number, a label, a caption. That reads like a dashboard, not an
   analyst's argument. Bare stat tiles are now the exception, not the default.
2. **Consolidate.** Related cases merge into one denser, stronger case.
3. **More real visualizations.** Every case earns at least one true chart with
   a plotted shape. Two is better.
4. **Add color.** The chart layer now has a validated multi-hue palette
   (below). Use it through the chart components — never as raw hex.
5. **Amazon language.** See the language section.

## Hard rule: nothing is invented

Every number, claim, and detail must already exist in the source material you
are given. You may reorganize, compress, sharpen, and re-shape into charts.
You may **not** invent a figure, a date, a percentage, a customer, or an
outcome. If a chart shape wants a number nobody measured, either pick a
different chart or mark the value as illustrative in its own caption, exactly
the way the existing files do ("Illustrative shape", "Representative shape,
since the live graph runs on confidential data"). Confidentiality matters:
these are real AWS/Zalando investigations, already genericized. Keep them
genericized — no account IDs, no customer names, no internal service names
beyond what the source already says.

## Chart catalogue — pick by the data's job

Each metric in frontmatter carries a `chart` key selecting its component.
**The job the data does picks the chart.** Do not pick for variety.

| `chart` | Use it when |
|---|---|
| `gate-funnel` | An **ordered** sequence of gates/stages/decisions where order carries meaning. Optional `survivors` per stage makes it a real funnel. **Use this instead of `signal-matrix` whenever the steps are ordered.** |
| `event-trace` | Forensic events where **the time gaps are the evidence**. Real elapsed offsets on one axis. |
| `share-bar` | Part-to-whole where **one slice dominates** the whole. |
| `ranked-bars` | Magnitude across named categories where **one is the outlier** and the rest are context. |
| `relations-graph` | Whole-population graph; rings as clusters. |
| `abuse-chain` | Evenly-staged abuse flow ending on a punchline figure. Prefer `event-trace` when timing matters. |
| `coverage-gap` | A coverage strip with one highlighted **missing** item (a root-cause gap). |
| `caught-vs-collateral` | Precision: large caught vs near-zero collateral. The signature visual. |
| `before-after` | A before vs after state on one measure. |
| `line` | Decay / survival / trend, optional baseline series. |
| `proportion` | A single simple proportion. |
| `signal-matrix` | A genuinely **unordered** set of signals. Ordered? Use `gate-funnel`. |
| `delta` | A figure plus a directional change. |
| `stat` | One headline figure. **Rationed — see the budget.** |
| `timeline` | Dated milestones across orgs. |

### Chart budget per case (this is the anti-KPI-card rule)

- **At least one** chart that plots a shape (anything except `stat` / `delta`).
  Two plotted charts is the target for a merged case.
- **At most one** `stat` metric per case, and only when a single number really
  is the finding. A merged case may carry two only if they measure genuinely
  different things.
- Never three `stat` tiles in a row. That is the pattern being removed.
- `indexMetric` should point at a **plotted** chart, so the work-index card
  shows a chart rather than a lone numeral.

### Exact chart shapes

```yaml
- chart: "gate-funnel"
  label: "Eight ordered gates before any shutdown"
  unit: "candidate accounts"        # optional, names what flows through
  stages:
    - name: "Population scoping"
      note: "optional line of detail"
      survivors: 4200               # optional; include on ALL or NONE
      key: true                     # optional; marks the stage that matters
  caption: "optional"
  context: "optional"

- chart: "event-trace"
  label: "The settled chain, from release to launch"
  events:
    - at: 0                         # MINUTES from T0; use fractions (0.0166 = 1 sec)
      time: "T0"                    # the printed offset — authoritative
      label: "Containment lifted by reviewer"
      source: "ops UI"              # optional evidence tag
      kind: "fail"                  # plain | good | fail  (meaning, not identity)
      punch: true                   # optional; marks the payoff event
  caption: "optional"

- chart: "share-bar"
  label: "Share of all tasks ever queued"
  of: "of every task in the queue's history"
  segments:
    - { name: "One coordinated ring", value: 71, display: "71%", key: true }
    - { name: "Everything else", value: 29, display: "29%" }

- chart: "ranked-bars"
  label: "Concentration by lens"
  unit: "accounts"
  sort: true                        # default true
  bars:
    - { name: "Device fingerprint", value: painfully_real_number, display: "optional", key: true, note: "optional" }
```

For the pre-existing shapes, copy the exact YAML from a file already using
that chart — do not guess its fields.

## Color — how to use it correctly

The palette lives in `src/styles/tokens.css` as `--series-1..8`,
`--ramp-1..5`, `--div-*`, `--status-*`. It is **validated**, not decorative:
colorblind separation, lightness band, chroma floor, and contrast were all
measured. Two consequences for you:

- You never write a color. The chart components own color. Your job is
  picking the right `chart` so the right color job (identity vs order vs
  state) applies.
- Do not ask for a chart shape "because it would add color." Color arrives as
  a by-product of the correct form.

## Amazon language — what it means here

Hani works at AWS. The writing should read like a strong internal Amazon
document: plain, specific, narrative prose that leads with the result.

**Do:**
- Lead with the measurable outcome, then how it was reached. `impact:` is the
  Amazon-style headline — it states the result and the number.
- Use Amazon's actual vocabulary **where it is the precise term**: correction
  of errors (COE), one-way vs two-way door, blast radius, guardrail, dive
  deep, working backwards, operational excellence, bias for action, earn
  trust, single-threaded owner, tenet, Day 1, escalation, runbook, SOP.
- Prefer the concrete noun over the abstraction. "Eight ordered gates" beats
  "a robust framework."
- Full sentences, active voice, first person singular for what Hani did.
- Quantify. Where a number exists, it goes in the sentence.
- Name the counterfactual plainly — Amazon documents state the cost of
  inaction.

**Don't:**
- Sprinkle leadership principles as decoration. If "customer obsession" is
  not literally what the paragraph is about, leave it out. Buzzword soup is
  worse than plain prose.
- Use hype adjectives: revolutionary, cutting-edge, world-class, seamless,
  robust, leverage (as a verb), utilize, synergy.
- Hedge. No "helped to", "was involved in", "played a key role".
- Claim team credit as personal credit, or vice versa. The existing files are
  already careful about this — keep that calibration exactly.

## Frontmatter contract

Validated by `src/content/config.ts`. Required: `title`, `role`, `period`,
`theme`, `order`, `summary`, `context`, `contribution`, `outcome`. Optional
but expected here: `track`, `company`, `featured`, `impact`,
`counterfactual`, `metrics`, `tags`, `indexMetric`, `draft`.

Notes that matter:
- `impact` and `counterfactual` accept inline `<strong>` HTML. Use `<strong>`
  on the figures that carry the argument, sparingly.
- `contribution` is split into bullets on the page by sentence. So write it as
  clean, self-contained sentences — each one becomes a bullet.
- `summary` is the one-line hook on the index card.
- `theme` is a short categorical label. `track` is the filter facet:
  Detection · Investigation · Tooling · Measurement · Precision · Product.
- Body prose after the frontmatter is "The full story". Target 240–340 words
  for a merged case, 200–280 for a standalone. It should not restate the
  frontmatter — it should tell the story the frontmatter summarizes.
- The body's first paragraph gets a drop cap. Open on a strong short sentence.

## Length and density

The point of consolidating is **denser, not longer**. A merged case must be
sharper than either source, and must not read as two case studies stapled
together. Find the single thesis that both sources serve, lead with it, and
let each source become a movement inside one argument.
