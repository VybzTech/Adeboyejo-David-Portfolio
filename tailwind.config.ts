import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#0a0a12",
        surface: "#12121e",
        primary: "#00f0ff",
        secondary: "#8b5cf6",
        text: {
          primary: "#e4e4e7",
          secondary: "#a1a1aa",
        },
      },

      fontFamily: {
        heading: ["var(--font-clash)"],
        body: ["var(--font-montserrat)"],
      },

      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },

      boxShadow: {
        skeuo:
          "8px 8px 16px #08080f, -8px -8px 16px #1c1c35",
        glow: "0 0 20px rgba(0,240,255,0.15)",
      },

      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },

  plugins: [],
};

export default config;