/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(1rem, 2vw, 3rem)",
        title: "clamp(1rem, 1vw, 3rem)",
      },
    },
  },
  plugins: [],
}

