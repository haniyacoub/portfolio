---
title: "The forecast that inverted the planning assumption"
role: "Business Analyst — AWS Payments & Fraud Prevention"
period: "2026"
theme: "Probabilistic forecasting"
track: "Measurement"
company: "AWS"
order: 8.5
summary: "A 40,000-run Monte-Carlo forecast of a new region's human-review queue — finding that volume tracks operational decisions, not fraud inflow: one ring drove 71% of all tasks ever queued."
context: "A new region needed an 18-month capacity plan for its human investigation queue. The natural assumption — more fraud, more review work — was about to be baked into headcount planning without ever being tested."
contribution: "From 28 complete weeks of task history I built a 40,000-run Monte-Carlo simulation producing average, p10, and p90 planning thresholds — with the coverage of that range measured against held-out data rather than assumed. The distributional work surfaced the real driver: one fraud ring accounted for 71% of all tasks ever queued, and in one month fraud-labelled sign-ups rose ~50% month-over-month while human tasks halved, because new automation closed cases before they reached a person. I ran an anchor-stability pass, an adversarial pass, and a ring-excluded companion scenario — then made and argued the conservative call to keep the ring in the baseline so the forecast wouldn't understate capacity needs. Delivered as a stakeholder two-pager, an Excel model, two notebooks, and an animated explainer."
outcome: "The central finding inverted the planning premise: queue volume is driven by operational decisions — bulk campaign pushes, automation launches — not by fraud inflow. Capacity planning got probabilistic thresholds with measured coverage instead of a point guess, and a defensible, argued baseline choice rather than a silent one."
impact: "Replaced a point-guess capacity plan with <strong>p10/p90 thresholds whose coverage was measured, not assumed</strong> — and the counter-intuitive, defensible finding that <strong>operational decisions, not fraud inflow, drive queue volume</strong>."
counterfactual: "Headcount gets planned against fraud-inflow growth — the one variable that turned out not to drive the queue — and the next bulk campaign push or automation launch blindsides the plan in either direction."
indexMetric: 0
metrics:
  - chart: "proportion"
    label: "Share of all tasks ever queued from one ring"
    value: 71
    of: "of every task in the queue's history"
    remainderLabel: "everything else"
    context: "Queue volume tracks operational decisions — not fraud inflow."
  - chart: "stat"
    label: "Simulation runs"
    value: "40,000"
    context: "p10 / average / p90 planning thresholds, with coverage measured rather than assumed."
    emphasis: false
  - chart: "delta"
    label: "The decoupling, in one month"
    value: "+50%"
    detail: "fraud-labelled sign-ups month-over-month — while human tasks halved, absorbed by new automation"
    direction: "up"
    good: false
    context: "The clearest single proof that inflow does not drive the queue."
tags: ["Monte Carlo", "Forecasting", "Capacity planning", "Stakeholder delivery"]
---

Every capacity plan hides a theory. This queue's theory was "review work scales
with fraud inflow" — reasonable, unexamined, and about to become headcount.

I tested it with distribution instead of intuition: 28 complete weeks of task
history feeding a **40,000-run Monte-Carlo simulation**, producing average, p10,
and p90 planning thresholds. The part that makes those numbers usable is that
their coverage was **measured** — checked against held-out reality — not assumed
from the model's own confidence.

The distribution told a different story than the theory. **One ring accounted
for 71% of every task ever queued.** And in one month, fraud-labelled sign-ups
rose about 50% month-over-month while human tasks *halved* — new automation was
closing cases before they ever reached a person. Queue volume tracks
**operational decisions** — bulk campaign pushes, automation launches — not
fraud inflow.

A finding that inverts the premise needs to be attacked before it's believed, so
it got an anchor-stability pass, an adversarial pass, and a ring-excluded
companion scenario. Then came the judgment call: with the dominant ring removed
the forecast looks very different, but I argued for keeping it **in** the
baseline — a capacity plan should be conservative, and rings recur.

It shipped in the forms people actually use: a two-page stakeholder brief, an
Excel model planners can poke, two notebooks for the record, and an animated
explainer for the room.
