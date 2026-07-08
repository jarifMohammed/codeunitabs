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
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.88)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        marqueeSlide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        orbitSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        dotPulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.7)" },
        },
        headerSlide: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.65s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in-down": "fadeInDown 0.55s cubic-bezier(0.22,1,0.36,1) both",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) both",
        "slide-in-left": "slideInLeft 0.65s cubic-bezier(0.22,1,0.36,1) both",
        "slide-in-right": "slideInRight 0.65s cubic-bezier(0.22,1,0.36,1) both",
        "float-y": "floatY 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "marquee": "marqueeSlide 28s linear infinite",
        "orbit-spin": "orbitSpin 12s linear infinite",
        "dot-pulse": "dotPulse 2s ease-in-out infinite",
        "header-slide": "headerSlide 0.6s cubic-bezier(0.22,1,0.36,1) both",
        "shimmer": "shimmer 2.2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
