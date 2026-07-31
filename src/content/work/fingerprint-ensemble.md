---
title: "One signal, 34% more disputed dollars caught"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Model improvement"
track: "Detection"
company: "AWS"
order: 15
summary: "Adding device fingerprint as an ensemble feature to the Fraud Relations model caught 34% more disputed dollars, with the false-positive cost quantified per signal."
context: "The Fraud Relations model linked abusive accounts through shared identifiers, but device fingerprint was not among them. The question was not whether more signals catch more fraud. They always do. The question was what each signal costs in false positives."
contribution: "I added device fingerprint as an ensemble feature to the Fraud Relations model and measured both sides of the trade. The result was 34% more disputed dollars caught. Alongside the recall gain, I quantified the false-positive tradeoffs per signal, so the model's owners could see exactly what each linkage signal contributes and what it risks."
outcome: "The model catches meaningfully more disputed dollars, and the cost side of every signal is on the table instead of assumed. Signal decisions became explicit tradeoffs rather than additions made on faith."
impact: "<strong>34% more disputed dollars caught</strong> from one ensemble feature, with <strong>false-positive tradeoffs quantified per signal</strong> so the gain is priced, not just celebrated."
counterfactual: "The model keeps missing the fraud that only device linkage reveals, or worse, signals get added without anyone pricing the false positives they drag in."
indexMetric: 0
metrics:
  - chart: "delta"
    label: "Disputed dollars caught"
    value: "+34%"
    detail: "after adding device fingerprint as an ensemble feature to the Fraud Relations model"
    direction: "up"
    good: true
  - chart: "stat"
    label: "Cost side"
    value: "Priced"
    context: "False-positive tradeoffs quantified per signal, not assumed."
    emphasis: false
tags: ["Ensemble features", "Device fingerprint", "Fraud Relations", "Precision"]
---

Every fraud model has a list of signals someone wants to add. The honest
version of that conversation has two columns: what the signal catches, and
what it costs in customers wrongly linked.

Device fingerprint was missing from the Fraud Relations model's linkage
signals. Adding it as an ensemble feature caught **34% more disputed
dollars**, which is the kind of number that gets a feature shipped on its
own. I did the second column anyway: quantified the false-positive tradeoffs
per signal, so the model's owners could see what each linkage contributes
and what it risks.

That second column is the actual work. A recall gain with an unmeasured
false-positive bill is not a win, it is a liability with good marketing. This
one paid for itself on both sides of the ledger, and the measurement is what
makes that claim checkable.
