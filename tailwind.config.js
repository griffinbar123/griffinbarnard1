module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      gradientColorStops:{
        'test': 'bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600',
      },
      colors:{
        primary: '#41B3A3',
        secondary: '#C38D9E',
        tertiary: '#FFFFFF'
     },
     boxShadow:{
        'main-shadow': '0 1px 5px #FFFFFF',
    },
    backgroundImage: {
      'main-image': "url('/griffin4.jpg')",
    },
    borderRadius: {
      'main-radius': '80px',
    },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
}