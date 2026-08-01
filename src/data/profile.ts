/**
 * profile.ts — editable bio figures, career timeline, markets, stack.
 * Kept out of the markup so copy and numbers change in one place.
 */

/** Framing figures shown beside the opening statement.
    These are what a recruiter scans for in the first screenful, so they buy
    breadth of experience and breadth of *work*. Languages moved to /about —
    a good detail, but not worth a third of the headline space. */
export const facts = [
  { value: "6+", unit: "yrs", label: "In data, risk & analytics", emphasis: false },
  { value: "4", unit: "sectors", label: "Energy · auto · fashion · cloud", emphasis: false },
  { value: "18", unit: "cases", label: "Platforms, dashboards, models, forecasts", emphasis: false },
] as const;

/** Career arc — drives the Timeline. Absolute periods, his real history. */
export const career = [
  { date: "2020", org: "Statkraft", detail: "Energy. Data & risk analysis" },
  { date: "2021", org: "AUTO1 Group", detail: "Automotive. Risk & abuse analytics" },
  {
    date: "2024 to 2026",
    org: "Zalando",
    detail: "Fashion. Risk & Abuse / Transaction Risk Management",
  },
  {
    date: "2026",
    org: "AWS",
    detail: "Cloud. Payments & Fraud Prevention (Registration)",
  },
] as const;

/** Markets covered in the Zalando risk work. */
export const markets = ["DE", "NL", "BE", "FR", "IT", "CH"] as const;

/** Stack, stated plainly. */
export const stack = [
  "Python",
  "SQL",
  "PySpark",
  "Databricks / Spark · Delta",
  "Amazon Redshift",
  "XGBoost / classifiers",
  "SageMaker",
  "LLM agents · MCP",
  "Streamlit · Plotly",
  "QuickSight · Tableau",
  "sigma.js · graph analysis",
] as const;
