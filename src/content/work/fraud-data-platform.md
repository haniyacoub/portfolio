---
title: "The data platform that made the investigations possible"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Investigation infrastructure"
track: "Tooling"
company: "AWS"
featured: true
order: 1
summary: "Two company databases, two different logins, and a slow sign-in on every single query. I put them behind one interface and made queries about 10× faster."
context: "Fraud investigation lives or dies on iteration speed, and mine was throttled by infrastructure rather than by analysis. Two production Redshift clusters disagreed on how to authenticate — Midway/SAML SSO on one, a password on the other — a multi-second federated handshake fired on every single query, and each script had to know its own drivers, connection strings, and which cluster it was hitting."
contribution: "I built the layer so the auth split, the driver glue and the per-query handshake never reach the analyst. One run(conn_id, sql) call returns an identical normalized result whether it routes through a persistent Java JDBC bridge holding a SAML-authenticated session open or hits the password cluster directly. A warm-connection daemon over a Unix-domain socket keeps that session alive and amortizes the SAML handshake across an entire investigation. Caller-aware routing picks the cluster from the script's own location. A DB-API shim let the legacy pandas code adopt the layer with zero call-site changes. The layer degrades to in-process execution when the daemon is not up, so correctness never depends on the optimization."
outcome: "Every other project in the workspace now runs on this layer, and the analysis code above it carries no cluster-specific branches, because the result shape is identical from either cluster."
impact: "Cut the wait on every query <strong>~10×</strong> (≈3.9s → ≈0.4s) and put <strong>two different databases behind one interface</strong>, which is what made a month of near-daily, query-heavy investigation possible at all. Pointing a project at a different database became a one-line change."
counterfactual: "Every query keeps paying the multi-second SAML handshake, investigations run at a fraction of the pace, and each script carries its own auth and driver glue. The deep, iterative analyses the rest of this work depends on simply are not practical."
indexMetric: 0
metrics:
  - chart: "before-after"
    label: "How long one query takes"
    before: { label: "Signing in every time", value: 3.9, unit: "s", display: "~3.9s" }
    after: { label: "Already signed in", value: 0.4, unit: "s", display: "~0.4s" }
    betterWhen: "lower"
    context: "The same query, run two ways: once paying the company sign-in first, once with that sign-in already open."
  - chart: "gate-funnel"
    label: "What every analyst query passes through, in order"
    stages:
      - name: "One call: run(conn_id, sql)"
        note: "The only surface an analyst script touches. A DB-API shim let legacy pandas code keep its call sites."
      - name: "Caller-aware routing"
        note: "Resolves the target cluster from the script's own location, so reassignment is a one-line change."
      - name: "A background process keeps the login open"
        note: "This is the whole speed-up: the slow company sign-in is paid once per investigation instead of once per query."
        key: true
      - name: "Single sign-on, or a password"
        note: "Two databases, two ways of logging in, one code path above them."
      - name: "One result shape"
        note: "Same fields back either way, including a flag for when a result was cut short."
    caption: "If that background process is down, the query still runs — just at the old speed. The speed-up is never allowed to be the thing correctness depends on."
tags: ["Python", "Redshift", "SAML / JDBC", "Daemon / IPC", "Developer tooling"]
draft: false
---

The bottleneck was never the analysis. It was a federated handshake firing on
every query, across two clusters that did not agree on how to authenticate. I
built this layer before the AWS investigations that depend on it, because at a
multi-second cost per query they were not practical.

So I put a single call in front of all of it, under one design rule: the
optimization must never be load-bearing for correctness. That is what made the
layer safe to put underneath everything else I was working on — adopting it could
not break a script, because the worst case is the speed I already had.

The two auth schemes were the real design problem. A password cluster answers a
driver directly; the SAML cluster needs a Java JDBC bridge, and the handshake is
the expensive part. Holding that authenticated session open in a daemon behind a
Unix-domain socket turns a per-query cost into a per-investigation one, and the
caller never learns which of the two it is talking to.

The other half of the problem was adoption. A faster access layer nobody moves
onto is worth nothing, and I was not going to rewrite working analysis code to
justify it, so the layer had to be reachable from the call sites that already
existed. That constraint is what the DB-API shim buys: the legacy pandas code
kept its call sites and got the daemon anyway.

The payoff sounds mundane and is enormous. It is the line between investigating
in flow and waiting on a spinner.
