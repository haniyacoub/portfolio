---
title: "Preflights: the check before the import that can't be undone"
role: "Independent product: designed, built, shipped"
period: "2026"
theme: "SaaS · deterministic validation"
track: "Product"
company: "Independent"
order: 15
summary: "Pre-import QA for Shopify catalogs: a deterministic engine that flags the irreversible mistakes, deleted variants and silently overwritten products, before a supplier file touches a live store."
context: "Shopify merchants and agencies import supplier spreadsheets they didn't design. Two failure modes are irreversible once live: an import whose option columns silently delete existing variants, and two rows sharing one handle merging into a single overwritten product. Free CSV validators check formatting rather than what Shopify will actually do with the file."
contribution: "I built Preflights end to end: a deterministic validation engine that reads a supplier file the way Shopify's importer will. It flags variant-delete risk from the file's own option structure with no store connection needed, catches handle collisions before they overwrite live products, and, when a Shopify export is added, checks price and stock conflicts against what's live right now. Nine further checks catch what gets products rejected by Google Merchant Center. Results arrive in seconds as a plain safe / review / blocked report where every finding shows the product, why it matters, and the one-line fix. AI is used only to explain findings and suggest fixes, never to decide whether an import is safe. Read-only by design: it never connects to the store."
outcome: "A shipped product with a clear wedge against both neighbors. Import tools execute changes while Preflights inspects their safety first, and free validators read the file while Preflights reads it like Shopify will. The free tier shows a store's risks in seconds."
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
  - chart: "stat"
    label: "Store access required"
    value: "0"
    context: "Read-only on uploaded files. It never connects to the store."
  - chart: "stat"
    label: "Checks in one pass"
    value: "9+"
    context: "From variant-delete risk and handle collisions to GTIN, price, and image issues."
    emphasis: false
  - chart: "stat"
    label: "Time to report"
    value: "Seconds"
    context: "A plain safe / review / blocked verdict, each finding with its one-line fix."
    emphasis: false
tags: ["SaaS", "Deterministic validation", "E-commerce", "Product design", "Risk triage"]
---

Preflights applies a fraud analyst's habit, check the file before it can hurt
you, to a domain where the damage is self-inflicted: bulk catalog imports.

Two Shopify import mistakes cannot be taken back. If a supplier file's option
columns don't line up with how products are already built, the import can
**delete the live size and color variants**, and Shopify imports have no
rollback. When two rows share one handle, the import doesn't create two
products. It **silently merges them**, with the second overwriting the first.
Free CSV validators miss both because they check formatting rather than what
Shopify will do with the structure.

The engine is deliberately deterministic. It reads the supplier file the way
Shopify's importer will: variant-delete risk detected from the file's own
option structure with no store connection needed, handle collisions flagged
before they rewrite a live product, and, once the merchant adds a Shopify
export, price and stock conflicts against what's live right now. Nine more
checks catch what gets products rejected by Google Merchant Center. **AI
explains findings and suggests fixes, and it never decides whether an import
is safe.** That division of labor is the product's spine: repeatable checks
and row-level evidence where it matters, plain language where it helps.

The deliverable is triage rather than a data dump. Every import lands as
**safe, review, or blocked**, and every finding names the product, the reason
it matters, and the one-line fix. Free to see your risks, read-only by design,
report in seconds.
