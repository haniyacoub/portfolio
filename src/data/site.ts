/**
 * site.ts — single source for identity + contact details.
 * Kept out of components so copy/links change in one place.
 */
export const site = {
  name: "Hani Yacoub",
  /* Role names the discipline first and the domain second. He is a data
     generalist — platform, BI, ML, forecasting — whose deepest domain happens
     to be fraud. Leading with "Fraud Analyst" pigeonholed him into one of the
     four sectors he has actually worked in. */
  role: "Data & Risk Analyst",
  shortRole: "Data & risk analyst",
  location: "Berlin",
  email: "hani_yacoub@hotmail.com",
  linkedin: "https://linkedin.com/in/hani1995",
  linkedinLabel: "linkedin.com/in/hani1995",
  url: "https://haniyacoub.com",
  description:
    "Hani Yacoub — data and risk analyst in Berlin. Six years measuring decisions that are expensive to get wrong, across cloud, fashion, automotive, and energy. I build the data platforms, dashboards, models and forecasts behind those calls. Now at AWS, working on fraud prevention.",
  /* The through-line, stated once and reused for the hero, OG image and
     footer, so the three can never drift apart. Method in the main clause,
     domain in the tail. */
  tagline:
    "I make expensive decisions measurable. Most of them are about fraud.",
} as const;

// Real routed pages — the site is multi-page, not a single scroll.
export const nav = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Résumé", href: "/Hani_Yacoub_CV.pdf" },
] as const;
