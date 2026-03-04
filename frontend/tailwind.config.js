/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Animation du scanner laser horizontal
        scan: {
          '0%': { top: '0%', opacity: '0' },
          '5%': { opacity: '0.5' },
          '95%': { opacity: '0.5' },
          '100%': { top: '100%', opacity: '0' },
        },
        // Animation d'entrée en fondu vers le haut
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        'scan': 'scan 8s linear infinite',
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
      },
      // Utile pour les effets de profondeur sur les cartes
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
      }
    },
  },
  plugins: [],
}