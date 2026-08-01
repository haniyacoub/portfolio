---
title: "Catching the ring without breaking the customers inside it"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "False-positive prevention"
track: "Precision"
company: "AWS"
featured: true
draft: false
order: 14
summary: "A seven-figure flagged account turned out to be reserved-but-unused GPU capacity, not fraud. Reversals like that became the carve-out gates every bulk shutdown now passes through."
context: "Fraud systems flag legitimate accounts too, and the expensive failure is acting on those flags at scale. When you action a coordinated ring in bulk, the abusive accounts aren't the risk. The legitimate ones sitting inside the same signature are: a shared NAT, a placeholder fingerprint, a common BIN, and suddenly the candidate list has real customers in it."
contribution: "I reversed fraud calls on two legitimate accounts by proving what each flag actually was: one a seven-figure flagged-OPEX exposure, the other a shutdown that traced to a billing soft-decline rather than fraud. I then made false-positive aversion a standing control rather than a closing sanity check. Bulk-action SQL is restricted to hard-identifier matches, never the brittle heuristics that sweep up look-alikes. Before any wave, a legitimate-impact carve-out analysis names which real accounts the signature would catch and removes them before suspension. A confidence pass has to clear before anything ships: adversarial review, drop-the-top-signal sensitivity, leave-one-out stability. Every batch carries quantified exposure to stakeholders for sign-off before it runs. Known false-positive accounts are catalogued as first-class do-not-shut calibration anchors."
outcome: "Rings still get closed. What changed is the order of operations: the evidence gets checked before the action instead of after the apology, and the gates run whether or not anyone is feeling careful that week. Precision stops being a virtue and becomes a step you can audit."
impact: "Fraud calls reversed on legitimate accounts, including a <strong>seven-figure account proven to be reserved GPU capacity</strong>, then hardened into a standing control: bulk ring actions catch the abuse with <strong>≈0 collateral</strong>, every wave ships with its legitimate-impact exposure priced for sign-off, and known false positives are catalogued so they're <strong>never re-flagged</strong>."
counterfactual: "The startup loses its infrastructure over a spend pattern that was never fraud, and the next bulk action sweeps legitimate customers up with the ring. That manufactures a customer incident, burns trust at scale, and forces reactive reversals and apologies instead of preventing the harm."
indexMetric: 0
metrics:
  - chart: "caught-vs-collateral"
    label: "A bulk ring action, with the carve-out gates in front of it"
    caught: { label: "Ring accounts actioned", value: 100, display: "Ring caught" }
    collateral: { label: "Legitimate accounts wrongly shut", value: 0, display: "≈ 0 collateral" }
    context: "Hard-identifier-only matching plus a pre-action legitimate-impact carve-out keep real customers out of the wave."
  - chart: "gate-funnel"
    label: "What a batch action passes through, in order"
    stages:
      - name: "Verification workflow"
        note: "Prove what the flag actually is before it counts as a verdict."
      - name: "Hard-identifier-only matching"
        note: "Bulk-action SQL matches on hard identifiers, never brittle heuristics."
      - name: "Legitimate-impact carve-out"
        note: "The named real accounts come out of the batch, not out of an apology later."
        key: true
      - name: "Confidence pass"
        note: "Adversarial review, drop-the-top-signal sensitivity, leave-one-out stability."
      - name: "Exposure quantified"
        note: "The legitimate-impact exposure for the wave, written down."
      - name: "Stakeholder sign-off"
        note: "No batch action runs before the priced exposure is signed."
    caption: "Ordered, so sign-off only ever sees candidates the earlier gates already cleared."
tags: ["False positives", "Carve-out gates", "Verification", "Enforcement SOPs", "Precision", "Calibration"]
---

The flag said fraud. The account was spending like fraud: a seven-figure OPEX
exposure with barely any usage behind it. Shutting it down would have looked
decisive and been wrong. The evidence said reserved-but-unused GPU capacity at a
VC-backed startup, which is what a company stockpiling scarce compute looks like
from the billing side. A second case in the same family: a shutdown that read as
fraud enforcement traced back to a billing soft-decline. Both calls were
reversed because I checked what the flag meant before treating it as a verdict.

Individual saves don't scale, and both reversals taught the same thing: a flag
is a hypothesis, not a verdict. Reversed once, each of those accounts became a
do-not-shut anchor. The catalogue started there. Scaled up, that lesson is the
whole argument for the gates.

So I built the second half as structure, and the choices in it are the
substance. Hard identifiers instead of heuristics, because a heuristic match is
a guess about a customer while an identifier match is a fact. A carve-out
analysis before the wave rather than a review after it, because a name you read
before suspension is a customer you still have. And the confidence pass exists
because a cluster held together by one signal is one bad signal away from being
a customer incident. The cluster has to survive losing its strongest link
before anyone acts on it.

The piece I'm proudest of is the smallest. Those **do-not-shut** anchors are
kept as first-class calibration cases, not closed tickets, so a legitimate
customer who once looked like a ring member never gets re-flagged by the next
iteration of the rule. The system has a memory for its own near-misses.

None of this was meant to slow enforcement down. It was meant to make the fast
path one that already checked.
