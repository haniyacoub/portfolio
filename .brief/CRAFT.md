# CRAFT.md — the rulebook for how this site reads

Companion to `.brief/BRIEF.md`. BRIEF governs how a case study is *built*.
CRAFT governs how the whole site *reads* to the two people who matter: a
recruiter who has 6 seconds, and a technical hiring manager who has 6 minutes.

Evidence base, so these are rules and not taste:

- **79% of users scan, 16% read word-by-word** (NN/g, 1997 → still the
  operating assumption). Rewriting one site's copy in three ways measured:
  concise text **+58%** usability, scannable layout **+47%**, objective
  (non-promotional) language **+27%**, all three combined **+124%**. The
  promotional-language penalty is real and measured: users must burn effort
  filtering hyperbole to reach facts.
- **Users leave in 10–20 seconds.** The stay-or-go hazard peaks in the first
  10 seconds; survive 30 and visits stretch to minutes. So: "you must clearly
  communicate your value proposition within 10 seconds" (NN/g / Microsoft
  Research, 2B+ dwell times).
- **Attention decays by paragraph**: 81% of users look at paragraph 1, 71% at
  2, 63% at 3, then a cliff to **32%** at paragraph 4. Nothing load-bearing
  goes fourth.
- **Front-load everything.** Readers "read the third word on a line much less
  often than the first two words." Inverted pyramid: conclusion first, then
  support, then background.
- **Layer-cake beats F-pattern.** The most effective scan pattern fixates on
  headings and subheads; it only exists if you write meaningful ones. A wall
  of text forces the worst pattern.
- **Experts want plain language too.** NN/g's study of scientists, doctors and
  IT managers: an IT manager rejected an IBM page for "a whole lot of jargon";
  a professor with a doctorate picked the simplified version because "there is
  not as much fluff." Targets: **10th–12th grade** for expert readers,
  **15–20 words per sentence**, paragraphs of 1–2 sentences, **under 50% of
  the words you'd use in print**.
- **Trust drives whether someone acts, not friendliness.** In NN/g's tone
  study, trustworthiness explained **52%** of the variance in willingness to
  recommend; friendliness added only ~8%. "Casual, conversational, and
  moderately enthusiastic" won overall; humour is "extremely risky."
  Friendliness bought at the price of credibility is a net loss — one
  participant: "the friendliness kind of takes away some of the credibility."
- **Portfolio-specific.** A data portfolio's job "is to get your foot in the
  door, not to get you the job" (Chapman, TDS). Screening budget is roughly
  **3 minutes per applicant** across a 200-applicant funnel (Dataquest). Short
  project descriptions, lots of plots, and a link at the top of the CV win;
  thesis-length write-ups and hidden business framing lose.

Everything below is derived from those findings and applied to *this* site.

---

## 1. THE 6-SECOND TEST

A recruiter's first screenful is: the nav (`Nav.astro` → name +
`site.shortRole`), the kicker (`{site.role} / {site.location}`), the four-line
`h1`, the `SignalField` canvas, and — only if the viewport is tall — the lede
and the three `hero__facts`.

### What must be learnable in 6 seconds, in this order

| # | Fact | Where it belongs |
|---|---|---|
| 1 | Name | nav (present) |
| 2 | What kind of data person he is, in his own plain words | `h1` |
| 3 | Current employer + real job title | kicker or lede |
| 4 | Years of experience | `hero__facts` |
| 5 | City + right to work there | kicker / facts |
| 6 | The range: how many sectors, and what kinds of work | `hero__facts` |
| 7 | Two ways to act: see the work, get the CV | nav + scroll cue |

### RULE 1.1 — The first screenful currently answers "what does he hunt", not "what kind of data person is he"

The `h1` is `"I find the abuse, / prove it, and don't / break the legitimate /
customers doing it."` Every information-carrying word in it is about fraud
enforcement. The kicker under it is `"Fraud Prevention & AI-Abuse Analyst /
Berlin"`. The lede opens `"Six years of fraud, risk, and abuse analytics"`.
The first `hero__fact` label is `"In fraud, risk & abuse"`. That is **four
fraud-framed statements before a recruiter reaches anything else** — a direct
contradiction of the owner's brief, and it buries the platform, BI,
forecasting and ML work that make him a generalist.

