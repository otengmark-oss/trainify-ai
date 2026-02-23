// tailwind.config.ts
import { defineConfig } from 'tailwind-merge';

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // replace with your primary color
        secondary: '#D1FAE5', // replace with your secondary color
        // add more colors as needed
      },
      borderRadius: {
        DEFAULT: '8px', // global border radius
        'sm': '4px', // small border radius
        'lg': '12px', // large border radius
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
});