module.exports = {
  theme: {
    extend: {
      padding: {
        '2/3': '66.66666667%',
      },
      colors: {
        'black-900': '#1b1b2366',
        'gray-transparent-md': 'rgba(26, 32, 44, .6)',
        'gray-300': '#e3e3e3',
        'gray-400': '#bababa',
        'gray-500': '#919191',
        'gray-600': '#ffffff29',
        'gray-700': '#333333',
        'gray-900': '#1d1d1d',
        'gray-1000': '#171717',
        'green-500': '#6ac045',
        'green-600': '#5da93c',
        'green-700': '#428e21',
      }
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}
