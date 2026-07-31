---
title: "The data platform that made the investigations possible"
role: "Business Analyst — AWS Payments & Fraud Prevention"
period: "2026"
theme: "Investigation infrastructure"
track: "Tooling"
company: "AWS"
featured: true
order: 4
summary: "A home-grown data-access layer that unifies two heterogeneous Redshift clusters behind one API and pays the SAML handshake once — turning a multi-second wait per query into a tenth of a second."
context: "Fraud investigation lives or dies on iteration speed, and mine was being throttled by infrastructure: two production Redshift clusters with two different auth schemes (Midway/SAML SSO and password), a multi-second federated handshake on every single query, and scripts that each had to know about drivers, connection strings, and which cluster they were hitting."
contribution: "I built the layer so none of that touches the analyst. One `run(conn_id, sql)` API returns an identical normalized result whether it's talking to the SAML cluster via a persistent Java JDBC bridge or the password cluster directly. A warm-connection daemon over a Unix socket holds the authenticated connection open and amortizes the SAML handshake across an entire investigation. Caller-aware routing picks the right cluster from the script's location, and a DB-API shim let all the legacy pandas code adopt it with zero call-site changes — and it degrades gracefully to in-process execution if the daemon isn't up, so correctness never depends on the optimization."
outcome: "Per-query latency dropped roughly an order of magnitude — about 3.9s cold to about 0.4s warm — which is the difference between investigation-as-flow and investigation-as-waiting. Every other project in the workspace runs on this layer; reassigning a project to a different cluster became a one-line change."
impact: "Cut per-query latency <strong>~10×</strong> (≈3.9s → ≈0.4s) and unified two heterogeneous Redshift clusters behind one API — making a month of near-daily, query-heavy investigations feasible and reducing a cluster reassignment to a one-line change."
counterfactual: "Every query keeps paying the multi-second SAML handshake; investigations run at a fraction of the pace; each script carries its own auth and driver glue — and the deep, iterative analyses the rest of this work depends on simply aren&rsquo;t practical."
indexMetric: 0
metrics:
  - chart: "before-after"
    label: "Per-query latency"
    before: { label: "Cold (handshake each time)", value: 3.9, unit: "s", display: "~3.9s" }
    after: { label: "Warm daemon", value: 0.4, unit: "s", display: "~0.4s" }
    betterWhen: "lower"
    context: "A persistent Unix-socket daemon pays the SAML handshake once per investigation."
  - chart: "delta"
    label: "Speed-up"
    value: "~10×"
    detail: "faster warm vs. cold per query"
    direction: "up"
    good: true
    context: "A pure optional layer — it falls back to in-process execution if the daemon is down."
  - chart: "stat"
    label: "Clusters unified"
    value: "2"
    context: "SAML SSO + password auth, behind one API and one result shape."
    emphasis: false
tags: ["Python", "Redshift", "SAML / JDBC", "Daemon / IPC", "Developer tooling"]
draft: true
---

None of the fraud work in this portfolio happens without this layer, which is why
I built it first. The bottleneck wasn't analysis — it was a multi-second
federated handshake firing on every query, across two clusters that didn't agree
on how to authenticate.

So I hid all of it behind one call. `run(conn_id, sql)` returns the same
normalized result dict — ok, columns, rows, duration, truncation flag —
regardless of whether it routed through a persistent Java JDBC bridge holding a
SAML-authenticated connection open, or hit the password cluster directly. A
warm-connection daemon over a Unix-domain socket keeps that connection alive and
pays the handshake **once per investigation** instead of once per query.

The design rule I held was that the optimization must never be load-bearing for
correctness. The daemon is pure performance: if it's down, the layer silently
falls back to in-process execution and everything still works, just slower. A
DB-API shim meant the existing pandas/`redshift_connector` code adopted the whole
thing with zero call-site changes, and caller-aware routing picks the cluster
from the script's own location.

The payoff is mundane and enormous: about **3.9s cold to about 0.4s warm**.
That order of magnitude is the line between investigating in flow and waiting on
a spinner — and it's why a month of near-daily, query-heavy investigations was
even feasible.
