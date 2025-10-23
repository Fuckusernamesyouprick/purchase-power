
import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1e5eff", // primary blue
          light: "#8fb3ff",
          dark: "#143db3",
          accent: "#00d1ff"  // cyan highlight
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        "2xl": "1rem"
      }
    },
  },
  plugins: [],
};
export default config;
