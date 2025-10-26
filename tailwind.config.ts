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
        brandBlack: "#0E0E0E", // elegant black
        brandWhite: "#FFFFFF", // neutral background
        brandGold: "#E7C57D", // subtle gold accent
        brandGray: "#F6F6F6", // soft neutral for backgrounds
      },
      fontFamily: {
        fancy: ["'Playfair Display'", "serif"], // luxurious font for numbers or headings
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "25%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        gradientFlow: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
        slideUp: "slideUp 0.6s ease-in-out",
        shine: "shine 3s ease-out infinite",
        "gradient-flow":
          "gradientFlow 10s ease 0s infinite normal none running",
      },
    },
  },
  plugins: [],
};

export default config;
