---
title: "The +69% correction: making verification mandatory"
role: "Business Analyst — AWS Payments & Fraud Prevention"
period: "2026"
theme: "Verification methodology"
track: "Measurement"
company: "AWS"
order: 6.5
summary: "A standing rule — every stakeholder-facing number gets attacked before it ships — that corrected its founding case's headline by +69% and turned a loose claim into a defensible one."
context: "Fraud numbers travel: into stand-ups, weekly business reviews, change tickets, vendor responses. A wrong headline doesn't just embarrass the author — it redirects decisions. The failure mode isn't lying; it's a silently truncated pull or a baseline that never existed, shipped with confidence."
contribution: "I instituted a mandatory adversarial pass: before any quantification reaches a stakeholder, a non-author reviewer attacks the load-bearing claims with fresh queries. On its founding case — against my own prior report — the pass corrected the headline dollar figure by +69% by catching a silently row-cap-truncated pull, cut the cohort by ~44% because the source table's history didn't start early enough to prove a baseline, showed 63% of 'change' timestamps were re-observations of a pre-existing value, and disproved both flagship example accounts' dates — while confirming three of five load-bearing claims and the underlying phenomenon."
outcome: "The claim that shipped was smaller and far more precise — estimated precision rose from 39% to 65–80% — which is the version that survives a room. The pass became standing practice for anything stakeholder-facing, and publishing the correction of my own headline set the norm that being wrong in draft is cheap; being wrong in a review is not."
impact: "Corrected a headline dollar figure <strong>+69%</strong> before it reached stakeholders and lifted claim precision from <strong>39% to 65–80%</strong> — then made the adversarial pass the standing gate for every number that leaves the team."
counterfactual: "The truncated pull ships. The headline is wrong by two-thirds in a weekly business review, the flagship examples don&rsquo;t hold up to a spot-check, and every number the team publishes afterwards carries the discount."
indexMetric: 0
metrics:
  - chart: "delta"
    label: "Founding-case headline correction"
    value: "+69%"
    detail: "dollar figure corrected — a silently row-cap-truncated pull, caught before the room"
    direction: "up"
    good: true
  - chart: "before-after"
    label: "Estimated claim precision"
    before:
      label: "Before the pass"
      value: 39
      unit: "%"
    after:
      label: "After"
      value: 72
      unit: "%"
      display: "65–80%"
    betterWhen: "higher"
    context: "A smaller claim at far higher precision — the version that survives challenge."
  - chart: "stat"
    label: "&ldquo;Changes&rdquo; that were re-observations"
    value: "63%"
    context: "Timestamps re-observing a pre-existing value, not evidence of change."
    emphasis: false
tags: ["Verification", "Precision", "Methodology", "Data quality"]
draft: true
---

The most dangerous number in fraud work is a confident one. Confidence is what
gets a figure quoted in a weekly business review — and what makes it expensive
when it's wrong.

So I made verification structural instead of optional: before any
quantification reaches a stakeholder, a **non-author reviewer attacks the
load-bearing claims with fresh queries**. Not a read-through — an attack, with
independent SQL against the same sources.

The founding case was my own report. The pass caught that the headline figure
sat on a **silently row-cap-truncated pull** — corrected, the number moved
**+69%**. It cut the cohort nearly in half because the source table's history
simply didn't start early enough to prove the claimed baseline. It found 63% of
the "change" timestamps were re-observations of values that had always been
there. And it disproved the dates on both flagship example accounts — while
confirming three of five load-bearing claims and the reality of the underlying
phenomenon.

What shipped was a smaller claim at much higher precision — 39% before the
pass, 65–80% after. That trade is the entire point: a smaller number that
survives a room beats a bigger one that dies to the first sharp question.

The practice stuck because the correction was published, not buried. Being
wrong in draft is cheap. The pass keeps it there.
