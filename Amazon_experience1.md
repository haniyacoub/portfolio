# What I Built & Accomplished — Fraud Analytics Workspace Audit

> A complete, file-by-file accounting of the work in this workspace, written for a CV/resume.
> All sensitive production values (account IDs, dollar fraud figures, exact fraud counts, emails,
> fingerprints) have been deliberately abstracted to **relative** terms ("dozens", "hundreds",
> "thousands", "~10x", "multi-six-figure", "a large multi-account ring"). Counts of *my own output*
> (files, LOC, investigations, dashboards) are kept because they describe productivity, not fraud data.

---

## Executive Summary

This workspace is the analytical and engineering backbone of my work as a **Business Analyst on AWS
Fraud Prevention (Registration)** — a self-built fraud-investigation platform spanning a home-grown
data-access layer, a multi-layer LLM/agent context-engineering system, a large reusable SQL deliverables
corpus, near-daily AI-agent-driven investigation runs, production BI dashboards, graph explorers, machine-
learning pipelines, forecasting engines, and forensic root-cause investigations. Across roughly a dozen
distinct projects it pairs deep AWS payment-fraud domain expertise (fraud taxonomy, enforcement-system
internals, detection-model behavior, named ring signatures) with genuine full-stack and data-science
engineering: SAML/JDBC bridges, Unix-socket daemons, XGBoost classifiers, survival/hazard forecasting,
WebGL graph rendering, and multi-agent orchestration with LLM judges. The defining trait throughout is
**rigor under accountability** — adversarial self-verification, reconciliation to the cent, schema-
confirmation before aggregation, false-positive aversion baked into tooling, and honest in-place correction
of my own mistakes — because these numbers go into stand-ups, MCMs, and a vendor compliance response where
a caught assumption is the analyst's credibility on the line. This is the work of someone operating well
beyond a typical analyst remit: building the infrastructure, the methodology, **and** the deliverables, and
holding all three to a verification standard.

---

## At a Glance

| Metric (relative) | Scale |
|---|---|
| Distinct projects / subsystems | ~18 project folders + tools layer, SQL corpus, agent runs, output archive, Kiro specs |
| Python (tooling + pipelines + apps) | ~tens of thousands of LOC; tools layer ~1,570 LOC, ESC Dashboard app ~3,160 LOC, graph explorer ~2,060 LOC, Sleeper ML ~2,600 LOC, NI Forecast ~1,000 LOC |
| SQL | ~30K+ LOC; flagship dashboard source ~530 → 680 LOC; reusable lessons/snippets library ~1,400 LOC |
| SQL deliverables (corpus) | ~247-entry corpus (~160 `.sql` + paired CSV outputs + generators) |
| Investigation runs (`.agents` tree) | ~51 dated run folders; 800+ query scripts; 900+ CSV outputs; ~60 charts; ~30 polished reports |
| Dashboards / interactive apps | 6+ (ESC Dashboard, 2 graph explorers, agent_viewer, agent_lab, registration dashboard, Databricks SQL notebook, DSU Cytoscape graph) + 2 standalone HTML explainers |
| Knowledge-base docs | ~16 curated KB files + 2 custom Skills + bootstrap docs; ~116 Obsidian atomic notes; ~60-fact audit graph |
| Date range of activity | ~2026-05-05 through 2026-06-29 (near-daily cadence) |
| Query-latency improvement (tooling) | ~10x warm vs cold (~3.9s → ~0.4s) |
| Largest single project | `Cluster_analysis` (~383 files) |

---

## Area-by-Area Breakdown

### 0. Top-Level Docs, Infra & Standalone Dashboards

The repository root is documented like a real product: a README explaining the monorepo layout and the
shared connection layer, a thorough self-contained Redshift onboarding/handoff guide, an org-wide launch
announcement, reusable prompt specs, MCP wiring, and two standalone HTML explainers. This is the "anyone
can pick this up" layer.

**What was built**
- A monorepo **README** documenting the `tools/` connection layer, per-project connection mapping, the
  CLI, and the "how the SSO path works" architecture — written so a teammate can adopt the layer cold.
- **`REDSHIFT_HANDOFF.md`** — a ~270-line self-contained Redshift onboarding doc: the two clusters, one-time
  setup, the daily `mwinit` ritual, a warm-daemon explainer, a "is it working?" checklist, common failure
  modes, hard limits, and a **full table catalog** organized by domain (identity/registration, containment
  /risk, DSU sign-up funnel, enforcement, OPEX/impact, Bedrock, Kiro token model, the five separate
  SageMaker activity surfaces, chargebacks/revenue, payment, email/domain verification, sleeper signals,
  and the ESC⇄Classic mirror map). This doubles as a fraud-data dictionary.
- An **org-wide launch announcement** (`ESC_dashboards_launch_announcement.md`) for the ESC Fraud & Revenue
  dashboard, written for a leadership/all-hands audience — frames *what* launched, *why it matters*, the
  five views, and an honest caveat that trends/rates are fully reconciled while a few absolute dollar
  totals remain rough pending Data Engineering fixes.
- **Reusable prompt specs** (`prompts/`): a "prove a fraud use case in a ~5-page reproducible report" prompt
  and a full "prevented-loss backtest → shadow mode → ML handoff" prompt — parametrized, with calibration
  anchors and explicit phase gates. These are templates that turn an investigation into a repeatable method.
- **MCP wiring** (`.mcp.json`): Columbo (live fraud data), a memory server, a Slack server, and the AWS
  knowledge HTTP MCP — i.e. the agent's connected toolset.
- A **Slack app manifest** for an AI agent-management layer (socket mode, low/medium-risk scopes chosen
  specifically to qualify for instant auto-approval without an AppSec review — a thoughtful compliance call).
- Two **standalone HTML explainers**: `fraudguard_workflow.html` (a visual "how FraudGuard Online works"
  walkthrough — the automatic scanner + the analyst/Columbo UI, with the registration-embeddings → graph-DB
  → AI-pattern-mining pipeline laid out as numbered steps) and `learning_dashboard.html` (a personal,
  phased skill-building curriculum: embeddings → similarity search → fine-tuning → graph DB, etc.).
- A short, clear conceptual doc (`docs/trailing_4_week_granularity.md`) explaining trailing-4-week vs WoW
  reporting — the kind of stakeholder-education writing that makes a metric defensible.

**Notable files**
- `README.md` — monorepo layout, connection layer, CLI, SSO architecture.
- `REDSHIFT_HANDOFF.md` — self-contained Redshift onboarding + full domain-organized table catalog.
- `ESC_dashboards_launch_announcement.md` — the org-wide launch email (with honest data-gap caveat).
- `esc_bulk_shutdown_clusters_ranked.md` / `esc_recent_bulk_shutdown_clusters.md` — ranked write-ups of
  coordinated ring closures, signatures, and legit-impact, framed for a reader who isn't in the data.
- `mcm-149714543_shutdown_log.md` — a batch-by-batch shutdown ledger for a single standing change ticket,
  documenting how one ring's signature evolved over many waves and how each batch was legit-impact-checked.
- `prompts/fraud_usecase_report.md` / `prompts/bedrock_fresh_domain_backtest_shadow.md` — reusable,
  parametrized investigation-to-report and backtest-to-shadow method templates.
- `fraudguard_workflow.html` / `learning_dashboard.html` — standalone visual explainers (system + curriculum).
- `.mcp.json`, `slack-app-manifest.yaml` — agent tool wiring + Slack app definition.
- `Documentation/aws_fraud_prevention_documentation/documentaion.md` — a bullet-to-data-source mapping doc
  (every fraud concept tied to a concrete schema/table).

---

### 1. Tools Layer — Home-grown data-access platform

