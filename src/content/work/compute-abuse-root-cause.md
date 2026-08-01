---
title: "Six-figure compute abuse: a stale regex and an empty set"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Root-cause investigation"
track: "Investigation"
company: "AWS"
featured: true
order: 5
summary: "Two six-figure compute-abuse incidents where the finding was never who did it: one bypassed enforcement through a regex that had never learned a newer instance family, the other was already contained."
context: "Two compute-abuse incidents landed as dollar figures with an implied question about who. In the first, abusers were running up multi-six-figure SageMaker compute that the containment-score limit-enforcement layer was supposed to throttle, and it wasn't throttling. In the second, a flag suggested large coordinated abuse of an enterprise agent product built on free-trial seats, with the usual pressure to act fast and visibly."
contribution: "I worked the SageMaker case as a code-and-config problem, reading the production Java enforcement path and a ~47,000-line resource-limit config until I could state exactly how the c-score threshold check selects which instances it governs. The gap was that a newer instance family had never been added to the matching regex, so those instances matched nothing, took the default zero-limit path, and sailed past the synchronous check. I overturned my own earlier hypothesis the moment the production code contradicted it. On the seat-farm case I reconstructed the abuse chain from raw usage data: scripted seats through one enterprise org, the trial credit burned and billed as operational compute. Then I checked what was still actionable, found every confirmed account already enforced, and proved the shutdown residual was an empty set."
outcome: "The regex gap became standing infrastructure rather than a one-off dig. The empty set stopped a redundant bulk action against already-enforced accounts. The one question the code could not settle, whether a specific job-creation path invokes the synchronous check at all, I narrowed to named hypotheses and handed to the owning team labelled unresolved."
impact: "Root-caused a <strong>multi-six-figure</strong> compute-abuse incident to one unanchored instance family in the c-score enforcement regex, proven from production code, then cut detection of the next bypass from ~1 week to ~1 hour with an hourly alert. Reconstructed a seat farm: thousands of scripted free-trial seats, millions of premium-model turns, <strong>$0 paid</strong>. Proved the actionable residual <strong>empty</strong>, redirecting the fix from new detection to faster confirmation."
counterfactual: "The bypass stays open for an entire class of newer instances and every future abuser of that family sails past enforcement unbilled, with the next case costing another week-long dig if anyone even thinks to question a control that had 'always worked.' The seat farm fails the other way: a redundant bulk action against already-enforced accounts, weeks spent building detection nobody needed, and the real lag, confirmation speed, left untouched."
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
  - chart: "before-after"
    label: "Time to catch the next bypass"
    before: { label: "Forensic dig", value: 168, unit: "hr", display: "~1 week" }
    after: { label: "Hourly alert", value: 1, unit: "hr", display: "~1 hour" }
    betterWhen: "lower"
    context: "The finding became an hourly, launchd-scheduled, deduplicated Slack alert on the bypass signature."
  - chart: "abuse-chain"
    label: "The seat-farm chain, reconstructed from raw usage data"
    steps:
      - { label: "Enterprise org stood up", value: "1", note: "single tenant" }
      - { label: "Seats scripted onto it", value: "Thousands", note: "free-trial" }
      - { label: "Premium model turns driven", value: "Millions", note: "agent calls" }
      - { label: "Credit burned, billed as compute", value: "6-figure", note: "OPEX" }
      - { label: "Actually paid", value: "$0", note: "the abuse", punch: true }
    context: "Assembled from raw usage data before any action was proposed."
  - chart: "stat"
    label: "Actionable shutdown residual"
    value: "0"
    unit: "accounts"
    context: "Confirmed instances were already enforced. Proven as an empty set, not assumed."
    emphasis: true
tags: ["Root cause", "Java / config", "SageMaker", "Enforcement", "Abuse chain", "Empty-set proof", "Alerting"]
draft: true
---

Both cases arrived as a dollar figure and a question about who. That was never
the useful question.

The first was a multi-six-figure SageMaker run-up that the containment-score
limit-enforcement layer should have throttled. A control that has worked for
years is the last thing anyone suspects, so everyone looks at the data. I read
the enforcement path instead. The check matches instances against a regex, and a
newer family had never been added to it. Unmatched instances fell to a default
zero-limit row and bypassed the synchronous check entirely. Not a model failure,
not a data gap, one stale pattern. I had an earlier theory, the code contradicted
it, and I dropped it. In an enforcement path, being attached to your first
answer is how wrong shutdowns happen.

The seat farm looked like the opposite problem: a live coordinated abuse worth
swinging at immediately. I reconstructed the mechanism first, from raw usage
data, end to end, because acting on a chain you do not fully understand is how
you miss the real abuse and shut down the wrong accounts in the same motion.
Then the half nobody celebrates. I asked what was still *actionable* and worked
it to a number. Every confirmed account was already enforced. The residual was an
empty set, and I proved it empty.

That proof was worth more than another shutdown, because it split confirmation
latency from enforcement coverage. They are two problems with entirely
different fixes, and conflating them is how teams build detection they do not
need while the real lag goes untouched. The same move in both cases: fix what
the control did, not what the abuser did.
