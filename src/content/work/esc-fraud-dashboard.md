---
title: "The first reconciled fraud view on a brand-new AWS region"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "BI · reconciliation"
track: "Tooling"
company: "AWS"
order: 6
featured: false
draft: false
summary: "An org-wide fraud-and-revenue dashboard for AWS's European Sovereign Cloud, whose credibility came from correcting two of its own headline numbers."
context: "A brand-new AWS region — the European Sovereign Cloud — had no unified view of the fraud landing on it, so leadership was deciding from fragments. The data also lived across an ESC-native surface and a mirror that did not reconcile one-to-one, which made shipping numbers that looked right and quietly did not add up the easiest thing to do."
contribution: "I designed, built and announced org-wide a multi-tab analytics dashboard covering every ESC account since launch: registration outcomes, c-score trajectories, enforcement attribution, preventable compute and sleeper signals. I built it on a canonical account-level fact table and ~40 parameterized SQL files that stay portable to QuickSight. I replaced a misleading ~98% 'model automation' figure with an honest ~12 to 13% auto-shutdown rate, after modelling the enforcement path properly and disambiguating automated rules from analyst bulk actions. I drove a mirror-versus-native reconciliation that pushed a revenue undercount down to a fraction of a percent. I said in the launch message which of the dashboard's own numbers to trust: trends and rates fully reconciled, a few absolute dollar totals still rough pending Data Engineering fixes."
outcome: "The account-level fact table underneath became what the team's QuickSight binds to, so new tabs and reports inherit the reconciliation instead of re-deriving it. Rough absolute totals ship labelled as pending Data Engineering fixes rather than presented as fact, which is why the view survived being checked."
impact: "Delivered the <strong>first unified, reconciled fraud view</strong> on a brand-new AWS region, corrected a flattering ~98% automation headline down to an honest <strong>~12 to 13%</strong>, drove a revenue undercount to <strong>under 1%</strong>, and made flag-to-shutdown speed measurable at <strong>~1 day on average</strong>."
counterfactual: "Leadership keeps deciding on fragments. The inflated 98% figure keeps misrepresenting how enforcement actually works, the undercount quietly understates the region, and rough dollar totals read as fact because nothing labels them."
indexMetric: 0
metrics:
  - chart: "before-after"
    label: "Reported model-automation rate"
    before: { label: "Claimed (lazy attribution)", value: 98, display: "~98%" }
    after: { label: "Measured (enforcement path modelled)", value: 12.5, display: "~12 to 13%" }
    betterWhen: "lower"
    context: "Automated rules disambiguated from analyst bulk actions. Accuracy over a flattering headline."
  - chart: "signal-matrix"
    label: "What the unified view put on one fact table"
    signals:
      - "Registration outcomes"
      - "C-score trajectories"
      - "Enforcement attribution"
      - "Preventable compute"
      - "Sleeper signals"
    activeCount: 5
    caption: "Five surfaces on every ESC account since launch, all reading from one canonical account-level fact table and ~40 parameterized, QuickSight-portable SQL files. Enforcement attribution is the tab that produced the automation correction."
    context: "Flag-to-shutdown speed became measurable here too: about a day on average, with only a tiny number of reversals. Before the unified view there was no figure at all, not a slower one."
  - chart: "stat"
    label: "Revenue reconciliation gap"
    value: "under a percent"
    context: "Mirror-versus-native undercount driven down to a fraction of a percent."
    emphasis: true
tags: ["Streamlit", "QuickSight / SQL", "Reconciliation", "Enforcement attribution", "Launch"]
---

The dashboard was the easy half. What made it trusted was two honest
corrections.

The first number arrived already believed. Roughly 98% of shutdowns were
reported as model-automated — an artifact of lazy attribution rather than a
measurement, and nobody had re-derived it. Checking it meant modelling the
enforcement path, then separating automated rules from analyst bulk actions,
which is the distinction the original figure had collapsed. The real
auto-shutdown rate came out at about **12 to 13%**. I shipped the smaller, true
number, because a view that flatters the enforcement stack is worth nothing the
first time someone checks it.

The second correction ran the other way. Revenue on the region was being
undercounted, and the gap sat between the two surfaces holding the data. I
reconciled them and drove the undercount **under a percent** — a revision that
moves the region's reported revenue up, not down.

Then I announced it org-wide, and the message said plainly that trends and rates
were fully reconciled while a few absolute dollar totals were still rough
pending Data Engineering fixes. A dashboard that tells you which of its own
numbers to trust is worth more than one asking for blanket faith. That is the
version that became the team's source of truth.