A unified Python layer that lets agent-written scripts query two heterogeneous Amazon Redshift clusters (a
Midway/SAML SSO Payments-Fraud serverless cluster and a password-auth European Sovereign Cloud cluster)
through one API, without callers ever touching auth, drivers, or connection strings. The standout
engineering is a three-tier query path: an in-process dual-mode engine, a persistent warm-connection daemon
over a Unix socket that amortizes the multi-second SAML handshake across an entire investigation (~10x
latency win), and project-to-connection routing so a script's location auto-selects the right cluster.
Built so correctness never depends on the daemon being up.

**What was built**
- Unified dual-engine (`engine.py`): jdbc_saml via a Java bridge and password via redshift_connector,
  behind one `run(conn_id, sql)` returning an identical normalized result dict
  (ok/columns/rows/row_count/duration_ms/truncated/error).
- SAML JDBC bridge: a persistent Java `RedshiftRunner` subprocess speaking line-delimited JSON over
  stdin/stdout, holding one SAML-authenticated connection open per URL, reusing DataGrip's bundled JBR so
  no extra JDK install is needed.
- Warm-connection daemon (`query_daemon.py`): long-lived process serving queries over a Unix-domain socket
  with ping/query/stop protocol, idle watchdog (1h), stale-socket reclamation, and a global query lock.
- Transparent daemon routing in `db.py`: `get_df`/`run_query` auto-start the daemon, route through it, and
  silently fall back to in-process on any hiccup (`QUERY_DAEMON_DISABLE=1` forces the old path).
- Caller-aware routing via stack-frame introspection + a project→cluster table; secret-free connection
  registry; batching `get_dfs()`; DB-API compatibility shim so legacy `redshift_connector`/pandas callers
  keep working unchanged.
- Ergonomic helpers: `rsq.py` CLI (table/csv/tsv/json output), `viz.py` Plotly chart helpers with PNG→HTML
  fallback, idempotent Streamlit launchers (`agent_viewer.py`, `agent_lab.py`), and a cross-platform
  Columbo MCP server (Midway+CSRF auth, ~19 query IDs).

**Notable files**
- `tools/db.py` — project-facing API; caller-aware routing, transparent warm-daemon client with
  auto-start/fallback, DB-API shim.
- `tools/engine.py` — unified dual-engine; health-ping/rebuild, JSON-safe cell coercion.
- `tools/query_daemon.py` — warm-connection daemon over Unix socket; idle watchdog, stale-socket
  reclamation, global lock.
- `tools/connections.py` — secret-free named-connection registry; minimal `.env` parser with env precedence.
- `tools/project_connections.py` — project-directory-name → connection-id routing table.
- `tools/rsq.py` — Bash CLI for ad-hoc SQL/schema probes; surfaces the 10K truncation note.
- `tools/viz.py` — Plotly line/bar/area helpers with PNG→HTML fallback.
- `tools/agent_viewer.py` / `tools/agent_lab.py` — idempotent Streamlit launchers (live viewer; Arena+Debate lab).
- `projects/Databricks/jdbc_bridge.py` — Python wrapper around the Java bridge; per-URL session cache,
  reconnect-on-known-error, DataGrip-JBR discovery, lazy javac compile.
- `projects/Databricks/java_bridge/RedshiftRunner.java` — long-running JDBC subprocess; line-JSON protocol,
  `setMaxRows(10_000)` cap, type-aware encoding, hand-rolled JSON, query cancel via `pg_backend_pid`.
- `tools/columbo/columbo-mcp.py` + `SETUP.md` + `columbo-mcp.sh`/`.ps1` — FastMCP server for live fraud
  data; cross-platform launchers + likelihood-ordered troubleshooting.

---

### 2. Knowledge Bases — Context engineering & domain memory

A multi-layer, self-maintaining knowledge-management system that grounds LLM/agent fraud work in my curated
expertise. The core is `projects/context-project/` — a ~16-file curated KB fronted by two custom Claude
Skills (a posture/operating-manual skill and a token-budget-aware selective loader), tiered bootstrap docs,
and a verification-gated learning inbox. A parallel Obsidian vault re-expresses the same knowledge as ~116
cross-linked atomic notes. A bespoke Flask "context-audit" app distills the whole context layer into a
~60-fact graph with confidence levels, source-drift detection, and live-Redshift verification probes.

**What was built**
- `context-project`: curated KB (README index, glossary, sources/, patterns/, queries/, lessons/,
  calibration/, skills/) loadable into any new chat to ground it in my expertise.
- `working-with-hani` SKILL (v2.0.0): agent operating manual encoding writing voice, 8 problem-solving
  postures, 21 enumerated recurring pitfalls, deliverable templates, and a calibration-account checklist.
- `context-loader` SKILL: token-budget-aware selective loader with an A–G routing table and cost model.
- LOAD_FULL/LOAD_LIGHT tiered bootstrap protocols; LEARNING_LOG verification-gated staging inbox with a
  strict entry schema and promote/reject/duplicate lifecycle.
- `fraud_signatures.md` (~15 calibrated ring patterns), `known_fraud_accounts.md` (~30 anchors incl.
  do-not-shut false-positive cases), `investigation_lessons.md` (~1,300-line dated postmortems),
  `snippets.md` (~1,400-line reusable SQL library).
- `aws_fraud/` Obsidian vault: ~116 atomic notes across 7 folders + 6 MOCs + Home, fully wiki-linked.
- `context-audit`: Flask app distilling the context layer into a ~60-fact confidence-rated graph with
  source hashing/drift detection, merge-safe writes, and one-click live-Redshift verification.
- `kiro_rules`: Redshift query runner with bracket-aware single-CTE test isolation and an embedded 7-stage
  Kiro fraud-detection lifecycle flow diagram.

**Notable files**
- `projects/context-project/skills/working-with-hani/SKILL.md` — operating manual: voice, 8 postures, 21 pitfalls, deliverable shapes.
- `projects/context-project/skills/context-loader/SKILL.md` — token-budget selective loader with A–G routing.
- `projects/context-project/LOAD_FULL.md` / `LOAD_LIGHT.md` — bootstrap read-order + trigger phrases.
- `projects/context-project/LEARNING_LOG.md` — verification-gated learning inbox.
- `projects/context-project/glossary.md` — fraud taxonomy, enforcement internals, model catalog, billing terms.
- `projects/context-project/patterns/fraud_signatures.md` — ~15 calibrated ring signatures.
- `projects/context-project/patterns/detection_rules.md` — proposed/shadowed rules with MCM refs and back-test anchors.
- `projects/context-project/calibration/known_fraud_accounts.md` — ~30 anchors + do-not-shut cases.
- `projects/context-project/lessons/investigation_lessons.md` — ~1,300-line dated postmortems.
- `projects/context-project/queries/snippets.md` — ~1,400-line reusable SQL library with TOC.
- `projects/context-project/sources/kiro_convention.md` — `.kiro/` layout and output-naming convention.
- `aws_fraud/Home.md` + `aws_fraud/MOCs/Fraud Patterns MOC.md` — Obsidian vault hub + pattern Map-of-Content.
- `projects/context-audit/build_audit.py` — seed fact graph + source hashing/drift + merge-safe writer.
- `projects/context-audit/verify.py` — per-fact Redshift/docs verification probes back into facts.json.
- `projects/context-audit/audit/raw_findings.md` — 5-pass scratchpad with cross-file contradictions table.
- `projects/kiro_rules/server.py` — query runner with single-CTE testing + embedded lifecycle flow diagram.

---

### 3. SQL Queries Corpus — The analytical engine

A ~247-entry SQL deliverables corpus that is the analytical engine behind the fraud-prevention work. It
spans five bodies of work: (1) production dashboard-source queries collapsing the entire ESC registration
cohort into one richly-documented row-per-account fact table for QuickSight; (2) a full Redshift
reconstruction of the banned-to-scrape Columbo investigation workbench (~15 UI widgets mapped to source
tables); (3) a multi-month, heavily-iterated bulk-shutdown rule-development program (100+ files) converging
on multi-condition ring-detection rules validated by precision/recall; (4) fraud-ring and SageMaker-bypass
detection selectors emitting per-account action buckets with explicit carve-outs; and (5) an OPEX/revenue
rollup plus a self-regenerating model-enforcement-precision pipeline. The signature trait is exhaustive,
load-bearing inline documentation and guardrails encoded directly against documented past mistakes.

