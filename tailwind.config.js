/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1d4ed8",
          hover: "#1e40af",
        },
        secondary: {
          DEFAULT: "#f3f4f6",
          dark: "#d1d5db",
        },
        success: {
          DEFAULT: "#84cc16",
          hover: "#65a30d",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
