---
title: "Cutting a fraud pipeline from a coffee break to a glance"
role: "Senior Data Analyst — Zalando"
period: "2024–2025"
theme: "Data engineering"
track: "Tooling"
company: "Zalando"
order: 10
summary: "A refund-analysis Spark job that took the better part of an hour, brought down to minutes by reading less, filtering earlier, and stopping the brute-force reads from the data lake."
context: "A core refund and Salesforce-case analysis on Databricks ran around 34 minutes. At that length the pipeline stops being a tool and becomes a tax — you batch your questions around it instead of following the investigation, which is exactly backwards for fraud work."
contribution: "I treated the runtime as a data-layout problem, not a cluster-size one. The job was doing massive raw reads from binary data-warehouse paths to use a handful of columns. I added selective partitioned loads that read only the needed columns, pushed date and partition filters to the front so less data ever moves, broadcast the small dimension tables (like customer-extended) instead of shuffling them, cached only the DataFrames actually reused, tuned shuffle partitions, and materialized hot raw Parquet into Delta where it paid off."
outcome: "The same analysis returns in a fraction of the time — turning a job you scheduled around into one you just run. More than the minutes saved, it changed the cadence: refund and leakage questions could be iterated in a session instead of one expensive run per sitting."
impact: "Cut a core refund-analysis pipeline from <strong>~34 minutes to minutes</strong> by reading only needed columns, filtering on partitions early, and broadcasting small dimensions — turning refund/leakage analysis from one expensive run per sitting into iteration in flow."
counterfactual: "Every refund question keeps costing a half-hour brute-force read from the data lake; analysts batch their work around the wait; and the iterative leakage investigations behind Remaining Fraud Damage are far slower to produce."
indexMetric: 0
metrics:
  - chart: "before-after"
    label: "Pipeline runtime"
    before: { label: "Brute-force reads", value: 34, unit: "min", display: "~34 min" }
    after: { label: "Tuned layout", value: 5, unit: "min", display: "minutes" }
    betterWhen: "lower"
    context: "Column pruning + early partition filters + broadcast joins + selective caching."
  - chart: "stat"
    label: "Biggest lever"
    value: "Read less"
    context: "Selective partitioned column loads instead of raw whole-path reads."
    emphasis: true
tags: ["PySpark", "Databricks", "Delta", "Performance", "Partition pruning"]
---

A 34-minute pipeline isn't a performance footnote — it dictates how you work.
When a refund analysis takes that long, you stop following the thread and start
batching questions to amortize the wait, which is the opposite of how a fraud
investigation should go.

The fix wasn't a bigger cluster; it was reading less. The job was doing brute
reads from binary data-warehouse paths to use a few columns, so the first and
biggest win was selective partitioned loads that pull only the columns needed.
Then: push date and partition filters to the front so less data ever enters the
pipeline, broadcast the small dimension tables instead of shuffling them across
the cluster, cache only the DataFrames that are genuinely reused, tune the
shuffle-partition count, and materialize the hot raw Parquet into Delta where it
earned its keep.

The result is the same analysis in a fraction of the time. The number I care
about isn't the minutes, though — it's the cadence. A pipeline you schedule your
day around is a different tool from one you just run mid-thought, and refund and
leakage questions are far better answered in flow than one costly run at a time.
