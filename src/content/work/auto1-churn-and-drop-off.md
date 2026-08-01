---
title: "Which accounts were leaving, and which losses were worth fixing"
role: "Data Analyst, Customer Acquisition, AUTO1 Group"
period: "2021 to 2024"
theme: "Churn and retention"
track: "Measurement"
company: "AUTO1 Group"
featured: false
draft: false
order: 20
summary: "Two scores for two questions: which business customers were at risk of leaving, and which points of customer drop-off carried enough revenue to be worth working."
context: "AUTO1's commercial team worked a large base of business customers with finite outreach capacity. Retention needs two things a customer list does not carry on its own: which accounts are at risk of leaving, and which points of customer drop-off have enough revenue behind them to be worth acting on."
contribution: "I built the churn-risk score that identified which business customers were at risk of leaving. I kept it separate from the value score, because who is worth keeping and who is leaving are different questions. I analysed customer drop-off patterns to find where in the customer relationship the base was being lost. I quantified the revenue upside sitting behind those drop-off points, which is what made the retention opportunities rankable by size rather than only nameable. The commercial team used both scores to prioritise its outreach."
outcome: "Outreach was prioritised against churn risk rather than spread across the base. Each retention opportunity carried a revenue figure, so the highest-impact ones could be identified as the highest-impact ones."
impact: "Churn risk became a <strong>ranked outreach priority</strong> for the commercial team. Every drop-off point carried a <strong>quantified revenue upside</strong>, which is what identified the highest-impact retention opportunities."
counterfactual: "Retention effort spreads evenly across a base where the losses are not evenly sized, and <strong>the largest recoverable losses get the same attention as the smallest</strong>."
indexMetric: 0
metrics:
  - chart: "line"
    label: "Where the base drained across the customer relationship"
    points: [100, 92, 84, 76, 68, 61, 54, 47]
    seriesLabel: "still active"
    xLabel: "time as a customer"
    yLabel: "share still active (illustrative)"
    caption: "Illustrative shape, since the live analysis ran on AUTO1's customer data. What the real work established is that drop-off concentrated at identifiable points in the relationship, which is what let a revenue figure be attached to each one."
  - chart: "ranked-bars"
    label: "Retention opportunities, ranked by the revenue upside behind them"
    unit: "relative revenue upside"
    sort: true
    bars:
      - name: "Top drop-off point by revenue"
        value: 100
        key: true
        note: "The highest-impact retention opportunity, which is what the revenue figure was there to identify."
      - name: "Second by revenue"
        value: 71
      - name: "Third by revenue"
        value: 44
      - name: "Fourth by revenue"
        value: 26
    caption: "The magnitudes and the number of points shown here are illustrative, and the bars are labelled by rank rather than by which stage of the relationship each one was. What the work established is that each drop-off point carried a revenue figure, so the opportunities could be ordered by size."
tags: ["Churn", "Retention", "Business customers", "Revenue analytics", "Customer scoring"]
---

A business customer never resigns. The account just stops buying, which makes
churn a measurement problem before it is a retention problem.

Two questions sit inside it, and I answered them with two separate numbers on
purpose. The value score said which accounts were worth keeping. The churn-risk
score said which ones were at risk of leaving. Blended into one figure they hide
which of the two is driving a call, and the commercial team working the outreach
needed to know which it was.

A score names who. It does not locate where. So the second piece was reading
customer drop-off as a pattern rather than as a single event, and asking at
which points in the relationship the base was actually being lost. That turns
churn from one number into a set of specific places to look.

The last piece is the one that made the set usable. Each of those drop-off
points had revenue sitting behind it, so I quantified the upside at each one.
Without that figure, a list of places the base drains is a list of everything,
all of it plausible and none of it ordered. With it, the highest-impact
retention opportunities are simply the ones carrying the largest number, which
is something a commercial team can prioritise against.

Ranking a large population under a hard capacity constraint, and putting a
figure on a decision before asking anyone to make it, are the habits the fraud
work later ran on.
