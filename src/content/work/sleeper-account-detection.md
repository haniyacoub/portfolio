---
title: "Waking up before the sleeper accounts do"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "ML detection"
track: "Detection"
company: "AWS"
order: 19
summary: "An XGBoost model and an investigation agent that surface sleeper-account fraud patterns, delivered as a ranked queue an analyst can actually work."
context: "Sleeper accounts sit quiet until they burn. By the time billing spikes, the abuse is already running. The signals that give them away early exist in the data, but nobody had assembled them into a detector with an operational front end."
contribution: "I built an end-to-end XGBoost fraud-detection pipeline with around 90 engineered features and leakage-aware hygiene: a temporal train and test split, a held-out validation set for early stopping, class-imbalance weighting, 5-fold cross-validation, and PR-AUC-first evaluation. The model reads billing spikes, linked accounts, IP-country mismatches, payment instruments, and risk-score history. On top of it sits an agent that surfaces the patterns and a Streamlit investigation queue that ranks the full population into tiers an analyst can work through. When the model showed signs of probable label leakage, I flagged it in writing rather than shipping an optimistic headline."
outcome: "Sleeper-account patterns became a ranked queue instead of a surprise on the billing report. The pipeline scores the whole population, the queue orders the work, and the model's known limitation is documented where every user of the scores can see it."
impact: "A full-population sleeper-account detector: <strong>around 90 engineered features, leakage-aware training, PR-AUC-first evaluation</strong>, and a ranked investigation queue, with the model's own probable label leakage <strong>flagged in writing</strong>."
counterfactual: "Sleeper accounts keep announcing themselves through the billing spike, after the compute is burned, and the honest caveat about label leakage never reaches the people quoting the model's numbers."
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
    caption: "Around 90 engineered features across these families, scored for the full population."
  - chart: "stat"
    label: "Engineered features"
    value: "~90"
    context: "Temporal split, held-out early stopping, imbalance weighting, 5-fold CV, PR-AUC first."
    emphasis: false
  - chart: "stat"
    label: "Known limitation"
    value: "Flagged"
    context: "Probable label leakage documented in writing rather than shipped as an optimistic headline."
    emphasis: false
tags: ["XGBoost", "Feature engineering", "Detection", "Investigation queue"]
---

A sleeper account is patient. It registers clean, stays quiet, and burns
compute only when its operator decides the moment is right. Waiting for the
billing spike means arriving after the damage.

The detector is an XGBoost pipeline with around 90 engineered features built
from the signals that give sleepers away early: billing behaviour, linked
accounts, IP-country mismatches, payment instruments, and risk-score history.
The training hygiene is the part I would defend in a review. The split is
temporal so the model never peeks at the future. Early stopping runs on a
separate held-out set. Class imbalance is weighted, validation is 5-fold, and
the first evaluation number is PR-AUC because in fraud the positives are rare
and precision is the expensive half.

The model feeds an agent that surfaces the patterns and a Streamlit queue
that turns full-population scores into tiers an analyst can work through in
order. Detection that does not end in a workable queue is a chart, not a
control.

One more thing mattered. The model showed signs of probable label leakage,
the kind of thing that makes offline numbers look better than reality. I put
that in writing next to the scores instead of shipping the flattering
version. A detector people can calibrate their trust against is worth more
than one with a prettier headline.
