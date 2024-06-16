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
        'hero-image': "url('../../public/hero.jpg')",
        paralax: "url('../../public/paralax.jpg')",
      },
    },
  },
  plugins: [],
}
