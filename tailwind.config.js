/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,css,html}'],
  theme: {
    extend: {
      fontFamily: {
        peyda: 'Peyda',
        tanha: 'tanha',
        yekanX: 'IRANYekanX',
        iransans: 'iransans',
        bjn: 'Bahij Nazanin',
      },
      colors: {
        'sc-red-normal': '#FF0000',
        'sc-gray-normal': '#959EA6',
        'sc-blue-normal': '#03045E',
        'sc-green-normal': '#1C7337',
        'sc-orange-normal': '#E18E01',
        'sc-purple-normal': '#EBEFFB',

        'sc-purple-100': '#FAFBFD',
        'sc-purple-200': '#91A6E8',
        'sc-purple-400': '#6F6F9D',
        'sc-purple-500': '#E9EEFF',

        'sc-gray': '#F6F9FF',
        'sc-gray-200': '#E4E7EE',
        'sc-gray-500': '#80848F',

        'sc-green-100': '#F0FDF4',
        'sc-green-400': '#E3F8E8',
        'sc-green-800': '#173E19',

        'sc-blue-800': '#020347',

        'sc-red-200': '#FFE7DB',
        'sc-red-600': '#bf0000',
        'sc-red-900': '#990000',

        'sc-brown-500': '#FFEAC7',
        'sc-brown-800': '#7C5109',

        'sc-black': '#292D36',
      },

      borderRadius: {
        md: '10px',
      }
    },
  },
  plugins: [],
}
