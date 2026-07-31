---
title: "Tracing six-figure compute abuse to a single regex gap"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Root-cause investigation"
track: "Investigation"
company: "AWS"
featured: true
order: 2
summary: "A multi-six-figure SageMaker abuse incident that the enforcement layer should have stopped, traced to one newer instance family missing from a containment-score regex."
context: "Abusers were running up multi-six-figure SageMaker compute that the containment-score limit-enforcement layer was supposed to throttle. It wasn't throttling. The interesting question wasn't who did it. It was why a control that worked for years let this through."
contribution: "I worked it as a code-and-config problem, not a data problem. I read the actual production Java enforcement path and a ~47,000-line resource-limit config to reconstruct exactly how the c-score threshold check selects which instances it governs. The gap: a newer instance family had never been added to the regex that the enforcement layer uses to match governed instances. Those instances matched nothing, took the default zero-limit path, and sailed past the check. Crucially, I overturned my own earlier hypothesis once the Java contradicted it, rather than defending it."
outcome: "Proven from the source, not inferred from the symptoms. I turned the one-off finding into standing infrastructure: an hourly, launchd-scheduled, deduplicated Slack alert that fires on the bypass signature, so the next instance of the same class is caught in an hour instead of a forensic week. One open question, whether a specific code path calls the synchronous check at all, I narrowed to named hypotheses and handed to Shared Services rather than guessing."
impact: "Root-caused a <strong>multi-six-figure</strong> compute-abuse incident to one unanchored instance family in the c-score enforcement regex, proven from production code, then shipped the fix as an hourly alert that cut detection of the next instance from <strong>~1 week to ~1 hour</strong>."
counterfactual: "The bypass stays open for the entire class of newer instances, and every future abuser of that family sails past enforcement unbilled. The next case costs another week-long forensic dig, if anyone even thinks to question a control that had 'always worked.'"
indexMetric: 0
metrics:
  - chart: "coverage-gap"
    label: "Instance families the c-score regex governs"
    items:
      - { name: "Family A", covered: true }
      - { name: "Family B", covered: true }
      - { name: "Family C", covered: true }
      - { name: "Family D", covered: true }
      - { name: "Family E", covered: true }
      - { name: "Family F", covered: true }
      - { name: "Newer family", covered: false }
    caption: "Every governed family matched the threshold regex except one newer family, which matched nothing and took the default zero-limit path straight past enforcement."
  - chart: "stat"
    label: "Abuse traced to the gap"
    value: "Multi-six-figure"
    context: "Compute run-up the enforcement layer should have throttled."
    emphasis: true
  - chart: "before-after"
    label: "Time to catch the next instance"
    before: { label: "Forensic dig", value: 5, unit: "days", display: "~1 week" }
    after: { label: "Hourly alert", value: 1, unit: "hr", display: "~1 hour" }
    betterWhen: "lower"
    context: "The finding became an hourly, deduped Slack alert on the bypass signature."
tags: ["Root cause", "Java / config", "SageMaker", "Enforcement", "Alerting"]
draft: true
---

The enforcement layer had quietly worked for years, which is exactly what makes
this kind of failure hard: nobody suspects the control, so everyone looks at the
data. I went the other way and read the code.

The containment-score limit check decides which instances it governs by matching
them against a regex, then applies a per-instance limit. I traced the production
Java path and the ~47,000-line resource-limit config until I could state exactly
how that selection happens, and found that a newer instance family was simply
never added to the pattern. Unmatched instances fell to a default zero-limit row
and bypassed the synchronous check entirely. Not a model failure, not a data
gap, just one stale regex.

The part I'm most willing to stand behind is that I overturned my own first
hypothesis. I had an earlier theory. The Java contradicted it, so I dropped the
theory. In an enforcement context, being attached to your first answer is how
wrong shutdowns happen.

Then I made the finding durable instead of heroic. It became an hourly,
launchd-scheduled, deduplicated Slack alert on the bypass signature, so the next
account of this class trips an alarm in about an hour rather than waiting for
someone to run the same week-long dig again. The one thing I couldn't confirm
from the code, whether a particular job-creation path invokes the synchronous
check at all, I narrowed to concrete hypotheses and handed to the owning team,
labelled as unresolved.
