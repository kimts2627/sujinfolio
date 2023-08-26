import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        100: "30rem",
        "2px": "2px",
      },
      colors: {
        primary: "rgb(255,99,55)",
      },
      maxWidth: {
        "8xl": "1600px",
      },
      maxHeight: {
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
export default config;
