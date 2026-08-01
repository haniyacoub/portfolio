---
title: "An enforcement job trusted to run itself, daily, in production"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Enforcement automation"
track: "Precision"
company: "AWS"
order: 8
featured: false
draft: false
summary: "Shutdown authority handed to a scheduled job on AWS's European Sovereign Cloud partition, with every safety property structural rather than procedural."
context: "Automated enforcement is where a false positive stops being a metric and becomes a customer outage. A scheduled job acts unattended, on a brand-new sovereign partition, so each safety property has to hold with nobody watching the run."
contribution: "I built, deployed, and own the fraud-relations auto-shutdown job that runs daily in production on AWS's European Sovereign Cloud partition. Candidates pass eight ordered gates, and the sixth routes legitimate-customer patterns to human review rather than closure. A hard kill switch sits above all eight. A shadow twin runs the same selection into a parallel table, so precision is measured continuously rather than asserted at launch. Every policy threshold lives in deployed environment config instead of a code constant, so tuning enforcement needs no release. Reaching production meant clearing a five-gate sovereign deployment path — branch build, auto-deploy, manual cross-region promote, ADC pre-approval, host run. After six environment-level failures I wrote that path up as internal guidance with a failure-symptom-to-cause table."
outcome: "The team gained a live automated enforcement capability whose safety case is inspectable rather than argued: every property is a gate a reviewer can read off the code, not a claim they have to take on trust. The write-up turned an undocumented sovereign-region deploy path into something a teammate can walk cold."
impact: "<strong>Eight ordered safety gates, a hard kill switch, and a shadow twin measuring precision continuously</strong> now stand between a candidate account and closure — with <strong>zero policy thresholds hardcoded</strong>."
counterfactual: "Enforcement stays manual and slow. Or worse, an automated job ships with its safety properties living in a runbook, and the first bad batch of shutdowns is discovered by the customers it hit."
indexMetric: 0
metrics:
  - chart: "gate-funnel"
    label: "Eight ordered gates before any shutdown"
    stages:
      - name: "Population scoping"
        note: "Defines the candidate pool a run may consider at all."
      - name: "Unlabelled filter"
        note: "Restricts the pool to unlabelled accounts."
      - name: "Confirmed-fraud linkage"
        note: "Weighted, and only over non-placeholder hard identifiers."
      - name: "Not already enforced"
        note: "Drops accounts an earlier action already covered."
      - name: "Account-age floor"
        note: "A minimum account age is required to proceed."
      - name: "Carve-outs → review"
        note: "Legitimate-customer patterns route to human review, never to closure."
        key: true
      - name: "Enforce-time re-check"
        note: "State is re-verified at the moment of action, not just at selection."
      - name: "Ranked per-run cap"
        note: "Ranked and capped, so one run has a bounded blast radius."
    caption: "Order carries the meaning: the carve-out gate only ever sees accounts that cleared the five before it. Runs daily in production under a hard kill switch."
    context: "Candidate accounts enter at gate one; per-gate survivor counts are not published."
  - chart: "stat"
    label: "Policy thresholds in code"
    value: "0"
    context: "Every threshold externalized to deployed environment config, tunable without a release."
tags: ["Enforcement automation", "Precision", "Sovereign cloud", "Safety by design"]
---

Closing an account is a **one-way door**. That is what decides the shape of
everything else here: a design whose safety argument has to be readable off the
structure, because there is no reviewer standing at the moment of action to make
the judgment call.

Ordering is the whole trick. "Is this a legitimate customer?" is a hard question
to ask of an entire population and a tractable one to ask of a set that five
prior gates have already narrowed. So the carve-out gate is placed where its
answer is worth trusting, not where it was easiest to write. Two gates
deliberately follow it, because selection and action are different moments and
the world can change between them.

Launch is the easy half; staying trustworthy afterwards is not. Precision
asserted once is a claim with an expiry date nobody can see — thresholds drift,
populations shift, and an unmeasured job goes on reporting success either way.
Running the selection continuously in shadow is what turns that claim into an
observation. Externalized thresholds do the same work for change itself: because
tuning is a config change, the config diff *is* the audit trail, and every
adjustment to enforcement policy leaves a dated record without anyone
maintaining one.

Production on a sovereign partition was its own problem. All six failures I hit
were environmental rather than logical — nothing about the job was wrong, only
the ground it stood on — which is exactly why the guidance I wrote is a
symptom-to-cause table.
