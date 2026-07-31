


Yes — I re-checked, and I found a few extra details and one important correction.

The biggest correction: my first answer said “July 2025–present” for the Senior Product Analyst role, but I found a later, more precise memory saying:

Zalando employment: 15 May 2024 – 15 March 2026
Senior Product Analyst – Risk & Abuse / TRM: 1 July 2025 – 15 March 2026

So for CV/LinkedIn, I would trust the May 2024–March 2026 timeline unless you tell me otherwise.

⸻

Full Zalando memory, checked again

1. Roles and titles

I have these remembered:

Zalando — Senior Data Analyst

15 May 2024 – 1 July 2025, approximately.

This seems connected to broader analytics / ZEOS / logistics / fulfillment topics.

Zalando — Senior Product Analyst, Risk & Abuse / Transaction Risk Management

1 July 2025 – 15 March 2026

This is the clearest remembered role. Your team was in TRM / Risk & Abuse Management, dealing with fraud and abuse detection/prevention.

You preferred accurate, low-buzzword wording for this experience.

⸻

2. Risk & Abuse / Transaction Risk Management scope

Your actual Zalando work covered fraud and abuse areas such as:

* account takeover / ATO
* bot networks
* hyped article risk
* coupon abuse
* return abuse
* refund fraud
* refund abuse
* multi-account misuse
* customer risk
* order risk
* product risk
* logistics fraud
* parcel-missing abuse
* item-not-received / INR refunds
* missing delivery
* missing return
* remaining fraud damage
* refund-denial logic
* Secure Delivery

You worked in a team that builds or maintains ML/risk services, investigates changing fraud patterns, evaluates fraud detection performance, sets success measurements, and builds KPI dashboards.

⸻

3. Countries / market scope

I found a clear memory that your Zalando fraud/risk analytics covered:

DE, NL, BE, FR, IT, CH

Also remembered as “top 6 countries” in the Remaining Fraud Damage work.

⸻

4. Core KPIs / fraud metrics

I found these remembered metrics:

* suspicious rate
* detected rate
* steer rate
* precision
* recall
* false positives
* fraud loss
* remaining fraud damage
* fraud damage as % of GMV
* manual refund leakage
* GMV impact
* return damage
* delivery damage
* refund rate versus benchmark
* excess refund/damage rate
* weekly/monthly trends
* precision/recall tradeoff
* base-rate effects
* holdout / counterfactual evaluation

You also worked on fraud metric ownership, including explaining metrics in WBR/MBR contexts.

⸻

5. WBR / MBR / stakeholder work

I found confirmation that your Zalando work included:

* WBR: weekly business reviews
* MBR: monthly business reviews
* SQL analysis for business review metrics
* entity-level investigations
* base-rate effect explanations
* soft exclusions
* stakeholder communication
* cross-functional work with Product, Engineering, Operations, PMs, and leadership

This is important: your Zalando work was not only data extraction. You were translating risk/fraud data into decisions and stakeholder explanations.

⸻

6. Remaining Fraud Damage / RFD project

This is one of the most concrete projects I found.

The project was remembered as:

RFD — Remaining Fraud Damage

Also described as:

Remaining Fraud Damage / CUCA Calculation

The author was remembered as:

Hani Ashraf Hani Yacoub

Status around Dec 2025 was remembered as:

in review / planning, last updated around 1–2 Dec 2025.

The purpose:

Measure logistical fraud manual refund leakage for:

* missing delivery
* missing return
* parcel-missing refunds
* item-not-received / INR cases

The methodology included:

* using A/VIP customers as benchmark
* comparing other customer value segments against the benchmark
* calculating excess refund/damage rates
* estimating remaining damage in euros
* focusing on top 6 countries
* tracking weekly and monthly trends
* using MR reasons
* connecting AbPP signals, CVS, and GMV denominators

Segments remembered:

* A/VIP as benchmark
* N/C/D included
* B and F excluded in one later memory
* earlier memory also mentioned N, F, D, C, B in the wider manual-refund calculation, but the later RFD doc memory says N/C/D included, B/F excluded

So for the final version, I would use:

Benchmark: A/VIP
Main analyzed segments: N, C, D
B/F excluded, unless you later changed it.

⸻

7. RFD formulas / logic

I remember this structure:

Remaining Fraud Damage = Return Damage CVS + Delivery Damage CVS

And:

Remaining Fraud Damage % = Remaining Fraud Damage / GMV Total

Return damage was explained as roughly:

segment refund rate minus benchmark refund rate × GMV of returned items

