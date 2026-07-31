---
title: "The +69% correction: making verification mandatory"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Verification methodology"
track: "Measurement"
company: "AWS"
order: 10
summary: "A standing rule that every stakeholder-facing number gets attacked before it ships. On its founding case it corrected the headline by +69% and turned a loose claim into a defensible one."
context: "Fraud numbers travel into stand-ups, weekly business reviews, change tickets, and vendor responses. A wrong headline does worse than embarrass the author, since it redirects decisions. Nobody has to lie for this to happen. The usual failure is a silently truncated pull or a baseline that never existed, shipped with confidence."
contribution: "I instituted a mandatory adversarial pass: before any quantification reaches a stakeholder, a non-author reviewer attacks the load-bearing claims with fresh queries. The founding case was my own prior report. The pass corrected the headline dollar figure by +69% after catching a silently row-cap-truncated pull, cut the cohort by ~44% because the source table's history did not start early enough to prove a baseline, showed 63% of 'change' timestamps were re-observations of a pre-existing value, and disproved both flagship example accounts' dates, while confirming three of five load-bearing claims and the underlying phenomenon."
outcome: "The claim that shipped was smaller and far more precise. Estimated precision rose from 39% to a 65 to 80% range, which is the version that survives a room. The pass became standing practice for anything stakeholder-facing, and publishing the correction of my own headline set the norm that being wrong in draft is cheap and being wrong in a review is not."
impact: "Corrected a headline dollar figure <strong>+69%</strong> before it reached stakeholders and lifted claim precision from <strong>39% to 65 to 80%</strong>, then made the adversarial pass the standing gate for every number that leaves the team."
counterfactual: "The truncated pull ships. The headline is wrong by two-thirds in a weekly business review, the flagship examples do not hold up to a spot-check, and every number the team publishes afterwards carries the discount."
indexMetric: 0
metrics:
  - chart: "delta"
    label: "Founding-case headline correction"
    value: "+69%"
    detail: "dollar figure corrected after a silently row-cap-truncated pull was caught before the room"
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
      display: "65 to 80%"
    betterWhen: "higher"
    context: "A smaller claim at far higher precision, the version that survives challenge."
  - chart: "stat"
    label: "'Changes' that were re-observations"
    value: "63%"
    context: "Timestamps that re-observed a pre-existing value rather than showing any change."
    emphasis: false
tags: ["Verification", "Precision", "Methodology", "Data quality"]
draft: true
---

The most dangerous number in fraud work is a confident one. Confidence gets a
figure quoted in a weekly business review, and it makes that figure expensive
when it turns out wrong.

So I made verification structural. Before any quantification reaches a
stakeholder, a non-author reviewer attacks the load-bearing claims with fresh
queries. This is more than a read-through. It means independent SQL against the
same sources, aimed at breaking the claims.

The founding case was my own report. The pass caught that the headline figure
sat on a silently row-cap-truncated pull, and the corrected number moved +69%.
The cohort shrank by roughly 44% because the source table's history simply did
not start early enough to prove the claimed baseline. It also turned out that
63% of the "change" timestamps were re-observations of values that had always
been there, and the dates on both flagship example accounts fell apart. Three
of five load-bearing claims held, and so did the underlying phenomenon.

What shipped was a smaller claim at much higher precision, 39% before the pass
and 65 to 80% after. That trade is the whole point. A smaller number that
survives a room beats a bigger one that dies to the first sharp question.

The practice stuck because I published the correction instead of burying it.
Being wrong in draft is cheap. The pass keeps the wrongness there.
