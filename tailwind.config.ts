import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "ui-serif", "Georgia"]
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