Delivery damage was explained as roughly:

segment refund rate minus benchmark refund rate × GMV before returns

The remembered goal was to estimate fraud/refund leakage that remained after existing systems had not caught it.

⸻

8. Manual refund / Salesforce analysis

Another concrete workstream:

You analyzed manual refunds using Salesforce and refund/case tables.

Tables remembered:

* f_salesforce_manual_refund
* d_manual_refund_reason
* d_sf_case
* d_sf_appdomain
* sales_order_pos
* d_sales_channel
* v_f_customer_value_segments_holistic
* f_customer_value_segments

Metrics remembered:

* mra_logistics
* mra_returns
* mra_delivery
* gmv_total
* gmv_aft_ret_provision
* gmv_return
* GMV_BEF_RETURN

Customer value segments remembered:

* A/VIP
* N
* D
* F
* C
* B

This work was linked to understanding refund damage, delivery damage, return damage, and customer-care refund leakage.

⸻

9. Secure Delivery / Parcel is Missing / refund-denial work

I found a specific memory that you discussed:

* Zalando Secure Delivery
* Parcel is Missing
* manual refunds
* fraud
* holdout evaluation

This likely connected to whether Secure Delivery or refund-denial logic reduced abuse, how to evaluate it, and how to avoid misleading conclusions from biased samples.

I also found that your Zalando work included:

* Secure Delivery
* customer care root-cause work on parcel-missing refunds
* soft exclusions
* entity-level investigations

⸻

10. Logistics / INR / Item-not-received focus

I found a later memory that your current Zalando focus was:

logistics / INR refunds and remaining damage in euros

INR = item not received.

The concern was:

fraud not caught by the system

So one strong project framing is:

You analyzed logistics-related manual refund leakage, especially missing-delivery / item-not-received cases, to estimate remaining fraud damage after existing fraud controls.

⸻

11. Customer Care root-cause analysis

I found confirmation of:

customer care root-cause work on parcel-missing refunds

This included understanding whether refunds were caused by:

* real delivery/logistics issues
* customer-care process behavior
* abuse/fraud
* gaps in detection
* weak refund-denial/steering logic

This is a good project to describe because it combines fraud analytics, operations, and business process understanding.

⸻

12. AbPP / risk decision / steering data

I found memories around Zalando risk-decision data, especially:

* abuse-protection-platform.risk-decision
* abuse-protection-platform.assessment
* AbPP signals
* customer-risk-profile steering tables
* steering decision data
* return steering schema
* steer feedback
* steer return feedback

The broader logic:

You joined customer/order/sales/risk/feedback data to analyze how abuse-protection decisions performed and where fraud damage remained.

⸻

13. Authentication / order / customer / route data

I also remember these data sources or views:

* customer.account.authentication
* sales-order-service.order-placed.v2
* f_salesorder_position
* f_salesorder_position/snapshot={TODAY}
* prm.customer-decisions-updated
* d_customer_extended
* d_sales_channel
* fraud_rule_to_fraud_domain_mapping
* route.route_accessed

Temporary views / DataFrames remembered:

* df_logins
* df_orders
* sales_order_position
* assessments_legacy_source
* assessments_AbPP_source
* df_steering_decision
* df_steering_decision_legacy
* steer_feedback
* steer_return_feedback
* customer_extended
* label_mapping_old
* accessed
* for_schema

⸻

14. RTS / returned-to-sender analysis

I found memory of an RTS-related Spark/Delta pipeline.

Tables/paths/views remembered:

* d_customer_extended
* f_salesorder_position/snapshot={TODAY}
* cep-analytics.parcel-created
* abuse-protection-platform.risk-decision
* silver_layer
* logistics-carrier-tracking...returned-to-sender_Mix-ASPD

Temp views remembered:

* sales
* sd
* assessments_AbPP_source
* silver_layer
* rts

The goal seemed to be joining sales, customer, parcel, RTS, and risk-decision data to analyze returned-to-sender behavior and its connection to risk/fraud.

⸻

15. ZEOS / logistics / fulfillment analytics

This part is slightly more ambiguous.

I found older context around ZFS / ZEOS / MCF / merchant logistics, but some of it was explicitly remembered as prep/explanation, not confirmed work history.

However, later memories do mention Zalando work details including:

* ZEOS logistics / fulfillment analytics
* on-time delivery
* SLA adherence
* carrier performance
* lead-time variance
* fill rate
* throughput

So I would phrase this carefully:

