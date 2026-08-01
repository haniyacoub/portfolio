/**
 * site.ts: single source for identity + contact details.
 * Kept out of components so copy/links change in one place.
 */
export const site = {
  name: "Hani Yacoub",
  /* Role names the discipline first and the domain second. He is a data
     generalist across platform, BI, ML and forecasting, whose deepest domain
     happens to be fraud. Leading with "Fraud Analyst" pigeonholed him into one
     of the four sectors he has actually worked in. */
  role: "Data & Risk Analyst",
  shortRole: "Data & risk analyst",
  location: "Berlin",
  email: "hani_yacoub@hotmail.com",
  linkedin: "https://linkedin.com/in/hani1995",
  linkedinLabel: "linkedin.com/in/hani1995",
  url: "https://haniyacoub.com",
  description:
    "Hani Yacoub, data and risk analyst in Berlin. Six years across energy, automotive, fashion and cloud. I build the data platforms, dashboards, models and forecasts that fraud decisions run on. Now at AWS.",
  /* Stated once and reused by the hero, the OG card and the footer, so the
     three can never drift apart. States what was built rather than making a
     claim about the person who built it. */
  tagline:
    "I built the platform, the dashboards, the models and the forecasts that fraud decisions run on.",
} as const;

/* Shipped products, linked so a reader can go and use them. Two independently
   designed, built and released products are the most verifiable thing on this
   site, and they were previously named without being clickable. */
export const products = [
  {
    name: "Renitor",
    url: "https://renitor.com",
    label: "renitor.com",
    note: "VS Code extension. Your coding task survives when one AI agent stops.",
  },
  {
    name: "Preflights",
    url: "https://preflights.app",
    label: "preflights.app",
    note: "Catches the Shopify import mistakes that cannot be undone.",
  },
] as const;

/* One page plus the case studies. About and Contact were separate routes that
   each held a few lines. Both now live on the home page, so the nav points at
   sections rather than sending the reader away to read one paragraph.
   Email is a persistent button in the nav instead of a page of its own. */
export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  // Opens in a new tab (see Nav.astro): a PDF viewer has none of the site's
  // chrome, so navigating the current tab into it is a dead end.
  { label: "Résumé", href: "/Hani_Yacoub_CV.pdf", external: true },
] as const;
