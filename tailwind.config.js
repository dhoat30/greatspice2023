/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

  ],

  theme: {
    colors: {
      'outline-variant-light': '#CEC6B4',
      'primary-light': '#725C00',
      'primary-dark': '#E7C446',
      'surface-dark': "#15130E",
      'surface-2-dark': "#262112",
      'surface-3-dark': "#2C2614",
      'white': '#ffffff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',

    },
    fontFamily: {
      sans: ['var(--font-work-sans)', 'sans-serif'],
      serif: ['var(--font-neuton)', 'serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },

    extend: {},
  },
  plugins: [],
}