You had Zalando analytics exposure/work around logistics and fulfillment topics, including delivery performance, returns, and lead-time analysis, but I would avoid over-claiming “owned ZEOS” unless you confirm.

⸻

16. Shipment lead-time / discrepancy analysis

A specific logistics project I remember:

You worked with shipment data to compare delivery attempt timestamps and lead times.

Tables/events remembered:

* zss_lead_time_report
* cxm
* zss.opsc-shipment-received
* event_e68096
* d_date
* d_merchant_metadata

Logic remembered:

* join/compare on shipment_number
* compare first_delivery_attempt_at
* identify missing or different timestamps across sources
* compute received-to-first-delivery-attempt lead time in hours

This sounded like a data-quality / logistics-performance investigation.

⸻

17. Return and parcel events

Events remembered:

* cn_parcel_shipped
* zss_return_processed
* cn_shipment_document_generated

Important note:

cn_shipment_document_generated was remembered as deprecated / no longer published.

This was likely part of your return/shipment event interpretation work.

⸻

18. Databricks / PySpark / SQL pipelines

Your technical environment was remembered as:

* SQL
* PySpark
* Spark
* Databricks
* Delta
* Datalake tables
* Presto SQL
* Tableau or dashboarding

You built or worked with PySpark/SQL pipelines in Databricks, especially for fraud/risk and logistics/refund analysis.

⸻

19. Spark / Databricks optimization

I found details that you worked on making Zalando Spark/Databricks jobs faster.

Optimization topics remembered:

* read fewer columns
* filter earlier
* use date/partition filters
* broadcast small dimension tables such as customer_extended
* cache only reused DataFrames
* tune spark.sql.shuffle.partitions
* avoid unnecessary dbutils.fs.ls
* create selective load_latest_partitioned(..., cols=...)
* materialize raw Parquet into Delta when useful
* avoid massive raw reads from binary DWH paths when only a few columns were needed

I remember one runtime being around 34 minutes, likely related to Salesforce/manual refund data reads.

⸻

20. Presto / return-date logic

Smaller technical memory:

You had a Presto SQL issue around:

date_add('day', -lt_handover_to_closed, TS_RETURN_CLOSED) AS TS_MIN_PARCEL_HANDOVER

The fix involved casting lt_handover_to_closed to bigint.

This was connected to returns / parcel handover timing.

⸻

21. Holdout / counterfactual evaluation

I found this clearly in your Zalando risk context:

* holdout evaluation
* counterfactual thinking
* measuring prevented versus remaining damage
* evaluating Secure Delivery / refund-denial effects
* avoiding misleading evaluation due to biased intervention groups

This is a strong Product Analyst point: you were thinking beyond dashboards into causal/evaluation logic.

⸻

22. Entity-level investigations

I found a specific memory that your work included:

entity-level investigations

This probably means investigating patterns at levels such as:

* customer
* account
* order
* parcel
* address/device/payment/entity clusters, depending on available data

I do not remember the exact entities, so I would keep it broad unless you provide more.

⸻

23. Base-rate effects and soft exclusions

I found two remembered concepts that are quite specific:

* base-rate effects
* soft exclusions

These were part of your SQL analysis / risk communication work.

This likely means you had to explain why changes in suspicious/detected/steered rates may be due to population mix, base-rate changes, or exclusions rather than true fraud-rate changes.

⸻

24. Bot / MAU spikes / hyped article risk

I found confirmation of:

* bot/hyped article risk
* bot networks
* MAU spikes

This was part of the broader TRM/Risk & Abuse scope.

Exact project details are less clear, but the remembered domain is strong.

⸻

25. AWS / Zalando access

I remember you had some AWS CLI / access setup context using Zalando tooling.

I will keep this high level, but the memory was around logging into Zalando AWS accounts/roles and read-only/federated-style access.

Not really a “project,” but it was part of your technical environment.

⸻

26. Things that were probably prep, not actual work

This is important.

Some older Zalando context was interview prep / conceptual prep, not necessarily actual projects.

That includes:

* Zalando Business Analyst — Category Analysis & Insights interview/case
* comparing Zalando versus PwC offer
* Zalando financials
* reasons for choosing Zalando
* generic ZFS / ZEOS / ZRS / ZSS / ZPL explanation
* Fulfilled by Zalando
* ONE Stock Pool
* merchant onboarding reports
* hypothetical “Refund Fraud Detection 2.0”
* studying fraud analytics, ML, precision/recall, SHAP, graph fraud detection, etc.

