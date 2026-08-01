---
title: "Forecasting fraud load, never as a single line"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Probabilistic forecasting"
track: "Measurement"
company: "AWS"
featured: false
order: 13
summary: "A 40,000-run Monte Carlo built to size a new region's review queue inverted the premise it was commissioned to support: volume tracks operational decisions, not fraud inflow. Its companion engine forecasts compute load so the as-is and intervention scenarios separate on measured behaviour rather than assumption."
context: "Two planning decisions rested on projections nobody had stress-tested: how much headcount a new region's human investigation queue would need over 18 months, and whether to intervene on fraud compute load. The first carried an untested assumption straight into headcount — more fraud means more review work. A single-line projection invites false confidence, and an uncalibrated one invites the wrong decision."
contribution: "From 28 complete weeks of task history I built a 40,000-run Monte Carlo simulation producing average, p10 and p90 planning thresholds, with the coverage of that range measured against held-out data rather than assumed. The run distribution surfaced the real driver: one fraud ring accounted for 71% of all tasks ever queued. I ran an anchor-stability pass, an adversarial pass and a ring-excluded companion scenario, then made and argued the conservative call to keep the ring in the baseline so the forecast would not understate capacity needs. For compute load I designed a unit-tested survival and decay forecasting engine whose steady-state inflow is calibrated to the observed trailing slope, so the as-is and intervention scenarios separate honestly instead of by assumption. Both compute scenarios ship with P50 and P90 cones and an account-level action table, not aggregates alone. I modelled the size of uncaught fraud two independent ways: excess over a trusted floor by risk bucket, and an exponential catch-hazard survival fit that yields an asymptotic never-caught fraction. The queue forecast shipped as a stakeholder two-pager, an Excel model, two notebooks and an animated explainer."
outcome: "Planners argue the baseline's inclusion of the dominant ring on the record rather than silently, so the plan stays defensible when the next bulk campaign moves the queue. Interventions are chosen on separation wide enough to survive its own cones, and the compute output resolves to an account level someone can act on."
impact: "Replaced point-guess forecasting with <strong>p10/p90 thresholds whose coverage was measured rather than assumed</strong>, plus P50/P90 cones on both compute scenarios, and produced the counter-intuitive, defensible finding that <strong>operational decisions, not fraud inflow, drive queue volume</strong> — one ring behind 71% of every task ever queued, with uncaught fraud sized two independent ways."
counterfactual: "Headcount gets planned against fraud-inflow growth, the one variable that turned out not to drive the queue, so the next bulk campaign push or automation launch blindsides the plan in either direction. Interventions get argued from a single projected line, and the size of the fraud nobody has caught yet stays whatever the loudest estimate says it is."
indexMetric: 0
metrics:
  - chart: "share-bar"
    label: "Share of all tasks ever queued, from one ring"
    of: "of every task in the queue's history"
    segments:
      - { name: "One coordinated ring", value: 71, display: "71%", key: true }
      - { name: "Everything else", value: 29, display: "29%" }
    caption: "Concentration this extreme is what disqualified fraud inflow as the planning variable. The distribution, not intuition, is what settled it."
    context: "Kept inside the baseline on purpose, after a ring-excluded companion scenario showed how different the forecast looks without it. A capacity plan should be conservative, and rings recur."
  - chart: "line"
    label: "Fraud compute load, as-is versus intervention"
    points: [88, 84, 81, 79, 76, 72, 66, 58, 49, 41, 34, 29]
    baseline: [88, 86, 85, 84, 84, 83, 82, 82, 81, 81, 80, 80]
    seriesLabel: "with intervention"
    baselineLabel: "as-is"
    xLabel: "time"
    yLabel: "load"
    caption: "Illustrative shape. The real engine carries P50 and P90 cones on both scenarios, and the separation between them comes from steady-state inflow calibrated to the observed trailing slope rather than from a tuned assumption."
  - chart: "delta"
    label: "The decoupling, in one month"
    value: "+50%"
    detail: "fraud-labelled sign-ups month-over-month while human tasks halved, absorbed by new automation"
    direction: "up"
    good: false
    context: "The clearest single proof that inflow does not drive the queue."
tags: ["Monte Carlo", "Survival modeling", "Forecasting", "Uncertainty", "Capacity planning"]
draft: false
---

Every capacity plan hides a theory. This one's was that review work scales
with fraud inflow — reasonable, unexamined, and about to become eighteen
months of headcount in a new region.

Inverting that premise was the easy part; the distribution did it. Defending
it was the work. A finding that contradicts the assumption a plan was
commissioned under does not get adopted just because the arithmetic holds, so
I attacked it before anyone else could: an anchor-stability pass, an
adversarial pass, and a ring-excluded companion scenario. Coverage was
**measured** against held-out reality instead of taken from the model's own
confidence, which is the difference between publishing a range and making a
claim about that range.

The harder call to defend was keeping the dominant ring **in** the baseline.
Removing it is tidier and even looks like rigour — strip the outlier, forecast
the normal case. It also quietly understates how much capacity the region
needs, because rings recur, and a plan that is going to be wrong should be
wrong in the direction that leaves you staffed. So the ring-excluded scenario
ships beside the baseline rather than instead of it, and the reasoning sits in
a two-page brief, an Excel model, two notebooks and an animated explainer —
where a planner can disagree with it on the merits.

The compute side is the same discipline aimed at a different question. Load
is modelled as survival and decay with steady-state inflow fitted to the
observed trailing slope, so when the two scenarios separate they separate on
measured behaviour, not on an assumption tuned until the chart persuaded. The
unit tests there matter less for bugs than for forcing each calibration
assumption to be explicit enough to test at all. Sizing the fraud nobody has
caught yet got two independent methods: where they agree the estimate has
standing, and where they diverge, the divergence is itself information.
