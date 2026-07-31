---
title: "A detection rule with almost no collateral"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Rules design"
track: "Detection"
company: "AWS"
order: 21
summary: "A fraud detection rule built on domain age and email-authentication signals: hundreds of abusive accounts caught, with near-zero impact on legitimate customers."
context: "Fraudulent registrations often arrive on freshly minted domains with weak email authentication. The signals were known. The craft was turning them into a rule that catches at scale without sweeping up the legitimate startups that also register with young domains."
contribution: "I designed a detection rule using domain age and email-authentication signals, developed through a disciplined program of more than 100 rule iterations converging on multi-condition logic scored for precision and recall and bounded by explicit false-positive carve-out exposure analysis. The shipped rule caught hundreds of abusive accounts. The collateral on legitimate customers was near zero."
outcome: "A standing detection rule that pays recall without spending precision. The iteration discipline behind it, scoring every candidate on both sides before shipping, became the template for how rules get developed rather than a one-off."
impact: "<strong>Hundreds of abusive accounts caught</strong> with <strong>near-zero impact to legitimate customers</strong>, from a rule developed through more than 100 scored iterations."
counterfactual: "Either the young-domain fraud keeps registering unchallenged, or a blunt version of the rule ships and legitimate new companies discover their accounts are flagged for being new."
indexMetric: 0
metrics:
  - chart: "caught-vs-collateral"
    label: "The rule in production"
    caught:
      label: "Abusive accounts caught"
      value: 100
      display: "Hundreds"
    collateral:
      label: "Legitimate customers hit"
      value: 1
      display: "Near zero"
    context: "Multi-condition logic bounded by explicit carve-out exposure analysis."
  - chart: "stat"
    label: "Rule iterations"
    value: "100+"
    context: "Each candidate scored for precision and recall before anything shipped."
    emphasis: false
tags: ["Rules design", "Precision", "Domain signals", "Email authentication"]
---

The signals were not the hard part. Fraudulent registrations really do
cluster on young domains with weak email authentication. The hard part is
that legitimate new companies look similar on exactly those axes.

So the rule went through more than 100 iterations before it shipped. Each
candidate was scored on both sides: recall against confirmed abuse, and
false-positive exposure against the carve-out populations that must not be
touched. Single-signal versions failed that bar. The shipped rule is
multi-condition, which is what lets it be aggressive about fraud and careful
about everyone else at the same time.

In production it caught hundreds of abusive accounts. The collateral on
legitimate customers stayed near zero. That ratio, not the catch count
alone, is what makes a rule worth keeping. A rule that catches everything
and burns your precision budget is just an outage with a delay.
