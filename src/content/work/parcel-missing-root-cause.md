---
title: "Five reasons a parcel-missing refund happens, and a record that names none of them"
role: "Senior Product Analyst, Risk & Abuse, Zalando"
period: "2025 to 2026"
theme: "Root-cause analysis"
track: "Investigation"
company: "Zalando"
featured: false
order: 19
summary: "A refund record says what was claimed, never why. Telling a delivery failure from abuse decides the fix."
context: "A parcel-missing refund arrives as the record of a claim. A customer reported that the parcel never came and a manual refund went out. Nothing in that record says why it happened. A genuine delivery failure leaves the same trace as a customer-care process, a false claim, or a control that never fired. Risk cannot pick a fix without telling them apart. An operational cause and an abusive one need opposite responses."
contribution: "I took the root-cause question on parcel-missing refunds in customer care. The question was not whether abuse existed. It was which of several causes produced a given refund, because operational causes and abusive ones need different fixes. Five causes had to be told apart: a delivery or logistics failure, customer-care process behaviour, abuse of the claim, a gap in detection, and refund-denial or steering logic too weak to hold. Steering here means the stricter handling a flagged order gets routed onto. I worked the same data the remaining fraud damage measure runs on: manual refund records, the manual refund reasons recorded against them, and Salesforce case and order data. I ran entity-level investigations wherever a rate could not separate abuse from a logistics problem, reading the individual customer, account, order or parcel behind it. I read the rates against base-rate effects and soft exclusions. Base rate is how much abuse there was to find, and soft exclusions are the cases kept out of the count. A shift in either looks exactly like a shift in cause, and only one of the two is worth acting on."
outcome: "The question moved off fraud detection alone and onto why these refunds and damages happen at all. Separating an operational cause from an abusive one is what decides the fix, because a delivery failure and a false claim need opposite responses. What the work produced is the set of causes that have to be told apart and the evidence each one needs, not a ranking of them."
impact: "Reframed parcel-missing refunds from a single fraud reading into <strong>five causes that have to be separated</strong>, because an <strong>operational cause and an abusive one need opposite fixes</strong>."
counterfactual: "Every parcel-missing refund gets treated as one thing. Read as fraud, the delivery failure never gets fixed and the customer-care process stays as it is. Read as an operational cost, abuse keeps getting refunded and the detection gap stays open. Either way the wrong fix gets built."
indexMetric: 0
metrics:
  - chart: "coverage-gap"
    label: "What a parcel-missing refund record actually carries"
    items:
      - { name: "That a manual refund was issued", covered: true }
      - { name: "The manual refund reason recorded", covered: true }
      - { name: "The Salesforce case it arrived through", covered: true }
      - { name: "The order behind it", covered: true }
      - { name: "Why the parcel went missing", covered: false }
    caption: "The record is complete on everything except the one field nobody can log. Cause is not a column, so it has to be established from evidence."
  - chart: "signal-matrix"
    label: "The five causes that have to be told apart"
    signals:
      - "A real delivery or logistics failure"
      - "Customer-care process behaviour"
      - "Abuse of the claim"
      - "A gap in detection"
      - "Refund-denial or steering logic too weak to hold"
    activeCount: 5
    caption: "All five stay live until evidence removes one. Deliberately unordered, because ranking them would assert a finding this case does not carry."
tags: ["Root-cause analysis", "Parcel-missing refunds", "Manual refunds", "Salesforce cases", "Entity-level investigation", "Base-rate effects", "Customer care"]
draft: false
---

A refund record is a receipt, not an explanation.

It carries the claim, the manual refund reason recorded against it, and the
money that went back. It does not carry what happened at the door. Everything
that decides the fix sits in that gap.

Five different causes produce the same record. The parcel really did go
missing. Customer-care process behaviour produced the refund. The customer
claimed for a parcel that arrived. Detection had no signal for the pattern. Or
the refund-denial and steering logic saw the case and let it through anyway.
The record names none of them.

Most fraud work stops at whether abuse is present. This question was different.
It asked why the refunds and the damage happen at all, and that means separating
an operational cause from an abusive one before anyone builds a fix.

The data was the same data the remaining fraud damage measure runs on: manual
refund records, the manual refund reasons on them, and Salesforce case and order
data. Where a rate could not separate abuse from a logistics problem, I went
down to the entity and read the individual customer, account, order or parcel
behind it. Rates got read against base rate and soft exclusions first, because a
change in who was shopping looks the same as a change in cause.

One limit, stated plainly. What this case carries is the set of causes that have
to be told apart and the evidence each one needs, not a verdict on which is
biggest. Ranking them needs a real number, and I am not going to put one here
that the work did not produce.
