/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9ad1c6", // Light Teal
        secondary: "#1b5348", // Dark Teal
        secondaryhover: "#4c7d74", // hovering
        accent: "#fde4da", // creme
        green: "#277668",
      },
    },
  },
  plugins: [],
};
