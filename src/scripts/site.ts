/**
 * site.ts — the site's single client-side island.
 * Smooth scroll (Lenis), scroll reveals, count-up figures, magnetic buttons,
 * and chart tooltips. Everything is re-init-safe across Astro View Transitions
 * and fully neutralized under prefers-reduced-motion.
 */
import Lenis from "lenis";

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* -------------------------------------------------------------- Lenis ---- */
let lenis: Lenis | null = null;
function initLenis() {
  if (reduce || lenis) return;
  lenis = new Lenis({
    duration: 1.05,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.6,
  });
  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  // Anchor links route through Lenis for buttery in-page jumps.
  document.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement)?.closest?.(
      'a[href^="#"], a[href*="/#"]',
    ) as HTMLAnchorElement | null;
    if (!a) return;
    const url = new URL(a.href, location.href);
    if (url.pathname !== location.pathname) return; // let cross-page nav happen
    const id = url.hash.slice(1);
    const target = id && document.getElementById(id);
    if (target) {
      e.preventDefault();
      lenis?.scrollTo(target as HTMLElement, { offset: -72, duration: 1.1 });
      history.pushState(null, "", url.hash);
    }
  });
}

/* ----------------------------------------------------------- Reveals ---- */
// Handles both [data-reveal] (fade/rise blocks) and .reveal-lines (line clip).
function initReveals() {
  const blocks = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])"),
  );
  const lineGroups = Array.from(
    document.querySelectorAll<HTMLElement>(".reveal-lines:not([data-shown])"),
  );

  // Number the lines for staggered transition-delay.
  lineGroups.forEach((g) => {
    g.querySelectorAll<HTMLElement>(".reveal-line > span").forEach((s, i) =>
      s.style.setProperty("--rl-i", String(i)),
    );
  });

  if (reduce || !("IntersectionObserver" in window)) {
    blocks.forEach((b) => b.setAttribute("data-revealed", ""));
    lineGroups.forEach((g) => g.setAttribute("data-shown", ""));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const delay = el.dataset.revealDelay;
        if (delay) el.style.transitionDelay = `${delay}ms`;
        if (el.classList.contains("reveal-lines"))
          el.setAttribute("data-shown", "");
        else el.setAttribute("data-revealed", "");
        startCountup(el);
        io.unobserve(el);
      }
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
  );
  blocks.forEach((b) => io.observe(b));
  lineGroups.forEach((g) => io.observe(g));

  // Headline above the fold: show immediately so there's no first-paint gap.
  lineGroups
    .filter((g) => g.getBoundingClientRect().top < window.innerHeight * 0.9)
    .forEach((g) => requestAnimationFrame(() => g.setAttribute("data-shown", "")));
}

/* ---------------------------------------------------------- Count-up ---- */
// Animates any [data-countup] within a revealed element from 0 → its target.
// The target/prefix/suffix/decimals come from data attributes so any figure
// (currency, K/M, %, +) ticks correctly while preserving its formatting.
function fmtNum(n: number, dec: number, group: boolean, prefix: string, suffix: string) {
  const body = group
    ? n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })
    : n.toFixed(dec);
  return prefix + body + suffix;
}

function startCountup(scope: HTMLElement) {
  const nums = scope.matches?.("[data-countup]")
    ? [scope]
    : Array.from(scope.querySelectorAll<HTMLElement>("[data-countup]"));
  nums.forEach((el) => {
    if (el.dataset.counted) return;
    el.dataset.counted = "1";
    const target = parseFloat(el.dataset.countup || "0");
    const dec = parseInt(el.dataset.decimals || "0", 10);
    const group = el.dataset.group === "1";
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    if (reduce) {
      el.textContent = fmtNum(target, dec, group, prefix, suffix);
      return;
    }
    const dur = 1150;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3); // cubic-out
      el.textContent = fmtNum(target * eased, dec, group, prefix, suffix);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = fmtNum(target, dec, group, prefix, suffix);
    };
    requestAnimationFrame(step);
  });
}

// Pre-zero count-up figures so they don't flash their final value pre-reveal.
function prepCountups() {
  if (reduce) return;
  document
    .querySelectorAll<HTMLElement>("[data-countup]:not([data-counted])")
    .forEach((el) => {
      const dec = parseInt(el.dataset.decimals || "0", 10);
      const group = el.dataset.group === "1";
      el.textContent = fmtNum(0, dec, group, el.dataset.prefix || "", el.dataset.suffix || "");
    });
}

/* --------------------------------------------------------- Magnetic ---- */
function initMagnetic() {
  if (reduce || !window.matchMedia("(pointer:fine)").matches) return;
  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    if (el.dataset.magBound) return;
    el.dataset.magBound = "1";
    const strength = parseFloat(el.dataset.magnetic || "0.3");
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const reset = () => (el.style.transform = "translate(0,0)");
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
  });
}

/* ---------------------------------------------------------- Tooltips ---- */
// One shared tooltip element. Any [data-tip] target shows it on hover/focus.
let tipEl: HTMLDivElement | null = null;
function tip() {
  if (!tipEl) {
    tipEl = document.createElement("div");
    tipEl.className = "tip";
    tipEl.setAttribute("role", "status");
    document.body.appendChild(tipEl);
  }
  return tipEl;
}
function initTooltips() {
  const move = (e: MouseEvent, el: HTMLElement) => {
    const t = tip();
    const r = el.getBoundingClientRect();
    const x = e ? e.clientX : r.left + r.width / 2;
    t.style.left = `${x}px`;
    t.style.top = `${r.top}px`;
  };
  document.querySelectorAll<HTMLElement>("[data-tip]").forEach((el) => {
    if (el.dataset.tipBound) return;
    el.dataset.tipBound = "1";
    const show = (e: MouseEvent) => {
      const t = tip();
      t.innerHTML = el.dataset.tip || "";
      move(e, el);
      t.setAttribute("data-open", "");
    };
    const hide = () => tip().removeAttribute("data-open");
    el.addEventListener("mouseenter", show);
    el.addEventListener("mousemove", (e) => move(e, el));
    el.addEventListener("mouseleave", hide);
    el.addEventListener("focus", () => {
      const t = tip();
      t.innerHTML = el.dataset.tip || "";
      move(null as unknown as MouseEvent, el);
      t.setAttribute("data-open", "");
    });
    el.addEventListener("blur", hide);
  });
}

/* ------------------------------------------------------------- Boot ---- */
function setup() {
  prepCountups();
  initReveals();
  initMagnetic();
  initTooltips();
}

// Lenis persists for the session; per-page wiring runs on every page-load.
document.addEventListener("astro:page-load", () => {
  initLenis();
  setup();
});
// Fallback if View Transitions are unavailable.
if (document.readyState !== "loading") {
  initLenis();
  setup();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    initLenis();
    setup();
  });
}
// Keep Lenis alive through view transitions; reset scroll on new page.
document.addEventListener("astro:after-swap", () => {
  lenis?.scrollTo(0, { immediate: true });
});
