import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "24.375rem",
      md: "768px",
      lg: "976px",
      xl: "90rem",
    },
    colors: {
      blue: "#4A69E2",
      orange: "#FFA52F",
      white: "#FFFFFF",
      gray: "#E7E7E3",
      "gray-dark": "#70706E",
      "gray-light": "#FAFAFA",
      black: "#232321",
      shadow: "#00000080",
      transparent: "#00000000",
    },
    fontFamily: {
      head: ["Rubik", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      spacing: {
        desktop: "82.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
