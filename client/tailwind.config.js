/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mdxl: "1174px",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#141414",
        secondary: "#3575E2",
        primaryLight: "#393F47",
        primaryExtraLight: "#141414B2",
      },
    },
  },
  plugins: [],
};
