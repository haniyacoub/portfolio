---
title: "Measuring whether a control worked without fooling yourself"
role: "Senior Product Analyst, Risk & Abuse, Zalando"
period: "2025 to 2026"
theme: "Counterfactual evaluation"
track: "Measurement"
company: "Zalando"
order: 16
summary: "Secure Delivery and refund-denial logic only 'work' if you measure them honestly. A naive before/after read flatters them. A holdout tells the truth."
context: "Risk controls like Secure Delivery and refund-denial steering get applied exactly where abuse is most expected, which means the population they touch is nothing like the population they don't. Measure their effect by naively comparing treated vs untreated and the selection bias does the talking. You'll credit the control for a difference that was there before it ever ran."
contribution: "I treated evaluation as a causal problem, not a reporting one. Using holdout and counterfactual framing, I separated prevented damage from remaining damage, meaning what the control actually stopped versus what would have happened anyway, and was explicit about where biased intervention groups would otherwise inflate the result. The same discipline ran through the fraud KPIs I owned for weekly and monthly business reviews. Suspicious, detected, and steer rates read against base-rate effects and soft exclusions, so a shift in population mix never got mistaken for a shift in fraud."
outcome: "Stakeholders got an honest read on whether Secure Delivery and refund-denial logic were actually reducing damage, plus a defensible way to size prevented vs remaining damage, instead of a flattering number that would collapse the first time someone interrogated it."
impact: "Replaced flattering before/after reads with <strong>holdout / counterfactual evaluation</strong>, separating prevented from remaining damage so Secure Delivery and refund-denial logic were judged on their <strong>true effect</strong>, not selection bias."
counterfactual: "The controls get credited for differences that existed before they ran. The overstated win collapses the first time anyone interrogates it, and threshold decisions get made on a number that was never real."
indexMetric: 0
metrics:
  - chart: "before-after"
    label: "Estimated effect of the control"
    before: { label: "Naive treated-vs-untreated", value: 100, unit: "", display: "overstated" }
    after: { label: "Holdout / counterfactual", value: 55, unit: "", display: "true effect" }
    betterWhen: "lower"
    context: "Selection bias inflates the naive read. The holdout strips out what would have happened anyway. (Illustrative shape.)"
  - chart: "stat"
    label: "What it separated"
    value: "Prevented"
    context: "vs. remaining damage: what the control stopped, not what was already going to happen."
    emphasis: true
tags: ["Holdout", "Counterfactual", "Causal evaluation", "Base-rate effects", "WBR/MBR"]
---

Risk controls are applied exactly where abuse is most expected, which quietly
poisons the obvious way to evaluate them. If Secure Delivery or refund-denial
steering is switched on for the riskiest orders, then comparing treated orders to
untreated ones is comparing two different populations, and the difference you
measure was partly there before the control existed. Naive before/after flatters
every control you'll ever ship.

So I evaluated them as a causal question. With holdout and counterfactual
framing, I separated *prevented* damage, the part the control actually stopped,
from *remaining* damage, and I was explicit about exactly where a biased
intervention group would otherwise inflate the credit. The honest effect is
smaller than the naive one. That's not a disappointment. It's the difference
between a number that survives scrutiny and one that doesn't.

The same instinct ran through the fraud metrics I owned for weekly and monthly
business reviews. Suspicious, detected, and steer rates always got read against
base-rate effects and soft exclusions first, because a move in the population mix
can look exactly like a move in fraud, and only one of those is worth reacting
to. The job there was as much explaining *why* a number moved as reporting that
it did.