**What was built**
- `esc_account_level.sql` / `_v2.sql` — flagship one-row-per-ESC-account fact table (~13 LEFT-joined CTEs)
  running 100% on the THF mirror for QuickSight; v2 added a 3-tier `enforced_by` cascade, an honest
  ~12–13% model-auto-shutdown rate replacing a misleading ~98% figure, and a relations enforcement-path dimension.
- Columbo reconstruction trilogy (`columbo_account_view.sql`, `columbo_detail_grains.sql`,
  `columbo_opex_discovery.sql`) reproducing ~15 widgets across Q1–Q7, including IP-CIDR geolocation, DSU
  relations, Bedrock-burst signature, dashboard-parity TRT/OPEX.
- Bulk-shutdown rule program: `_R2_FINAL_rule_esc.sql` (a multi-condition bank AND phone AND card AND
  (ASN OR email) ring rule), generated INSERT files, and `legitimate_impact_*` carve-out exposure analyses.
- Fraud-ring selectors (NICOS amazon-handle ring, heromail/mymails ring) and
  `sagemaker_low_cscore_bypass_scan.sql` (7I-style bypass: c-score interval timeline, sharp-key relations,
  per-account narrative + carve-out flags).
- `comp_opex_revenue_rollup` with GROUPING SETS multi-grain money-flow and FULL/PARTIAL/STUB day-completeness gating.
- Self-regenerating model-enforcement-precision pipeline: `model_registry.json` →
  `model_enforcement_agent.py` → generated SQL → HTML/PNG/Quip renderers, auto-enrolling new annotation signatures.
- THF-vs-ESC reconciliation harness (paired identical-shape gap-check queries) and ESC-vs-Classic
  comparison family; dozens of schema-probe/verification scripts.

**Notable files**
- `sql_queries/esc_account_level_v2.sql` — flagship v2 dashboard source.
- `sql_queries/esc_account_level.sql` — v1 stable baseline.
- `sql_queries/columbo_account_view.sql` — account-grain Columbo reconstruction (~25 widget-mapped CTEs).
- `sql_queries/columbo_detail_grains.sql` — Q2–Q7 detail-grain widgets.
- `sql_queries/columbo_opex_discovery.sql` — Q6 top-OPEX discovery, Mode A/B.
- `sql_queries/sagemaker_low_cscore_bypass_scan.sql` — 7I-style bypass detection.
- `sql_queries/nicos_amazon_handle_ring_bulk_action.sql` — signature-only ring selector with action buckets.
- `sql_queries/esc_enforcement_dashboard_panel.sql` — ESC-native D3/D5 enforcement attribution.
- `sql_queries/esc_relations_autoshutdown_panel.sql` — Sherlock autoshutdown vs investigate-queue (D1/D2).
- `sql_queries/gap_check_thf_mirror.sql` + `gap_check_esc_native.sql` — paired reconciliation harness.
- `sql_queries/comp_opex_revenue_rollup_m1_v2.sql` — GROUPING SETS rollup with completeness gating.
- `sql_queries/model_registry.json` + `model_enforcement_agent.py` + `model_enforcement_precision_esc.sql`
  — self-regenerating model-monitoring pipeline.
- `sql_queries/esc_vs_classic_compare_v3_slim.sql` — six-metric SPICE extract, legit-only C-score by construction.
- `sql_queries/legitimate_impact_R2_v7_global.sql` — carve-out exposure analysis.
- `sql_queries/_R2_FINAL_rule_esc.sql` — final multi-condition ring rule with precision/recall scoring.
- `sql_queries/esc_dashboard_freshness_panel.sql` — per-source landing-state classifier.
- `sql_queries/_learn_verify_ec2_mirror.py` — verification script re-running evidence before persistence.

---

### 4. Agent Investigation Runs — AI-driven investigation practice

The `.agents/` tree is the persistent record of an AI-agent-driven fraud-investigation practice: ~51 dated
query runs (2026-05-31 to 2026-06-29) plus three multi-agent orchestration modes built on top — **arena**
(competing personas + a judge), **debate** (two agents argue to convergence), and **investigation**
(params-driven ring deep-dives). Each run is self-contained: numbered query scripts, raw outputs, charts,
and a hand-graded `report.md`. The defining methodology is adversarial self-verification — numbers
reconciled to the cent across independent reproductions, a second agent re-checking the first, and follow-up
runs openly overturning earlier claims rather than burying them.

**What was built**
- Near-daily cadence of ~51 self-contained run folders, each bundling numbered scripts, CSV/SQL artifacts,
  charts, and a polished `report.md`.
- "Arena" multi-persona answer tournament (4 personas + judge synthesizing consensus/disagreements/
  best-supported answer/watch-outs; per-persona cost/duration/token telemetry).
- "Debate" mode (two agents over 3–5 rounds to a CONVERGED verdict with a judge summary).
- "Investigation" mode for ring deep-dives (a `00_params.md` stating ask + MCM signature + anchors +
  verified model facts, then numbered scripts building population/variants/purity/relation-key
  cardinality/model coverage).
- Comprehensive Kiro enterprise seat-farm investigation: full abuse-chain reconstruction (org standup →
  scripted thousands of seats → millions of premium-model agent turns → credit burn billed as OPEX, $0
  paid), several confirmed instances, and an "actionable residual = ZERO" empty-set proof.
- Recurring stand-up/weekend-review briefings answering a fixed battery of leadership questions; EC2-NI
  trend/forecast reports separating CPI (few-big, decaying) from INP (many-small, ramping) shapes.
- The ESC dashboard fix: report-vs-dashboard reconciliation to the cent, per-table ETL freshness diagnosis,
  two new v2 dashboard queries, and net-new enforcement/relations panels; a T&S forecasting input pack.

**Notable files**
- `.agents/query/2026-06-29-esc-dashboard-fix/report.md` — flagship reconciliation; 5x clean audit + v2 queries + new panels.
- `.agents/query/2026-06-15-kiro-seat-farm-comprehensive/report.md` — full seat-farm abuse-chain reconstruction + zero-residual proof.
- `.agents/query/2026-06-29-standup/report.md` — ~500-line stand-up with CORRECTED/OVERTURNED banners (run-1 → run-4 self-correction).
- `.agents/query/2026-06-11-ni-7d/report.md` — EC2-NI 7-day report separating CPI vs INP shapes.
- `.agents/query/2026-06-17-esc-ttx-pack/report.md` — sectioned T&S forecasting input pack.
- `.agents/arena/2026-06-18_170039-did-something-happen-in-kiro-fraud/meta.json` + `judge.md` — arena tournament record + judge synthesis.
- `.agents/debate/2026-06-24_130549-.../transcript.md` — debate that caught a fabricated reconciliation and corrected the count.
- `.agents/investigation/esc-2026-06-19-vn-nl-ring/00_params.md` + `legit_in_signature.csv` — params-driven ring deep-dive + purity-weighted legit carve-out.
- `.agents/query/2026-05-31-fraud-opex-report/scripts/` — example numbered-script workflow (schema_check → diagnose_fanout → build_pivot → service_trend).

---

### 5. Cluster_analysis — Agentic fraud-ring investigation harness

The largest project (~383 files) and — despite the name — **not** an ML clustering project: "clustering"
means fraud-ring detection by rule-based signal agreement. The centerpiece is a ~38KB agent spec defining a
disciplined 0–6.5 phase workflow (intake → signal normalization → scout → deep column sweep → ranked
expansion → confidence checks → legitimate-impact → false-positive carve-out → Word report → pattern
capture) with five human-confirmation gates. Around it sit three core SQL queries against registration-time
risk variables (DIVA+), ~89 Python scripts, and ~170 output artifacts from roughly 7–8 real investigations.
The data-science skill on show is feature engineering, signal weighting/tiering, adversarial validation,
and rigorous bookkeeping.

