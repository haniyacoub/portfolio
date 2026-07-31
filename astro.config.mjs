// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://haniyacoub.com",
  // Charts and entrance animations run as tiny vanilla-JS islands only where
  // genuinely needed; the rest of the site ships zero client JS.
  prefetch: false,
});
