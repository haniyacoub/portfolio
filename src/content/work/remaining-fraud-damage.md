---
title: "Putting a euro figure on the fraud the system didn't catch"
role: "Senior Product Analyst — Risk & Abuse, Zalando"
period: "2024–2026"
theme: "Fraud measurement · leakage"
track: "Measurement"
company: "Zalando"
featured: true
order: 8
summary: "Remaining Fraud Damage — a method that benchmarks each customer segment against trusted customers to size the logistics refund leakage existing controls let through, in euros, per market, every week."
context: "Everyone tracks the fraud they catch. The damage that matters for the business is the part that slips past every control — manual refund leakage on missing-delivery, item-not-received, and parcel-missing claims. It's invisible precisely because nothing flagged it, so there was no euro figure to act on."
contribution: "I built the Remaining Fraud Damage measure. The idea: trusted high-value customers (A/VIP) set the honest baseline refund/damage rate; every other value segment's excess over that benchmark, applied to its GMV, is the leakage estimate. Remaining Fraud Damage = return-damage + delivery-damage across the analysed segments, expressed as a share of GMV, tracked weekly and monthly across the top six markets. It runs on manual-refund and Salesforce case data joined to customer value segments and AbPP risk signals — built in PySpark/Databricks over the Zalando data lake."
outcome: "Risk and leadership got a defensible, recurring euro estimate of the damage that survived existing controls — broken down by segment and market, with weekly and monthly trends — turning 'fraud we can't see' into a number that could be argued about, owned, and reduced."
impact: "Produced the <strong>first euro-denominated estimate</strong> of logistics refund leakage that survived existing controls — broken down by customer segment and by market across <strong>six countries</strong>, refreshed weekly and monthly for business reviews."
counterfactual: "The leakage stays invisible because nothing flagged it: no euro figure to budget against, no segment or market to target, and no way to tell whether refund damage is getting better or worse."
indexMetric: 0
metrics:
  - chart: "line"
    label: "Refund / damage rate by customer value segment"
    points: [3.2, 5.1, 6.4, 8.0]
    baseline: [3.2, 3.2, 3.2, 3.2]
    seriesLabel: "segment rate"
    baselineLabel: "A/VIP benchmark"
    xLabel: "value segment  →  higher risk"
    yLabel: "refund/damage rate (illustrative)"
    caption: "Each segment's excess over the trusted A/VIP benchmark, applied to its GMV, is the leakage estimate. Shape is illustrative — live values come from the model."
    context: "Remaining Fraud Damage = Return Damage + Delivery Damage, as a share of GMV."
  - chart: "stat"
    label: "Markets covered"
    value: "6"
    context: "DE · NL · BE · FR · IT · CH, tracked weekly and monthly."
    emphasis: false
  - chart: "stat"
    label: "Benchmark"
    value: "A/VIP"
    context: "Trusted customers set the honest floor; N · C · D measured against it."
    emphasis: false
tags: ["PySpark / Databricks", "Refund leakage", "Benchmarking", "GMV", "WBR/MBR"]
---

The fraud you catch is the easy half to talk about. The number leadership
actually needed was the other half: how much logistics refund damage — missing
delivery, item-not-received, parcel-missing — was leaking past every control? By
definition nothing had flagged it, so there was no figure at all.

I built one. The trick is choosing an honest baseline: trusted high-value
customers (A/VIP) refund and claim at some natural rate that isn't abuse. Treat
that as the floor. Then every other value segment's refund/damage rate *above*
that floor, applied to its GMV, is an estimate of the excess that shouldn't be
there. Sum the return-damage and delivery-damage across the analysed segments and
you have Remaining Fraud Damage as a share of GMV.

The plumbing is real e-commerce data work: manual-refund and Salesforce case
tables joined to customer value segments, GMV denominators (before and after
returns), manual-refund reasons, and AbPP risk signals — built in PySpark on
Databricks over the data lake, across the top six markets, refreshed weekly and
monthly.

What it changed is the conversation. "Fraud we can't see" became a defensible
euro estimate, split by segment and market, with a trend line. You can't reduce a
number you've never put on the table; this put it on the table.
