import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#4A69E2",
      orange: "#FFA52F",
      gray: "#E7E7E3",
      "gray-dark": "#70706E",
      "gray-light": "#FAFAFA",
      black: "#232321",
    },
    fontFamily: {
      head: ["Rubik", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
