const colors = require('tailwindcss/colors')


module.exports = {
  purge: {
    content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"]
    // These options are passed through directly to PurgeCSS
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
       colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
        extraDark: '#410FE7'
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      white:{
        white: '#fff',
      }

      },
      screens: {
        'xs': {'min': '320px', 'max': '640px'},
      },
      fontFamily: {
        body: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins']
      }
    }
  
  },
  variants: {
    extend: {},
  },
  plugins: []
}
