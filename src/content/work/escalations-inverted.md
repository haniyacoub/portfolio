---
title: "Both escalations had it backwards"
role: "Business Analyst, AWS Payments & Fraud Prevention"
period: "2026"
theme: "Escalation forensics"
track: "Investigation"
company: "AWS"
featured: false
order: 8
summary: "Two escalations arrived with a premise and a remedy already implied. Measurement broke both: the leak had cost nothing but left an unregistered key authenticating, and the region's fraud growth was one coordinated ring."
context: "Two high-stakes escalations, each carrying its own explanation and its own proposed remedy. A partner reported leaked credentials in attacker hands and implied a targeted operation the detectors had missed, with the fix already chosen: lower the detector threshold. Separately, a regional fraud-reporting threshold breach triggered a vendor compliance escalation whose default reading was general population fraud growth, which would have meant broad, blunt controls across an entire region."
contribution: "I confirmed the uncomfortable part of the credential report first: leaked keys really were in attacker hands, on two un-enforced accounts. I then proved every attacker call had failed, with zero tokens consumed and zero loss, and that one account was protected because a key-quarantine policy was working exactly as designed. The threshold theory could not survive that measurement, because detectors fire on metered usage and there was none to see. The targeting claim failed the same test: the shared source infrastructure had touched 50+ accounts, the signature of mass credential spray. I verified key-to-account-to-user mappings independently of the database via offline key-ID decoding, ran five adversarial verification passes, and revised my own v1 conclusions in nine places. On the compliance escalation I led a multi-week payment-fraud deep-dive that decomposed 18 months of chargeback-versus-cost data into two distinct waves instead of averaging them into a trend. Concentration analysis across issuer, BIN, email, ASN, and device fingerprint, plus shared-fingerprint connected-component clustering, proved a coordinated ring was the driver and isolated the chargebacks to a handful of accounts. The compliance findings shipped as audience-tiered reports: a leadership summary, the vendor-facing response, and a simplified variant. The hardest unresolved question went in openly, not omitted."
outcome: "Sibling accounts with active leaked keys, which the escalation had missed entirely, were surfaced for action, and the one key no scanner had ever registered went into the response as the gap that actually needed closing. On the compliance side, prior assumptions were overturned, enforcement could target the actual ring rather than tightening controls on a whole region, and the vendor narrative stood on decomposition and concentration evidence rather than on a trend line."
impact: "Disproved the premise of two escalations and replaced each with the real risk. One was <strong>zero tokens, zero loss, quarantine working as designed</strong>, but <strong>an unregistered key still authenticating</strong>. The other was <strong>one coordinated ring behind a handful of accounts</strong> rather than regional fraud growth, out of 18 months of decomposed chargeback data."
counterfactual: "A detector threshold gets lowered against a signal that never existed while the one key no scanner watches keeps authenticating, and a whole region gets treated as broadly fraudulent while the actual ring keeps operating inside the noise."
indexMetric: 0
metrics:
  - chart: "ranked-bars"
    label: "Concentration by lens on the disputed population"
    unit: "relative concentration (illustrative)"
    sort: true
    bars:
      - name: "Device fingerprint"
        value: 100
        key: true
        note: "Shared-fingerprint connected components clustered the ring out of the population and isolated the chargebacks to a handful of accounts."
      - name: "ASN"
        value: 40
      - name: "Email"
        value: 40
      - name: "BIN"
        value: 40
      - name: "Issuer"
        value: 40
    caption: "Illustrative magnitudes. What the analysis established is that shared device fingerprint was the lens that resolved the ring. The other four are the context it was read against."
    context: "Eighteen months of chargeback-versus-cost data, decomposed into two distinct waves rather than averaged into one trend line. The four context bars are deliberately equal: the finding was that shared device fingerprint resolved the ring, not that one of the other four lenses outranked another."
  - chart: "gate-funnel"
    label: "How the reported credential premise came apart, in order"
    stages:
      - name: "Leak confirmed"
        note: "Leaked keys really were in attacker hands, on two un-enforced accounts."
      - name: "Usage measured"
        note: "Every attacker call failed. Zero tokens consumed, zero loss."
      - name: "Quarantine credited"
        note: "One account was protected by a key-quarantine policy working exactly as designed."
      - name: "Threshold theory refuted"
        note: "Detectors fire on metered usage, and there was none to see."
      - name: "Attribution refuted"
        note: "The shared source infrastructure had touched 50+ accounts: mass credential spray, not targeting."
      - name: "Mappings re-derived offline"
        note: "Key IDs decoded independently of the database."
      - name: "Five adversarial passes"
        note: "Nine of my own v1 conclusions revised in place, on record."
      - name: "Real gap named"
        note: "One key never registered by any scanner, still authenticating, plus sibling accounts the escalation missed."
        key: true
    caption: "The fix that arrived attached to the escalation appears at no step in this sequence."
tags: ["Credential leak", "Escalation response", "Ring clustering", "Adversarial verification", "Concentration analysis"]
draft: false
---

Escalations arrive pre-solved. Both of these came with a story and a remedy
already implied, and both times the story was the thing that did not survive
contact with the data.

The first reported leaked credentials in attacker hands, a targeted actor, and
detectors that had slept through it. Lower the threshold, it said. I confirmed
the true part of it before contesting any of it, because an escalation answered
with a denial simply gets re-escalated. Then measurement took the premise apart.
A detector fires on metered usage, so with none to fire on the threshold could
have gone to zero and still caught nothing. The proposed fix was aimed at a door
nobody had opened. The costly part was checking myself. Five adversarial
passes returned nine of my own v1 conclusions wrong, and I corrected them in
place, where the reader could see the correction rather than only the conclusion.

The second escalation read like weather. Fraud is up in a region, so tighten the
region. An average over eighteen months would have supported exactly that
reading, which is why I refused to take one. Decomposed instead, the same data
separated into two distinct waves, and a wave has a cause that an average hides.
Five concentration lenses went across the disputed population, but only shared
device fingerprint resolved it: connected components on that one signal pulled a
coordinated ring out of the noise and left the chargebacks sitting on a handful
of accounts. The other four were the context that made the outlier legible.

The compliance answer shipped in three registers, and the hardest open question
went into every one of them on purpose. Leading with the uncomfortable unknown is
cheaper than having someone else find it later.