Fix the `h1` first. It is doing the most damage per word.

### RULE 1.2 — Six things a recruiter needs are currently missing or buried

| Missing / buried | Evidence in the files | Where it must go |
|---|---|---|
| **Real job titles.** `site.role` is `"Fraud Prevention & AI-Abuse Analyst"` — a composite that appears on no CV. His actual titles live only inside case frontmatter (`role: "Business Analyst, AWS Payments & Fraud Prevention"`, `"Senior Product Analyst, Risk & Abuse, Zalando"`). Recruiters keyword-match on real titles. | Hero lede: name the current title once. |
| **Work authorization.** Nothing on the site says he can work in Germany/the EU. `about.astro` says `"German-Jordanian, based in Berlin"` — a recruiter cannot tell from that whether sponsorship is needed. | One clause on `/contact` and in the about lede. |
| **Education.** Master's in Business Management (SRH Berlin) and the Udacity Data Engineering with AWS nanodegree appear **nowhere** in `src/`. Verified by grep. | An `education` array in `profile.ts`, rendered on `/about` beside `Timeline`. |
| **Availability / what he's looking for.** `/contact` is three links: email, LinkedIn, `"Based in"`. It never says he's open to anything, or to what. | One sentence at the top of `/contact`. |
| **Stack.** Only on `/about`, below the timeline — roughly the fifth screenful of the second page. Technical screeners look for Python/SQL/Spark/AWS early. | Compress to 5 anchor tools in the hero facts area or the strip. |
| **Live proof you can click.** `renitor.com` and the VS Code marketplace listing exist only inside a `contribution:` string in `renitor-extension.md`. No GitHub link anywhere. | Nav or `/contact`. |

### RULE 1.3 — `hero__facts` must carry range, not trivia

Current: `6+ yrs "In fraud, risk & abuse"` · `4 sectors "Cloud · fashion ·
auto · energy"` · `3 langs "Arabic · German · English"`.

Fact 1's label re-narrows him to fraud in the exact slot meant to show
breadth. Rewrite the label, keep the number. Keep `4 sectors` (it is the
single best generalist signal on the site). Keep `3 langs` — in Berlin/EU
recruiting it is a real filter, not decoration. Add a fourth fact naming the
*kinds* of work, e.g. `"platform · BI · ML · forecasting"`.

### RULE 1.4 — Nothing load-bearing below the third paragraph

Attention falls to 32% by paragraph 4. On `/about`, `"I owned fraud metrics
for business reviews and built the Remaining Fraud Damage measure across six
European markets"` sits in `ab__aside`, the *seventh* block down. That is the
single most senior-sounding sentence on the site and almost nobody reads it.
Move it up into the `ab__intro`.

---

## 2. HEADLINE RULES

### How to write a "how I work with data" headline that still signals fraud

- **RULE 2.1 — Method in the main clause, domain in the tail.** The verb must
  be about handling data (measure, prove, price, size, rank, forecast, check);
  fraud arrives as the *object* or an appended clause. This satisfies the
  brief in one grammatical move.
- **RULE 2.2 — Never open with "fraud", "abuse" or "enforcement".** First two
  words carry disproportionate weight; spend them on the method.
- **RULE 2.3 — Under 12 words, one sentence or a sentence plus a short tail.**
  The current `h1` is 15 words across four `reveal-line` spans.
- **RULE 2.4 — Zero abstract nouns.** No "methodology", "infrastructure",
  "framework", "insights", "impact", "solutions". Concrete verbs only.
- **RULE 2.5 — Must survive being read alone.** Headlines travel out of
  context (search results, LinkedIn preview, the `og:title` built in
  `BaseLayout.astro` from `site.name` + `site.role`). It has to make sense
  with nothing around it.
- **RULE 2.6 — No hero-narrative "I".** "I find the abuse" casts him as
  protagonist against villains. Cast him as the person who makes the decision
  measurable. That reads senior; the other reads keen.
