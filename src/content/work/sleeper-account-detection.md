---
title: "Waking up before the sleeper accounts do"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "ML detection"
track: "Detection"
company: "AWS"
featured: false
draft: false
order: 12
summary: "Sleeper-account fraud surfaced as a ranked queue an analyst can work, on a model whose own probable label leakage I flagged in writing."
context: "Sleeper accounts sit quiet until they burn. By the time billing spikes, the abuse is already running. The signals that give a sleeper away early exist in the data, but nobody had assembled them into a detector with an operational front end."
contribution: "I built an end-to-end XGBoost detection pipeline with around 90 engineered features over billing spikes, linked accounts, IP-country mismatches, payment instruments, and risk-score history. I designed the training hygiene to catch leakage rather than to assume it away. On top of the scores I put a Streamlit deep-dive that ranks the full population into tiers an analyst works through in order, and that proposes candidate rules with their precision and recall already attached. When the model's top-ranked feature turned out to be a containment score that only settles after enforcement has fired, I wrote the leakage risk next to the scores instead of publishing the headline PR-AUC unqualified."
outcome: "Analysts get a tiered worklist, and the model's known limitation travels with its scores rather than living in my notes."
impact: "<strong>Every account in the population now carries a sleeper score</strong> and lands in a ranked tier an analyst works top-down, instead of surfacing on a billing report after the compute is already burned — on <strong>around 90 engineered features</strong>, a temporal split, and PR-AUC-first evaluation."
counterfactual: "Nothing gets scored until it makes noise, so the worklist is whatever happened to bill loudly and the accounts sitting quiet are <strong>never ranked at all</strong>."
indexMetric: 0
metrics:
  - chart: "signal-matrix"
    label: "What the model reads per account"
    signals:
      - "Billing spikes"
      - "Linked accounts"
      - "IP-country mismatch"
      - "Payment instruments"
      - "Risk-score history"
    activeCount: 5
    caption: "Read for every account in the population, not only the ones already making noise."
  - chart: "gate-funnel"
    label: "The training pipeline, in the order it runs"
    stages:
      - name: "Temporal train/test split"
        note: "Ordered in time, so the model never sees the future."
      - name: "Class-imbalance weighting"
        note: "Fraud positives are rare, and the loss function has to say so."
      - name: "Held-out early stopping"
        note: "Stops on a separate set, never on the test data."
      - name: "5-fold cross-validation"
        note: "Checks the score is not one lucky fold."
      - name: "PR-AUC-first evaluation"
        note: "Precision is the expensive half, so it leads the report."
      - name: "Feature importances read"
        note: "Where leakage surfaced: the top feature settles only after enforcement fires."
        key: true
    caption: "Five hygiene steps went in by construction. The sixth is where leakage surfaced anyway, so it went into writing next to the scores."
tags: ["XGBoost", "Feature engineering", "Detection", "Investigation queue"]
---

A sleeper account is patient. It registers clean, stays quiet, and burns
compute only when its operator decides the moment has come. Waiting for the
billing spike means arriving after the damage is already paid for.

So the detector had to score everyone, not only the accounts making noise. I
trained an XGBoost model on the behaviour that gives sleepers away before the
burn, and then treated the training hygiene as the part I would have to defend
in a review. That is why the split is temporal and why the first number I
report is PR-AUC: in fraud the positives are rare, and precision is the
expensive half.

Scores on their own change nothing. The deep-dive turns full-population output
into tiers an analyst works through in order, and prices every rule it proposes
on both sides before anyone considers shipping it. Detection that does not end
in a queue somebody can work is a chart, not a control.

Then the awkward part. The top feature was doing its best work after the fact,
which means the offline PR-AUC reads better than the model will behave in front
of a real population — and the training sample was fraud-heavy rather than the
low base rate the model would meet. Both went into writing next to the scores. A
detector people can calibrate their trust against is worth more than one with a
prettier headline.
