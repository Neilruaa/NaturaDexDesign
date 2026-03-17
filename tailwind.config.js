/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'solarpunk': {
          leather: '#97572B', // Marron cuir (logo, et titre ?, et gros bouton type animal ?)
          page: '#FFFFFF',    // Blanc page (fond de pages)
          card: '#FAEBD7',    // Blanc jauni (fond de carte des bêtes de Darwin)
          red: '#B01E28',     // Rouge (like et défaite)
          green: '#A8DCAB',   // Vert clair (victoire)
          darkgreen: '#2E6F40', // Vert sombre (couleur en plus (plante))
          sky: '#ABDDF1',     // Bleu ciel (animaux volant)
          navy: '#006994',    // Bleu marine (animaux marins)
          teal: '#00CEC8',    // Bleu vert (insectes)
          clay: '#90AAA1',    // Bleu argile (animaux terrestre)
          text: '#000000',    // Noir (texte)
        }
      }
    },
  },
  plugins: [],
};
