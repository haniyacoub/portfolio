---
title: "The first unified fraud view on a brand-new AWS region"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "BI · reconciliation"
track: "Tooling"
company: "AWS"
order: 8
summary: "A launched, org-wide fraud-and-revenue dashboard for the European Sovereign Cloud, reconciled to the cent and honest about the dollars that weren't."
context: "A brand-new AWS region (the European Sovereign Cloud) had no unified view of fraud landing on it, and leadership was making calls on fragments. The data also lived across an ESC-native surface and a mirror that didn't reconcile one-to-one, so the easy move was to ship pretty numbers that quietly didn't add up."
contribution: "I designed, built, and announced org-wide a multi-tab analytics dashboard covering every ESC account since launch: registration outcomes, c-score trajectories, enforcement attribution, preventable compute, sleeper signals. Underneath it is a canonical account-level fact table and ~40 parameterized, QuickSight-portable SQL files. I replaced a misleading ~98% 'model automation' figure with an honest ~12 to 13% auto-shutdown rate once the attribution was modelled properly, and I drove a mirror-vs-native reconciliation that pushed a revenue undercount down to a fraction of a percent. Where absolute dollars still couldn't be trusted, the launch said so out loud."
outcome: "The org got its first reconciled, single-source view of fraud on the new region. Trends and rates were trustworthy, and the few rough absolute totals were flagged as pending Data Engineering fixes rather than presented as fact. The account-level source it sits on became the table the team's QuickSight binds to."
impact: "Delivered the <strong>first unified, reconciled fraud view</strong> on a brand-new AWS region, made shutdown speed measurable (<strong>~1 day average</strong>), corrected a misleading ~98% automation headline to an honest <strong>~12 to 13%</strong>, and drove a revenue undercount to <strong>under 1%</strong>."
counterfactual: "Leadership keeps deciding on fragments. The inflated 98% figure misrepresents how enforcement actually works, the revenue undercount quietly understates the region, and 'rough' dollar totals get presented as fact instead of flagged."
indexMetric: 0
metrics:
  - chart: "before-after"
    label: "Time from flag to shutdown"
    before: { label: "Before unified view", value: 7, unit: "days", display: "opaque" }
    after: { label: "Measured", value: 1, unit: "day", display: "~1 day avg" }
    betterWhen: "lower"
    context: "Flagged accounts shut down in about a day on average, with only a tiny number of reversals. That is now measurable instead of anecdotal."
  - chart: "delta"
    label: "Reported model-automation rate"
    value: "12 to 13%"
    detail: "honest auto-shutdown rate, replacing a misleading ~98%"
    direction: "down"
    good: true
    baseline: "after proper enforcement attribution"
    context: "Accuracy over a flattering headline."
  - chart: "stat"
    label: "Revenue reconciliation gap"
    value: "<1%"
    context: "Mirror-vs-native undercount driven down to a fraction of a percent."
    emphasis: true
tags: ["Streamlit", "QuickSight / SQL", "Reconciliation", "Enforcement attribution", "Launch"]
---

A new region with no unified fraud view means leadership is reasoning from
fragments. I built the view. The harder commitment was refusing to make it look
better than the data deserved.

The dashboard covers every ESC account since launch across registration
outcomes, c-score trajectories, enforcement attribution, preventable compute, and
sleeper signals. All of it sits on a canonical account-level fact table and ~40
parameterized SQL files that stay portable to QuickSight. That part is
engineering. The credibility came from two honest corrections.

First, a headline claiming roughly 98% of shutdowns were model-automated turned
out to be an artifact of lazy attribution. Once I modelled the enforcement path
properly and disambiguated automated rules from analyst bulk actions, the real
auto-shutdown rate was about **12 to 13%**. I shipped the smaller, true number.
Second, the ESC-native surface and its mirror didn't reconcile, and a revenue
undercount was hiding in the gap. I drove it down to under a percent.

When I announced it org-wide, the message said plainly that trends and rates were
fully reconciled while a few absolute dollar totals were still rough pending Data
Engineering fixes. A dashboard that tells you which of its own numbers to trust
is worth more than one that asks for blanket faith. That version is the one that
became the team's source of truth.
