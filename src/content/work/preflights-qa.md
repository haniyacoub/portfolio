---
title: "Preflights: the check before the import that can't be undone"
role: "Independent product: designed, built, shipped"
period: "2026"
theme: "SaaS · deterministic validation"
track: "Product"
company: "Independent"
order: 24
featured: false
draft: false
summary: "Pre-import QA for Shopify catalogs: a deterministic engine that flags variant deletion and silent product overwrites before a supplier file touches a live store."
context: "Shopify merchants and agencies import supplier spreadsheets they did not design, into stores that have no rollback. Free CSV validators check formatting rather than what Shopify will actually do with the file, so the failure modes that cannot be undone pass review and surface only once they are permanent."
contribution: "I built Preflights end to end: a deterministic validation engine that reads a supplier file the way Shopify's importer will. It flags variant-delete risk from the file's own option structure, and catches handle collisions before they overwrite a live product. When the merchant adds a Shopify export, it also checks price and stock conflicts against what is live right now. Nine further checks catch what gets products rejected by Google Merchant Center. Results arrive in seconds as a plain safe / review / blocked report where every finding shows the product, why it matters, and the one-line fix. AI is used only to explain findings and suggest fixes, never to decide whether an import is safe."
outcome: "A shipped product with a clear wedge against both neighbors. Import tools execute changes. Preflights inspects their safety first. The free tier shows a store's risks in seconds."
impact: "A deterministic pre-import safety check that catches <strong>the two irreversible Shopify mistakes</strong>, variant deletion and handle collisions, <strong>with zero store access</strong>, in seconds."
counterfactual: "The supplier file goes straight into the import tool. The variant wipe-out is discovered when customers cannot find the products, and there is no rollback."
indexMetric: 0
metrics:
  - chart: "coverage-gap"
    label: "What a free CSV validator checks"
    items:
      - name: "Formatting"
        covered: true
      - name: "Column layout"
        covered: true
      - name: "Variant-delete risk"
        covered: false
      - name: "Handle collisions"
        covered: false
      - name: "Live price conflicts"
        covered: false
    caption: "Free validators read the file. The dangerous mistakes need it read the way Shopify will."
  - chart: "gate-funnel"
    label: "What one supplier file passes through, in order"
    stages:
      - name: "Variant-delete risk"
        note: "Option columns that don't line up with how products are already built."
        key: true
      - name: "Handle collisions"
        note: "Two rows sharing one handle silently merge, the second overwriting the first."
        key: true
      - name: "Live price and stock conflicts"
        note: "Only once the merchant adds a Shopify export, against what is live right now."
      - name: "Nine Merchant Center checks"
        note: "GTIN, price, and image issues that get products rejected by Google."
      - name: "safe / review / blocked"
        note: "One verdict per import, each finding with its product and one-line fix."
      - name: "AI explanation"
        note: "Explanation only, never a safety verdict."
    caption: "Order carries the meaning: the two irreversible mistakes are caught from the file alone, before any check that needs a store export."
tags: ["SaaS", "Deterministic validation", "E-commerce", "Product design", "Risk triage"]
---

Two Shopify import mistakes cannot be taken back. If a supplier file's option
columns don't line up with how products are already built, the import can
**delete the live size and color variants**, and Shopify imports have no
rollback. When two rows share one handle, the import doesn't create two
products. It **silently merges them**, the second overwriting the first. Both
are invisible in the file and permanent in the store.

Reading a spreadsheet the way Shopify's importer will, rather than the way a
spreadsheet validator does, is what makes those two mistakes cheap to catch.
Both are decidable from the file against itself: one from its option structure,
one from its rows read against each other. Neither needs a store connection.
Only the price and stock check needs anything external. That ordering is the
design: the damage that cannot be reversed is found before the merchant has
handed over anything at all.

Everything that decides is deterministic. **The moment a model gets a vote on
safety, the check stops being repeatable, and a check you cannot repeat is not a
check.** So AI writes the explanation and proposes the fix, and the engine alone
rules on the import. Read-only is the same principle in the architecture.

The deliverable is triage, not a data dump. Every import lands as **safe,
review, or blocked**. That is the difference between knowing a file is risky
and knowing which row to change. It is a fraud analyst's habit, check the file
before it can hurt you, applied to damage that is self-inflicted.
