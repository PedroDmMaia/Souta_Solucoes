/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cor-fundo': '#CBC6C4',
        corTexto: '#1B2A30',
      },
      backgroundImage: {
        'hero-image': "url('/hero.jpg')",
        paralax: "url('/paralax.jpg')",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
