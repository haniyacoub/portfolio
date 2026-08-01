---
title: "Joining every risk decision to what happened next"
role: "Senior Product Analyst, Risk & Abuse, Zalando"
period: "2024 to 2026"
theme: "Risk decision data"
track: "Tooling"
company: "Zalando"
featured: false
order: 22
summary: "An abuse decision nobody can join to its outcome cannot be evaluated. I built the join, login to feedback."
context: "Abuse-protection decisions and their outcomes were written by different services into different tables. Logins sat in authentication events. Orders sat in order-placed events and order-position rows. The risk assessment sat in assessment tables, what was decided about it sat in risk-decision tables, and the feedback on the steer that followed sat in steer-feedback tables. No single dataset ran the length of that chain, so a question about how a decision performed had no dataset behind it. Older assessments and steering decisions sat apart from the current ones too, in their own legacy sources under an older set of labels."
contribution: "I built one joined view running from login to order to risk assessment to risk decision to steering decision to steer feedback. Alongside it I joined the context that makes a decision readable: customer data, sales channel, order positions, route access, and a rule-to-fraud-domain mapping. Return steering carries its own feedback, so return-steer feedback joined alongside the rest. I read the legacy assessment and steering-decision sources next to the current ones, because the older records only exist there. I carried the older label mapping through, so an older label and its current equivalent count as the same thing rather than two. The purpose was evaluation rather than reporting: how abuse-protection decisions performed, and where fraud damage remained. It runs in PySpark and Spark SQL on Databricks over Delta and data-lake tables."
outcome: "A question about how a decision performed became a query against one dataset. The returned-to-sender analysis reads risk assessments and decisions from the same sources, so it lines up with the decision data instead of rebuilding its own version of it."
impact: "Produced <strong>one joined dataset</strong> covering login, order, assessment, decision, steering and feedback. Read the <strong>legacy and current sources together</strong> under one label mapping, so older records stayed readable next to current ones."
counterfactual: "How a control performed stays an argument rather than a query. Every question needs its own one-off join, the answers disagree, and the older records stay stranded in a vocabulary nobody lines up with the current one."
indexMetric: 0
metrics:
  - chart: "gate-funnel"
    label: "The chain the joined dataset runs along, in order"
    stages:
      - name: "Login"
        note: "Authentication events. Who signed in, and when."
      - name: "Order placed"
        note: "Order-placed events with order-position rows, so the basket is visible and not only the order."
      - name: "Risk assessment"
        note: "What the abuse-protection platform made of it. Read from the legacy source and the current one."
      - name: "Risk decision"
        note: "What was actually decided about that assessment."
      - name: "Steering decision"
        note: "The customer-risk steering tables. How that customer was handled from then on."
      - name: "Steer feedback"
        note: "The feedback recorded against that steer. Return steering carries its own feedback, joined alongside."
        key: true
    caption: "Each stage only sees what the one before it produced, which is why the order is the design and not a presentation choice. No counts are published here. The purpose of the chain is evaluation: how abuse-protection decisions performed, and where fraud damage remained."
    context: "Customer dimension data, sales channel, route-accessed events, and a table mapping fraud rules to fraud domains join alongside the chain as context."
  - chart: "before-after"
    label: "How many places one measure had to be read from"
    before: { label: "Legacy and current sources read apart", value: 2, unit: "sources", display: "two sources" }
    after: { label: "One view, one label mapping", value: 1, unit: "view", display: "one view" }
    betterWhen: "lower"
    context: "The bars count sources, not volume. Sizing is illustrative and implies no magnitudes. What the work established: the legacy and current assessment and steering-decision sources were read together, and the older labels were mapped onto the current ones so both sides counted as the same thing."
tags: ["PySpark", "Spark SQL", "Databricks", "Delta", "Data modelling", "Risk decisions", "Steer feedback"]
draft: false
---

You cannot evaluate a decision you cannot join to its outcome. Risk and abuse
decisions were everywhere in the data. A customer signed in. An order was
placed and assessed. A decision was taken on that assessment, the customer was
steered onto a different handling path, and feedback was later recorded against
that steer. Each of those lived in its own table, written by whichever service
owned it. Any one of them alone is an event log, not an answer.

So I built the join, in the order the events actually happen. Authentication
events give the sign-in. Order-placed events and order positions give what was
bought, basket line by basket line. Assessment tables give the risk assessment,
risk-decision tables give what was decided about it, and the steering tables
with their feedback give what happened next. Customer dimension data, sales
channel, and the routes a customer accessed sit alongside as context. A table mapping
fraud rules to fraud domains says which kind of abuse a rule was aimed at.
Returns carry their own steer feedback, so that joined too.

The awkward part was that the older records did not live with the current ones.
Legacy assessment and steering-decision sources held everything from before,
under an older set of labels. Read them apart and the same thing gets counted
twice under two names, which is how a measure ends up disagreeing with itself.
So the pipeline reads the legacy sources next to the current ones and carries
the older label mapping through.

None of this is glamorous work. It is the difference between having an opinion
about a control and having a dataset.
