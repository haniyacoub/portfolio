---
title: "Making fraud rings visible in a whole population"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Ring detection · graph analysis"
track: "Detection"
company: "AWS"
featured: true
order: 1
summary: "A seedless graph that loads an entire account population and lets coordinated rings fall out as clusters, without dragging legitimate customers in with them."
context: "Coordinated abuse hides in the gaps between accounts. One account at a time, a ring is invisible. As a graph, it's a dense knot in an otherwise sparse field. The catch is that naive linking on a shared IP or a shared phone format also ties together thousands of unrelated legitimate customers, so a careless graph just draws one giant useless blob."
contribution: "I built a whole-population fraud-relations graph explorer: a Python backend that loads the full account population, builds a two-tier (hard/soft) relationship graph, and renders it client-side over WebGL. The part that makes it actually work is the edge-confidence model, an information-retrieval weighting (excess purity over base rate × IDF) tuned for a fraud-dense population where plain shared-attribute counting is worthless, plus a key-reliability audit that removed identifiers which would have falsely linked legitimate accounts. Connected components surface rings, community detection splits sub-rings, and betweenness centrality flags the broker accounts bridging them."
outcome: "Rings render as visually obvious clusters an analyst can act on. On a known ring used as ground truth, the graph placed 100% of its members in a single component, and the same key-reliability audit kept legitimate look-alikes out of those clusters. I then re-pointed the whole engine at the global payments-fraud cluster via a windowed rebuild for multi-million-account scale."
impact: "Coordinated rings that were invisible one account at a time became <strong>visually obvious clusters</strong> an analyst could action in minutes. On a ground-truth ring the graph hit <strong>100% recall in a single component</strong> while the key-reliability audit kept legitimate look-alikes out, and the engine scaled from a region cluster to the <strong>multi-million-account</strong> global population."
counterfactual: "Rings stay hidden in pairwise queries. Analysts chase members one at a time and miss the brokers bridging rings entirely. Any naive linking graph would have swept thousands of legitimate customers into the same clusters, trading invisible fraud for false accusations."
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
  - chart: "stat"
    label: "Known-ring recall"
    value: "100%"
    context: "Every member of a ground-truth ring landed in one rendered cluster."
    emphasis: true
  - chart: "stat"
    label: "Re-scoped to"
    value: "Millions"
    unit: "accounts"
    context: "Ported from a region cluster to the global payments-fraud population."
    emphasis: false
tags: ["Graph analysis", "sigma.js / WebGL", "Community detection", "Betweenness", "Ring detection"]
---

A ring is invisible one account at a time and obvious as a graph. The whole
problem is getting from the first view to the second without building a graph so
naive it links half the legitimate population together.

So the work wasn't the rendering. It was the edges. In a fraud-dense population,
"these two accounts share an attribute" is almost meaningless, because plenty of
legitimate customers share IP ranges, phone formats, and BIN ranges by chance. I
weighted every candidate edge by how much more *purely* it predicts co-fraud than
the base rate would, scaled by how rare (informative) the shared signal is. In
IR terms, an excess-purity × IDF score. Then I ran a key-reliability audit and
threw out the identifiers that looked linking but were actually shared by
unrelated legitimate accounts. That audit is the part that keeps the clusters
honest.

With trustworthy edges, the rest is graph mechanics: union-find connected
components to surface rings, modularity and label-propagation community detection
to split sub-rings, and sampled betweenness centrality to flag the *broker*
accounts that bridge two rings, often the most important ones to action. The
frontend renders the whole thing over WebGL with hover-isolation, a weighted
shortest-path trace between any two accounts, and one-click legitimate-impact and
bulk-close SQL per cluster.

Validation mattered more than visuals. On a ring I already had confirmed, the
graph placed **100% of its members in a single component**, and the key audit
kept the legitimate look-alikes out. Then I re-pointed the same engine at the
global payments-fraud cluster with a windowed population rebuild so it holds at
multi-million-account scale.