**What was built**
- A 0–6.5 phase agentic investigation SOP (~38KB) with five human-confirmation gates, deterministic
  non-clobbering artifact naming, and a resume-from-state protocol.
- Three reusable parametrized SQL queries: a flagged-fraud scout, the ~120-column deep
  registration-attribute workhorse, and a cluster-level legitimate-impact assessment.
- A Python helper layer (`fraud_analyzer.py`) with SQL-file injection, account-ID IN-clause injector, and
  `analyze_shared_attrs()` bucketing columns into exact/near/varied across seeds.
- A four-layer disposable-email classifier (curated personal list → ~5000-domain community blocklist →
  heuristics → two-source-corroborated web fallback) with monthly auto-refresh.
- A Phase 4.5 confidence-check engine (per-account independent-signal histogram, adversarial pass,
  drop-top-signal sensitivity, leave-one-out seed stability).
- A python-docx report generator producing a hard two-page executive body + unconstrained auditor appendix
  with overflow tightening.
- A Bedrock-fraud × domain-age WHOIS pipeline (cached, multi-registry regex parsing, account-vs-domain
  registration-gap flagging) and a multi-source extended-signal fusion re-ranker
  (ARMS/DSU/c-score/Bedrock-burst/domain-age) producing tiered CLOSE/REVIEW/DO_NOT_CLOSE dispositions.
- A single-account deep-profile tool; a living known-fraud-patterns catalog; per-investigation pipelines
  (vn-nl-ring, hrm-fit-normal, a bulk-shutdown wave, colombu, a multi-six-figure-OPEX-day root-cause).

**Notable files**
- `projects/Cluster_analysis/.kiro/agents/fraud-analyzer.md` — the ~38KB 0–6.5 phase SOP; the project's brain.
- `projects/Cluster_analysis/.kiro/steering/fraud-context.md` — schema/attribute dictionary + fraud-type glossary.
- `projects/Cluster_analysis/.kiro/steering/known-fraud-patterns.md` — living pattern catalog (Signals/Combinatorial-tell/Counter-signal).
- `projects/Cluster_analysis/.kiro/steering/disposable-email-domains.md` — personal patterns + heuristics (companion ~5000-domain blocklist).
- `projects/Cluster_analysis/scripts/fraud_analyzer.py` — core helper layer.
- `projects/Cluster_analysis/sql/scouting_query_part2.sql` — ~120-column registration-attribute workhorse.
- `projects/Cluster_analysis/sql/legitimate_impact.sql` — collateral-damage assessment (header documents a real paid_bills join bug that was fixed).
- `projects/Cluster_analysis/scripts/bedrock_domain_age_pipeline.py` — Bedrock × WHOIS domain-age pipeline.
- `projects/Cluster_analysis/scripts/rerank_with_extended_signals_20260521.py` — multi-source fusion re-ranker.
- `projects/Cluster_analysis/scripts/run_phase6.py` — python-docx report generator (seeds/fingerprint hardcoded).
- `projects/Cluster_analysis/scripts/lookup_account.py` — single-account deep-profile tool.
- `projects/Cluster_analysis/output/bulk-shutdown-2026-05-21/final-301/SUMMARY.md` — exemplary closure rationale (tiered confidence, carve-outs honored).
- `projects/Cluster_analysis/output/may6_1M_opex/SUMMARY.md` — multi-six-figure-OPEX-day root-cause breakdown.
- `projects/Cluster_analysis/output/vn-nl-ring/phase4_5_checks_*.md` — worked example of the four confidence checks.

---

### 6. Dashboards & Graph Explorers — BI / visualization / full-stack

The BI and visualization output for the AWS European Sovereign Cloud (ESC) fraud-prevention program, in
three delivery modes: (1) the **ESC Dashboard** — a large spec-driven Streamlit analytics app (~3,160 LOC,
~40 chart renderers) backed by ~40 parameterized QuickSight-ready SQL files, property-based tests, and a
formal Kiro spec, **launched and announced org-wide**; (2) two custom **graph-explorer** web apps that load
an entire account population, build a two-tier (hard/soft) relationship graph with purity×IDF edge
weighting, connected components, community detection, betweenness-centrality broker flagging, and render it
client-side with sigma.js/WebGL; and (3) **agent tooling** (agent_viewer live report mirror, agent_lab
Arena/Debate harness). A lightweight Flask dashboard monitors a specific fraud ring and rule performance.

**What was built**
- ESC Dashboard: multi-tab Streamlit app (Overall/Fraud/Financial/About), 5-KPI header, ~40 chart
  renderers (registration outcomes, cohort/activation analyses, C-score trajectories at T0/+7/+30/+90,
  age-vs-OPEX/C-score scatters, EC2-NI series, concentration-by-grain, fraud-type-transition Sankey,
  preventable-OPEX, sleeper classification).
- ~40 parameterized SQL files using a `{{TOKEN}}` + `{{TIME_GRAIN_BUCKET(col)}}` macro system; a
  render/run/load query layer with a day/week/month grain resolver and split grain-aware vs
  grain-independent cache.
- `esc_graph_explorer`: end-to-end relations graph builder + sigma.js UI loading the entire ESC population
  (bucketed under the 10K cap), with hard/soft edges, purity×IDF confidence, union-find components,
  greedy-modularity/label-propagation sub-communities, sampled betweenness-centrality broker flagging,
  precomputed layout, per-cluster legit-impact + bulk-close SQL generation.
- `pf_graph_explorer`: the same engine re-pointed at the global payments_fraud cluster, re-scoped to a
  windowed population with cluster-specific edge tuning.
- Graph-explorer frontend (~940 LOC): WebGL force-directed view, colour-by-linking-column, hover isolation,
  inspectors, component ranking, Dijkstra weighted trace-path, cross-cluster bridge panel, CSV export,
  on-demand ForceAtlas2 re-layout, server-side rebuild.
- `agent_viewer` (live report viewer, auto-follow newest run, CSV auto-compose, query-appendix index) and
  `agent_lab` (Arena fan-out + Debate loop + neutral convergence judge, per-call cost/latency/token telemetry).
- `esc_registration_dashboard`: Flask + Chart.js app monitoring a live ring, rule performance, blocklist
  hits, emerging fingerprints/emails/phones, and a bulk-shutdown ledger.
- A reconciled data pipeline with strict fraud counting (compromised-but-real customers kept in revenue,
  not labelled fraud) and a formal Kiro spec (requirements/design/tasks, mermaid diagrams, 6 correctness properties).

**Notable files**
- `projects/ESC Dashboard/scripts/build_streamlit_app.py` — the ~3,160-line app with ~40 chart renderers (each with description + how-to-read help).
- `projects/ESC Dashboard/scripts/queries.py` — query loader with `{{TOKEN}}`/`{{TIME_GRAIN_BUCKET}}` render layer.
- `projects/ESC Dashboard/config.py` — launch dates, fraud-type filter, hardcoded test-account exclusions, action tokens.
- `projects/ESC Dashboard/.kiro/specs/esc-dashboard-deep-expansion/design.md` — formal design (mermaid, 26-file wave plan, 6 correctness properties).
- `projects/ESC Dashboard/sql/legacy/` — ~30 numbered SQL files feeding the renderers.
- `projects/ESC Dashboard/tests/test_segment_and_preventable_opex.py` — property-based tests via a DuckDB shim.
- `projects/esc_graph_explorer/build_graph.py` — ~1,120-line graph backend (load→edges→components→communities→centrality→impact→layout→JSON).
- `projects/esc_graph_explorer/config.py` — edge tiers, soft-edge gating, NAT discounting, ring ground-truth signature.
- `projects/esc_graph_explorer/web/app.js` — ~940-line sigma.js frontend.
- `projects/esc_graph_explorer/ITERATIONS.md` — 12 documented improvement iterations with sources + verification.
- `projects/pf_graph_explorer/README.md` + `build_graph.py` — payments_fraud port (windowed population + cluster-specific tuning).
- `projects/agent_viewer/app.py` — live agent-run report viewer.
- `projects/agent_lab/orchestrator.py` + `runner.py` — Arena synthesis + Debate loop + neutral judge; headless `claude -p` invocation with cost/latency/token capture and parallel fan-out.
- `projects/esc_registration_dashboard/app.py` + `refresh_data.py` + `queries.py` — Flask dashboard server, ~13 ESC panels + 3 cross-cluster queries, single-source-of-truth SQL.
- `ESC_dashboards_launch_announcement.md` — the org-wide launch email.

