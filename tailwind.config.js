/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./popup/**/*.{js,ts,jsx,tsx}",
    "./web_content/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

