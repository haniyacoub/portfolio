---
title: "The escalation that had it backwards"
role: "Business Analyst — AWS Payments & Fraud Prevention"
period: "2026"
theme: "Escalation forensics"
track: "Investigation"
company: "AWS"
order: 3.5
summary: "A partner-reported credential leak, investigated to its premise: every attacker call failed with zero loss — and the real gap was a key no scanner had ever registered."
context: "A partner escalation reported leaked credentials in attacker hands and implied a targeted operation the detectors had missed — with a proposed fix already attached: lower the detector threshold."
contribution: "I confirmed the uncomfortable part first: leaked keys really were in attacker hands on two un-enforced accounts. Then I proved every attacker call failed — zero tokens consumed, zero loss — one account because a key-quarantine policy was working exactly as designed. That refuted the threshold theory outright: detectors fire on metered usage, and there was none to see. The attribution didn't survive either — the shared source infrastructure had touched 50+ accounts, the signature of mass credential spray, not targeting. I verified key-to-account-to-user mappings independently of the database via offline key-ID decoding, ran five adversarial verification passes, and revised my own v1 conclusions in nine places."
outcome: "The genuine gap was reframed: one key had never been registered by any scanner and was still authenticating — and sibling accounts with active leaked keys, which the escalation had missed entirely, were surfaced for action. The response answered a high-stakes external escalation by disproving its premise while sharpening the real risk."
impact: "Inverted an external escalation's premise — <strong>zero tokens, zero loss, quarantine working as designed</strong> — and replaced it with the real gap: <strong>an unregistered key still authenticating</strong>, plus sibling accounts the escalation missed."
counterfactual: "The detector threshold gets lowered against a signal that never existed, the &ldquo;targeted actor&rdquo; narrative hardens into planning assumptions, and the one key no scanner watches keeps authenticating."
indexMetric: 0
metrics:
  - chart: "stat"
    label: "Attacker impact"
    value: "0"
    unit: "tokens · loss"
    context: "Every attacker call failed — one account protected by key-quarantine working exactly as designed."
  - chart: "stat"
    label: "Accounts touched by the shared infrastructure"
    value: "50+"
    context: "Mass credential spray, not a targeted operation — refuting the attribution claim."
    emphasis: false
  - chart: "stat"
    label: "Own conclusions revised"
    value: "9"
    context: "Five adversarial verification passes; v1 corrected in place, on record."
    emphasis: false
tags: ["Credential leak", "Escalation response", "Adversarial verification", "Attribution"]
---

Escalations arrive with a story attached. This one said: leaked credentials,
attacker hands, a targeted actor, detectors asleep — and the proposed fix was
already chosen: lower the detector threshold.

The first duty was to confirm what was true in it. Leaked keys **were** in
attacker hands, on two accounts nothing had enforced. Then the story fell apart
under measurement: every single attacker call had failed. Zero tokens. Zero
loss. One account was protected by a key-quarantine policy doing exactly what it
was designed to do.

That kills the threshold theory on contact — detectors fire on metered usage,
and there was no metered usage for any detector to see. The attribution went the
same way: the attacker's shared source infrastructure had touched **more than
fifty accounts**. That's the signature of mass credential spray, not a targeted
operation.

I verified the key-to-account-to-user mappings independently of the database by
decoding key IDs offline, ran five adversarial passes over my own work, and
revised nine of my v1 conclusions in place — visibly, not quietly.

What remained was the real finding: one key had never been registered by any
scanner and was still authenticating, and the escalation had missed sibling
accounts with active leaked keys. Those went into the response — a sharper risk
than the one reported, standing on evidence instead of narrative.