---

### 7. Investigation Projects — Forensics, ML, forecasting

Eight investigation/analysis projects from deep single-account root-cause forensics to productionized ML
and forecasting. **Sage_maker_inv** traced multi-six-figure SageMaker limit-bypass abuse to a config regex
gap in Amazon's Ironman limit-enforcement layer (a newer instance family never added to the c-score
threshold regex), reading actual production Java plus a ~47K-line cfg to disprove an earlier wrong
hypothesis. **Sage_maker_alerts** operationalized that finding into an hourly launchd-scheduled Slack alert
pipeline. **Sleeper** is a full XGBoost pipeline. **NI Forecast** is a unit-tested survival/decay
forecasting engine. **Remaining_fraud_damage** sizes uncaught fraud two independent ways. **DSU_overview**
reverse-engineers DIVA fraud rulesets from PDFs into a catalog + Cytoscape graph. **Databricks** is a Flask
SQL-notebook web app and home of the JDBC/SAML bridge the whole workspace depends on. **datagrip_imports**
is a curated, README-triaged SQL archive.

**What was built**
- Sage_maker_inv: forensic root-cause (FINDINGS doc) tracing the bypass to a regex gap + universal
  zero-limit rows; a reusable KNOWLEDGE.md on the three-layer c-score enforcement model; per-hour violation
  + probe scripts.
- Sage_maker_alerts: hourly alerting pipeline (SQL → 24h dedupe → Slack webhook) wired to a launchd plist
  firing at :05, with CSV dedupe state.
- Sleeper: end-to-end XGBoost pipeline (4 extraction SQLs, feature engineering, temporal train/test split
  with held-out validation early stopping, PR-AUC/ROC/confusion-matrix evaluation, full-population tiered
  scorer, Streamlit dashboard with rule-proposal modules).
- NI Forecast: pure unit-tested forecast engine (decay + calibrated net-inflow + unlabeled-related +
  dormant-sibling bands), staged-query data layer, Outbreak Action Table SQL, Streamlit 3-tab UI,
  smoke/reconciliation script.
- Remaining_fraud_damage: two-part uncaught-fraud sizing — excess-over-trusted-floor by c-score bucket, and
  an exponential catch-hazard decay/survival fit with an asymptotic never-caught fraction.
- DSU_overview: PDF-to-catalog pipeline (parse rules into rule_catalog.json, export CSV + SQL value-lists,
  build interactive Cytoscape.js flow graph).
- Databricks: Flask + CodeMirror SQL-notebook web app (multi-connection registry, query
  history/cancellation/CSV export, schema browser, EXPLAIN-based analyzer with sort/dist-key tips, notebook
  persistence, Midway refresh) + the bundled Java JDBC/SAML bridge.
- datagrip_imports: README-triaged archive (reusable c-score/risk interval CTEs, scouting query, DSU
  dashboard queries, the Kiro rule-trigger series converging on v5).

**Notable files**
- `projects/Sage_maker_inv/FINDINGS_*.md` — forensic conclusion + documented self-correction after reading the Java.
- `projects/Sage_maker_inv/KNOWLEDGE.md` — reusable Ironman c-score enforcement reference.
- `projects/Sage_maker_inv/CheckAccountResourceUtilizationReservationActivity.java` — the production enforcement code read to disprove the earlier hypothesis.
- `projects/Sage_maker_inv/IronmanUtilizationServiceDefaultResourceLimits.cfg` — the ~47K-line limit config at the center of the gap.
- `projects/Sage_maker_alerts/hourly_violations.sql` + `scripts/run_hourly_alert.py` + `com.haniycb.sagemaker-alerts.plist` — the operationalized hourly Slack alert.
- `projects/Sleeper/src/train.py` — XGBoost training (temporal split, held-out validation, CV).
- `projects/Sleeper/src/features.py` — feature engineering (derived + timing features, one-hot capping).
- `projects/Sleeper/src/sleeper_analysis.py` — Streamlit deep-dive with rule precision/recall proposals.
- `projects/Sleeper/output/evaluation_metrics.json` — PR-AUC/ROC/confusion-matrix results (fraud-heavy cohort).
- `projects/Sleeper/output/feature_importances.csv` — shows `min_cscore_ever` dominating (leakage flag).
- `projects/NI Forecast/forecast.py` + `queries.py` + `tests/test_forecast.py` — pure forecast engine + staged data layer + invariant tests.
- `projects/Remaining_fraud_damage/model.py` + `queries.py` — excess-over-floor + exponential hazard survival fit (column names verified).
- `projects/DSU_overview/parse_rules.py` + `build_viz.py` + `rule_catalog.json` — PDF rule parser → catalog → interactive Cytoscape graph.
- `projects/Databricks/app.py` — Flask SQL-notebook server.
- `projects/datagrip_imports/README.md` + `Constant Resused SQLs/Scouting Query.sql` + `v5.sql` — triaged archive + canonical scouting CTE + cleanest unified Kiro rule-trigger query.

---

### 8. Output Runs — Ad-hoc investigation archive + Kiro specs

The `output/` tree archives ad-hoc investigations and SQL-deliverable runs, and `.kiro/` holds a formal
spec for a production dashboard query. It spans payment-card fraud trend analysis (Japan deep-dives for an
Adyen chargeback-reporting dispute), per-cohort resource forensics (a SageMaker abuse cohort),
a fresh-email-domain Bedrock abuse use-case, an ESC opex/revenue reconciliation, and a bulk-shutdown
candidate snapshot. The dominant discipline visible is schema-confirmation-before-aggregation: ~28 loose
schema-probe artifacts and a dedicated probe-script phase in the Kiro spec.

**What was built**
- Japan fraud-trend deep-dive (`jp_fraud_trends` + `_v2`): 18-month chargeback-vs-OPEX analysis decomposing
  JP fraud into two waves; issuer/BIN/email/IP/ASN/device-fingerprint concentration; legit-vs-fraud split
  on the disputed card population.
- Audience-tiered report set for the Adyen JFR threshold-breach response (leadership summary,
  vendor-response framing, simplified variant).
- Coordinated-ring deep-dive (connected-component clustering on shared device fingerprints; identification
  of still-OK likely-undetected ring members).
- SageMaker abuse-cohort forensic pack (OPEX, instance-type/count profiling, c-score-at-first-activity vs
  current, endpoints/notebooks inventory, hourly concurrency, ARMS history).
- Fresh-domain Bedrock abuse bootstrap (registration-time tripwire signature: domain age ≤30d + no DKIM +
  Bedrock OPEX threshold; calibration anchors).
- ESC May opex/revenue reconciliation (stepwise S0→S4 gap decomposition).
- Bulk-shutdown candidate snapshot (timestamped INSERT scripts staging fraud accounts tied to an MCM).
- Kiro spec `computation-opex-revenue-rollup` (16 requirements, dependency-graphed task waves, ~17
  validation/probe scripts) for a self-contained GROUPING SETS rollup; ~28 loose schema-probe smoke-test artifacts.