- **RULE 2.7 — Whatever wins goes in three places at once**, or the site
  contradicts itself: the `h1` in `index.astro`, `site.tagline`, and
  `Footer.astro`'s `footer__statement` (which currently hardcodes the same
  fraud line as prose — it should read from `site.tagline`).

### Six candidates, ranked

| # | Headline | Words | Why |
|---|---|---|---|
| **1** | **"I make expensive decisions measurable. Most of them are about fraud."** | 11 | Best balance. "Expensive decisions" is the actual through-line across all four sectors — energy risk, customer value, refund leakage, account shutdowns. "Measurable" is the method. Fraud lands second, unmistakable, and reads as depth rather than as his whole identity. Passes the read-alone test. |
| **2** | **"I put honest numbers behind decisions that cost money either way."** | 11 | Strongest on *method* and the most distinctive to him — the two-directional cost (missed fraud vs. wrongly banned customer) is genuinely his idea, and `ThresholdDial` already dramatises it. Costs him the explicit fraud signal, so the lede immediately below must name AWS Payments & Fraud Prevention. Use if the dial stays directly beneath the hero. |
| **3** | **"Six years measuring things that are expensive to get wrong — mostly fraud."** | 12 | Front-loads the one number a recruiter is hunting for, so it doubles as fact and headline. At the 12-word ceiling and the em-dash tail is a slightly weaker construction than #1's full stop. |
| **4** | **"I build the data, then the proof. Usually for fraud calls."** | 11 | Uniquely covers the platform work — he built the Redshift access layer, the BI dashboard, the Spark pipeline — which is the biggest thing the current headline hides. "Proof" ties to the evidence-before-action principle on `/about`. Slightly cryptic standing alone; loses a point for that. |
| **5** | **"Measuring what a wrong decision costs, in both directions. Mostly fraud."** | 11 | The most intellectually precise statement of his method and the one a technical hiring manager will respect most. Opens on a gerund, which is flatter than a verb, and "in both directions" needs a beat to land — so it's a better *strip* or `/about` line than a hero `h1`. |
| **6** | **"Data work that holds up when someone checks it. Fraud, four sectors."** | 12 | Best on warmth and plain language — every word is common. Weakest on specificity: "data work that holds up" could describe many analysts, and the tail is a fragment rather than a claim. Use only if #1–#5 all test as too abstract. |

**Reject-list, for reference:** anything opening "Fraud analyst who…",
anything containing "passionate", "data-driven", "turning data into insights",
or the current construction "I find the abuse."

---

## 3. PLAIN LANGUAGE

The owner's rule: *no complicated words unless needed.* Measured against the
files, the site is failing on sentence length before it fails on vocabulary:

- `contribution:` sentences average **21.7 words**; **55 of 161** exceed 25
  words; the longest is **63 words** (`adversarial-pass.md`).
- `impact:` sentences average **31.6 words**; **31 of 34** exceed 20.
- `context:` has a **46-word** sentence in `fraud-data-platform.md`.

NN/g's target for expert readers is 15–20 words. `contribution:` is worse than
it looks, because `[slug].astro` splits it into bullets by sentence — so a
63-word sentence becomes a 63-word bullet, in the one component built for
scanning.

### RULE 3.1 — Cap every frontmatter sentence at 25 words; target 18

Apply Google's tech-writing test: one idea per sentence; if a sentence
contains "and" joining two actions, or a subordinate clause that *branches*
rather than *extends*, split it.

### RULE 3.2 — Substitution table

Left column is a real string from the repo. Right column is the replacement.

**`fraud-data-platform.md`**

| On the site now | Plain English |
|---|---|
| "puts two **heterogeneous** Redshift clusters behind one API" | "puts two different Redshift databases behind one interface" |
| "pays the **SAML handshake** once per investigation instead of once per query" | "signs in once per investigation instead of once per query" |
| "a persistent **Java JDBC bridge** holding a **SAML-authenticated session** open" | "a long-running connection that stays signed in" |
| "A warm-connection **daemon** over a **Unix-domain socket** keeps that session alive and **amortizes** the SAML handshake" | "A small background process keeps the login open, so the slow sign-in is paid once, not on every query" |
| "A **DB-API shim** let the legacy pandas code adopt the layer with **zero call-site changes**" | "Scripts that already existed got the speed-up without changing a line" |
| "**Caller-aware routing** picks the cluster from the script's own location" | "Each script reaches the right database automatically, based on where it lives" |
| "The layer **degrades to in-process execution** when the daemon is not up" | "If the background process is down, queries still run — just at the old speed" |
| "**Midway/SAML SSO** on one, a password on the other" | "one used company single sign-on, the other a password" |