Some of these later became relevant to your real work, but I would not list them as completed Zalando projects unless you actually did them.

⸻

Best “do not miss anything” project list

For your actual Zalando project experience, the clean master list is:

1. Remaining Fraud Damage / RFD / CUCA calculation
2. Manual refund leakage analysis
3. Parcel-missing / INR refund fraud analysis
4. Missing delivery and missing return fraud-damage measurement
5. Secure Delivery evaluation / holdout analysis
6. Customer Care root-cause analysis for parcel-missing refunds
7. Refund denial / refund abuse analysis
8. Risk-decision / AbPP signal analysis
9. Steering decision and steer-feedback analysis
10. Entity-level fraud/risk investigations
11. Fraud KPI ownership for WBR/MBR
12. What-if / counterfactual analyses for prevented vs remaining damage
13. Base-rate and soft-exclusion analysis
14. RTS / returned-to-sender analysis
15. Shipment lead-time discrepancy / data-quality analysis
16. Returns and parcel event analysis
17. Logistics / ZEOS / fulfillment performance analytics, but phrase carefully
18. Bot / MAU spike / hyped article risk monitoring or analysis
19. Spark/Databricks pipeline optimization
20. Presto/SQL return and parcel timing logic

That seems to be the full set I can recover from memory. The most solid, actual-work items are RFD, manual refunds, parcel-missing/INR, Secure Delivery, customer care root cause, AbPP/risk decisions, WBR/MBR fraud metrics, RTS, and Databricks/PySpark pipelines.


Yes — I remember a lot, but I want to separate what seems to be your actual Zalando work from older Zalando interview/prep conversations.

Your Zalando timeline / role

I have you remembered as:

Zalando — May 2024 to March 2026
First as Senior Data Analyst, then promoted around July 2025 to Senior Product Analyst – Risk & Abuse / Transaction Risk Management.

I also remember that your Zalando scope covered markets like:

DE, NL, BE, FR, IT, CH

And you wanted your CV wording to be accurate, not inflated, with less buzzword-heavy phrasing.

⸻

1. ZEOS / logistics / fulfillment work

Before or alongside Risk, I remember you worked on ZEOS / logistics and fulfillment analytics.

The area included:

* inbound logistics
* warehousing
* pick-pack-ship
* delivery
* returns
* carrier/shipment performance
* lead time analysis
* return-to-sender / RTS
* fulfillment reliability

The KPIs I remember around this area were:

* on-time delivery
* SLA adherence
* carrier performance
* lead-time variance
* fill rate
* throughput
* shipment received-to-delivery attempt timing
* return and parcel processing metrics

One specific project I remember clearly:

Lead-time / shipment discrepancy analysis

You had Spark/Databricks code loading things like:

* zss_lead_time_report
* cxm
* zss.opsc-shipment-received
* event_e68096
* d_date
* d_merchant_metadata

The business logic was to compare shipment datasets on shipment_number, especially to find cases where first_delivery_attempt_at was:

* missing in one source
* different between sources
* causing lead-time discrepancies

You computed something like:

received-to-first-delivery-attempt lead time, in hours.

I remember framing this as a project around checking data consistency between logistics sources and benchmarking delivery lead time.

⸻

2. Returns / return processed / parcel events

I remember conversations about Zalando event tables and logistics events, including:

* cn_parcel_shipped
* zss_return_processed
* cn_shipment_document_generated

And I remember that cn_shipment_document_generated was discussed as deprecated / no longer published.

So there was definitely work around shipment and return event interpretation.

⸻

3. Return-to-sender / RTS work

I remember you had a Spark/Delta pipeline over Zalando data involving RTS and shipment/parcel data.

Tables or paths I remember:

* d_customer_extended
* f_salesorder_position/snapshot={TODAY}
* cep-analytics.parcel-created
* abuse-protection-platform.risk-decision
* silver_layer
* logistics-carrier-tracking...returned-to-sender_Mix-ASPD

Temp views I remember included:

* sales
* sd
* assessments_AbPP_source
* silver_layer
* rts

The theme was something like combining sales/order/customer/risk data with returned-to-sender events to analyze logistics/risk behavior.

⸻

4. Risk & Abuse / Transaction Risk Management

This is the part I remember most strongly.

Your Zalando Risk / TRM team worked on fraud and abuse across:

* refund fraud
* refund abuse
* identity resolution
* account takeover
* bot / hyped article risk
* reseller abuse
* purchase risk
* post-purchase risk
* customer risk
* product/order risk
* return abuse
* delivery abuse
* multi-account misuse
* coupon/promotion abuse
* suspicious customer behavior