**Notable files**
- `output/jp_fraud_trends/NARRATIVE.md` — first-pass JP two-wave deep-dive with explicit caveats.
- `output/jp_fraud_trends_v2/SUMMARY_FOR_DAVOR.md` — leadership/vendor-response summary.
- `output/jp_fraud_trends_v2/JP_FRAUD_RESPONSE.md` — Adyen JFR response framing.
- `output/bedrock_fresh_domain/00_params.md` + `run_00_bootstrap.py` — fresh-domain Bedrock use-case spec + schema-confirm/calibration-gate bootstrap.
- `output/esc-opex-rev-may-compare/run_may_compare.py` — S0→S4 stepwise gap decomposition.
- `output/sage_maker_25acct/03_cscore_at_activity.sql` + `11_concurrency.sql` — c-score-at-first-activity vs current; hourly instance-concurrency (correct column names).
- `output/V2229172579/snapshot_*.sql` — bulk-shutdown staging INSERT tied to an MCM.
- `.kiro/specs/computation-opex-revenue-rollup/{requirements,design,tasks}.md` — 16-requirement requirements-first spec, live-schema-resolved design, 8-wave dependency-graphed plan.
- `output/_mm_classic.err` — example recorded probe error (probe-and-record discipline).

---

## Achievements (The Good)

**Production-grade infrastructure built solo**
- Cut per-query latency by roughly an order of magnitude (~3.9s cold → ~0.4s warm) via a warm-connection
  daemon that pays the SAML handshake once per investigation, kept as a pure optional performance layer that
  degrades gracefully to in-process execution.
- Unified two heterogeneous production Redshift clusters (SAML SSO + password auth) behind one API and one
  normalized result shape, making cluster reassignment a one-line change across all projects.
- Built a SAML/Midway Redshift JDBC bridge in pure Python+Java with zero extra runtime install by reusing
  DataGrip's bundled JVM; shipped a DB-API shim so legacy code migrated with zero call-site changes.
- Built and maintained the bridge + daemon that every other project in the workspace runs on.

**Shipped, launched, operationalized**
- Designed, built, and **announced org-wide** the ESC fraud-and-revenue dashboard — the first unified view
  of fraud landing on a brand-new AWS region — covering every ESC account since launch, with reconciled
  dollars and a headline that flagged accounts are shut down in ~a day on average with only a tiny number of reversals.
- Turned a one-off SageMaker investigation into durable infrastructure: an hourly, launchd-scheduled,
  deduped Slack alert for the bypass signature.
- Authored two generations of the canonical account-level dashboard source the fraud team's QuickSight binds to.

**Novel analytical tooling**
- Built a seedless whole-population fraud-relations graph explorer that makes rings visible as clusters —
  validated to place 100% of a known ring in a single rendered component — with an information-retrieval
  edge-confidence model (excess-purity-over-base-rate × IDF) specifically engineered for a fraud-dense
  population where naive purity is useless, plus a formal key-reliability audit that removed identifiers
  which would have falsely linked legitimate customers.
- Built a self-auditing fact graph that assigns confidence levels, tracks source drift via hashing, and
  runs live-Redshift probes to confirm/refute the KB's own claims.
- Built a self-regenerating model-monitoring pipeline that auto-enrolls newly discovered enforcement
  signatures so no model is silently dropped from precision tracking.

**Forensics & data science with real impact**
- Root-caused a multi-six-figure SageMaker abuse incident end-to-end, reading production Java and a
  ~47K-line config to prove a containment-score enforcement regex gap — and overturned my own earlier
  hypothesis after re-reading the code.
- Reconstructed an end-to-end enterprise seat-farm abuse chain from raw usage data and proved the actionable
  shutdown residual was an empty set, distinguishing detection latency from a coverage gap.
- Reconstructed a banned-to-scrape investigation workbench entirely in SQL, validating value-level parity
  against analyst-confirmed cases.
- Built a deployable XGBoost classifier with disciplined ML hygiene (temporal split, separate validation set
  for early stopping, class-imbalance weighting, 5-fold CV, PR-AUC headline); a survival/hazard forecasting
  engine grounded in Kaplan-Meier-style survival with slope-calibrated inflow; and two independent
  uncaught-fraud sizing models.
- Reframed a vendor compliance escalation (Adyen JFR breach) as fraud-volume growth rather than a
  revenue-denominator artifact, surfacing the harder caveat as the key open question.

**Methodology & verification as a practice**
- Sustained a near-daily investigation cadence over a month-plus producing ~30 leadership-ready reports
  backed by 800+ query scripts and 900+ outputs, the majority reconciling headline numbers to the cent.
- Instituted adversarial self-verification: a second agent re-checks the first, claims reconciled across
  independent reproductions, a 5x clean-audit pass before declaring a query correct, and superseded findings
  openly overturned with visible correction banners.
- Caught LLM fabrication through a structured debate loop (an agent invented an impossible reconciliation and
  a wrong headline) and drove the agents to a corrected, converged answer.
- Built false-positive aversion structurally into tooling: mandatory adversarial pass, sensitivity test,
  leave-one-out, and multi-condition carve-out gates; defensible bulk-action SQL restricted to
  hard-identifier matches; do-not-shut false-positive anchors catalogued as first-class calibration cases.

---

## Engineering & Analytical Skills Demonstrated

**Data / SQL**
- Advanced Redshift: multi-CTE pipelines (13–25 CTEs), window functions (ROW_NUMBER/LAG/LEAD interval
  timelines, islands-and-gaps), GROUPING SETS single-pass multi-grain aggregation, FULL OUTER JOIN
  money-flow unification, LISTAGG, regexp annotation parsing, IPv4-to-CIDR geolocation via integer-range joins.
- Cohort construction & segmentation; enforcement attribution modeling (bot/model allowlists, GiFT-trigger
  backfill, Sherlock-vs-analyst-bulk disambiguation, multi-tier `enforced_by` cascade); fraud-label
  resolution with deterministic priority cascades.
- Data-quality engineering: THF-mirror vs ESC-native reconciliation, landing-freshness classification, JDBC
  10K-row-cap MOD-bucketing, fan-out/grain integrity checks.
- Schema-confirmation discipline via SVV_ALL_COLUMNS; parameterized SQL templating for QuickSight
  portability; bracket-aware CTE extraction.

**Python / tooling**
- Stack-frame introspection for caller-aware routing; AF_UNIX socket IPC with custom protocols;
  subprocess/Popen with detached sessions; threading locks; daemon/service design (idle watchdog,
  stale-socket reclamation, PID files, graceful teardown); lazy imports; minimal `.env` parsing with env precedence.
- pandas (dtype-safe loading, account-ID normalization, groupby/merge); scipy.optimize curve_fit; joblib;
  CLI design with argparse; config-driven SQL code generation; python-docx with enforced page layout; WHOIS
  subprocess automation with multi-format regex parsing and caching.

**BI / visualization / full-stack**
- Streamlit (tabs, cache_data, fragments/auto-refresh, session_state); Plotly Express + graph_objects
  (stacked/grouped/overlay bars, log-axis scatters with median overlays, histograms, heatmaps, Sankey);
  Flask (REST refresh API, threading locks).
- Frontend JS: sigma.js + graphology (WebGL graph rendering, reducers, camera animation), ForceAtlas2,
  Chart.js, CodeMirror, Cytoscape.js, client-side CSV export, custom static HTTP server with POST-rebuild endpoint.

**Data science / ML / quantitative**
- Graph/network analysis: union-find components, greedy-modularity & label-propagation community detection,
  sampled betweenness centrality, Dijkstra weighted shortest path; IR-style scoring (IDF, purity/lift over
  base-rate, excess-purity normalization); fuzzy matching (rapidfuzz with postal-block blocking).
- ML engineering: temporal data splitting, leakage-aware early stopping, one-hot frequency capping,
  native-NaN handling, risk-tier bucketing, PR-AUC-first evaluation.
