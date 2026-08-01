---
title: "A euro figure on the fraud that survived, and controls that can't flatter themselves"
role: "Senior Product Analyst, Risk & Abuse, Zalando"
period: "2024 to 2026"
theme: "Fraud measurement · counterfactual"
track: "Measurement"
company: "Zalando"
featured: true
order: 21
summary: "Remaining Fraud Damage sizes the logistics refund leakage that slips past every control, in euros, per segment, per market. Holdout and counterfactual framing then stops the controls taking credit for reducing it."
context: "Everyone tracks the fraud they catch. The damage that matters for the business is the part that slips past every control: manual refund leakage on missing-delivery, item-not-received, and parcel-missing claims, invisible precisely because nothing flagged it. The mirror-image error sits on the other side of the same ledger. Risk controls like Secure Delivery and refund-denial steering are applied exactly where abuse is most expected, so a naive treated-vs-untreated read lets selection bias do the talking and credits the control for a difference that was already there."
contribution: "I built the Remaining Fraud Damage measure. Trusted high-value customers (A/VIP) set the honest baseline refund and damage rate, and every other segment's excess over that benchmark, applied to its GMV, is the leakage estimate. Remaining Fraud Damage = return damage + delivery damage as a share of GMV, computed across the top six markets on manual-refund and Salesforce case data in PySpark on Databricks. A leakage figure is only worth the evaluation of the controls aimed at it, so I treated that evaluation as causal work rather than reporting. Holdout and counterfactual framing separated prevented damage from remaining damage. I stated plainly where a biased intervention group would inflate the result. I also owned the fraud KPIs for weekly and monthly business reviews. I read suspicious, detected, and steer rates against base-rate effects and soft exclusions, so a shift in population mix never got mistaken for a shift in fraud."
outcome: "'Fraud we can't see' became a number Risk could argue about, own, and set targets against, and Secure Delivery and refund-denial thresholds got debated against prevented damage the control had actually caused."
impact: "Produced the <strong>first euro-denominated estimate</strong> of logistics refund leakage surviving existing controls, by customer segment and across <strong>six markets</strong>, refreshed weekly and monthly for business reviews, and replaced flattering before/after reads with <strong>holdout / counterfactual evaluation</strong> so prevented damage was separated from remaining damage."
counterfactual: "The leakage stays invisible: no euro figure to budget against, no segment or market to target, and no way to tell whether refund damage is getting better or worse. Meanwhile the controls get credited for differences that existed before they ran, and threshold decisions get made on a number that was never real."
indexMetric: 0
metrics:
  - chart: "line"
    label: "Refund / damage rate by customer value segment"
    points: [3.2, 5.1, 6.4, 8.0]
    baseline: [3.2, 3.2, 3.2, 3.2]
    seriesLabel: "segment rate"
    baselineLabel: "A/VIP benchmark"
    xLabel: "trusted A/VIP floor  →  higher-risk value segments"
    yLabel: "refund/damage rate (illustrative)"
    caption: "Each segment's excess over the trusted A/VIP benchmark, applied to its GMV, is the leakage estimate. Shape is illustrative. Live values come from the model."
    context: "Remaining Fraud Damage = Return Damage + Delivery Damage, as a share of GMV, tracked across DE · NL · BE · FR · IT · CH weekly and monthly."
  - chart: "before-after"
    label: "Estimated effect of the control"
    before: { label: "Naive treated-vs-untreated", value: 100, unit: "", display: "overstated" }
    after: { label: "Holdout / counterfactual", value: 55, unit: "", display: "true effect" }
    betterWhen: "lower"
    context: "Illustrative shape. Selection bias inflates the naive read. The holdout strips out what would have happened anyway, leaving prevented damage separated from remaining damage."
tags: ["PySpark / Databricks", "Refund leakage", "Benchmarking", "GMV", "Holdout", "Counterfactual", "Base-rate effects", "WBR/MBR"]
draft: false
---

Caught fraud is the easy half. The number leadership actually needed was the
other half: how much logistics refund damage (missing delivery, item-not-received,
parcel-missing) was leaking past every control? By definition nothing had flagged
it, so no figure existed at all.

I built one, and the whole method rests on choosing an honest baseline. Trusted
high-value customers refund and claim at some natural rate that isn't abuse, so
treat that as the floor. Every other value segment's refund/damage rate *above*
the floor, applied to its GMV, estimates the excess that shouldn't be there. Sum
return damage and delivery damage and you have Remaining Fraud Damage as a share
of GMV. The plumbing is ordinary e-commerce data work: GMV denominators before
and after returns, refund reasons, and risk signals joined to value segments.

A leakage number invites the obvious follow-up: are the controls shrinking it?
That is exactly where this kind of measurement goes wrong. Naive before/after
flatters every control you will ever ship.

So I evaluated them causally instead. The honest effect is smaller than the naive
one. That is not a disappointment. It is the difference between a number that
survives scrutiny and one that doesn't, and it is the only kind of number I would
want to hand to someone who is about to move a threshold.

The same instinct ran through the fraud metrics I owned for business reviews,
where the job was as much explaining *why* a number moved as reporting that it
did.
