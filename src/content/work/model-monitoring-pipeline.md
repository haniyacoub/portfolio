---
title: "Monitoring that maintains its own coverage"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Analytics engineering"
track: "Tooling"
company: "AWS"
order: 29
summary: "A self-regenerating model-monitoring pipeline: a JSON registry feeds a code generator that produces the SQL and dashboards, and newly discovered enforcement signatures enroll themselves."
context: "Precision tracking for detection models rots quietly. A new enforcement signature appears, nobody adds it to the monitoring queries, and that model's performance simply stops being watched. The failure is silent, which is what makes it dangerous."
contribution: "I authored a monitoring pipeline that regenerates itself: a JSON registry of enforcement signatures feeds a code generator, the generator produces the SQL, and the SQL renders the dashboards. When a new signature is discovered it is added to the registry once, and everything downstream rebuilds to include it. No detection model can silently drop out of precision tracking. I also reverse-engineered the production fraud rulesets from PDF exports into a structured machine-readable catalog with an interactive lifecycle graph, so reasoning about enforcement paths runs on the actual rules rather than on inference from data."
outcome: "Model monitoring stopped depending on someone remembering to update queries. Coverage is a property of the pipeline, not of diligence, and the ruleset catalog gives investigations a ground truth for how enforcement actually behaves."
impact: "A monitoring pipeline where <strong>coverage maintains itself</strong>: registry to generator to SQL to dashboards, with <strong>new enforcement signatures auto-enrolled</strong> so no model silently escapes precision tracking."
counterfactual: "A new signature ships, monitoring never hears about it, and six months later someone asks how that model has been performing and the honest answer is that nobody was watching."
indexMetric: 0
metrics:
  - chart: "abuse-chain"
    label: "The self-regenerating pipeline"
    steps:
      - label: "JSON signature registry"
        value: "source"
      - label: "Code generator"
        value: "builds"
      - label: "Generated SQL"
        value: "queries"
      - label: "Rendered dashboards"
        value: "watch"
        note: "New signatures enroll themselves. Nothing drops out silently."
        punch: true
  - chart: "stat"
    label: "Models silently unmonitored"
    value: "0"
    context: "Coverage is a property of the pipeline, not of someone's diligence."
    emphasis: false
tags: ["Analytics engineering", "Code generation", "Model monitoring", "Rulesets"]
draft: true
---

The quiet failure mode of model monitoring is not a wrong number. It is a
missing one. A new enforcement signature ships, the monitoring queries
predate it, and from that day the model runs unwatched. Nobody decided that.
It just happened.

The fix is to make coverage structural. A JSON registry holds the
enforcement signatures. A code generator reads the registry and produces the
SQL. The SQL renders the dashboards. Adding a newly discovered signature
means one entry in the registry, and the entire chain regenerates to include
it. The pipeline cannot forget a model, because remembering is not a human
task anymore.

The companion piece was ground truth. I reverse-engineered the production
fraud rulesets from PDF exports into a structured, machine-readable catalog
with an interactive lifecycle graph. Investigations that need to reason
about enforcement paths can now consult what the rules actually say instead
of inferring behaviour from the data and hoping.
