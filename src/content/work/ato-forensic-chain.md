---
title: "Anatomy of a seven-figure takeover: the gate that failed"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Forensic reconstruction"
track: "Investigation"
company: "AWS"
featured: true
order: 7
draft: false
summary: "Five systems reconciled into one settled chain of 37 events, where every row carries the evidence source it came from and the elapsed gaps between rows are the finding."
context: "A seven-figure-cost account takeover was easy to file as a detection miss. Nobody had assembled the complete, evidence-tagged chain of what actually happened, and without that chain the correction of errors had no way to tell which control had failed."
contribution: "I reconstructed the incident as a settled 37-event timeline spanning warehouse data, the operations UI, support cases, infrastructure tickets, and wiki SOPs. I re-derived every figure in-run rather than quoting an earlier summary, and tagged each row with the evidence source it came from. I put the load-bearing events on real elapsed time, which is what exposed the gaps. The risk score snapped from zero to perfect one second after a reviewer lifted containment, with no waiting period. Four regional quota approvals then landed inside twelve minutes. I traced the request path end to end, from three hours of quota checking to a support chat asking for tens of thousands of processors across four regions."
outcome: "The analysis proved detection had fired 1.2 hours after the first anomalous hour, so the detector was not the gap. It named the gap instead: an account released four times, and a quota gate that cleared four regions on a risk score one second old. That analysis is what carried into a program review and a correction-of-errors document."
impact: "Reframed a seven-figure loss from <strong>detection failure</strong> to a named <strong>containment-and-adjudication gap</strong>, backed by a 37-event, source-tagged timeline that survived a program review."
counterfactual: "The loss gets filed as 'detection was too slow', the detector gets tuned, and the reinstate-to-quota-approval path that actually produced the loss stays exactly as permissive as before."
indexMetric: 0
metrics:
  - chart: "event-trace"
    label: "The settled chain, from release to launch"
    events:
      - at: -1
        time: "before T0"
        label: "Detection fires, 1.2 hours after the first anomalous hour"
        source: "warehouse"
        kind: "good"
      - at: 0
        time: "T0"
        label: "Containment lifted by reviewer"
        source: "ops UI"
        kind: "fail"
      - at: 0.0166
        time: "1 sec later"
        label: "Risk score snaps from zero to perfect, with no waiting period"
        source: "warehouse"
        kind: "fail"
      - at: 1320
        time: "22 hrs later"
        label: "Account reads clean to every downstream gate"
        source: "warehouse"
      - at: 1500
        time: "3 hrs later"
        label: "Holder checks quotas, then opens a support chat for tens of thousands of processors across four regions, and disconnects before verification"
        source: "support case"
      - at: 1512
        time: "12 min later"
        label: "All four regional approvals land. The one automated question is whether the risk score is clean."
        source: "support case"
        kind: "fail"
      - at: 1540
        time: "28 min later"
        label: "Launching begins"
        source: "warehouse"
      - at: 1630
        time: "90 min later"
        label: "96% of the brand-new ceiling consumed in two regions"
        source: "warehouse"
        punch: true
    caption: "The eight load-bearing events from the settled 37-event timeline. Detection latency is measured from the first anomalous hour. The spine is compressed so a one-second event and a 22-hour gap can share an axis. The printed offset on each row is the authoritative figure. The account was released four times, and this is the release that ran to launch."
    context: "The gap is not the detector. It is a score with no waiting period feeding a quota gate."
  - chart: "stat"
    label: "Source-tagged events"
    value: "37"
    context: "Every figure re-derived in-run. Each row tagged warehouse, ops UI, support case, infrastructure ticket, or SOP."
    emphasis: true
tags: ["Account takeover", "Forensics", "Process gap", "Evidence discipline"]
---

The easy story was that detection missed it. Which control gets fixed depends on
whether that story is true, so I rebuilt the incident from the evidence up.

Read in order, it is a diagram of misplaced trust. A reviewer lifts containment.
One second later the risk score snaps from zero to perfect with no waiting
period, and from that moment the score is the only question any downstream gate
asks. Detection, meanwhile, had already fired. The system saw the takeover. What
produced the loss was an account **released four times** and a gate that never
asked how old the clean score was.

That distinction is the deliverable. "Detection was too slow" names no owner and
no fix. It points at a model that had already done its job, and a correction of
errors can close it by tuning a threshold and changing nothing about the path
the loss actually took. "A quota gate clears an account on a one-second-old
score" names both, and it puts the question in front of the people who own
reinstatement and quota approval rather than the people who own the detector.
That is why the chain had to be settled before it was argued, and why every row
carries its source: a reframe that moves the fix to a different team only
survives a program review if nobody can dislodge a single event in it.
