/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blue: "#232e52",
        grey: "rgba(128, 128, 128, 0.481)",
        error: "#ed4337",
        success: "#00a86b",
        "blue-500": "#8ceead",
        "blue-800": "#0016df",
        "grey-200": "#d6d6d6",
        "grey-300": "#b0a9a9",
        "blue-200": "#ebf2fe",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