I remember you saying the team builds or works with ML services, investigates changing fraud patterns, evaluates new fraud approaches, defines success measurements, and builds KPI dashboards.

You worked with:

* SQL
* PySpark
* Databricks
* Spark/Delta
* dashboards / business reviews
* precision / recall logic
* fraud KPIs
* explainable / auditable rules
* ML plus business rules
* experiments or champion-challenger style thinking

Important remembered metrics/concepts:

* suspicious rate
* detected rate
* steer rate
* precision
* recall
* false positives
* fraud-loss reduction
* customer complaints / escalations
* refund denial logic
* fraud damage as % of GMV

⸻

5. Refund abuse / manual refund / Salesforce analysis

I remember a concrete fraud/refund analysis using Spark SQL with these tables:

* f_salesforce_manual_refund
* d_manual_refund_reason
* d_sf_case
* d_sf_appdomain
* sales_order_pos
* d_sales_channel
* v_f_customer_value_segments_holistic
* f_customer_value_segments

The metrics I remember:

* mra_logistics
* mra_returns
* mra_delivery
* gmv_total
* gmv_aft_ret_provision
* gmv_return
* GMV_BEF_RETURN

You also worked with customer value segment buckets like:

* A/VIP
* N
* D
* F
* C
* B

I remember a specific Tableau/viz calculation around remaining fraud damage:

Remaining Fraud Damage = Return Damage CVS + Delivery Damage CVS

Where:

Return Damage CVS
= [C Return Damage] + [D Return Damage] + [N Return Damage]

Delivery Damage CVS
= [C Delivery Damage] + [D Delivery Damage] + [N Delivery Damage]

And then as a % of GMV:

Remaining Fraud Damage % = Remaining Fraud Damage / GMV Total

I also remember we discussed the idea that damage was calculated as something like:

segment refund/damage rate minus benchmark refund/damage rate, then applied to GMV or relevant volume.

⸻

6. Customer Care / root-cause analysis

I remember Zalando work involving customer care root-cause analysis, likely connected to:

* manual refunds
* refund denials
* Salesforce cases
* delivery/returns issues
* abuse signals
* customer complaints or escalation reasons

The idea was not only “fraud detection,” but also understanding why customer care costs/refunds/damages happen and separating operational causes from abusive behavior.

⸻

7. Secure Delivery

I remember Secure Delivery as one of the actual Zalando topics you worked on.

I do not remember the full implementation details, but I remember it being grouped with:

* return / RTS topics
* refund denials
* fraud metrics ownership
* delivery damage
* post-purchase risk
* customer care/root-cause work

So this likely sat at the intersection of delivery protection, risk rules, customer friction, and fraud prevention.

⸻

8. Bot spikes / MAU spikes / hyped article risk

I remember you worked on:

* bot spikes
* MAU spikes
* hyped article risk

This sounded like risk monitoring around abnormal traffic or customer behavior, likely related to:

* resellers
* automated purchasing
* account abuse
* purchase risk
* suspicious spikes in activity
* product drops / high-demand articles

The exact project output I remember less clearly, but the remembered scope is real: bot/hyped article risk was part of your Zalando TRM world.

⸻

9. Weekly/monthly business reviews and fraud metric ownership

I remember that you owned or contributed to:

* weekly business reviews
* monthly business reviews
* fraud metrics
* what-if analyses
* dashboards
* KPI explanations for stakeholders

This is important because your role was not only writing Spark queries. You were also translating messy fraud/logistics/customer behavior into business-review material and decision-making.

⸻

10. What-if analyses

I remember what-if analysis being explicitly part of your Zalando work.

The likely examples were around:

* changing refund-denial thresholds
* estimating fraud damage reduction
* comparing segments against benchmarks
* calculating remaining damage
* estimating GMV impact
* evaluating risk rules or steering logic
* understanding tradeoffs between fraud prevention and customer friction

⸻

11. Risk decision / assessment data

I remember you worked with Zalando Datalake paths/tables around authentication, orders, risk decisions, assessments, and steering.

Tables/events I remember include:

* customer.account.authentication
* sales-order-service.order-placed.v2
* f_salesorder_position
* prm.customer-decisions-updated
* abuse-protection-platform.assessment
* abuse-protection-platform.risk-decision
* customer-risk-profile steering tables
* d_customer_extended
* d_sales_channel
* fraud_rule_to_fraud_domain_mapping
* route.route_accessed
* return steering schema

