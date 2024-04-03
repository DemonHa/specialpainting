import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "glass-bg": "rgba(255, 255, 255, 0.35)",
        "glass-border": "rgba(255, 255, 255, 0.18)",
        "background-dark": "#29292b",
        "background-white": "#ebebed",
        darkRed: "#872341",
        lightRed: "#BE3144",
        customOrange: "#F05941",
        jeans: "#124076",
        darkJeans: "#0C2D57",
        lemon: "#FDE767",
        "filter-dark": "#52002D",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
