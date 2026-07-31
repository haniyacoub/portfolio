---
title: "An enforcement job trusted to run itself — daily, in production"
role: "Business Analyst — AWS Payments & Fraud Prevention"
period: "2026"
theme: "Enforcement automation"
track: "Precision"
company: "AWS"
order: 7.5
summary: "A daily fraud-relations auto-shutdown job on AWS's sovereign partition — eight ordered gates, carve-outs routed to review, a kill switch, and a shadow twin measuring precision continuously."
context: "Automated enforcement is where false positives stop being a metric and start being a customer outage. Handing shutdown authority to a scheduled job on a brand-new sovereign partition means every safety property has to be structural — not a promise in a runbook."
contribution: "I built, deployed, and own the fraud-relations auto-shutdown job running daily in production on AWS's European Sovereign Cloud partition. Candidates pass eight ordered gates — population scoping, unlabelled filter, weighted confirmed-fraud linkage over non-placeholder hard identifiers, not-already-enforced, an account-age floor, legitimate-customer carve-outs routed to review rather than closure, an enforce-time re-check, and a ranked per-run cap. A hard kill switch sits above it; a shadow twin appends to a parallel table for continuous precision measurement; every policy threshold lives in deployed environment config rather than code constants. Reaching production meant navigating a five-gate sovereign deployment path — branch build, auto-deploy, manual cross-region promote, ADC pre-approval, host run — and after six environment-level failures I wrote the path up as reusable internal guidance with a failure-symptom-to-cause table."
outcome: "The team gained a live, automated enforcement capability whose safety case is inspectable: carve-outs are gates, not judgment; precision is measured continuously by the shadow twin rather than asserted; thresholds are tunable without a code change. The deployment write-up turned an undocumented sovereign-region path into something a teammate can walk cold."
impact: "A production enforcement job with <strong>eight structural safety gates, a kill switch, and a shadow twin measuring precision continuously</strong> — carve-outs routed to human review, thresholds externalized to config, deployment path documented for the next person."
counterfactual: "Enforcement stays manual and slow — or worse, an automated job ships with its safety properties living in a runbook, and the first bad batch of shutdowns is discovered by the customers it hit."
indexMetric: 1
metrics:
  - chart: "signal-matrix"
    label: "Eight ordered gates before any shutdown"
    signals:
      - "Population scoping"
      - "Unlabelled filter"
      - "Confirmed-fraud linkage"
      - "Not already enforced"
      - "Account-age floor"
      - "Carve-outs → review"
      - "Enforce-time re-check"
      - "Ranked per-run cap"
    activeCount: 8
    caption: "Legitimate-customer carve-outs route to human review — never to closure."
  - chart: "stat"
    label: "Cadence"
    value: "Daily"
    context: "Live in production on the European Sovereign Cloud partition, with a hard kill switch."
  - chart: "stat"
    label: "Policy thresholds in code"
    value: "0"
    context: "Every threshold externalized to deployed environment config — tunable without a release."
    emphasis: false
tags: ["Enforcement automation", "Precision", "Sovereign cloud", "Safety by design"]
---

There's a line between analytics and enforcement: on one side a wrong number
misleads a meeting; on the other it shuts down a paying customer. Crossing that
line with a *scheduled job* means the safety argument can't live in a runbook —
it has to live in the structure.

The job runs daily on AWS's European Sovereign Cloud partition. A candidate
account must survive **eight ordered gates** before anything happens: population
scoping, an unlabelled filter, weighted confirmed-fraud linkage over
non-placeholder hard identifiers, a not-already-enforced check, an account-age
floor, legitimate-customer carve-outs, an enforce-time re-check, and a ranked
per-run cap. The carve-out gate is the one I care most about: accounts matching
protection patterns are routed to **human review, never to closure**.

Two structural choices make it trustworthy over time. A **shadow twin** runs the
same selection and appends to a parallel table, so precision is continuously
*measured* against what the live job would have done — not asserted at launch
and forgotten. And every policy threshold is externalized to deployed
environment config: tuning enforcement never requires a code change, and the
diff trail is the audit trail. Above it all sits a hard kill switch.

Production on a sovereign partition has its own boss fight: a five-gate deploy
path (branch build → auto-deploy → manual cross-region promote → ADC
pre-approval → host run). Six failures in, all environmental, I wrote the path
up as internal guidance with a symptom-to-cause table — so the next person walks
it cold in an afternoon.
