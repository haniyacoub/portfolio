/**
 * profile.ts: editable bio figures, career timeline, markets, stack.
 * Kept out of the markup so copy and numbers change in one place.
 */

/** Framing figures shown beside the opening statement.
    These are what a recruiter scans for in the first screenful, so they buy
    breadth of experience and breadth of *work*. Languages moved to /about.
    A good detail, but not worth a third of the headline space. */
export const facts = [
  { value: "6+", unit: "yrs", label: "In data, risk & analytics", emphasis: false },
  { value: "4", unit: "sectors", label: "Energy · auto · fashion · cloud", emphasis: false },
  { value: "18", unit: "cases", label: "Platforms, dashboards, models, forecasts", emphasis: false },
] as const;

/** Career arc, which drives the Timeline.
    CLOSED date ranges on purpose: an open-ended single year ("2021") leaves a
    recruiter unable to work out tenure, which is one of the few hard tokens
    they actually scan for. Each entry names the sector and the real job title,
    because "Statkraft" and "AUTO1" mean nothing to a reader outside Germany. */
export const career = [
  {
    date: "2020 to 2021",
    org: "Statkraft",
    detail: "Energy · Quantitative analyst intern, energy markets",
  },
  {
    date: "2021 to 2024",
    org: "AUTO1 Group",
    detail: "Automotive · Data analyst, customer acquisition",
  },
  {
    date: "2024 to 2026",
    org: "Zalando",
    detail: "Fashion e-commerce · Senior product analyst, risk & abuse",
  },
  {
    date: "2026 to present",
    org: "AWS",
    detail: "Cloud · Payments & fraud prevention",
  },
] as const;

/** Education and ongoing study. The "ongoing" on the last one is the point:
    it says he is still actively levelling up, which reads better than a date
    from years ago. */
export const education = [
  {
    what: "MSc Business Management",
    where: "SRH Berlin University of Applied Sciences",
  },
  {
    what: "Data Engineering with AWS",
    where: "Udacity nanodegree",
  },
  {
    what: "ML engineering, self-directed",
    where: "12-month curriculum, ongoing: built from scratch before reaching for libraries",
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
