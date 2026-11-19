import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FAF8F4",
          light: "#FDFCF9",
          dark: "#F0EBE1",
        },
        navy: {
          DEFAULT: "#102542",
          light: "#1A365D",
          deep: "#0B1A2E",
          subtle: "#243E63",
        },
        gold: {
          DEFAULT: "#C99532",
          light: "#E8D2A7",
          dark: "#A67822",
          champagne: "#D4A750",
          soft: "#F5ECD7",
          border: "#E8D2A7",
        },
        powder: {
          DEFAULT: "#DCE6ED",
          light: "#EDF2F7",
          subtle: "#E4ECF2",
        },
        warmgrey: {
          DEFAULT: "#777C83",
          light: "#9A9FA7",
          dark: "#52575E",
          border: "#E5E3DC",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["var(--font-manrope)", "Manrope", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "Manrope", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(16, 37, 66, 0.04)",
        card: "0 4px 20px -2px rgba(16, 37, 66, 0.06)",
        cardHover: "0 12px 32px -4px rgba(16, 37, 66, 0.12)",
        goldGlow: "0 0 25px rgba(201, 149, 50, 0.2)",
      },
      borderRadius: {
        'luxury': '14px',
      },
    },
  },
  plugins: [],
};

export default config;
