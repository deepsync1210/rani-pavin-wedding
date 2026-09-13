import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF8F5", // Warm Alabaster / Rice Paper
        surface: "#F3EDE2",    // Soft Linen Cream
        champagne: {
          light: "#EADDC9",
          DEFAULT: "#C5A880",  // Muted Warm Champagne / Gold
          dark: "#A38558",
        },
        heritage: {
          light: "#2B584E",
          DEFAULT: "#1C3B34",  // Deep Heritage Forest Green
          dark: "#112521",
        },
        charcoal: {
          light: "#27272A",
          DEFAULT: "#18181B",  // Charcoal Slate / Near Black
          dark: "#09090B",
        },
        mutedText: "#71717A",  // Muted Zinc Grey
        borderLight: "#E5DDCF", // Refined Hairline Champagne
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "equalizer-1": "equalizer 0.8s ease-in-out infinite alternate",
        "equalizer-2": "equalizer 1.1s ease-in-out infinite alternate 0.2s",
        "equalizer-3": "equalizer 0.9s ease-in-out infinite alternate 0.4s",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.88", transform: "scale(1.02)" },
        },
        equalizer: {
          "0%": { height: "4px" },
          "100%": { height: "18px" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
