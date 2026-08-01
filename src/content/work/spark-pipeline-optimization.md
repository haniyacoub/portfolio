---
title: "Cutting a fraud pipeline from a coffee break to a glance"
role: "Senior Product Analyst, Risk & Abuse, Zalando"
period: "2024 to 2025"
theme: "Data engineering"
track: "Tooling"
company: "Zalando"
featured: false
order: 4
summary: "A refund-analysis Spark job that set the pace of every leakage question asked through it, cut from ~34 minutes to minutes without a bigger cluster."
context: "A core refund and Salesforce-case analysis on Databricks ran around 34 minutes. At that length a pipeline stops being a tool and becomes a tax: you batch questions to amortize the wait instead of following the thread, which is backwards for fraud work."
contribution: "I treated the runtime as a data-layout problem, not a cluster-size one. I replaced the brute-force reads of whole binary warehouse paths with selective partitioned loads that pull only the columns the analysis uses. I pushed date and partition filters to the front so less data ever moves. I broadcast the small dimension tables, such as customer-extended, instead of shuffling them across the cluster. I cached only the DataFrames that are genuinely reused, tuned the shuffle-partition count to the real volume, and materialized hot raw Parquet into Delta where it paid for itself."
outcome: "The same analysis returns in a fraction of the time, and the cadence of the work changed with it. Refund and leakage questions could be iterated inside one session instead of costing one expensive run per sitting."
impact: "Cut a core refund-analysis pipeline from <strong>~34 minutes to minutes</strong>, mostly by <strong>reading only the needed columns</strong> and filtering on partitions before any data moved."
counterfactual: "Every refund question keeps costing a half-hour brute-force read from the data lake, and the iterative leakage investigations behind Remaining Fraud Damage stay far slower to produce."
indexMetric: 0
metrics:
  - chart: "before-after"
    label: "Pipeline runtime"
    before: { label: "Brute-force reads", value: 34, unit: "min", display: "~34 min" }
    after: { label: "Tuned layout", value: 5, unit: "min", display: "minutes" }
    betterWhen: "lower"
    context: "Same analysis, same cluster. The change was in what the job read, not what it ran on. Only the ~34-minute baseline is measured. The after bar is sized illustratively against it to show the shape."
  - chart: "ranked-bars"
    label: "Where the runtime actually went"
    unit: "relative contribution"
    sort: true
    bars:
      - name: "Column pruning"
        value: 100
        key: true
        note: "Reading only the needed columns. A handful were used while the whole binary path was being opened."
      - name: "Early partition filters"
        value: 68
        note: "Filtering before the read means pruned partitions are never opened, not opened and discarded."
      - name: "Broadcast joins"
        value: 47
        note: "A dimension table small enough to ship to every executor costs a copy instead of a shuffle."
      - name: "Selective caching"
        value: 29
        note: "Caching a DataFrame read once pays memory for nothing, and the shuffle-partition default was sized for a volume this job never sees."
      - name: "Delta materialization"
        value: 21
        note: "Only where the same raw Parquet was re-read often enough to amortize the write."
    caption: "Relative magnitudes are illustrative. What the work established is the ordering. Only the runtime figures are measured."
tags: ["PySpark", "Databricks", "Delta", "Performance", "Partition pruning"]
draft: true
---

A 34-minute pipeline is not a performance footnote. It sets the cadence of
every question asked through it, and at half an hour a run, the question you
cannot quite justify is the question you never ask.

The obvious request is a bigger cluster. Compute was never the problem, and
the shape of the read said so before any tuning did. The job opened whole
binary data-warehouse paths in order to use a handful of columns, so most of
the work it did was work nobody had asked for. That ratio is what made column
pruning the dominant lever rather than a guess: the cheapest honest version of
this job still had to read the columns the analysis used, and everything above
that floor was waste being paid for on every single run. The levers that
followed push the same principle further down the job. Less data enters the
pipeline at all, less of it crosses the network, and less memory goes to
holding things that get read once.

A pipeline you schedule your day around is a different instrument from one you
run mid-thought. Refund and leakage questions arrive in chains, where the
answer to one suggests the next, and a chain only gets followed when asking is
cheap.
