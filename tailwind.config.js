/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#344CC6",
        "hero-primary": "#122AA6",
        "footer-primary": "#202D71",
        "primary-tint": "#D3DBFF",
        "grey-bg": "#FAFAFA",
        black: "#121212",
        labels: "#9D9D9D",
        "grey-text": "#363636",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
