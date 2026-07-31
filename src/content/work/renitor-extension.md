---
title: "Renitor: your coding task outlasts any one AI agent"
role: "Independent product: designed, built, shipped"
period: "2026"
theme: "Developer tools · AI orchestration"
track: "Product"
company: "Independent"
order: 4.5
summary: "A published VS Code extension: when one AI coding agent stops from a quota cap, a crash, or a bad answer, another continues with the task intact, and a deterministic safety layer reviews risky commands before they run."
context: "Developers who use AI coding agents live with a specific frustration: a subscription caps or a session dies mid-task, and the next tool starts from zero. The repo context, the decisions, and the failing test all get re-explained by hand. Nothing on the market carried a task across agents cleanly."
contribution: "I designed, built, and published Renitor (v1.75 on the VS Code marketplace, live at renitor.com). Repo-aware handoffs carry an unfinished task across 11 coding agents, including Claude Code, Codex, and Cursor, as a structured checkpoint plus a paste-ready continuation prompt, with a round-trip handback that re-injects natively into Claude Code. A multi-model chat runs Claude, GPT, Gemini, and 22 free models in one thread, failing over automatically when a provider hits its cap. A deterministic safety layer reviews risky commands before they run, and a failover dry-run plus a privacy inspector show what will happen before it does. Local-first: no backend, zero telemetry, keys in the OS keychain."
outcome: "A working, published product with real users, and the engineering to back its claims: the safety layer is deterministic rather than model-judged, the privacy story is inspectable, and the handoff format is versioned and tested. Free during the open launch."
impact: "A shipped developer product: <strong>11-agent task handoffs, automatic model failover, and a deterministic command-safety layer</strong>, local-first with zero telemetry."
counterfactual: "Every capped session stays a restart from zero. The developer re-explains the repo, the decisions, and the failing test to the next agent by hand, or pays for capacity they only need in bursts."
indexMetric: 0
metrics:
  - chart: "signal-matrix"
    label: "What a handoff carries between agents"
    signals:
      - "Repo context"
      - "Git state"
      - "Decisions made"
      - "What is broken"
      - "Next steps"
      - "Continuation prompt"
    activeCount: 6
    caption: "A structured checkpoint moves the task across 11 coding agents with nothing re-explained."
  - chart: "stat"
    label: "Coding agents a task can move across"
    value: "11"
    context: "Claude Code, Codex, Cursor, and more, via structured repo-aware handoffs."
  - chart: "stat"
    label: "Models in one conversation"
    value: "25"
    context: "Claude, GPT, Gemini, and 22 free models, with automatic failover when a provider caps."
    emphasis: false
  - chart: "stat"
    label: "Telemetry"
    value: "0"
    context: "Local-first. No backend, no analytics, and keys live in the OS keychain."
    emphasis: false
tags: ["VS Code extension", "AI agents", "Product design", "TypeScript", "Privacy by design"]
---

Renitor started from a frustration I had myself. An AI coding agent dies
mid-task from a quota cap, a crash, or a bad answer, and the next tool starts
from nothing. The repo context, the decisions made, the failing test: all
re-explained by hand, every time.

The core of the product is the **handoff**, a structured repo-aware checkpoint
covering git state, decisions, what's broken, and what's next, plus a
paste-ready continuation prompt that works across **11 coding agents**. The
round trip matters as much as the departure. Work done elsewhere comes back
into Claude Code natively, so the original session knows what changed.

Around that core grew a multi-model workbench: **Claude, GPT, Gemini, and 22
free models in one conversation**, with automatic failover when a provider
hits its usage cap. The same thread simply continues on the next model. Boss &
Worker and Debate modes put models to work together on one task.

Two design commitments shaped everything. First, **safety is deterministic**.
A rules-based layer reviews risky commands before they run, and a failover
dry-run plus a privacy inspector show exactly what will happen before it does,
so nothing depends on a model probably catching it. Second, **local-first**.
There is no backend, no analytics, and zero telemetry, and API keys live in
the OS keychain. The extension's own infrastructure never sees your code.

It ships as a published VS Code extension, currently v1.75, free during the
open launch, with the source, the versioned handoff format, and the test suite
to back the claims.
