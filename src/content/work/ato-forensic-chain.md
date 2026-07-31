---
title: "Anatomy of a seven-figure takeover: the gate that failed"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Forensic reconstruction"
track: "Investigation"
company: "AWS"
order: 2.5
summary: "A settled, source-tagged 37-event timeline showing a seven-figure loss came from containment and adjudication failures, not from a detection miss."
context: "A seven-figure-cost account takeover was easy to describe as a detection miss. Nobody had assembled the complete, evidence-tagged chain of what actually happened, and without that chain the fix would have targeted the wrong control."
contribution: "I reconstructed the full chain as a settled 37-event timeline across warehouse data, the operations UI, support cases, infrastructure tickets, and wiki SOPs. Every figure was re-derived in-run and every row tagged by its evidence source. The sequence: a reviewer lifts containment, the risk score snaps from zero to perfect one second later with no waiting period, and 22 hours on the account looks clean to every downstream gate. The holder requests tens of thousands of processors across four regions in a support chat, and all four approvals land in twelve minutes because the only automated question asked is whether the risk score is clean. Launching begins 28 minutes after the last approval."
outcome: "The analysis proved detection fired 1.2 hours after the first anomalous hour. The loss came from the account being released four times and from a quota gate that trusted a one-second-old perfect score. It named the specific process gate that failed, and became the analysis carried into a program review and a correction-of-errors document."
impact: "Reframed a seven-figure loss from <strong>detection failure</strong> to a named <strong>containment-and-adjudication gap</strong>, backed by a 37-event, source-tagged timeline that survived a program review."
counterfactual: "The loss gets filed as 'detection was too slow', the detector gets tuned, and the reinstate-to-quota-approval path that actually produced the loss stays exactly as permissive as before."
indexMetric: 0
metrics:
  - chart: "abuse-chain"
    label: "The settled chain, from release to launch"
    steps:
      - label: "Containment lifted by reviewer"
        value: "T0"
      - label: "Risk score snaps to perfect"
        value: "+1 sec"
        note: "No waiting period"
      - label: "Four-region quota request approved"
        value: "12 min"
        note: "Only gate: is the risk score clean?"
      - label: "Launching begins"
        value: "+28 min"
        punch: true
  - chart: "stat"
    label: "Detection latency"
    value: "1.2"
    unit: "hrs"
    context: "Detection fired. The loss came later, after the account was released four times."
    emphasis: false
  - chart: "stat"
    label: "Source-tagged events"
    value: "37"
    context: "Every figure re-derived. Each row tagged warehouse, ops UI, support, infra, or SOP."
    emphasis: false
tags: ["Account takeover", "Forensics", "Process gap", "Evidence discipline"]
---

The easy story was that detection missed it. What actually happened decides
which control gets fixed, so I went and rebuilt it.

The incident became a settled timeline of 37 events. Every figure was
re-derived rather than quoted, and every row carried a tag for where it came
from: warehouse, operations UI, support case, infrastructure ticket, or SOP.
Assembling the chain across those five systems is what made it hard to argue
with.

Read in order, the chain is a diagram of misplaced trust. A reviewer lifts
containment. One second later the risk score snaps from zero to perfect, with
no waiting period, and 22 hours after that the account looks clean to every
downstream gate. The holder checks quotas for three hours, opens a support chat
asking for tens of thousands of processors across four regions, and disconnects
before verification. All four approvals arrive in **twelve minutes** because
the one automated question is whether the risk score is clean. Launching starts
28 minutes after the last approval and reaches 96% of the brand-new ceiling in
two regions within about ninety minutes.

Detection, meanwhile, had fired 1.2 hours after the first anomalous hour. The
system saw the takeover. What produced the loss was the account being
**released four times**, plus a quota gate that trusted a perfect score that
was one second old.

Naming that specific gate, rather than just describing the loss, is what
carried this into a program review and a correction-of-errors document.
