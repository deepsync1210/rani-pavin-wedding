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
        surface: "#F7F2EC",    // Soft Linen Cream
        white: "#FFFFFF",
        navy: {
          light: "#263B66",
          DEFAULT: "#162846",  // Royal Sikh Midnight Navy Blue
          dark: "#0F1C33",
        },
        champagne: {
          light: "#EADDC9",
          DEFAULT: "#C5A880",  // Muted Warm Champagne / Gold
          dark: "#A38558",
        },
        blush: {
          light: "#FCF5F6",
          DEFAULT: "#F8E8EB",  // Elegant Soft Romantic Light Pink
          dark: "#E8BAC0",
        },
        charcoal: {
          light: "#27272A",
          DEFAULT: "#18181B",  // Charcoal Slate
          dark: "#09090B",
        },
        mutedText: "#71717A",  // Muted Zinc Grey
        borderLight: "#E5DDCF", // Refined Hairline Champagne
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        gurmukhi: ["'Noto Serif Gurmukhi'", "var(--font-cormorant)", "serif"],
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
