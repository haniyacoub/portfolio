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

/* Real routed pages — the site is multi-page, not a single scroll.
   Work comes first: the case studies are the substance of the portfolio, and
   without this entry there was no path to them from the first screenful at
   all — a visitor had to scroll past two full screens on faith. */
export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  // Opens in a new tab (see Nav.astro): a PDF viewer has none of the site's
  // chrome, so navigating the current tab into it is a dead end.
  { label: "Résumé", href: "/Hani_Yacoub_CV.pdf", external: true },
] as const;
