---
title: "Making fraud rings visible in a whole population"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Ring detection · graph analysis"
track: "Detection"
company: "AWS"
featured: true
draft: false
order: 2
summary: "Groups of accounts working together are invisible one at a time. Drawn as a map of who is connected to whom, they stand out as clusters. Real customers do not get dragged in with them."
context: "Coordinated abuse hides in the gaps between accounts. One account at a time, a ring is invisible. As a graph it is a dense knot in an otherwise sparse field. The catch is that naive linking on a shared IP or a shared phone format also ties together thousands of unrelated legitimate customers, so a careless graph just draws one giant useless blob."
contribution: "I built a whole-population fraud-relations graph explorer: a Python backend that loads the full account population, builds a two-tier hard/soft relationship graph, and renders it client-side over WebGL. I designed the edge-confidence model that makes the graph work: an information-retrieval weighting of excess purity over base rate × IDF, tuned for a fraud-dense population where plain shared-attribute counting is worthless. I then ran a key-reliability audit that removed the identifiers which would have falsely linked legitimate accounts. I layered the ring-finding on top of it, so components surface the rings, sub-communities split them, and centrality flags the brokers bridging two rings. I re-pointed the graph engine at the global payments-fraud cluster with a windowed population rebuild so it holds at multi-million-account scale."
outcome: "An analyst acts on a whole cluster instead of working the members separately, and the brokers bridging two rings surface as a finding of their own. I validated the graph against a known ring held as ground truth before trusting any cluster it drew, and the key-reliability audit kept legitimate look-alikes out."
impact: "Tested against a group already confirmed by hand, the map put <strong>every one of its members in a single cluster</strong>. Something invisible one account at a time became a group an analyst could act on in minutes. It then scaled from one region to the <strong>multi-million-account</strong> global population."
counterfactual: "Rings stay hidden in pairwise queries. Analysts chase individual members and miss the brokers bridging rings entirely. Any naive linking graph would have swept thousands of legitimate customers into the same clusters, trading invisible fraud for false accusations."
indexMetric: 0
metrics:
  - chart: "relations-graph"
    label: "Whole-population relations graph"
    coverage: "100%"
    population: 150
    rings: 4
    seed: 11
    caption: "Hover any dot to isolate the group it belongs to. Toggle to hide the ordinary customers and leave only the suspicious groups. Representative shape. The live version runs on confidential data."
    context: "A line means two accounts share something meaningful, weighted by how rare that thing is and how strongly it actually predicts fraud. The larger dots are the accounts that bridge two groups, which are often the ones worth acting on first."
  - chart: "ranked-bars"
    label: "What a shared signal is worth as an edge"
    sort: true
    bars:
      - name: "Rare shared hard signal"
        value: 100
        display: "informative"
        key: true
        note: "Rare, and far more common among fraudsters than among everyone else. These are the connections the clusters are built from."
      - name: "Shared IP range"
        value: 12
        display: "tells you little"
        note: "Real customers share IP ranges by chance all the time, so on its own this means almost nothing."
      - name: "Shared phone format"
        value: 12
        display: "tells you little"
        note: "The same format repeats across unrelated real accounts. Checking which identifiers are trustworthy is exactly what stops this creating fake groups."
      - name: "Shared BIN range"
        value: 12
        display: "tells you little"
        note: "Thousands of real customers share a card issuer and have nothing else to do with each other."
    caption: "Illustrative weights. The live scores run on confidential data. What is real is that simply counting shared details would treat all four of these as equally meaningful."
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
informative, the shared signal is. In IR terms, that is an excess-purity × IDF
score.

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
not produce a bad chart. It closes a real customer's account.
