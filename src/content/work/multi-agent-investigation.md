---
title: "Nothing ships until something has tried to break it"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Adversarial verification methodology"
track: "Investigation"
company: "AWS"
order: 9
featured: true
draft: true
summary: "Speed from LLM agents, trust from a mandatory adversarial gate. The loop caught an agent fabricating a reconciliation, and the same gate corrected my own headline by +69%."
context: "LLM agents are fast and confident, which in fraud work is the dangerous combination: a fluent, wrong reconciliation that lands in a stand-up is worse than no answer, because it redirects decisions. Nobody has to lie for this to happen. The usual failure is a silently truncated pull or a baseline that never existed, shipped with confidence. I wanted the speed without trusting any single author's say-so, mine included."
contribution: "I built a multi-agent investigation methodology rather than a prompt library. An 'arena' runs competing personas at one question and has a judge synthesize consensus, disagreements, and the best-supported answer. A 'debate' mode has two agents argue across rounds to a converged verdict. An 'investigation' mode runs params-driven ring deep-dives. Every run is a self-contained folder of numbered scripts, raw outputs, and a graded report, so any number traces back to the query that produced it. Headline figures are reconciled to the cent across independent reproductions, and a second agent re-checks the first. I then made the same rule binding on humans: before any quantification reaches a stakeholder, a non-author reviewer attacks the load-bearing claims with fresh, independent queries. The founding case was my own prior report. The pass corrected the headline dollar figure by +69% after catching a silently row-cap-truncated pull, and cut the cohort by roughly 44% because the source table's history did not start early enough to prove a baseline. It also showed 63% of 'change' timestamps were re-observations of a pre-existing value and disproved both flagship example accounts' dates, while confirming three of five load-bearing claims and the underlying phenomenon."
outcome: "The cadence held near-daily over a month-plus, and the gate earned its keep twice on two different kinds of author. In one debate, an agent invented an impossible reconciliation and a wrong headline, and the loop drove both agents to a corrected, converged answer instead of shipping the fabrication. On the founding human case the author was me, and the claim that shipped was smaller and far more precise. Publishing the correction of my own headline set the norm that being wrong in draft is cheap and being wrong in a review is not."
impact: "Dozens of auditable, leadership-ready reports off <strong>800+ scripts and 900+ outputs</strong>, most reconciled to the cent, and an adversarial gate that <strong>caught an agent fabricating a reconciliation</strong> and corrected my own headline by <strong>+69%</strong>, lifting estimated claim precision from 39% to a 65 to 80% range."
counterfactual: "A single confident agent ships the fabricated reconciliation into a stand-up. The truncated pull ships too, so the headline is wrong by two-thirds in a weekly business review, the flagship examples fail a spot-check, and every number the team publishes afterwards carries the discount. And without the agent layer, the month's investigation throughput collapses back to one slow manual case at a time."
indexMetric: 0
metrics:
  - chart: "gate-funnel"
    label: "What a number survives before it ships"
    stages:
      - name: "Competing personas or adversarial debate"
        note: "Every question runs as an arena of rival personas or as two agents arguing across rounds. A fabricated reconciliation died here."
        key: true
      - name: "LLM judge"
        note: "Synthesizes where the agents agree, where they do not, and which answer is best-supported."
      - name: "Independent reproduction"
        note: "A second agent re-runs the first agent's figures from the saved scripts."
      - name: "Cent-level reconciliation"
        note: "A headline figure has to tie out to the cent across reproductions or it does not ship."
      - name: "Non-author adversarial pass"
        note: "A human who did not write it attacks the load-bearing claims with fresh, independent SQL."
    caption: "Order carries the meaning: the first gate is where an agent's fabricated reconciliation was caught, and the last is where my own headline was corrected."
  - chart: "before-after"
    label: "Estimated claim precision"
    before:
      label: "Before the pass"
      value: 39
      unit: "%"
      display: "39%"
    after:
      label: "After"
      value: 65
      unit: "%"
      display: "65 to 80%"
    betterWhen: "higher"
    context: "A smaller claim at far higher precision, which is the trade the pass exists to make. The after bar is sized on the low end of the stated range."
  - chart: "delta"
    label: "Founding-case headline correction"
    value: "+69%"
    detail: "dollar figure corrected after a silently row-cap-truncated pull was caught before the room"
    direction: "up"
    good: true
  - chart: "stat"
    label: "Query scripts"
    value: "800+"
    unit: "scripts"
    context: "The overhead survived contact with a month of near-daily work, which is the only real test of a verification practice."
    emphasis: false
tags: ["Multi-agent", "LLM judge", "Adversarial debate", "Verification", "Reproducibility", "MCP"]
---

Fluent and wrong is the dangerous pair. A slow answer costs time. A confident
wrong one costs whatever got decided on it, and it spends that credibility
before anyone has a reason to look. So the check could not be a habit I kept on
good days. It had to be something a run passes through on its way out.

What makes the adversarial modes work is not that two agents are smarter than
one. It is that the judge has to report three things: where the agents agreed,
where they did not, and which answer the evidence actually supports. Naming the
disagreement is what keeps a debate from deadlocking or settling into polite
agreement, and it means an open question leaves the run as an open question
instead of a rounded-off number. An agent defending a figure against another
agent reading the same saved scripts cannot win on fluency.

That is how the fabricated reconciliation surfaced. It could not have been true
and it still read like finished work, which is why reading it was never going to
be enough and re-running it was.

Turning the rule on myself was the harder half. Every stakeholder-facing number
now waits on someone who did not write it, working from their own queries, and
that overhead is exactly why most teams leave the rule informal. My own report
was the first thing through, and it did not come out clean: the phenomenon held,
the headline figure and both showcase examples did not, and what shipped was
narrower and much harder to knock down. I put the correction out under my own
name rather than quietly reissuing the number. A gate the author can opt out of
is not a gate.
