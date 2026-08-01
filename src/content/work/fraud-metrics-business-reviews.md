---
title: "Owning the fraud numbers, and proving which moves were real"
role: "Senior Product Analyst, Risk & Abuse, Zalando"
period: "2025 to 2026"
theme: "Metric ownership"
track: "Measurement"
company: "Zalando"
featured: false
order: 21
summary: "I owned the weekly and monthly fraud numbers. The hard part was ruling out who was shopping that week."
context: "A fraud metric gets read as though a move in the number is a move in fraud. Often it is not. The share flagged as suspicious can rise for three dull reasons. The customer mix changed. There was more fraud around to find. Or a set of cases was kept out of the count. All three look identical on a chart. A business review is the worst place to find that out. The room reacts to the number in front of it, and the reaction is a threshold change or an escalation."
contribution: "I owned the fraud metrics for the weekly and monthly business reviews, wrote the SQL behind them, and explained them in those forums. The set runs from suspicious, detected and steer rates to fraud loss and remaining fraud damage. Steer rate is how a flagged customer gets handled from then on. It also carries precision, how often a flag is right, and recall, how much of the abuse gets caught. False positives, meaning real customers wrongly flagged, sit beside fraud damage as a share of gross sales. Manual refund leakage, refund rate against a benchmark and the excess refund and damage rate above it round out the set. Before any of it reached a review, I read those rates against base-rate effects and soft exclusions. Base rate is how much fraud there was to find, and soft exclusions are the cases kept out of the count. A move in either looks exactly like a move in fraud, and only one of the two is worth reacting to. I ran the what-if analysis behind threshold decisions. Moving a refund-denial threshold cuts fraud damage and turns away real customers at the same time, so I sized both. I built the dashboards this ran on in Databricks and Azure, read by Risk, Product and Finance leadership. Where a rate would not explain itself, I went to entity level and read the customers, accounts and orders behind it. My counterparts were Product, Engineering, Operations and leadership, so every explanation had to work without a fraud background."
outcome: "A number that moved arrived with an explanation instead of a reaction. A refund-denial threshold got argued over with fraud damage and lost sales both sized, rather than one of the two."
impact: "Owned the fraud metric set for <strong>weekly and monthly business reviews</strong> across <strong>six European markets</strong>. Every move got read against <strong>population mix, base rate and soft exclusions</strong> before anyone reported it as a change in fraud."
counterfactual: "The review reacts to the chart. A shift in the customer mix gets escalated as a fraud spike, and a real spike masked by an exclusion goes unnoticed. Thresholds then move on a number nobody checked, which costs either fraud damage or real customers."
indexMetric: 0
metrics:
  - chart: "gate-funnel"
    label: "What a moved number clears before it is read as fraud"
    stages:
      - name: "Comparable population"
        note: "Same markets and same customer segments as the period it is measured against. A different population is a different measurement."
      - name: "Soft exclusions accounted for"
        note: "Cases kept out of the count change the denominator without ever appearing on the chart."
        key: true
      - name: "Base rate stable"
        note: "How much fraud there was to find at all. More fraud around raises the flagged rate with no change in detection."
      - name: "Now read the move as fraud"
        note: "Only what clears the first three gets reported as a change in fraud, and only that is worth acting on."
    caption: "No counts are published here. The order is the argument, because a base-rate check on a population that was never comparable settles nothing."
    context: "Applied to suspicious rate, detected rate and steer rate, weekly and monthly, across the top six markets: Germany, the Netherlands, Belgium, France, Italy and Switzerland."
  - chart: "line"
    label: "What a shift in the customer mix looks like"
    points: [4.0, 4.4, 5.1, 5.8]
    baseline: [4.0, 4.0, 4.0, 4.0]
    seriesLabel: "reported suspicious rate"
    baselineLabel: "underlying fraud rate"
    xLabel: "week to week"
    yLabel: "rate (illustrative)"
    caption: "Illustrative shape, since no figures are published for this. What the work establishes is that the two lines can come apart, so the reported line on its own never settles whether fraud moved."
    context: "The same pattern reads the other way round. A real rise can be flattened by a mix shift, which is why the reported line gets checked in both directions."
tags: ["Business reviews", "Fraud metrics", "Base-rate effects", "Soft exclusions", "What-if analysis", "Precision / recall", "SQL", "Databricks", "Azure", "Stakeholder communication"]
draft: false
---

A rate that moved is not fraud that moved.

That sentence is most of the job. The share flagged as suspicious
climbs in a given week, and there are three dull explanations to clear before
the interesting one. The customer mix changed, so the week is measuring a
different population. The base rate changed, meaning there was simply more or
less fraud around to find. Or a set of cases was kept out of the count, which
changes the denominator. On a chart all four look the same.

They stop looking the same once the checks run in order. Comparable population
first, because nothing after it means much otherwise. Exclusions next, since
they move the denominator quietly. Base rate after that. Only what survives all
three gets reported as a change in fraud.

I explained this to Product, Engineering, Operations and leadership, so it had
to work without a fraud background. That constraint improved the answer. If I
could not say in one plain sentence why a number moved, I did not yet understand
why it moved.

The what-if work stood on the same foundation. Someone asks what happens if the
refund-denial threshold moves. The honest answer has two halves, because denying
more refunds cuts fraud damage and turns away real customers, and both halves
come out of the same numbers. Give only the first half and it is not a decision.
It is a preference with a chart attached.

One limit, stated plainly. Nothing here publishes how often the boring
explanation won. What the work established is the order of the checks, and that
skipping them is how a review ends up acting on nothing.