**`forecasting-under-uncertainty.md` / `survival-forecasting.md`**

| On the site now | Plain English |
|---|---|
| "an **exponential catch-hazard survival fit** that yields an **asymptotic never-caught fraction**" | "a curve fitted to how quickly fraud gets caught, which estimates the share never caught at all" |
| "I ran an **anchor-stability** pass" | "I re-ran it against known reference points to check the answer didn't drift" |
| "**steady-state inflow** is calibrated to the observed **trailing slope**" | "the long-run inflow is set from the trend the data actually shows" |
| "the as-is and intervention scenarios **separate honestly** instead of by assumption" | "the do-nothing and act-now cases pull apart because of measured behaviour, not because I assumed it" |
| "a **ring-excluded companion scenario**" | "a second version of the forecast with the big ring taken out" |

**`remaining-fraud-damage.md` / `secure-delivery-holdout.md`**

| On the site now | Plain English |
|---|---|
| "a naive **treated-vs-untreated** read lets **selection bias** do the talking" | "comparing customers who got the control to those who didn't isn't fair — the control was aimed at the riskiest ones on purpose" |
| "every other segment's **excess over that benchmark**, applied to its **GMV**" | "how much more each group refunds than that baseline, times what that group actually sold" |
| "read suspicious, detected, and steer rates against **base-rate effects and soft exclusions**" | "checked the rates against who was actually shopping that week, so a change in the customer mix never got read as a change in fraud" |
| "**GMV denominators** before and after returns" | "sales totals, before and after returns come back" |
| "replaced flattering before/after reads with **holdout / counterfactual evaluation**" | "stopped judging controls on before-and-after, and judged them against a group the control was deliberately held back from" |

**`sleeper-account-detection.md` / `fingerprint-ensemble.md`**

| On the site now | Plain English |
|---|---|
| "around 90 **engineered features**" | "around 90 signals I built out of raw data" |
| "a **temporal split**, and **PR-AUC**-first evaluation" | "trained on the past and tested on the future, scored on how well it ranks rare events (PR-AUC)" |
| "the headline **PR-AUC** unqualified" | "the headline accuracy figure without the caveat" |
| "**34% more disputed dollars** caught" | "34% more of the money customers had disputed" |
| "adding device fingerprint as an **ensemble feature**" | "adding device fingerprint as one more signal in the model" |

**`esc-fraud-dashboard.md` / `model-monitoring-pipeline.md` / `tools-that-hold.md`**

| On the site now | Plain English |
|---|---|
| "a **canonical account-level fact table**" | "one account-level table everything else reads from" |
| "~40 **parameterized** SQL files that stay **portable to** QuickSight" | "about 40 reusable SQL files that also run in QuickSight" |
| "a **mirror-versus-native reconciliation** that pushed a revenue undercount down to a fraction of a percent" | "two systems reported different revenue; I got them to agree to within 1%" |
| "**c-score** trajectories" | "how each account's risk score moved over time" |
| "inverted every one to **fail-closed**" | "changed every one so it errs on the side of blocking, not passing" |
| "an **edge-confidence** model and a **key-reliability** audit" | "a score for how much each link can be trusted, and a check on which identifiers are reliable" |
| "every safety property **structural rather than procedural**" | "every safety property built into the code, not left to a checklist" |
| "to its **empty residual**" (title, `kiro-seat-farm.md`) | "…and found nothing left running" |

**Site chrome and scan-layer labels**

