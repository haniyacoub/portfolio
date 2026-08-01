---
title: "Scoring which customers were worth the call"
role: "Data Analyst, Customer Acquisition, AUTO1 Group"
period: "2021 to 2024"
theme: "Customer analytics"
track: "Measurement"
company: "AUTO1 Group"
featured: false
draft: false
order: 5
summary: "Before the fraud work, the same ranking problem: a large business customer base, finite calling capacity, one score deciding the week."
context: "AUTO1's commercial team worked a large base of business customers with finite outreach capacity. With no ranking over it, effort spread evenly across customers who were not evenly valuable. The most valuable accounts got the same share of the week as the least."
contribution: "I built the value score that identified the high-value business customers worth proactive attention. I turned it into a ranked outreach queue the commercial team worked from the top down. That sent finite calling capacity to the accounts carrying the most value. I kept it separate from the churn-risk score, because who is worth keeping and who is leaving are different questions."
outcome: "Outreach ran off a queue instead of spreading evenly, so the rank decided the week rather than whoever happened to call in."
impact: "Replaced flat outreach across a large business customer base with a <strong>ranked call queue</strong>. Finite calling capacity went to the accounts carrying the most value."
counterfactual: "Calling capacity keeps being spent evenly across a base that was never evenly valuable, and <strong>the largest accounts get the same week as the smallest</strong>."
indexMetric: 0
metrics:
  - chart: "ranked-bars"
    label: "What a value rank does to a week of calling"
    unit: "relative value carried"
    sort: true
    bars:
      - name: "Top-ranked accounts"
        value: 100
        key: true
        note: "Worked first, because the rank put them first rather than because they called in."
      - name: "Next band"
        value: 58
      - name: "Middle of the base"
        value: 31
      - name: "Long tail"
        value: 12
    caption: "Illustrative magnitudes, since the live score runs on AUTO1's customer data. What the work established is the ordering, and that the base was not evenly valuable. Flat outreach treats these four bands as though they were the same bar."
tags: ["Customer scoring", "B2B", "Prioritisation", "Revenue analytics"]
---

Fraud came later. The question did not change. A commercial team with finite
outreach capacity and a customer base that is not evenly valuable faces the
same problem as a fraud analyst holding a review queue: the population is
large, attention is scarce, and spending it evenly is the one strategy
guaranteed to be wrong. Unranked, the most valuable accounts got the same
share of the week as the least, and the accounts quietly on their way out got
none of it.

So I built the value score as its own number rather than blending it with
churn risk, because who is worth keeping and who is leaving are different
questions, and answering them in one figure hides which of the two is driving a
call. The churn side became its own piece of work, and its own case.

What the score changed was mundane and it was the whole point. The team stopped
deciding the week by whoever happened to ring in, and started at the top of a
list.

This role was the training ground for everything after it. Population-level
scoring, ranking under a hard capacity constraint, and the discipline of
quantifying a decision before asking anyone to make it are the same habits the
fraud work runs on. What changed later was the cost of being wrong. A missed
call became a shut-down account. The structure of the problem did not move.
