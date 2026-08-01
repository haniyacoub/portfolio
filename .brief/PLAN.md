# Consolidation plan — 26 cases → 18

Eight merges. Each merge folds two source files into ONE new file with a single
thesis. The rest are kept and tightened in place.

Every merged case must read as one argument, not two case studies stapled
together. The `MERGE` notes below name the thesis to build around.

## The eight merges

| New slug | Sources | The single thesis |
|---|---|---|
| `precision-carveouts` | `precision-carveouts` + `false-positive-reversals` | False-positive aversion as a *standing control*, proven by the individual reversals it was built from. The seven-figure GPU-capacity account is the case-in-point; the carve-out gates are the system it produced. |
| `forecasting-under-uncertainty` | `review-volume-forecast` + `survival-forecasting` | Forecasting fraud load honestly: scenarios that separate for calibrated reasons, uncertainty stated as cones/percentiles, and the finding that inverted the planning premise. Both halves are the same discipline — never ship one line. |
| `remaining-fraud-damage` | `remaining-fraud-damage` + `secure-delivery-holdout` | Measuring fraud you cannot see, and controls you want to believe in, without fooling yourself. Remaining Fraud Damage sizes the leakage; holdout/counterfactual keeps the control's credit honest. One Zalando measurement practice. |
| `multi-agent-investigation` | `multi-agent-investigation` + `adversarial-pass` | Speed from LLM agents, trust from an adversarial gate. The debate loop catching a fabricated reconciliation and the +69% correction of Hani's own headline are the same principle enforced twice. |
| `detection-signals-priced` | `fingerprint-ensemble` + `domain-age-rule` | A signal is only worth adding if its false-positive bill is priced. Device fingerprint bought +34% disputed dollars; the domain-age rule bought hundreds of accounts at near-zero collateral. Both were measured on both sides before shipping. |
| `escalations-inverted` | `credential-leak-inversion` + `vendor-escalation-ring` | Escalations arrive with a story and a proposed fix attached. Both times the investigation disproved the premise and replaced it with the sharper, real risk. |
| `tools-that-hold` | `compromise-explorer-audit` + `model-monitoring-pipeline` | Tools that maintain their own correctness. One was attacked for 50 rounds until absent evidence stopped reading as reassurance; the other regenerates its own coverage so no model silently goes unwatched. Both refuse to degrade quietly. |
| `compute-abuse-root-cause` | `sagemaker-regex-gap` + `kiro-seat-farm` | Six-figure compute abuse, traced past the symptom to what actually let it through. One was a stale regex in the enforcement path; one was already contained, and proving the empty set redirected the fix. Both reframed what needed fixing. |

## Kept and tightened in place (10)

`fraud-relations-graph` · `ato-forensic-chain` · `fraud-data-platform` ·
`renitor-extension` · `esc-fraud-dashboard` · `auto-shutdown-job` ·
`preflights-qa` · `sleeper-account-detection` · `spark-pipeline-optimization` ·
`auto1-customer-scoring`

## Ordering (the `order:` field)

Strongest first. Featured cases lead.

```
 1  fraud-relations-graph          Detection      AWS    featured
 2  compute-abuse-root-cause       Investigation  AWS    featured
 3  ato-forensic-chain             Investigation  AWS    featured
 4  escalations-inverted           Investigation  AWS
 5  multi-agent-investigation      Investigation  AWS    featured
 6  fraud-data-platform            Tooling        AWS    featured
 7  precision-carveouts            Precision      AWS    featured
 8  auto-shutdown-job              Precision      AWS
 9  esc-fraud-dashboard            Tooling        AWS
10  tools-that-hold                Tooling        AWS
11  detection-signals-priced       Detection      AWS
12  sleeper-account-detection      Detection      AWS
13  forecasting-under-uncertainty  Measurement    AWS
14  remaining-fraud-damage         Measurement    Zalando  featured
15  spark-pipeline-optimization    Tooling        Zalando
16  renitor-extension              Product        Independent
17  preflights-qa                  Product        Independent
18  auto1-customer-scoring         Measurement    AUTO1 Group
```

All 18 ship with `draft: false` — every case is live.

## Chart assignments

These are the intended forms. An authoring agent may substitute a better-fitting
chart from the catalogue if it argues why, but it must respect the chart budget
(≥1 plotted chart, ≤1 `stat`, never three `stat`s in a row).

| Case | Charts |
|---|---|
| `fraud-relations-graph` | `relations-graph` + `ranked-bars` (edge-confidence lenses) |
| `compute-abuse-root-cause` | `coverage-gap` (the regex families) + `abuse-chain` (seat-farm to $0) |
| `ato-forensic-chain` | `event-trace` (the 37-event chain on real elapsed time) |
| `escalations-inverted` | `ranked-bars` (concentration lenses) + `share-bar` or `stat` |
| `multi-agent-investigation` | `gate-funnel` (what a number survives, in order) + `before-after` (claim precision 39% → 65–80%) |
| `fraud-data-platform` | `before-after` (3.9s → 0.4s) + `gate-funnel` or `delta` |
| `precision-carveouts` | `caught-vs-collateral` + `gate-funnel` (the pre-action gates in order) |
| `auto-shutdown-job` | `gate-funnel` (the eight ordered gates — this is the exemplar case for that chart) |
| `esc-fraud-dashboard` | `ranked-bars` or `before-after` + `delta` (98% → 12–13%) |
| `tools-that-hold` | `gate-funnel` (the eight decisions in order) + `abuse-chain` (registry → dashboards) |
| `detection-signals-priced` | `caught-vs-collateral` + `delta` (+34%) |
| `sleeper-account-detection` | `signal-matrix` (genuinely unordered feature families) + `stat` |
| `forecasting-under-uncertainty` | `line` (as-is vs intervention) + `share-bar` (71% one ring) |
| `remaining-fraud-damage` | `line` (segment rate vs A/VIP benchmark) + `before-after` (naive vs holdout) |
| `spark-pipeline-optimization` | `before-after` (34 min → minutes) + `ranked-bars` (the levers) |
| `renitor-extension` | `gate-funnel` (what a handoff carries) or `signal-matrix` + `stat` |
| `preflights-qa` | `coverage-gap` (what free validators miss) + `gate-funnel` (the checks) |
| `auto1-customer-scoring` | `signal-matrix` + `ranked-bars` or `stat` |