- Survival/hazard modeling: exponential catch-hazard fit, integration to survival curve, asymptotic
  never-caught fraction; forecasting (decay curves, steady-state inflow with residence time, P50/P90 bands,
  least-squares slope calibration).
- Property-based testing (hypothesis + DuckDB shim); fixed random_state, smoke tests, invariant tests.

**Fraud domain**
- AWS internal fraud-systems fluency: ARMS enforcement queue, containment/c-score, DSU/DIVA+ rule engine,
  GiFT/Arsenal/IRIS/Sherlock, Ironman, Kiro rules, Fraud Relations.
- Ring-signature definition, calibration-anchor methodology, purity-weighted overlap, three-definition
  fraud lens (realized loss vs exposed/prevented OPEX vs fraud-flag), baseline-corrected concentration
  analysis, EC2 normalized-instance (NI) math; reading production service code/config to reason about enforcement paths.

**Agent / LLM orchestration**
- Multi-agent orchestration: competing-persona arena with an LLM judge, two-agent adversarial debate to
  convergence, params-driven structured investigation; headless `claude -p --agent` subprocess orchestration
  with ThreadPoolExecutor fan-out and cost/latency/token telemetry.
- Claude Agent Skills authoring (YAML frontmatter, when-to-load triggers, versioned metadata, decision
  trees); MCP server authoring (FastMCP, Midway+CSRF auth); context engineering (tiered loaders, routing
  tables, token-budget cost modeling, posture-vs-reference separation); Kiro spec-driven development.

**Knowledge management**
- Curated KB design, atomic-note/Maps-of-Content (Obsidian/Zettelkasten) methodology, source-of-truth
  discipline, verification-gated learning loops, confidence-laddered fact graphs with drift detection.

**Process**
- Reconciliation-first methodology, schema-probe-before-query discipline, requirements-first specs (RFC-style
  acceptance criteria, dependency-graphed task waves), deterministic non-clobbering artifact naming, full
  per-investigation audit trails, honest in-place correction with dated cross-references.

---

## Problems, Mistakes & Tech Debt (The Bad / Honest)

**Environmental / infrastructure fragility**
- A hard 10K-row JDBC cap silently truncates large results; the `truncated` flag surfaces only in `rsq.py`
  stderr, so `get_df` can quietly return a capped DataFrame — a real footgun for large aggregations (the
  MOD-bucketing workaround is a manual patch, not a fix).
- PYTHONPATH must be manually cleared because a sibling tool injects Python-3.10 site-packages onto a 3.9
  interpreter; SAML cookie staleness requires manual `pkill`/daemon restart after `mwinit`; the ESC warm
  daemon can be poisoned by the bad env; reliance on DataGrip's borrowed JVM; `__pycache__` carries
  cpython-313 `.pyc` files while operations target 3.9.
- `ssl_insecure=true` in the payments_fraud JDBC URL disables TLS cert verification; the Databricks app
  sets `ssl_insecure=True` and holds pasted temporary AWS creds in process memory.
- Layering oddity: the core `jdbc_bridge.py`/`RedshiftRunner.java` live under `projects/Databricks`, not
  `tools/`, discovered via candidate-path search with a hardcoded legacy fallback. A stray `_tmp_run.txt` is
  left committed in `tools/`.
- The Java bridge's hand-rolled JSON extractor assumes flat single-line JSON; certain escape sequences could
  confuse it. `get_dfs` runs sequentially (intentional given the global lock, but batching saves
  round-trips, not wall-time).

**Secrets / production-data hygiene**
- `Cluster_analysis/.env.example` embeds a real-looking ESC production Redshift hostname/port/DB in a
  shareable template.
- Real account IDs hardcoded inline: a calibration-exclusion list copy-pasted across several SQL files and
  duplicated again in ESC Dashboard `config.py`; bulk-shutdown INSERT files enumerate hundreds of literal
  production account rows with row terminators fixed up by an ad-hoc `_wrap_inserts.py`.
- The Columbo MCP is the same capability project memory records as banned for the bulk-scraper use case —
  its role is ambiguous; one JP deep-dive used the now-banned `columbo_scraper.py` and left a large
  `columbo_profiles.json`. `agent_lab`'s default tool-permission "bypass" mode auto-approves every tool
  (mitigated by read-only agents).

**Knowledge-base drift & contradictions**
- Triple maintenance burden: the same knowledge lives in context-project markdown, the Obsidian vault, and
  the context-audit facts.json seed — three sources kept in sync by hand. The vault is already a stale mirror
  (one calibration note still asserts a corrected-away "DH hosts not released" claim).
- The audit's facts.json is a hand-curated early-June seed that can drift behind rapidly-evolving
  lessons/patterns; several `_Last updated_` headers predate the files' newest entries; resolved internal
  contradictions left in place unmarked as obsolete; some Kiro thresholds were repeated as fact before being
  traced and found inconsistent with the actual rule code; the audit's verification value degrades when the
  cluster is unreachable.
- Load-bearing "facts" drifted stale and were caught only on re-check (a revenue-undercount caveat was
  measured far smaller than the headline; a model-monitoring coverage lesson was off on both numerator and denominator).

**File / iteration sprawl**
- SQL corpus: 100+ underscore-prefixed scratch files alongside polished deliverables with no archive folder;
  overlapping naming schemes (`_R2_FINAL`, `_R2_v6`, `_iter1..7`, `legitimate_impact_v4/v6/v7`) make the
  authoritative iteration ambiguous.
- Hardcoded static snapshots embedded as giant UNION-ALL literal lists in the production dashboard (dozens
  to ~hundreds of ids) that go stale and need manual refresh.
- Cluster_analysis: dozens of near-identical per-investigation runners cloned per case/timestamp; version
  proliferation in outputs (v1/v2/focused/final); hardcoded seeds/fingerprints/HUMAN_PASS_IDS inlined;
  connection-routing inconsistency (documented ESC-only but later pipelines hardcode `payments_fraud`); a
  dead `if False` ternary hack; stray tracked `.pyc` files; the documented SOP was aspirational while real
  work diverged into ad-hoc `debug_*`/`triple_check_*` scripts.
- esc-dashboard-fix run holds 200+ files with overlapping ad-hoc prefixes and many `*_PENDING_CONFIRM.md`;
  inconsistent run-folder conventions (many deep-dives ship only CSVs/charts with no `report.md`, so the live
  viewer renders nothing — a lesson learned the hard way).
- datagrip_imports: by my own README, only ~15 of ~50 files are current keepers (the Kiro query alone has 9+
  variants; scratch files like `eeeee.sql`, `ff.sql`); README notes several known SQL bugs (broken CTE
  comment splitting, duplicate CTE defs, leftover debug LIMIT, empty subquery).
- Report proliferation in jp_fraud_trends_v2 (multiple overlapping markdown docs, no single canonical);
  multi-MB redundant CSV exports; an empty `my_aws_impact/` folder; an empty `bedrock_fresh_domain/sql/`
  (run stopped at the calibration gate); headline JP numbers differ across sibling reports (different
  windows); near-identical snapshot files versioned only by filename timestamp.
- Graph-explorer README drift: pf_graph_explorer's body was copy-pasted from ESC and still describes the
  wrong population/base-rate; component IDs are not stable across rebuilds; counts drift run-to-run with
  sysdate windows; many one-off probe/recon scripts left in the tree.

**Modeling caveats & open questions**
- Likely label leakage in the Sleeper model: `min_cscore_ever` (top feature) plus
  `cscore_at_spike`/`days_spike_to_detection` are post-hoc (c-score is zeroed at enforcement), so the
  headline PR-AUC (~0.9+) is probably optimistic; the model trains/tests on a curated fraud-heavy sample
  (not the true low-base-rate population), uses `LIMIT` after `RANDOM()` without `ORDER BY` (not
  guaranteed-uniform), references a missing predictions.parquet, and ships dead 0-importance features.
