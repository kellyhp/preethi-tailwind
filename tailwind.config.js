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
        yellow: "#CC9D2F",
        "dark-yellow": "#FFC956",
        white: "#EDE3D4"
      },
    },
  },
  plugins: [],
}
