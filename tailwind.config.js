/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: "#6B0058",
        "dark-yellow": "#CC9D2F",
        yellow: "#FFC956",
        white: "#EDE3D4",
        black: "#1A202C",
        beige: "#DBC7A9"
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/hero.png')",
        'catering-pattern': "url('./assets/catering-background.png')",
        'online-bg':"url('./assets/online-bg.png')",
      },
      fontFamily: {
        'unna': ['Unna', 'sans-serif'],
        'cabin': ['Cabin', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
