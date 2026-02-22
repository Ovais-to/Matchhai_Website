import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "rgb(var(--color-bg-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-bg-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--color-bg-tertiary) / <alpha-value>)"
        },
        brand: {
          primary: "rgb(var(--color-primary) / <alpha-value>)",
          primaryHover: "rgb(var(--color-primary-hover) / <alpha-value>)",
          secondary: "rgb(var(--color-secondary) / <alpha-value>)"
        },
        status: {
          success: "rgb(var(--color-success) / <alpha-value>)",
          error: "rgb(var(--color-error) / <alpha-value>)"
        },
        border: "rgb(var(--color-border) / <alpha-value>)",
        ring: "rgb(var(--color-ring) / <alpha-value>)",
        text: {
          primary: "rgb(var(--color-text-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
          muted: "rgb(var(--color-text-muted) / <alpha-value>)"
        }
      },
      boxShadow: {
        glow: "0 0 24px rgb(var(--color-primary) / 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
