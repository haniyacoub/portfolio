---
title: "The threshold breach that was really one ring"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Payment-fraud investigation"
track: "Investigation"
company: "AWS"
order: 22
summary: "A vendor compliance escalation blamed general fraud growth. A multi-week deep-dive proved a coordinated ring was the driver and isolated the chargebacks to a handful of accounts."
context: "A regional fraud-reporting threshold breach triggered a vendor compliance escalation. The default reading was general population fraud growth, which would have meant broad, blunt responses across the whole region."
contribution: "I led a multi-week payment-fraud deep-dive that decomposed 18 months of chargeback-versus-cost data into two distinct waves. Concentration analysis across issuer, BIN, email, ASN, and device fingerprint, plus shared-fingerprint connected-component clustering, proved a coordinated ring rather than general population fraud was the driver, and isolated the chargebacks to a handful of accounts. The findings shipped as audience-tiered reports: a leadership summary, the vendor-facing response, and a simplified variant, with the hardest unresolved question surfaced openly instead of omitted."
outcome: "The escalation got a precise answer instead of a blunt one. Prior assumptions were overturned, enforcement could target the actual ring, and the compliance narrative to the vendor stood on decomposition and concentration evidence rather than on a trend line."
impact: "Reframed a compliance escalation from <strong>general fraud growth</strong> to <strong>one coordinated ring behind a handful of accounts</strong>, backed by 18 months of decomposed chargeback data and five concentration lenses."
counterfactual: "The region gets treated as a broadly fraudulent population. Controls tighten for everyone, the vendor narrative hardens, and the actual ring keeps operating inside the noise."
indexMetric: 0
metrics:
  - chart: "signal-matrix"
    label: "Concentration lenses on the disputed population"
    signals:
      - "Issuer"
      - "BIN"
      - "Email"
      - "ASN"
      - "Device fingerprint"
    activeCount: 5
    caption: "Shared-fingerprint connected components clustered the ring out of the population."
  - chart: "stat"
    label: "Chargeback data decomposed"
    value: "18"
    unit: "months"
    context: "Two distinct waves, separated instead of averaged into a trend."
    emphasis: false
  - chart: "stat"
    label: "Accounts driving the breach"
    value: "A handful"
    context: "Coordinated ring, not general population fraud. Prior assumptions overturned."
    emphasis: false
tags: ["Chargebacks", "Ring clustering", "Compliance", "Concentration analysis"]
draft: true
---

A threshold breach reads like weather: fraud is up. Weather gets broad
responses. This one deserved a forecast with names on it.

Eighteen months of chargeback-versus-cost data, decomposed instead of
averaged, split into two distinct waves. Then concentration analysis across
five lenses: issuer, BIN, email, ASN, and device fingerprint. Then
shared-fingerprint connected components to cluster the population. The
answer fell out cleanly: a coordinated ring, not general fraud growth, and
the chargebacks isolated to a handful of accounts.

That answer changed what enforcement meant. Instead of tightening controls
on an entire region, the response could target the ring itself. It also
changed the vendor conversation, because a compliance narrative backed by
decomposition and clustering evidence reads very differently from one backed
by a trend line.

The reports shipped in three registers: a leadership summary, the
vendor-facing response, and a simplified variant. The hardest open question
went into all three on purpose. Leading with the uncomfortable unknown is
cheaper than having someone else find it later.
