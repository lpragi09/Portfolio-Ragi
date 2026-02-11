import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "ui-serif", "Georgia"]
      },
      keyframes: {
        floatSlow: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" }
        }
      },
      animation: {
        "float-slow": "floatSlow 10s ease-in-out infinite"
      },
      colors: {
        ragi: {
          bg: "#0a0520",
          ink: "#0b0b0f",
          paper: "#ffffff",
          text: "#e7e7ee",
          muted: "rgba(231, 231, 238, 0.72)",
          accent: "#8A2BE2",
          accent2: "#4B0082"
        }
      }
    }
  },
  plugins: []
};

export default config;

