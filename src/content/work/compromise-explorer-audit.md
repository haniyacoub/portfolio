---
title: "Eight decisions, one paste, and a 50-round audit"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Investigation tooling"
track: "Tooling"
company: "AWS"
order: 23
summary: "A paste-an-account-ID compromise explorer that answers the eight decisions an investigator must make, hardened by a 50-round adversarial audit that found 44 defects and inverted every one to fail-closed."
context: "The first version of the compromise tool rendered about 6,000 events on a zoom-and-pan canvas and left the analyst to find the story. Investigators do not need more events. They need the eight decisions of a compromise case answered in order, with evidence."
contribution: "I rebuilt the tool as a decision engine over roughly 19 live data surfaces: paste an account ID and it answers the eight ordered decisions an investigator has to make, from whether this is compromise at all through when the takeover actually started to whether reinstate is safe, each with its evidence, its confidence, and its explicit unknowns. Then I ran a 50-round adversarial audit against my own tool, 2 lenses by 25 attack scenarios over 10 ground-truthed accounts. It confirmed 44 defects, and nearly every critical one was the same mistake: absent or errored evidence read as reassurance. Every instance is now inverted to fail-closed with regression tests, and a failed query yields unproven rather than a green light."
outcome: "Investigators get a case file instead of a canvas, and the tool's verdicts are trustworthy in a specific, tested sense: a gate only turns green on positive evidence, and not proven safe is a distinct verdict from blocked. The audit's core finding travels beyond this tool as a design rule."
impact: "A decision-first investigation tool over <strong>19 live data surfaces</strong>, hardened by a <strong>50-round adversarial audit</strong> that confirmed 44 defects and inverted every critical failure to <strong>fail-closed with regression tests</strong>."
counterfactual: "Analysts keep panning across 6,000 events looking for the story, and a tool that prints reassurance when a query times out keeps certifying accounts it never actually checked."
indexMetric: 0
metrics:
  - chart: "signal-matrix"
    label: "The eight decisions the tool answers in order"
    signals:
      - "Compromise at all?"
      - "True onset time"
      - "Attacker dwell"
      - "What was abused"
      - "Did abuse succeed"
      - "What it cost"
      - "Genuine or resold"
      - "Reinstate safe?"
    activeCount: 8
    caption: "Each with its evidence, its confidence, and its explicit unknowns."
  - chart: "stat"
    label: "Adversarial audit"
    value: "50"
    unit: "rounds"
    context: "2 lenses by 25 attack scenarios over 10 ground-truthed accounts."
    emphasis: false
  - chart: "stat"
    label: "Defects confirmed and fixed"
    value: "44"
    context: "Nearly every critical one: absent or errored evidence read as reassurance. All fail-closed now."
    emphasis: false
tags: ["Investigation tooling", "Adversarial audit", "Fail-closed design", "Account takeover"]
---

The first version of the tool was honest about the data and useless about
the decision. It rendered about 6,000 events on a canvas and let the analyst
zoom, pan, and hopefully notice the story.

The rebuild starts from the decisions instead. A compromise case is eight
questions asked in order: is this compromise at all, when did the takeover
actually start (true onset and attacker dwell, not label time), what was
abused, did the abuse succeed, what did it cost, is this genuine compromise
or a resold account, and is reinstate safe. The tool answers each one over
roughly 19 live data surfaces, and every answer carries its evidence, its
confidence, and its explicit unknowns.

Then I attacked it. Fifty rounds, two lenses by twenty-five scenarios, over
ten ground-truthed accounts. The audit confirmed 44 defects, and the pattern
in the critical ones was almost embarrassing in its consistency: **absent or
errored evidence read as reassurance**. A timed-out query printed as a
passing gate. A coverage claim over surfaces never checked.

Every instance is now inverted. A gate turns green only on positive
evidence. A failed query yields unproven. Not proven safe is a distinct
verdict from blocked, and a regression suite over documented anchors keeps
it that way. The audit finding outgrew the tool: it is now how I design
anything that renders a verdict.
