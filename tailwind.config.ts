import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#090401",
        card: "#140A05",
        sectionCard: "#140A06",
        borderStrong: "#2A160D",
        accent: "#FE4A00",
        accentDark: "#F54900",
        accentSoft: "#FF862E",
        textMain: "#FFFFFF",
        textSoft: "#CBB8AE",
        textMuted: "#9F9FA9",
        navMuted: "#8C8C9A",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        space: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        manrope: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      boxShadow: {
        card: "0px 8px 32px 0px rgba(0,0,0,0.4)",
        accent: "0 0 12px rgba(254,74,0,0.3)",
        glow: "0 0 15px rgba(254,74,0,0.8), 0 0 30px rgba(254,74,0,0.4)",
      },
      maxWidth: {
        design: "1520px",
      },
      backgroundImage: {
        "title-gradient": "linear-gradient(180deg, #FFFFFF 0%, #CBB8AE 100%)",
        "glass-gradient": "linear-gradient(180deg, rgba(234,234,251,0) 0%, rgba(234,234,251,0.1) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
