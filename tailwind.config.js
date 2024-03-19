/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        silver: "#dbd9d9",
        "grey-50": "#e1dede",
        "grey-100": "#f6f4f4",
        "grey-200": "#adadad",
        "grey-300": "#888",
        primary: "#247af2",
        "primary-100": "#cfdff5",
        danger: "#f52626",
        "dark-grey": "#121212",
      },
    },
  },
  plugins: [],
};
