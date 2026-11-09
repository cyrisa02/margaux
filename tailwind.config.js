/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'artisan-bg': '#fdfbf7',
        'artisan-text': '#2d2a26',
        'artisan-accent': '#8b5cf6', // Violet inspiré de ses œuvres
        'artisan-secondary': '#0d9488', // Teal pour les motifs celtiques
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
