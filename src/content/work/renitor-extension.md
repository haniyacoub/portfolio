---
title: "Renitor: your coding task outlasts any one AI agent"
role: "Independent product: designed, built, shipped"
period: "2026"
theme: "Developer tools · AI orchestration"
track: "Product"
company: "Independent"
order: 17
featured: false
draft: false
summary: "A published VS Code extension where an unfinished coding task survives the agent that started it, behind a deterministic safety layer rather than a model's judgment."
context: "Developers who use AI coding agents lose work to one specific failure: a subscription caps or a session dies mid-task, and the next tool starts from zero. The repo context, the decisions, and the failing test all get re-explained by hand. Nothing on the market carried a task across agents cleanly."
contribution: "I designed, built, and published Renitor (v1.75 on the VS Code marketplace, live at renitor.com). A repo-aware handoff carries an unfinished task across 11 coding agents, including Claude Code, Codex, and Cursor, as a structured checkpoint plus a paste-ready continuation prompt, with a round-trip handback that re-injects natively into Claude Code. A multi-model chat runs Claude, GPT, Gemini, and 22 free models in one thread and fails over automatically when a provider hits its cap. Boss & Worker and Debate modes put several models on one task together. Safety is a deterministic rules layer that reviews risky commands before they run, with a failover dry-run and a privacy inspector that show what will happen before it does. It is local-first: no backend, zero telemetry, and API keys held in the OS keychain."
outcome: "A published product with real users, and claims that are checkable rather than asserted: the safety layer is deterministic rather than model-judged, the privacy story can be read off the inspector, and the handoff format is versioned with a test suite behind it. Free during the open launch."
impact: "A coding task now moves across <strong>11 coding agents</strong> and fails over across <strong>25 models</strong> without being re-explained, behind a deterministic command-safety layer and <strong>zero telemetry</strong>."
counterfactual: "Every capped session stays a restart from zero, or the developer pays for capacity they only need in bursts."
indexMetric: 0
metrics:
  - chart: "gate-funnel"
    label: "What a handoff carries, in the order it is assembled"
    unit: "one unfinished task"
    stages:
      - name: "Repo context"
        note: "Captured from the repo, not re-typed by hand."
      - name: "Git state"
        note: "The branch and the diff travel with the task."
      - name: "Decisions made"
        note: "What was already settled travels with the task."
      - name: "What is broken"
        note: "The failing test goes across too."
      - name: "Next steps"
        note: "What comes next is recorded, not reconstructed."
      - name: "Continuation prompt"
        note: "Paste-ready, and it works across 11 coding agents."
        key: true
      - name: "Handback"
        note: "Work done elsewhere re-injects natively into Claude Code."
    caption: "Order is the point: the continuation prompt is only useful because the five fields before it are already filled, and the handback closes the round trip so the original session knows what changed."
  - chart: "signal-matrix"
    label: "What holds without a model's judgment, and what the product does not have"
    signals:
      - "Rules-based command review"
      - "Failover dry-run"
      - "Privacy inspector"
      - "No backend"
      - "Zero telemetry"
      - "Keys in OS keychain"
      - "Versioned handoff format"
      - "Test suite"
    activeCount: 8
    caption: "The first three are code that runs before a command does. The middle three are infrastructure the product deliberately does not have, with keys left to the OS. The last two are what stops a handoff quietly dropping a field. None of the safety layer rests on a model probably catching it."
  - chart: "stat"
    label: "Coding agents a task can move across"
    value: "11"
    context: "Claude Code, Codex, Cursor, and more, through structured repo-aware handoffs."
tags: ["VS Code extension", "AI agents", "Product design", "TypeScript", "Privacy by design"]
---

Renitor started from a frustration I had myself. An AI coding agent stops
mid-task from a quota cap, a crash, or a bad answer, and everything it had
worked out dies with the session.

The **handoff** is the whole product, and the departure is the easy half. A
task that leaves cleanly but cannot come back only relocates the problem, so
the handback carries as much weight as the checkpoint: the session that started
the work has to learn what changed while it was gone. It is also why the format
is versioned and has a test suite behind it. A handoff that quietly drops a
field is worse than no handoff at all, because the developer trusts it and
loses the work anyway.

Safety could have been another model asked to review the commands. That is
cheaper to build and it demonstrates well. I made it a **rules layer** instead,
because a probabilistic check on an irreversible action is not really a check —
it is a hope with a log line. The same reasoning made **local-first** a
precondition rather than a feature: an extension that reads your repo has no
business sending it anywhere, and the most auditable form of that promise is
having no backend to audit.
