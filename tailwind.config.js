/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      
      // Colors
      colors: {
        "primary": "#137fec",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
      },
      // Typography
      fontFamily: {
        "display": ["Inter", "system-ui", "sans-serif"]
      },
      // Spacing/Rounding
      borderRadius: { 
        "DEFAULT": "0.25rem", 
        "lg": "0.5rem", 
        "xl": "0.75rem", 
        "full": "9999px" 
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.glass': {
          'background': 'rgba(31, 25, 51, 0.6)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
      })
    }
  ]
}