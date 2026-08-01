---
title: "Two logistics systems disagreed about the first delivery attempt"
role: "Senior Data Analyst, Zalando"
period: "2024 to 2025"
theme: "Data quality · logistics"
track: "Measurement"
company: "Zalando"
featured: false
order: 40
summary: "Every delivery lead-time figure rested on one timestamp two systems disagreed about. I reconciled them shipment by shipment."
context: "Delivery lead time is the gap between a shipment arriving in the network and the first attempt to hand it to the customer. Two logistics sources both carried that first-attempt timestamp. They did not always agree, and for some shipments one source did not carry it at all. Every figure built on top of that timestamp inherits the disagreement without showing it."
contribution: "I joined the two shipment datasets on shipment number and compared the first-delivery-attempt timestamp record by record. I separated the two faults, a timestamp absent in one source and a timestamp present in both sources but different. Only then did I compute the received-to-first-delivery-attempt lead time in hours, so the figure had one definition behind it. I also checked which shipment and return events could still be read at all. One shipment-document event had been deprecated and was no longer published, which anyone still reading it needed to know. I fixed a returns-timing calculation in Presto that derives the earliest parcel-handover time from the date the return closed. The lead-time value had to be cast to a whole number before it could be subtracted from that date. Separately I built a Spark pipeline joining sales, customer, parcel-created, risk-decision and returned-to-sender data. Parcels sent back instead of delivered could then be read next to the risk decision on the order."
outcome: "Delivery lead time could be stated in hours and defended, because the timestamp behind it had been checked rather than assumed. The shipments where one source carried nothing came out as one list, and the shipments where the two sources disagreed came out as another, so the two faults could be worked separately."
impact: "Reconciled the <strong>single timestamp</strong> every delivery lead-time figure depends on across <strong>two logistics sources</strong>, checked <strong>shipment by shipment</strong>. Received-to-first-attempt lead time then came from one definition, in hours."
counterfactual: "Lead time keeps being reported from whichever source was queried first. Two people ask the same question, get different hours, and the argument moves to whose number is right instead of how delivery is actually doing. A deprecated event keeps being read as though it were still publishing."
indexMetric: 0
metrics:
  - chart: "gate-funnel"
    label: "How the two sources were reconciled, in order"
    unit: "shipments"
    stages:
      - name: "Join on shipment number"
        note: "One row per shipment, with both sources side by side."
      - name: "Compare the first-delivery-attempt timestamp"
        note: "The one field every lead-time figure depends on."
        key: true
      - name: "Split missing from disagreeing"
        note: "Absent in one source is a different fault from present in both and different."
      - name: "Compute lead time in hours"
        note: "From arrival in the network to the first attempt to hand the parcel over."
      - name: "Benchmark across shipments"
        note: "Only once the timestamp behind the figure had been checked."
    caption: "No volumes are shown here. The output that mattered was which shipments fell out at the comparison step, on data that stays internal."
  - chart: "coverage-gap"
    label: "Which field the reconciliation actually broke on"
    items:
      - { name: "Shipment number", covered: true }
      - { name: "Received timestamp", covered: true }
      - { name: "Calendar date", covered: true }
      - { name: "Merchant details", covered: true }
      - { name: "First delivery attempt", covered: false }
    caption: "Shipment number matched, and the received timestamp, the calendar date and the merchant details all held. The disagreement sat entirely on the first delivery attempt, which is the field the lead time is measured to."
  - chart: "signal-matrix"
    label: "Datasets joined to read a parcel sent back to the sender"
    signals:
      - "Sales orders"
      - "Customer records"
      - "Parcel created"
      - "Risk decision"
      - "Returned to sender"
    activeCount: 5
    caption: "Order does not matter here. What matters is that the risk decision taken on an order ends up in the same row as the parcel that never reached the customer."
tags: ["PySpark / Databricks", "Presto SQL", "Data quality", "Logistics", "Lead time", "Returned to sender"]
draft: true
---

A lead time is a subtraction. Two timestamps, and the answer is only ever as
good as the worse of the two. The arrival timestamp was not the problem. The
first delivery attempt was, because two logistics sources both claimed to
carry it and they did not always say the same thing.

So I went to the shipments rather than to the report. Joining the two datasets
on shipment number turns a vague complaint about lead times into a list you can
count. Here are the shipments where one source has no first-attempt timestamp
at all. Here are the ones where both sources have it and the two values differ.
Those two cases have different causes and different fixes. Merging them is how
a data-quality problem stays unsolved. Only after the split does a figure in
hours mean anything, and that ordering is the method.

The same reading problem turned up in the events themselves. One
shipment-document event was still available to query after it had been
deprecated and stopped publishing, which is worse than a missing field. Absent
data looks exactly like nothing having happened. A returns calculation carried
a quieter version of the same fault. Subtracting a lead time from a closing date
gave the wrong parcel-handover timestamp until the lead time was cast to a whole
number first.

Alongside this I joined sales, customer, parcel and risk-decision data to
parcels sent back to the sender. A parcel that never reached the customer could
then be read next to the risk decision taken on its order. All of it sat in a
logistics and fulfilment reporting area where on-time delivery and carrier
performance were the measures in use.