- The core SageMaker enforcement question (does CreateTransformJob actually call the synchronous check, or is
  there a DDB override) was left unresolved and handed to Shared Services — narrowed to hypotheses, not confirmed.
- DSU rule-name parsing is fragile PDF scraping requiring a hand-maintained OVERRIDES dict for several
  mis-parsed rows; a fallback hashes the marker line yielding meaningless `row_xxxx` names.
- `model_monitoring` view is a known large undercount from a hand-maintained ~9-row config that silently
  drops unmapped models; THF-mirror absolute dollars don't reconcile one-to-one (standing caveat);
  KNOWLEDGE.md notes short retention windows that limit back-validation; some KB facts remain self-flagged
  uncertain with named owners to confirm.

**Cost / structural**
- Arena/debate are expensive (a single multi-persona question cost several dollars; one persona ran ~8
  minutes; debate adds rounds); two early arena runs recorded total_cost 0.0 (instrumentation gap); several
  arena questions are near-duplicate re-runs.
- Two launch dates disagree across sources (papered over by showing both); the launched dashboard ships
  trustworthy trends/rates but only "rough" absolute dollars pending Data Engineering fixes; over-grouping
  hub keys (placeholder phones/fingerprints shared by many accounts) flagged as an open blocklist item;
  Streamlit renders all tabs on every rerun (near-free via caching, but structural).

---

## CV-Ready Bullet Points

**Data infrastructure & tooling**
- Designed and built a home-grown data-access platform unifying two heterogeneous production Redshift
  clusters (Midway/SAML SSO and password auth) behind a single Python API with one normalized result
  contract, so callers never touch auth, drivers, or connection strings.
- Engineered a persistent warm-connection daemon (Unix-socket IPC, idle watchdog, stale-socket reclamation)
  that amortizes the multi-second SAML handshake across an entire investigation, cutting per-query latency by
  roughly an order of magnitude (~3.9s → ~0.4s) while remaining a pure optional layer that degrades
  gracefully to in-process execution.
- Built a SAML/Midway-federated Redshift JDBC bridge as a persistent Java subprocess speaking line-delimited
  JSON, reusing an existing bundled JVM to avoid any extra runtime install, with health-ping reconnects,
  query cancellation, and type-aware result encoding; shipped a DB-API compatibility shim so legacy
  pandas/redshift_connector code adopted it with zero call-site changes.
- Implemented caller-aware connection routing via stack-frame introspection plus a project-to-cluster table,
  making cluster reassignment a one-line change across the workspace; delivered analyst ergonomics on top
  (multi-format SQL CLI, query-batching helper, Plotly chart module, idempotent Streamlit launchers, and a
  cross-platform MCP server for live fraud data).

**BI, visualization & full-stack**
- Designed, built, and launched an org-facing fraud-and-revenue BI dashboard for a brand-new AWS region — a
  multi-tab Streamlit app (~3,160 LOC, ~40 interactive Plotly charts) backed by ~40 parameterized,
  QuickSight-portable Redshift SQL files and a reconciled pipeline, giving leadership the first unified view
  of fraud on the partition.
- Engineered a novel whole-population fraud-relations graph explorer (Python backend + sigma.js/WebGL
  frontend, ~2,000 LOC) surfacing fraud rings as visual clusters via union-find components, modularity
  community detection, betweenness-centrality broker flagging, and an IR-style excess-purity-over-base-rate ×
  IDF edge model; validated to place 100% of a known ring in a single cluster, and ported to a
  multi-million-account global cluster via a windowed re-architecture.
- Drove dashboard expansion through a formal spec (requirements/design/tasks with correctness properties),
  schema-probe-gated optional features, and a hypothesis property-based test suite validating reconciliation
  and rendering invariants.

**SQL & analytics engineering**
- Built and maintained the canonical account-level fraud dashboard source (two generations) collapsing an
  entire registration cohort into one documented row-per-account fact table, with a multi-tier
  enforcement-attribution model that replaced a misleading ~98% automation figure with an honest ~12–13%
  auto-shutdown rate.
- Reconstructed a banned-to-scrape investigation workbench entirely in SQL, mapping ~15 UI widgets to source
  tables across account/detail/discovery grains and validating value-level parity against analyst-confirmed cases.
- Ran a disciplined detection-rule program (100+ iterations) converging on multi-condition fraud-ring rules
  scored for precision/recall and bounded by false-positive carve-out analysis; designed signature-only ring
  selectors emitting per-account action buckets that neutralize contained/internal-test accounts via
  containment score rather than brittle heuristics.
- Authored a self-regenerating model-monitoring pipeline (JSON registry → code generator → generated SQL →
  HTML/PNG/Quip dashboards) that auto-enrolls newly discovered signatures; established a mirror-vs-native
  reconciliation discipline that drove a revenue undercount down to a fraction of a percent; engineered
  data-landing completeness gating so partial-load days are never misread as metric drops.

**Data science, ML & forecasting**
- Built an end-to-end XGBoost fraud-detection pipeline (~2,600 LOC, ~90 engineered features) with
  leakage-aware ML hygiene (temporal split, held-out validation early stopping, class-imbalance weighting,
  5-fold CV) plus a Streamlit dashboard producing a tiered investigation queue.
- Designed a unit-tested survival/decay forecasting engine for fraud compute load, calibrating steady-state
  inflow to the observed trailing slope so as-is vs intervention scenarios separate honestly, with P50/P90
  cones and an account-level action table; modeled uncaught-fraud size two independent ways (excess-over-floor
  by score bucket and an exponential catch-hazard survival fit yielding an asymptotic never-caught fraction).

**Forensics & domain investigation**
- Root-caused a multi-six-figure cloud-compute fraud incident end-to-end, reading production Java and a
  ~47K-line resource-limit config to prove a containment-score enforcement gap (a newer instance family
  missing from the threshold regex), and shipped the finding into production as an hourly, launchd-scheduled,
  deduped Slack alert.
- Reconstructed an end-to-end enterprise seat-farm abuse chain from raw usage data and proved the actionable
  shutdown residual was an empty set, isolating detection latency from coverage gap; reverse-engineered
  production fraud rulesets from PDF exports into a structured catalog and interactive graph.
- Led a multi-week Japan payment-fraud deep-dive that reframed a vendor compliance escalation (Adyen JFR
  breach) as fraud-volume growth rather than a revenue artifact, producing audience-tiered reports backed by
  dozens of SQL cuts and shared-fingerprint connected-component ring clustering.

**Agent/LLM orchestration & knowledge engineering**
- Built a reusable AI-agent orchestration methodology — competing-persona "arena" tournaments with an LLM
  judge, two-agent adversarial debate to convergence, and params-driven structured deep-dives — turning
  ad-hoc fraud questions into auditable, reproducible run folders, and caught LLM fabrication through the debate loop.
- Architected a multi-layer context-engineering system (a curated ~16-file KB fronted by custom Claude Skills
  and tiered bootstrap protocols) plus a self-auditing fact graph with confidence ratings, source-drift
  detection, and one-click live-data verification probes — institutionalizing a "don't trust an untraced
  fact" discipline and a verification-gated learning loop that promotes findings only after re-running their
  evidence against production data.

**Methodology & rigor (cross-cutting)**
- Sustained a near-daily investigation cadence over a month-plus producing dozens of leadership-ready reports
  backed by 800+ query scripts and 900+ outputs, with headline numbers reconciled to the cent; instituted
  adversarial self-verification (a second agent re-checks the first, a 5x clean-audit before declaring a query
  correct) and surfaced corrections openly rather than burying them.
- Built false-positive aversion structurally into the tooling (adversarial pass, drop-top-signal sensitivity,
  leave-one-out stability, multi-condition carve-out gates, hard-identifier-only bulk-action SQL), and
  established schema-confirmation-before-aggregation as standard practice across the workspace.
