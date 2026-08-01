---
title: "Forecasting fraud load, with honest uncertainty"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Quantitative modeling"
track: "Measurement"
company: "AWS"
order: 30
summary: "A unit-tested survival and decay forecasting engine for fraud compute load, with P50 and P90 cones and uncaught-fraud size modeled two independent ways."
context: "Decisions about fraud interventions need a forecast of what the compute load does with and without action. A single-line projection invites false confidence, and an uncalibrated one invites the wrong decision."
contribution: "I designed a unit-tested survival and decay forecasting engine for fraud compute load. Steady-state inflow is calibrated to the observed trailing slope, so the as-is scenario and the intervention scenario separate honestly instead of by assumption. Forecasts carry P50 and P90 cones, and the output includes an account-level action table rather than only aggregates. I also modeled the size of uncaught fraud two independent ways: excess over a trusted floor by risk bucket, and an exponential catch-hazard survival fit that yields an asymptotic never-caught fraction. Two methods, because one estimate of an invisible quantity is a guess with confidence."
outcome: "Intervention decisions run on scenarios that separate for calibrated reasons, with uncertainty stated as cones rather than hidden in a single line, and the uncaught-fraud estimate stands on two independent legs instead of one."
impact: "A survival and decay forecasting engine with <strong>P50 and P90 cones</strong>, scenario separation calibrated to observed slope, and <strong>uncaught fraud sized two independent ways</strong>."
counterfactual: "Interventions get argued from a single projected line, and the size of the fraud nobody has caught yet stays whatever the loudest estimate says it is."
indexMetric: 0
metrics:
  - chart: "line"
    label: "Fraud compute load, as-is versus intervention"
    points: [88, 84, 81, 79, 76, 72, 66, 58, 49, 41, 34, 29]
    baseline: [88, 86, 85, 84, 84, 83, 82, 82, 81, 81, 80, 80]
    seriesLabel: "with intervention"
    baselineLabel: "as-is"
    xLabel: "time"
    yLabel: "load"
    caption: "Illustrative shape. The real engine carries P50 and P90 cones on both scenarios."
  - chart: "stat"
    label: "Uncaught-fraud estimate"
    value: "2"
    unit: "methods"
    context: "Excess over a trusted floor by risk bucket, and an exponential catch-hazard survival fit."
    emphasis: false
tags: ["Forecasting", "Survival modeling", "Uncertainty", "Capacity planning"]
# Merged into forecasting-under-uncertainty; kept on disk so /work/survival-forecasting redirects.
draft: true
---

Any forecast can draw a line. The useful ones say how wrong they might be
and why the scenarios differ.

The engine models fraud compute load as survival and decay. The calibration
choice is the honest part: steady-state inflow is fitted to the observed
trailing slope, so when the as-is and intervention scenarios separate, they
separate because of measured behaviour, not because an assumption was tuned
until the chart looked persuasive. Outputs carry P50 and P90 cones, and an
account-level action table accompanies the aggregates, because a forecast
you cannot act on per account is commentary.

The harder question was sizing the fraud nobody has caught yet. An invisible
quantity estimated one way is a guess wearing a confidence interval. So it
got two independent methods: excess over a trusted floor by risk bucket, and
an exponential catch-hazard fit whose survival curve yields an asymptotic
never-caught fraction. Where the two agree, the estimate has standing. Where
they diverge, that divergence is itself information.

The whole engine is unit-tested, which for forecasting code is less about
bugs and more about making the calibration assumptions explicit enough to
test at all.
