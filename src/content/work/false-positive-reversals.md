---
title: "The accounts that should not be shut down"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "False-positive prevention"
track: "Precision"
company: "AWS"
order: 26
summary: "Reversing fraud calls on legitimate accounts, including a seven-figure flagged account that was reserved GPU capacity, and building the SOPs that stop the next wrong shutdown."
context: "Fraud systems flag legitimate accounts too. The expensive failure is acting on those flags at scale: a wrong shutdown breaks a real customer, and a bulk action multiplies the mistake by the size of the batch."
contribution: "I reversed fraud calls on legitimate accounts by proving what the flags actually were. One example: a seven-figure flagged-OPEX account turned out to be reserved-but-unused GPU capacity at a VC-backed startup, expensive-looking but entirely legitimate. Another shutdown traced to a billing soft-decline, not fraud. Beyond the individual reversals, I built verification workflows and enforcement SOPs with carve-out gates for bulk shutdowns, protecting legitimate accounts structurally and quantifying the exposure for stakeholder sign-off before any batch action runs."
outcome: "Legitimate customers stayed online because the evidence was checked before the action, and bulk enforcement now passes through carve-out gates with quantified exposure instead of relying on the flag being right."
impact: "Fraud calls reversed on legitimate accounts, including a <strong>seven-figure account proven to be reserved GPU capacity</strong>, and <strong>carve-out gated SOPs</strong> that price the exposure before any bulk shutdown runs."
counterfactual: "The startup loses its infrastructure over a spend pattern that was never fraud, and the next bulk action ships with whatever false positives happen to be inside it."
indexMetric: 0
metrics:
  - chart: "signal-matrix"
    label: "Before any bulk shutdown runs"
    signals:
      - "Verification workflow"
      - "Carve-out gates"
      - "Exposure quantified"
      - "Stakeholder sign-off"
    activeCount: 4
    caption: "Protection for legitimate accounts is structural, not a judgment call under time pressure."
  - chart: "stat"
    label: "Flagged account proven legitimate"
    value: "7"
    unit: "figures"
    context: "Reserved-but-unused GPU capacity at a VC-backed startup, not fraud."
    emphasis: false
tags: ["False positives", "Verification", "Enforcement SOPs", "Carve-outs"]
---

The flag said fraud. The account was spending like fraud, a seven-figure
OPEX exposure with barely any usage behind it. Shutting it down would have
looked decisive and been wrong.

The evidence said something else: reserved-but-unused GPU capacity at a
VC-backed startup, which is what a company stockpiling scarce compute looks
like from the billing side. Another case in the same family: a shutdown that
read as fraud enforcement traced back to a billing soft-decline. Both calls
were reversed because someone checked what the flag actually meant before
treating it as a verdict.

Individual saves do not scale, so the second half of the work was
structural. Verification workflows and enforcement SOPs now stand between
flags and bulk shutdowns: carve-out gates for the account populations that
must not be touched, and quantified exposure that goes to stakeholders for
sign-off before a batch runs. The point is not to slow enforcement down. It
is to make the fast path one that already checked.