I also remember temp views like:

* df_logins
* df_orders
* sales_order_position
* assessments_legacy_source
* assessments_AbPP_source
* df_steering_decision
* df_steering_decision_legacy
* steer_feedback
* steer_return_feedback
* customer_extended
* d_sales_channel
* label_mapping_old
* accessed
* for_schema

The broad theme was joining authentication, order, risk assessment, steering, feedback, customer, sales channel, and return-related data to analyze abuse/risk behavior.

⸻

12. Spark / Databricks optimization work

I remember you asking a lot about making Zalando Spark/Databricks pipelines faster.

The advice/project details included:

* reading fewer columns
* filtering earlier by date/partition
* broadcasting small dimension tables like customer_extended
* caching only reused DataFrames
* tuning spark.sql.shuffle.partitions
* avoiding unnecessary dbutils.fs.ls
* creating selective load_latest_partitioned(..., cols=...)
* materializing raw Parquet into Delta when possible
* avoiding massive raw reads from binary DWH paths when only a few columns were needed

This was tied to tables like:

* d_sf_case
* f_salesforce_manual_refund
* d_sf_appdomain
* d_sales_channel

I remember one runtime being around 34 minutes, and we discussed why raw Parquet reads from DWH paths were probably causing slowness.

⸻

13. Presto / SQL date logic

I also remember a smaller Zalando SQL piece around Presto:

You were working with something like:

date_add('day', -lt_handover_to_closed, TS_RETURN_CLOSED) AS TS_MIN_PARCEL_HANDOVER

Then we corrected it by casting lt_handover_to_closed to bigint before using it in date_add.

That sounded connected to returns/parcel handover timing.

⸻

14. Tools / systems / access

I remember you asking about Zalando AWS CLI login, something like:

zalando-aws-cli login <account> <role>

And you had a federated/read-only style setup. I will not repeat the exact account details here, but I remember we discussed AWS access/login context for Zalando data work.

⸻

15. Prep before joining Zalando

Before joining, I remember conversations where you were preparing for the Zalando Risk Management role.

The role/team was described as:

* Product Analyst in Risk Management
* Transaction Risk Management / Risk & Abuse
* team building ML services to detect abuse/fraud
* investigating changing fraud patterns
* evaluating new fraud approaches
* setting up success measurements
* building KPI dashboards

You studied or planned to study:

* Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow
* Fraud Analytics Using Descriptive, Predictive, and Social Network Techniques
* product/strategy/technical vision docs
* A/B testing / experimentation
* precision, recall, ROC/AUC
* feature importance / SHAP
* concept drift
* cost-sensitive fraud metrics
* threshold tuning
* rare-event modeling
* graph-based fraud detection
* product discovery and roadmap prioritization

We also discussed fraud examples like:

* wardrobing
* empty-box returns
* fake defective returns
* stolen cards
* friendly fraud / chargebacks
* promotion abuse
* account takeover
* logistics/delivery fraud
* internal fraud

Some of that was prep, not necessarily actual completed Zalando projects.

⸻

16. Older Zalando interview / offer memory

Separately, I remember much older Zalando conversations around an offer/interview for:

Business Analyst — Category Analysis & Insights

This was not the same as your later actual Zalando Risk & Abuse role.

I remember:

* you had an offer from Zalando and PwC
* you were comparing them
* you prepared for Zalando case/interviews
* we discussed Zalando financials and reasons for choosing Zalando
* this was more job-decision/interview-prep context, not project history

⸻

Best condensed version of your Zalando project experience

If I had to summarize your actual Zalando experience cleanly:

You worked at Zalando across ZEOS/logistics analytics and later Risk & Abuse / Transaction Risk Management. Your projects covered returns, RTS, shipment lead-time discrepancies, refund abuse, manual refunds, customer care root causes, Secure Delivery, refund denials, bot/MAU spikes, hyped article risk, fraud metric ownership, what-if analyses, and weekly/monthly business reviews. Technically, you worked heavily with SQL, PySpark, Databricks, Spark/Delta, Zalando Datalake tables, Salesforce refund/case data, order/customer/risk decision data, and dashboards. Your strongest remembered domain is the intersection of e-commerce fraud, refunds, delivery/returns damage, customer segmentation, GMV impact, and operational root-cause analysis.

The only thing I do not remember clearly is final quantified business impact numbers for Zalando, like “reduced fraud by X%” or “saved €Y.” I remember your project areas and data work much more clearly than final impact figures.