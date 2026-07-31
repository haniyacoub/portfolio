---
title: "Anatomy of a seven-figure takeover: the gate that failed"
role: "Business Analyst — AWS Payments & Fraud Prevention"
period: "2026"
theme: "Forensic reconstruction"
track: "Investigation"
company: "AWS"
order: 2.5
summary: "A settled, source-tagged 37-event timeline proving a seven-figure loss was a containment and adjudication failure — not a detection failure."
context: "A seven-figure-cost account takeover was easy to describe as a detection miss. Nobody had assembled the complete, evidence-tagged chain of what actually happened — and without it, the fix would have targeted the wrong control."
contribution: "I reconstructed the full chain as a settled 37-event timeline across warehouse data, the operations UI, support cases, infrastructure tickets, and wiki SOPs — every figure re-derived in-run, every row tagged by its evidence source. The sequence: a reviewer lifts containment, the risk score snaps from zero to perfect one second later with no waiting period, and 22 hours on the account looks clean to every downstream gate. The holder requests tens of thousands of processors across four regions in a support chat; all four approvals land in twelve minutes, because the only automated question asked is whether the risk score is clean. Launching begins 28 minutes after the last approval."
outcome: "The analysis proved detection fired 1.2 hours after the first anomalous hour — the loss came from the account being released four times and a quota gate that trusted a one-second-old perfect score. It named the specific process gate that failed, and became the analysis carried into a program review and a correction-of-errors document."
impact: "Reframed a seven-figure loss from <strong>detection failure</strong> to a named <strong>containment-and-adjudication gap</strong> — with a 37-event, source-tagged timeline that survived a program review."
counterfactual: "The loss gets filed as &ldquo;detection was too slow,&rdquo; the detector gets tuned, and the reinstate-to-quota-approval path that actually produced the loss stays exactly as permissive as before."
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
        note: "Only gate: &ldquo;is the risk score clean?&rdquo;"
      - label: "Launching begins"
        value: "+28 min"
        punch: true
  - chart: "stat"
    label: "Detection latency"
    value: "1.2"
    unit: "hrs"
    context: "Detection fired. The loss came after — the account was released four times."
    emphasis: false
  - chart: "stat"
    label: "Source-tagged events"
    value: "37"
    context: "Every figure re-derived; each row tagged warehouse / ops UI / support / infra / SOP."
    emphasis: false
tags: ["Account takeover", "Forensics", "Process gap", "Evidence discipline"]
---

The easy story was "detection missed it." The evidence said otherwise — and the
difference decides which control gets fixed.

I rebuilt the incident as a settled timeline: 37 events, every figure re-derived
rather than quoted, every row tagged by where it came from — warehouse, operations
UI, support case, infrastructure ticket, or SOP. Assembling it across those five
systems is what made the story undeniable.

The chain reads like a process diagram of misplaced trust. A reviewer lifts
containment; the risk score snaps from zero to perfect **one second later**, with
no waiting period. Twenty-two hours later, the account looks clean to every
downstream gate. The holder checks quotas for three hours, opens a support chat
asking for tens of thousands of processors across four regions, disconnects
before verification — and all four approvals arrive in **twelve minutes**,
because the one automated question is "is the risk score clean?" Launching starts
28 minutes after the last approval and reaches 96% of the brand-new ceiling in
two regions within about ninety minutes.

Detection, meanwhile, had fired 1.2 hours after the first anomalous hour. The
system *saw* the takeover. The loss came from the account being **released four
times**, and from a quota gate that trusted a one-second-old perfect score.

Naming that specific gate — rather than describing the loss — is what carried
this into a program review and a correction-of-errors document.
