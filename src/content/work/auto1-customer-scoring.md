---
title: "Scoring which customers were worth the call"
role: "Data Analyst, Customer Acquisition, AUTO1 Group"
period: "2021 to 2024"
theme: "Customer analytics"
track: "Measurement"
company: "AUTO1 Group"
featured: false
draft: false
order: 4
summary: "Before the fraud work, the same ranking problem: a large B2B base, finite outreach capacity, and two scores deciding who got called."
context: "AUTO1's commercial team worked a large B2B customer base with finite outreach capacity. With no ranking over it, effort spread evenly across customers who were not evenly valuable, and churn was discovered in the revenue numbers rather than before it happened."
contribution: "I built the two scores that ranked the base: a value score identifying the high-value B2B customers worth proactive attention, and a churn-risk score flagging accounts whose behaviour signalled they were about to leave. I analysed customer drop-off patterns to locate where in the relationship the base was actually being lost. I quantified the revenue upside of the highest-impact retention opportunities, so the case for retention spend was a number rather than a feeling."
outcome: "Outreach ran off a queue instead of spreading evenly, so the rank decided the week rather than whoever happened to call in. Retention spend was argued from a payback figure attached to a named opportunity."
impact: "Replaced flat outreach across a large B2B base with a <strong>ranked call queue</strong> — a value score, a churn-risk score, and a <strong>quantified revenue case</strong> behind the highest-impact retention plays."
counterfactual: "Retention money keeps going to whichever play sounds most urgent in the room, and <strong>nobody can say which one would have paid back</strong>."
indexMetric: 0
metrics:
  - chart: "signal-matrix"
    label: "What turned a flat customer list into a call queue"
    signals:
      - "Customer value score"
      - "Churn-risk score"
      - "Drop-off pattern analysis"
      - "Quantified revenue upside"
    activeCount: 4
    caption: "None of the four is useful alone: a rank with no revenue behind it is a list, and a revenue figure with no rank is a wish."
  - chart: "line"
    label: "How the base drained over the relationship"
    points: [100, 92, 84, 76, 68, 61, 54, 47]
    seriesLabel: "still active"
    xLabel: "time in the relationship"
    yLabel: "share still active (illustrative)"
    caption: "Illustrative shape, since the live curve runs on AUTO1's customer data. What the real analysis established is where in the relationship customers were actually being lost, which is what let the retention plays be ranked by the revenue at stake behind each drop-off point rather than by anecdote."
tags: ["Customer scoring", "Churn", "B2B", "Revenue analytics"]
---

Fraud came later. The question did not change. A commercial team with finite
outreach capacity and a customer base that is not evenly valuable faces the
same problem as a fraud analyst holding a review queue: the population is
large, attention is scarce, and spending it evenly is the one strategy
guaranteed to be wrong. Unranked, the most valuable accounts got the same
share of the week as the least, and the accounts quietly on their way out got
none of it.

So I built the ranking as two scores rather than one blended number, because
who is worth keeping and who is leaving are different questions, and answering
them in one figure hides which of the two is driving a call.

Scores rank work; they do not justify spending money on it. That was the third
piece. Attaching revenue to each drop-off point turned "we should do something
about churn" into a list of retention plays with a payback figure next to each
one.

This role was the training ground for everything after it. Population-level
scoring, ranking under a hard capacity constraint, and the discipline of
quantifying a decision before asking anyone to make it are the same habits the
fraud work runs on. What changed later was the cost of being wrong — a missed
call became a shut-down account. The structure of the problem did not move.
