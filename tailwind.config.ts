import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--color-bg-primary)",
          secondary: "var(--color-bg-secondary)",
          tertiary: "var(--color-bg-tertiary)"
        },
        brand: {
          primary: "var(--color-primary)",
          primaryHover: "var(--color-primary-hover)",
          secondary: "var(--color-secondary)"
        },
        status: {
          success: "var(--color-success)",
          error: "var(--color-error)"
        },
        border: "var(--color-border)",
        ring: "var(--color-ring)",
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)"
        }
      },
      boxShadow: {
        glow: "0 0 24px rgba(107, 183, 255, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
