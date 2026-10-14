import type { Config } from "tailwindcss";

// Colors come from CSS variables in app/globals.css, so light and dark
// themes only need to swap the variables, not every class.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-alt": "var(--bg-alt)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        line: "var(--border)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "hero-bg": "var(--hero-bg)",
        band: "var(--band)",
        "band-2": "var(--band-2)",
        "band-muted": "var(--band-muted)",
        orange: "#FB7D1C",
      },
      fontFamily: {
        sans: ['"Manrope Variable"', "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        mono: ['"Fira Code"', "ui-monospace", "Menlo", "Consolas", "monospace"],
      },
      // Type scale used across the site
      fontSize: {
        meta: ["0.8rem", { lineHeight: "1.4" }],
        small: ["0.95rem", { lineHeight: "1.6" }],
        lead: ["1.05rem", { lineHeight: "1.65" }],
        title: ["1.15rem", { lineHeight: "1.3" }],
        service: ["clamp(1.3rem, 2.6vw, 1.75rem)", { lineHeight: "1.2" }],
        section: ["clamp(1.6rem, 3.6vw, 2.1rem)", { lineHeight: "1.2" }],
        display: ["clamp(2.1rem, 5vw, 3.4rem)", { lineHeight: "1.1" }],
      },
      maxWidth: { page: "1120px", measure: "62ch" },
      aspectRatio: { "4/3": "4 / 3", collage: "10 / 8" },
      gridTemplateColumns: {
        hero: "minmax(0, 1fr) minmax(0, 1fr)",
        service: "minmax(0, 1fr) minmax(0, 1.4fr) minmax(0, .9fr)",
        closing: "minmax(0, 1fr) minmax(0, 1.1fr)",
      },
      transitionTimingFunction: { spring: "cubic-bezier(.5, 1.6, .4, 1)" },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        rise: "rise .6s cubic-bezier(.2,.7,.2,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
