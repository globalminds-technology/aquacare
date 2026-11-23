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
        aqua: {
          primary: "#0077D9",
          cyan: "#00B8E6",
          ice: "#DDF5FF",
          white: "#F7FCFF",
          ocean: "#073B67",
          dark: "#04203B",
          surface: "rgba(255, 255, 255, 0.85)",
          glass: "rgba(255, 255, 255, 0.72)",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        body: ["'Inter'", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        'aqua-sm': "0 2px 10px rgba(0, 119, 217, 0.08)",
        'aqua-md': "0 6px 24px rgba(0, 119, 217, 0.12)",
        'aqua-lg': "0 12px 36px rgba(0, 119, 217, 0.16)",
        'aqua-glow': "0 0 35px rgba(0, 184, 230, 0.4)",
        'glass': "0 8px 32px 0 rgba(0, 119, 217, 0.1)",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-25%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        ripple: "ripple 2.5s cubic-bezier(0, 0.2, 0.8, 1) infinite",
        float: "float 4s ease-in-out infinite",
        wave: "wave 15s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
