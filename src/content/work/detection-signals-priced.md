---
title: "No signal ships until its false positives are priced"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Signal economics"
track: "Detection"
company: "AWS"
featured: false
draft: false
order: 13
summary: "Device fingerprint was missing from the Fraud Relations model's linkage signals, and young-domain registrations were going unchallenged. Adding either meant writing down what it would cost in customers wrongly linked."
context: "More signals always catch more fraud, so recall is never the interesting column. What each signal costs in customers wrongly linked is, and that column usually goes unwritten. Device fingerprint was missing from the Fraud Relations model's linkage signals. Separately, fraudulent registrations were arriving on freshly minted domains with weak email authentication, on exactly the axes where legitimate new companies also look young and unauthenticated."
contribution: "I added device fingerprint as an ensemble feature to the Fraud Relations model and measured both sides of the trade. The recall side came back at 34% more disputed dollars caught. I quantified the false-positive tradeoffs per signal, so the model's owners could see what each linkage signal contributes and what it risks instead of assuming the cost side. I then designed a detection rule on domain age and email-authentication signals through more than 100 rule iterations, each candidate scored for precision and recall and bounded by explicit false-positive carve-out exposure analysis. Single-signal versions failed the combined precision-and-exposure bar, so the shipped rule is multi-condition logic. In production that rule caught hundreds of abusive accounts with near-zero collateral on legitimate customers."
outcome: "The Fraud Relations model now links on device as well, and the cost side of every linkage signal is written down rather than assumed, so signal decisions are explicit tradeoffs instead of additions made on faith. The rule stands in production paying recall without spending precision. The iteration discipline behind it, scoring every candidate on both sides before shipping, became the template for how rules get developed rather than a one-off."
impact: "<strong>34% more disputed dollars caught</strong> from one ensemble feature, and <strong>hundreds of abusive accounts caught at near-zero collateral</strong> from one rule. Both carry a <strong>false-positive bill priced per signal</strong> rather than assumed."
counterfactual: "The fraud that only device linkage reveals keeps going unseen and young-domain registrations keep registering unchallenged. Or worse, both ship on the recall number alone: signals added on faith, and a blunt rule that tells legitimate new companies their accounts are flagged for being new."
indexMetric: 0
metrics:
  - chart: "caught-vs-collateral"
    label: "The domain-age rule in production"
    caught:
      label: "Abusive accounts caught"
      value: 100
      display: "Hundreds"
    collateral:
      label: "Legitimate customers hit"
      value: 1
      display: "Near zero"
    context: "Multi-condition logic bounded by explicit carve-out exposure analysis."
  - chart: "delta"
    label: "Disputed dollars caught"
    value: "+34%"
    detail: "after adding device fingerprint as an ensemble feature to the Fraud Relations model"
    direction: "up"
    good: true
    context: "The false-positive tradeoffs were quantified per signal alongside this gain, so it is priced rather than celebrated."
  - chart: "gate-funnel"
    label: "What a rule candidate had to clear, in order"
    stages:
      - name: "Signals proposed"
        note: "Domain age and email authentication, the axes fraudulent registrations cluster on."
      - name: "Recall scored"
        note: "Against confirmed abuse."
      - name: "False-positive exposure scored"
        note: "Against the carve-out populations that must not be touched."
        key: true
      - name: "Single-signal versions rejected"
        note: "They failed the two-column bar."
      - name: "Multi-condition logic converged"
        note: "More than 100 iterations to find a version that passed both columns."
      - name: "Shipped"
        note: "Hundreds of abusive accounts caught, near-zero collateral."
    caption: "Ordered, because nothing shipped until a candidate had been scored on both columns. The ensemble feature went through the same two."
tags: ["Rules design", "Ensemble features", "Device fingerprint", "Domain signals", "Email authentication", "Precision"]
---

Every fraud model has a queue of signals someone wants to add. The queue is
never the problem. The unwritten column beside it is.

I wrote it twice.

Device fingerprint was missing from the Fraud Relations model's linkage
signals. The model already linked abusive accounts through shared identifiers;
device was simply not one of them, so a whole class of linkage stayed
invisible. Adding it as an ensemble feature caught **34% more disputed
dollars** — enough on its own to ship a feature and stop asking questions. I
priced the other column anyway, signal by signal. Without it the owners
inherit a recall gain and an unpriced bill.

The domain-age rule is the same discipline at rule level, where the collateral
risk is sharper. Fraudulent registrations really do cluster on freshly minted
domains with weak email authentication. So do legitimate new companies, on
exactly those axes. That is why the rule took more than **100 iterations**:
every candidate was scored on both columns, recall against confirmed abuse and
false-positive exposure against the carve-out populations that must not be
touched. Single-signal versions failed that bar. The version that shipped is
multi-condition, which is what lets it be aggressive about fraud and careful
about everyone else at the same time.

Neither result is the catch count. It is the ratio, and the fact that the
rule's ratio was measured before shipping rather than discovered afterwards
from complaints. Both claims are checkable by someone who did not run them,
which is the only version of a precision claim worth making. A rule that
catches everything and spends the whole precision budget is an outage with a
delay.
