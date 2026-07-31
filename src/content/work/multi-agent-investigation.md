---
title: "Agents that argue their way to a defensible answer"
role: "Business Analyst — AWS Payments & Fraud Prevention"
period: "2026"
theme: "AI investigation methodology"
track: "Investigation"
company: "AWS"
order: 6
summary: "A multi-agent investigation practice — competing personas, adversarial debate, and an LLM judge — that turns ad-hoc fraud questions into auditable runs, and once caught an agent fabricating a reconciliation."
context: "LLM agents are fast and confident, which in fraud work is dangerous: a fluent, wrong reconciliation that lands in a stand-up is worse than no answer. I wanted the speed without trusting any single model's say-so."
contribution: "I built a methodology, not just prompts. An 'arena' runs competing personas at a question and has a judge synthesize consensus, disagreements, and the best-supported answer; a 'debate' mode has two agents argue across rounds to a converged verdict; an 'investigation' mode runs params-driven ring deep-dives. Every run is a self-contained folder — numbered scripts, raw outputs, a graded report — so any number traces back to the query that produced it. Headline figures get reconciled to the cent across independent reproductions, and a second agent re-checks the first."
outcome: "A near-daily cadence over a month-plus produced dozens of leadership-ready reports backed by 800+ query scripts and 900+ outputs, the majority reconciled to the cent. The adversarial structure earned its keep: in one debate, an agent invented an impossible reconciliation and a wrong headline — the loop caught it and drove the agents to a corrected, converged answer instead of shipping the fabrication."
impact: "Turned ad-hoc fraud questions into <strong>dozens of auditable, leadership-ready reports</strong> backed by <strong>800+ scripts and 900+ outputs</strong>, reconciled to the cent — and the adversarial loop <strong>caught an LLM fabricating a reconciliation</strong> before it shipped."
counterfactual: "A single confident agent ships the fabricated reconciliation and its wrong headline straight into a stand-up — and the month&rsquo;s investigation throughput collapses back to one slow manual case at a time."
indexMetric: 0
metrics:
  - chart: "stat"
    label: "Leadership-ready reports"
    value: "Dozens"
    context: "Near-daily cadence over a month-plus."
    emphasis: false
  - chart: "stat"
    label: "Query scripts · outputs"
    value: "800+"
    unit: "scripts"
    context: "Backed by 900+ saved outputs — every claim traceable to its query."
    emphasis: false
  - chart: "stat"
    label: "Fabricated reconciliation"
    value: "Caught"
    context: "The debate loop overturned an agent's invented headline before it shipped."
    emphasis: true
tags: ["Multi-agent", "LLM judge", "Adversarial debate", "Reproducibility", "MCP"]
---

The failure mode of an LLM in fraud analysis isn't being slow — it's being
fluently wrong in a stand-up. So I built the speed in but never let a single
model's confidence be the evidence.

The methodology has three shapes. An **arena** runs competing personas at the
same question and has a judge synthesize where they agree, where they don't, and
which answer is best-supported. A **debate** puts two agents in an argument
across rounds until they converge on a verdict. An **investigation** mode runs
structured, params-driven ring deep-dives. The common thread is that every run is
a self-contained folder — numbered scripts, raw CSVs, a graded report — so any
figure can be clicked back to the exact query behind it.

Discipline lives on top of that: headline numbers reconciled to the cent across
independent reproductions, and a second agent re-checking the first before
anything is called done. Over a month-plus this sustained a near-daily cadence —
dozens of leadership reports backed by 800+ scripts and 900+ outputs.

The clearest proof it was worth the overhead: in one debate, an agent
**invented** a reconciliation that couldn't be true and attached a wrong headline
to it. A single-agent pipeline would have shipped it. The adversarial loop caught
the fabrication and drove both agents to a corrected, converged answer. That's
the whole reason the structure exists.
