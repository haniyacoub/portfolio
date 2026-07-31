---
title: "Catching rings without breaking the customers next to them"
role: "Business Analyst — AWS Payments & Fraud Prevention"
period: "2026"
theme: "False-positive prevention"
track: "Precision"
company: "AWS"
featured: true
order: 7
summary: "Bulk shutdowns are the bluntest instrument in fraud prevention. I built the carve-out gates and false-positive anchors that let them stay sharp — catching rings while sparing the legitimate accounts caught in the blast radius."
context: "When you action a coordinated ring in bulk, the abusive accounts aren't the risk — the legitimate ones sitting inside the same signature are. A shared NAT, a placeholder fingerprint, a common BIN, and suddenly your bulk-shutdown candidate list has real customers in it. Get that wrong at scale and you've manufactured your own incident."
contribution: "I made false-positive aversion structural, not a final sanity check. Bulk-action SQL is restricted to hard-identifier matches, never brittle heuristics. Before any wave, a legitimate-impact carve-out analysis quantifies which real accounts the signature would catch, and a confidence pass — adversarial review, drop-top-signal sensitivity, leave-one-out stability — has to clear before anything ships. Known false-positive accounts are catalogued as first-class 'do-not-shut' calibration anchors, so the same legitimate customer never gets re-flagged twice."
outcome: "Rings get closed; the legitimate accounts inside their signature get carved out before suspension instead of apologized to after. The carve-out gate turns precision from a virtue into a control — a documented, repeatable step in every bulk action, with the legit-impact exposure stated up front for each wave."
impact: "Made false-positive aversion a <strong>standing control</strong>: bulk ring actions catch the abuse with <strong>≈0 collateral</strong> on legitimate customers, every wave ships with its legit-impact exposure stated up front, and known false-positive accounts are catalogued so they&rsquo;re <strong>never re-flagged</strong>."
counterfactual: "A bulk shutdown sweeps legitimate customers up with the ring — manufacturing a customer incident, burning trust at scale, and forcing reactive reversals and apologies instead of preventing the harm in the first place."
indexMetric: 0
metrics:
  - chart: "caught-vs-collateral"
    label: "A bulk ring action, with carve-out gates"
    caught: { label: "Ring accounts actioned", value: 100, unit: "%", display: "Ring caught" }
    collateral: { label: "Legitimate accounts wrongly shut", value: 0, display: "≈ 0 collateral" }
    context: "Hard-identifier-only matching + a pre-action legitimate-impact carve-out keep real customers out of the wave."
  - chart: "stat"
    label: "Do-not-shut anchors"
    value: "Catalogued"
    context: "Known false-positive accounts kept as first-class calibration cases, so they're never re-flagged."
    emphasis: true
tags: ["False positives", "Carve-out gates", "Precision", "Bulk enforcement", "Calibration"]
---

The dangerous accounts in a bulk shutdown aren't the fraudulent ones — those you
want gone. It's the legitimate customers sitting inside the same signature: the
shared NAT, the placeholder fingerprint, the common BIN. Action the signature
carelessly and you've turned a fraud win into a customer incident.

So I built precision in as a control rather than a closing sanity check. Bulk
actions only ever match on hard identifiers — never the brittle heuristics that
sweep up look-alikes. Before any wave, a legitimate-impact carve-out analysis
names exactly which real accounts the signature would catch, and they're removed
*before* suspension. And nothing ships until a confidence pass clears: an
adversarial review, a drop-the-top-signal sensitivity check, and a leave-one-out
stability test that makes sure the cluster isn't held together by a single
fragile link.

The piece I'm proudest of is the smallest: a catalogue of **do-not-shut**
anchors — known false-positive accounts kept as first-class calibration cases.
It means a legitimate customer who once looked like a ring member never gets
re-flagged by the next iteration of the rule. The system has a memory for its own
near-misses.

The result is that a ring action closes the ring and carves out the customers
next to it, with the legitimate-impact exposure written down for every wave.
Precision stops being something you hope for and becomes a step you can audit.