| On the site now | Plain English |
|---|---|
| `index.astro:84` — "The cases that show the shape of it." | "Eighteen cases. What the work was, and what it cost to be wrong." (kills the unresolvable "it" — Google's ambiguous-pronoun rule) |
| `index.astro:119` — "I build the infrastructure, the methodology, and the deliverables." | "I build the pipelines, work out how to measure the thing, and write the thing people actually read." |
| `ThresholdDial.astro:267` — "that's where **recall** is high and the second bar hasn't bitten yet" | "that's where you're catching most of the abuse and barely touching real customers" |
| `about.astro:25` — "a **shadow twin** measuring precision" | "a copy running alongside in silence, measuring how often it would have been right" |
| `theme: "BI · reconciliation"` | "Dashboards that add up" |
| `theme: "Signal economics"` | "What a detection signal costs" |
| `theme: "Counterfactual evaluation"` | "Did the control actually work" |

### RULE 3.3 — One word, one meaning

"Leakage" currently means two unrelated things: money escaping (`"refund
leakage"`, `"leakage estimate"`, `remaining-fraud-damage.md`) and a modelling
fault (`"label leakage"`, `"leakage risk"`, `sleeper-account-detection.md`).
Google's rule applies: readers assume a shared meaning and stall. Keep
"leakage" for money; call the modelling fault **"the model peeking at the
answer"**, with `label leakage` in parentheses once.

### RULE 3.4 — Keep-list (terms of art that must stay)

These are the vocabulary a technical interviewer screens for. Deleting them
costs credibility. Each needs a **≤5-word gloss on first use per page**, then
runs bare (Google: never oscillate between term and expansion).

| Term | Gloss on first use |
|---|---|
| precision | "how often a flag is right" |
| recall | "how much of the abuse is caught" |
| false positive | "a real customer wrongly flagged" |
| holdout | "a group left deliberately untreated" |
| counterfactual | "what would have happened anyway" |
| p10 / p90 / P50 / P90 | "the low, middle and high case" |
| Monte Carlo | "many simulated runs, not one guess" |
| PR-AUC | "accuracy scored on rare events" |
| label leakage | "the model peeking at answers" |
| GMV | "gross sales value" |
| chargeback / disputed dollars | "money the customer disputed" |
| XGBoost, PySpark, Redshift, SageMaker | no gloss — tool names, keyword value |

`counterfactual` appears **39 times** and is never once glossed. It is the
single highest-leverage gloss on the site.

---

## 4. WARMTH WITHOUT FLUFF

Warmth here is not adjectives. It is short sentences, ordinary words, first
person, and admitting cost. NN/g's finding sets the constraint: friendliness
that dents credibility is a net loss, because trust — not friendliness —
explains 52% of whether someone acts. So: warm register, cold claims.

- **RULE 4.1 — Warmth comes from sentence rhythm, not vocabulary.** A short
  sentence after a long one reads as a person talking. `/about` already does
  this: *"None of it is exotic. It holds up because it gets verified."* That
  is the model for the whole site.
- **RULE 4.2 — Name a cost, a limit, or a thing that went wrong on every
  page.** This is the site's existing superpower and its warmest move. He
  already does it: *"When the model's top-ranked feature turned out to be a
  containment score that only settles after enforcement has fired, I wrote the
  leakage risk next to the scores."* Admitting a limit reads as confidence.
- **RULE 4.3 — Zero hype adjectives.** Verified: grep for robust / seamless /
  leverage / world-class / cutting-edge / utilize / synergy / innovative
  returns **nothing** across `src/content/work/` and `src/pages/`. Protect
  that. It is the site's best current property.
- **RULE 4.4 — Zero hedges.** Also verified clean: no "helped to", "was
  involved in", "played a key role". Protect that too.
- **RULE 4.5 — Ban the tough-guy register.** The site's warmth problem is not
  hype, it is *combat*. Real strings: `"torching legitimate customers"`,
  `"Nothing ships until something has tried to break it"`, `"attacked for 50
  rounds"`, `"I attacked it before anyone else could"`, `"Absent evidence is
  not reassurance"`. Individually fine; six in a row makes a hard person, not
  a colleague. Cap it at one combative phrase per page.
- **RULE 4.6 — Use "you" once per page, "we" never.** "You" invites the reader
  in (`ThresholdDial` already does it). "We" claims a team he isn't speaking
  for.

### Before / after, on real sentences

| Before (real string) | After | Why |
|---|---|---|
| `index.astro:28` — "I find the abuse, prove it, and don't break the legitimate customers doing it." | "I make expensive decisions measurable. Most of them are about fraud." | Removes the hunter framing; leads with method; still names the domain. |
| `index.astro:42` — "Six years of fraud, risk, and abuse analytics across cloud, fashion, automotive, and energy." | "Six years across energy, cars, fashion and cloud. Fraud is the deepest of the four, and it isn't all of it." | Same facts, plain nouns ("cars" not "automotive"), and it states the generalist claim outright instead of implying it. |
| `index.astro:119` — "Based in Berlin. I build the infrastructure, the methodology, and the deliverables." | "I'm in Berlin. I build the pipeline, work out how to measure the thing, then write the version people actually read." | Three abstract nouns become three verbs a person does. |
| `index.astro:84` — "The cases that show the shape of it." | "Eighteen cases. What I did, and what it would have cost to get wrong." | Fixes an ambiguous "it"; adds the count; states the promise. |
| `ThresholdDial.astro:261` — "You're catching nearly everything, and torching legitimate customers to do it." | "You're catching nearly everything — and blocking a lot of real customers to do it. That's the expensive mistake." | Keeps the point, drops the swagger. |
| `about.astro:39` — "I'm Hani. I find fraud in large account populations and prove it before anyone acts on it." | "I'm Hani. I work out which accounts in a very large population are actually a problem — and I prove it before anyone acts." | "Work out" and "actually a problem" are how a person says it out loud. |
| `fraud-data-platform.md:65` — "The payoff sounds mundane and is enormous. It is the line between investigating in flow and waiting on a spinner." | "It sounds boring. It's the difference between following a thread and watching a spinner." | Shorter, warmer, same claim; drops "mundane" and "enormous". |
| `about.astro:9` — "A missed fraudster costs money. A wrongly banned customer costs money and trust…" | Keep verbatim. | Best paragraph on the site: plain words, real stakes, both directions. Use it as the calibration reference for everything else. |

---

## 5. GENERALIST FRAMING

The problem to solve: four sectors and platform + BI + ML + forecasting + two
shipped products can read as *one method applied four times* or as *a person
who can't settle*. The difference is entirely whether the site states the
method once, up front, and then subordinates everything to it.

### RULE 5.1 — One method sentence, four applications, in that order

The method already exists in `/about`'s `ab__intro`: *"Different industries,
same job underneath: a large population, a small group abusing it, and
decisions that are expensive to get wrong in either direction."* That sentence
is the whole generalist argument and it is currently on page two, paragraph
two. It (or the headline from §2) belongs on the homepage.

Sharpen it so it covers the non-fraud work too — at AUTO1 the "small group" was
the *most valuable* customers, not abusers. Something like: **"A large
population, a small group that matters disproportionately, and a decision
that's expensive to get wrong in both directions. That's been the job in
energy, cars, fashion and cloud."**

### RULE 5.2 — Stop back-dating fraud onto the early jobs

`profile.ts` says `{ date: "2021", org: "AUTO1 Group", detail: "Automotive.
Risk & abuse analytics" }` and `{ date: "2020", org: "Statkraft", detail:
"Energy. Data & risk analysis" }`. The true facts are **data analyst, customer
acquisition** and **quantitative analyst intern**. Rewriting both as risk work
makes the CV look narrower than it is *and* creates a mismatch a recruiter can
catch against LinkedIn. Fix to the truth. The range is the asset; retro-fitting
fraud onto it destroys the one thing the brief asks for.

### RULE 5.3 — Rebalance the work index; it currently reads as a six-month career

Of 18 live cases: **13 AWS, 2 Zalando, 2 Independent, 1 AUTO1, 0 Statkraft**.
26 of 31 files carry `period: "2026"`, and 24 carry the same
`role: "Business Analyst, AWS Payments & Fraud Prevention"`. The company tab
row in `index.astro` renders those counts literally — a recruiter reads
"AUTO1 Group 01" and concludes three years produced one thing. Targets:

- AWS ≤ 10 of the live set. Demote, merge or draft the weakest AWS
  investigation cases; several are near-duplicates already
  (`sagemaker-regex-gap` vs `compute-abuse-root-cause`,
  `review-volume-forecast` + `survival-forecasting` vs
  `forecasting-under-uncertainty`, `credential-leak-inversion` vs
  `escalations-inverted`).
- Zalando ≥ 3. Add the second Zalando-era case the facts support.
- AUTO1 ≥ 2. Churn scoring and customer value are two distinct pieces of work
  currently compressed into `auto1-customer-scoring.md`.
- Statkraft ≥ 1, or drop `"4 sectors"` from `hero__facts`. Claiming four
  sectors while showing three is a gap a careful reader will find.

### RULE 5.4 — Make "kind of work" the default lens, not "company"

`track` already carries the right facets and the live spread is healthy:
Tooling 4 · Investigation 4 · Measurement 3 · Detection 3 · Product 2 ·
Precision 2. But `index.astro`'s `data-tabs` filters on `data-company` only,
so a visitor's first cut through the work is by *employer* — which flattens
him into "the AWS fraud guy". Add or switch to a `track` tab row. Six labels
covering build / investigate / measure / detect / ship is the generalist claim
proved by inventory rather than asserted.

### RULE 5.5 — Lead the index with a non-fraud case

`order: 1` is `fraud-relations-graph`. The first three cards are all fraud
detection. Promote one of `fraud-data-platform` (a data platform, ~10×
latency), `esc-fraud-dashboard` (~40 charts over ~40 SQL files),
`spark-pipeline-optimization` (34 min → minutes) or `auto1-customer-scoring`
into the top three. A recruiter who scans four cards and stops must have seen
at least one case that is unmistakably not fraud detection.

### RULE 5.6 — Say the range out loud, once, and never again

One band on the homepage, four lines, one per sector, each ≤12 words, each
naming the *decision* rather than the industry. Then never re-litigate it.
Repeating "generalist" is what actually reads as insecure; showing it once and
moving on reads as settled.

### RULE 5.7 — Keep fraud visibly deepest

Depth is proved by *count and specificity*, not by adjectives. With ~10 of 18
cases in fraud, the deepest track needs no claim at all. The `tagline`, the
`ThresholdDial`, and `SignalField` already anchor fraud visually. That is
sufficient. Do not also say it in the `h1`.

### RULE 5.8 — The independent products are evidence, not a hobby

`renitor-extension.md` and `preflights-qa.md` show he ships to strangers, not
just to stakeholders. Frame them as that: shipped, versioned, publicly
installable. Link `renitor.com` and the marketplace listing somewhere a
recruiter can click — right now both live only inside a `contribution:` string.

---

## 6. WHAT RECRUITERS SCAN FOR

Recruiters read a candidate the way the eye-tracking literature says they read
anything: front-loaded, top-left, headings first, ~10 seconds to decide. They
are looking for a small set of hard tokens. Status on this site:

| What they scan for | Status | Action |
|---|---|---|
| **Name** | Present, `Nav.astro` | — |
| **Current employer** | Present — `"AWS Payments & Fraud Prevention"` in `hero__lede`, bolded | Keep. Best recruiter signal on the page. |
| **Real current title** | **Missing.** `site.role` is the invented composite `"Fraud Prevention & AI-Abuse Analyst"`; `"Business Analyst"` exists only in case frontmatter | Put the real title in the hero lede. Keep the composite as the descriptive kicker if you like the phrasing, but the real one must appear once. |
| **Years of experience** | Present, `facts[0]` — `6+ yrs` | Keep the number; fix the label (see RULE 1.3). |
| **Dates per role** | Weak. `career` in `profile.ts` gives `"2020"`, `"2021"`, `"2024 to 2026"`, `"2026"` — two open-ended single years. A recruiter cannot compute tenure at Statkraft or AUTO1 | Use closed ranges: `2020–2021`, `2021–2024`, `2024–2026`, `2026–present`. |
| **Location** | Strong. `site.location` in kicker, contact, footer | — |
| **Work authorization** | **Missing.** `"German-Jordanian, based in Berlin"` doesn't answer it | Add one clause: German citizenship / EU right to work, no sponsorship needed. In Berlin this is often the first filter. |
| **Languages** | Present, `facts[2]` | Keep. Genuine differentiator for EU roles. |
| **Stack / keywords** | Buried. `stack` array renders at the bottom of `/about` | Surface 5 anchor tools (Python, SQL, PySpark/Databricks, Redshift/AWS, XGBoost) in the first screenful or the strip. Keep the full 11 on `/about`. |
| **Education** | **Absent from `src/` entirely** | Add `education` to `profile.ts`: Master's, Business Management, SRH Berlin; Udacity Data Engineering with AWS nanodegree; self-directed 12-month ML-engineering curriculum (ongoing — the "ongoing" is a real signal). |
| **Seniority markers** | Uneven. `"Senior Product Analyst"` and `"I owned fraud metrics for business reviews"` exist but sit deep in `/about` and in frontmatter | Surface one ownership phrase in the first screenful — owning a metric for business reviews, or announcing a dashboard org-wide, is the clearest seniority evidence he has. |
| **Availability / intent** | **Missing.** `/contact` is email + LinkedIn + `"Based in"` | One line at the top of `/contact`: what he's open to, and how fast he replies. |
| **Résumé** | Present — `nav` links `/Hani_Yacoub_CV.pdf`, file exists in `public/` | Keep. Match its job titles and dates to the site exactly; mismatch is the fastest way to lose trust. |
| **Clickable proof** | Weak. `renitor.com`, the VS Code marketplace listing, and any GitHub profile are unlinked | Add to `/contact` and `site.ts`. |
| **Portfolio link on the CV** | Unverifiable from here | Confirm `haniyacoub.com` is in the CV header. Chapman's rule: link or QR at the top. |

### RULE 6.1 — One scan-stop per page

Every page needs exactly one place a recruiter can stop and get the whole
person in five seconds: `hero__facts` on the homepage, the chips + timeline on
`/about`, the intent line on `/contact`. Those blocks carry hard tokens only —
titles, years, city, authorization, tools. No prose.

### RULE 6.2 — Headings must be readable alone

The layer-cake finding says headings are what actually get read. On `/about`
the headings are `"About"`, `"How I work"`, `"What I build at AWS"`, `"The
arc"`, `"Markets covered"`, `"Stack"`. Only two of those tell a recruiter
anything. `"The arc"` is a heading over a career timeline — rename it
`"Where I've worked"`. Case-study titles fail this hardest: `"Absent evidence
is not reassurance"`, `"Both escalations had it backwards"`, `"Nothing ships
until something has tried to break it"` have zero information scent about what
the work was. Each needs the subject in the first four words.

### RULE 6.3 — `witem__summary` is a headline, not a paragraph

`WorkItem.astro` renders `summary` directly under the title in the scan path.
Live summaries average 19.4 words and run to 32
(`tools-that-hold.md`). Cap at 20 words, front-loaded, and let `impact` carry
the numbers — it is already rendered right below.

### RULE 6.4 — Fix the `role` monoculture in frontmatter

24 of 31 files carry the identical `role:` string and 26 carry `period:
"2026"`. On a case page that string is the only thing telling a reader *when in
his career* this happened. Where a case draws on earlier work, date it there.
Uniform 2026 makes an 18-case portfolio look like one busy year.

---

## Checklist before shipping any copy change

1. Does the first screenful say **how he works with data** before it says
   fraud? (RULE 1.1)
2. Is every sentence under 25 words? (RULE 3.1)
3. Is every keep-list term glossed in ≤5 words on first use? (RULE 3.4)
4. One term, one meaning — especially "leakage"? (RULE 3.3)
5. Zero hype adjectives, zero hedges, at most one combative phrase? (4.3–4.5)
6. Does each heading make sense read alone? (RULE 6.2)
7. Are title, dates, city, authorization, and stack findable in 6 seconds?
   (RULE 1.2)
8. Does the tagline match in all three places — `h1`, `site.tagline`,
   `Footer.astro`? (RULE 2.7)
