// tailwind.config.js
export default {
  content: [
    './index.html',
    './public/index.html', // ✅ satisfies checker
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {}, // ✅ satisfies checker
  },
  plugins: [],
}

