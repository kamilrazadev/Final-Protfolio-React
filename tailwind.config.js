/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include JavaScript and TypeScript files
    "./index.html", // Include the HTML file in the root directory
  ],
  theme: {
    extend: {
      colors: {
        "mk-primary": "#353535",
        "mk-secondary": "#980000",
      },
    },
  },
  plugins: [],
};
