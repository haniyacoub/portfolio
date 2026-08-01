---
title: "Absent evidence is not reassurance"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Tool correctness"
track: "Tooling"
company: "AWS"
featured: false
order: 12
summary: "Two tools that maintain their own correctness: one attacked for 50 rounds until missing evidence stopped reading as a pass, one that regenerates its own monitoring coverage so no model goes unwatched."
context: "Both tools were exposed to the same failure, and it is silence rather than error. The first version of the compromise tool rendered about 6,000 events on a zoom-and-pan canvas and left the analyst to find the story; the rebuild I put in its place turned out to print something reassuring when a query failed. Precision tracking rots the same way: a new enforcement signature appears, nobody adds it to the monitoring queries, and that detection model simply stops being watched. Nothing alarms, because nothing decided to stop."
contribution: "I rebuilt the compromise tool as a decision engine over roughly 19 live data surfaces. Paste an account ID and it answers the eight ordered decisions of a compromise case, from whether this is compromise at all, through true onset and attacker dwell rather than label time, to whether reinstate is safe. I then ran a 50-round adversarial audit against my own tool, and it confirmed 44 defects. Nearly every critical defect was the same mistake: absent or errored evidence reading as reassurance. Every instance is now inverted to fail-closed with regression tests, so a failed query yields unproven instead of a green light. I authored a model-monitoring pipeline that regenerates itself: a JSON registry of enforcement signatures feeds a code generator, the generator produces the SQL, and the SQL renders the dashboards, so a newly discovered signature is entered once and enrolls itself everywhere downstream. I also reverse-engineered the production fraud rulesets from PDF exports into a structured machine-readable catalog with an interactive lifecycle graph, so reasoning about enforcement paths runs on the actual rules instead of on inference from data."
outcome: "Investigators get a case file instead of a canvas, and the verdicts are trustworthy in a specific, tested sense: a gate turns green only on positive evidence, and not proven safe is a distinct verdict from blocked. The ruleset catalog gives investigations a ground truth for how enforcement actually behaves. The audit's core finding outgrew the tool it came from and is now how I design anything that renders a verdict."
impact: "Inverted every critical failure to fail-closed after a 50-round adversarial audit against my own compromise tool confirmed <strong>44 defects</strong>, nearly all of them absent or errored evidence reading as reassurance, and made monitoring coverage regenerate from its own registry so <strong>no detection model drops out of precision tracking</strong>. Neither tool can report a pass it did not earn."
counterfactual: "Analysts keep panning across 6,000 events while the tool certifies accounts on queries that timed out, and a new enforcement signature ships to a monitoring layer that never hears about it, so six months later the honest answer to how that model has been performing is that nobody was watching."
indexMetric: 0
metrics:
  - chart: "gate-funnel"
    label: "The eight compromise decisions, answered in order"
    stages:
      - name: "Compromise at all?"
        note: "Nothing downstream is allowed to mean anything until this one is answered."
      - name: "True onset time"
        note: "When the takeover actually started, not when a label was applied."
      - name: "Attacker dwell"
        note: "How long the attacker held the account, measured from true onset."
      - name: "What was abused"
        note: "Which resources and surfaces the compromise reached."
      - name: "Did abuse succeed"
        note: "Attempted and succeeded are separate verdicts."
      - name: "What it cost"
        note: "The cost attached to the abuse that succeeded."
      - name: "Genuine or resold"
        note: "Whether the account was taken over or resold by its owner."
      - name: "Reinstate safe?"
        note: "Decided last, and only on positive evidence. Not proven safe is a distinct verdict from blocked."
        key: true
    caption: "Order carries the meaning: reinstate is settled on what the seven decisions before it established. Every answer ships with its evidence, its confidence, and its explicit unknowns."
    context: "Answered from one pasted account ID, replacing a canvas the analyst had to search by hand."
  - chart: "abuse-chain"
    label: "Monitoring coverage that rebuilds itself"
    steps:
      - label: "JSON signature registry"
        value: "source"
        note: "One entry per enforcement signature, added once when it is discovered."
      - label: "Code generator"
        value: "builds"
      - label: "Generated SQL"
        value: "queries"
      - label: "Rendered dashboards"
        value: "0"
        note: "Unwatched models. New signatures enroll themselves, so no detection model silently drops out of precision tracking."
        punch: true
    context: "Remembering to extend the monitoring queries is no longer a human task, which is what made the old failure silent."
  - chart: "stat"
    label: "Defects confirmed, then inverted to fail-closed"
    value: "44"
    context: "Found by attacking my own tool: 2 lenses by 25 attack scenarios over 10 ground-truthed accounts."
tags: ["Investigation tooling", "Adversarial audit", "Fail-closed design", "Model monitoring", "Code generation"]
draft: false
---

Silence is the dangerous failure. A wrong number gets argued with in a meeting;
a missing one gets read as fine. Both of these tools had that failure available
to them, and both were rebuilt so it cannot happen quietly.

The compromise tool started out honest about the data and useless about the
decision: every event on a canvas, and an analyst left to zoom, pan and
hopefully notice the story. The rebuild starts from the decisions instead —
eight of them, in order, because nothing later means anything until the earlier
ones are settled. You cannot price what an attacker cost before you have
established that there was an attacker.

Then I attacked it, and the critical findings were almost embarrassingly
consistent: **absent or errored evidence read as reassurance**. A timed-out
query printed as a passing gate. A coverage claim over surfaces never checked.
The tool was not lying about what it knew; it had no way to say that it did not
know. Every instance is inverted now. A failed query yields unproven, and a
regression suite over documented anchors keeps it that way.

The monitoring pipeline applies the same rule before anything breaks: coverage
is generated, not remembered. Its companion was ground truth — the production
fraud rulesets, reverse-engineered from PDF exports into a machine-readable
catalog with an interactive lifecycle graph, so investigations reason from what
the rules say rather than from what the data implies.

Neither tool is smarter than its inputs. Both now say so out loud.
