/**
 * site.ts — single source for identity + contact details.
 * Kept out of components so copy/links change in one place.
 */
export const site = {
  name: "Hani Yacoub",
  role: "Fraud Prevention & AI-Abuse Analyst",
  shortRole: "Fraud & AI-abuse analyst",
  location: "Berlin",
  email: "hani_yacoub@hotmail.com",
  linkedin: "https://linkedin.com/in/hani1995",
  linkedinLabel: "linkedin.com/in/hani1995",
  url: "https://haniyacoub.com",
  description:
    "Hani Yacoub, fraud-prevention and AI-abuse analyst. Six years turning messy data into clear, defensible enforcement decisions across cloud, fashion, automotive, and energy. Now at AWS Payments & Fraud Prevention.",
  // The precision/recall through-line, stated once, reused for OG + meta.
  tagline:
    "Find the abuse, prove it, and don't break the legitimate customers doing it.",
} as const;

// Real routed pages — the site is multi-page, not a single scroll.
export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Résumé", href: "/Hani_Yacoub_CV.pdf" },
] as const;
