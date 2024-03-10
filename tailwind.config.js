/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'linear' : 'hsl(249, 99%, 64%)',
        'linear1' : 'hsl(278, 94%, 30%)',
        'RED' : 'hsl(0, 100%, 66%)',
        'l-g-violet' : 'hsl(270, 3%, 87%)',
        'd-g-violet' : 'hsl(279, 6%, 55%)',
        'v-d-violet' : 'hsl(278, 68%, 11%)',
      },
      fontFamily:
      {
        'space': 'Space Grotesk , sans-serif',
      },
    },
  },
  plugins: [],
}
