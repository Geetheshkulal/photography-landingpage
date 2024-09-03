/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'white': '0 4px 6px -1px rgba(255, 255, 255, 0.5), 0 2px 4px -1px rgba(255, 255, 255, 0.3)',
      },
      width: {
        'custom': '860px',
      },
      height: {
        'custom': '526px',
      }
    },
  },
  plugins: [],
}

