import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#b8965a",
          50: "#faf3e2",
          100: "#f2e2b8",
          200: "#e6ca86",
          300: "#d6b25f",
          400: "#c8a35a",
          500: "#b8965a",
          600: "#9c7d47",
          700: "#7d6438",
          800: "#5b4926",
          900: "#3b2f18",
        },
        ink: "#0b0b0b",
        graphite: "#171717",
        smoke: "#f6f4ef",
        line: "#e6e2d8",
        muted: "#6b6660",
      },
      fontFamily: {
        serif: [
          "var(--font-serif)",
          "Cormorant Garamond",
          "Playfair Display",
          "Georgia",
          "serif",
        ],
        sans: [
          "var(--font-sans)",
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      letterSpacing: {
        kicker: "0.22em",
        brand: "0.12em",
      },
      boxShadow: {
        glass: "0 22px 60px -30px rgba(0,0,0,.45)",
        gold: "0 12px 40px -18px rgba(184,150,90,.55)",
        header: "0 12px 40px -20px rgba(0,0,0,.25)",
        card: "0 30px 80px -40px rgba(0,0,0,.35)",
      },
      transitionTimingFunction: {
        emil: "cubic-bezier(0.23, 1, 0.32, 1)",
        drawer: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floatIn: {
          from: { opacity: "0", transform: "translate3d(0,14px,0)" },
          to: { opacity: "1", transform: "translate3d(0,0,0)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        floatIn: "floatIn .9s cubic-bezier(.22,1,.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
