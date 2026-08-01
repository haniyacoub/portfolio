---
title: "Reconstructing a seat-farm abuse chain to its empty residual"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Abuse-chain reconstruction"
track: "Investigation"
company: "AWS"
order: 25
summary: "An enterprise seat-farm that turned free trial seats into millions of premium model turns billed as unpaid compute, reconstructed end to end and then proven already contained."
context: "A flag suggested a large coordinated abuse of an enterprise agent product. The pressure in these moments is to act fast and visibly. But acting on a chain you don't fully understand is how you both miss the real abuse and shut down the wrong accounts."
contribution: "I reconstructed the whole abuse chain from raw usage data: an org stood up, thousands of seats scripted onto it, millions of premium-model agent turns driven through those seats, the credit burned and billed as operational compute, with effectively nothing paid. Then I did the less glamorous half and checked what was actually still actionable. Across the confirmed instances the accounts were already enforced, so the actionable shutdown residual was an empty set. I proved the empty set rather than asserting it."
outcome: "The investigation cleanly separated detection latency from a coverage gap. The system had caught this, and the lag was in confirmation, not enforcement. That distinction changes the fix entirely (speed up confirmation versus build new detection), and it stopped a redundant bulk action against already-handled accounts."
impact: "Reconstructed the full seat-farm abuse chain, one org, thousands of scripted seats, millions of premium model turns, <strong>$0 paid</strong>, and proved the actionable shutdown residual was an <strong>empty set</strong>, redirecting the fix from new detection to faster confirmation."
counterfactual: "The team launches a redundant bulk action against already-enforced accounts, mistakes a confirmation-latency problem for a detection-coverage gap, and spends weeks building detection it doesn't need while the real lag, confirmation speed, goes untouched."
indexMetric: 0
metrics:
  - chart: "abuse-chain"
    label: "The seat-farm abuse chain, reconstructed"
    steps:
      - { label: "Enterprise org stood up", value: "1", note: "single tenant" }
      - { label: "Seats scripted onto it", value: "Thousands", note: "automated" }
      - { label: "Premium model turns driven", value: "Millions", note: "agent calls" }
      - { label: "Credit burned, billed as compute", value: "6-figure", note: "OPEX" }
      - { label: "Actually paid", value: "$0", note: "the abuse", punch: true }
  - chart: "stat"
    label: "Actionable shutdown residual"
    value: "0"
    context: "Confirmed instances were already enforced. Proven as an empty set, not assumed."
    emphasis: true
tags: ["Abuse chain", "Usage forensics", "Empty-set proof", "Enforcement latency"]
draft: true
---

The flag looked like a big, live, coordinated abuse. The temptation was to treat
it as one and swing at it. I reconstructed it first.

From raw usage data, the chain was clean to read once assembled: a single
enterprise org, thousands of seats scripted onto it, millions of premium-model
agent turns pushed through those seats, and the resulting credit burned and
billed as operational compute with **nothing actually paid**. That's the whole
mechanism, end to end.

Then the half nobody celebrates. I asked what was still *actionable*, and worked
it to an answer rather than a vibe. Across the confirmed instances, every account
was already enforced. The actionable shutdown residual was an empty set, and I
proved it was empty instead of declaring victory.

That result is more useful than another shutdown would have been, because it
re-frames the problem. The system *had* caught this. The lag was in confirmation,
not in enforcement coverage. Those have completely different fixes, and
conflating them is how teams build detection they don't need while the real gap,
confirmation speed, goes untouched.
