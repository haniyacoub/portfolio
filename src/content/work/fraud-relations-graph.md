---
title: "Making fraud rings visible in a whole population"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Ring detection · graph analysis"
track: "Detection"
company: "AWS"
featured: true
draft: false
order: 1
summary: "A seedless graph that loads an entire account population and lets coordinated rings fall out as clusters, kept honest by an edge-confidence model and a key-reliability audit."
context: "Coordinated abuse hides in the gaps between accounts. One account at a time, a ring is invisible; as a graph it is a dense knot in an otherwise sparse field. The catch is that naive linking on a shared IP or a shared phone format also ties together thousands of unrelated legitimate customers, so a careless graph just draws one giant useless blob."
contribution: "I built a whole-population fraud-relations graph explorer: a Python backend that loads the full account population, builds a two-tier hard/soft relationship graph, and renders it client-side over WebGL. I designed the edge-confidence model that makes the graph work: an information-retrieval weighting of excess purity over base rate × IDF, tuned for a fraud-dense population where plain shared-attribute counting is worthless. I then ran a key-reliability audit that removed the identifiers which would have falsely linked legitimate accounts. I layered the ring-finding on top of it, so components surface the rings, sub-communities split them, and centrality flags the brokers bridging two rings. I re-pointed the graph engine at the global payments-fraud cluster with a windowed population rebuild so it holds at multi-million-account scale."
outcome: "An analyst acts on a whole cluster instead of working the members separately, and the brokers bridging two rings surface as a finding of their own. I validated the graph against a known ring held as ground truth before trusting any cluster it drew, and the key-reliability audit kept legitimate look-alikes out."
impact: "On ground-truth validation the graph placed <strong>100% of a known ring in a single component</strong>, turning coordinated rings into clusters an analyst could action in minutes. The engine then scaled from a region cluster to the <strong>multi-million-account</strong> global population."
counterfactual: "Rings stay hidden in pairwise queries. Analysts chase individual members and miss the brokers bridging rings entirely. Any naive linking graph would have swept thousands of legitimate customers into the same clusters, trading invisible fraud for false accusations."
indexMetric: 0
metrics:
  - chart: "relations-graph"
    label: "Whole-population relations graph"
    coverage: "100%"
    population: 150
    rings: 4
    seed: 11
    caption: "Hover a node to isolate its component. Toggle to strip the legitimate population and leave only the rings. Representative shape, since the live graph runs on confidential data."
    context: "Edges are hard shared signals weighted by excess-purity-over-base-rate × IDF. Brokers are high-betweenness accounts bridging two rings."
  - chart: "ranked-bars"
    label: "What a shared signal is worth as an edge"
    sort: true
    bars:
      - name: "Rare shared hard signal"
        value: 100
        display: "informative"
        key: true
        note: "High excess purity over the base rate, high IDF. These are the edges the clusters are built from."
      - name: "Shared IP range"
        value: 12
        display: "near base rate"
        note: "Legitimate customers share IP ranges by chance, so the excess purity collapses."
      - name: "Shared phone format"
        value: 12
        display: "near base rate"
        note: "A format repeats across unrelated legitimate accounts, which is what the key-reliability audit exists to catch."
      - name: "Shared BIN range"
        value: 12
        display: "near base rate"
        note: "An issuer BIN is shared by legitimate customers who have nothing else to do with each other."
    caption: "Illustrative weights, since the live scores run on confidential data. What is real is that plain shared-attribute counting would treat all four bars alike."
    context: "The three context bars are deliberately equal. The finding was that they sit near the base rate, not that one outranks another."
tags: ["Graph analysis", "sigma.js / WebGL", "Community detection", "Betweenness", "Ring detection"]
---

A ring is invisible one account at a time and obvious as a graph. Getting from
the first view to the second is the entire problem, because a graph naive enough
to link on any shared attribute links half the legitimate population together.

So the work was not the rendering. It was the edges. In a fraud-dense
population, "these two accounts share an attribute" means almost nothing:
plenty of legitimate customers share IP ranges, phone formats, and BIN ranges by
chance. I weighted every candidate edge by how much more *purely* it predicts
co-fraud than the base rate would, scaled by how rare, and therefore how
informative, the shared signal is — in IR terms, an excess-purity × IDF score.

With trustworthy edges the graph mechanics follow, and the payoff is the
*broker*: the high-betweenness account bridging two rings, which no pairwise
query would ever return. The frontend draws the whole population over WebGL with
hover-isolation, a weighted shortest-path trace between any two accounts, and
one-click legitimate-impact and bulk-close SQL per cluster.

Validation mattered more than visuals. On a ring I had already confirmed, the
graph placed **100% of its members in a single component**. Getting there took
twelve documented iterations, each recorded with its source and its
verification: edge tiers reworked, the soft tier gated so a weak signal could
not stand as an edge on its own, shared-NAT addresses discounted so one egress
point could not fabricate a ring, and unreliable identifiers deleted outright
rather than quietly down-weighted. That last choice is the one that matters,
because every cluster ships with bulk-close SQL attached. A bad edge here does
not produce a bad chart — it closes a real customer's account.
