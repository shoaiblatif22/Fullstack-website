export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        brown: {
          50: '#FAF5F2',
          100: '#F5E6D3',
          200: '#E6D0B8',
          300: '#D4B79C',
          400: '#C19B7A',
          500: '#A67C5E',
          600: '#8B5E3D',
          700: '#6F472C',
          800: '#3E2723', // Dark chestnut brown
          900: '#2D1810',
        },
        sienna: {
          50: '#FDF2F0',
          100: '#FCE3DE',
          200: '#F9C3B8',
          300: '#F5A292',
          400: '#F2816C',
          500: '#B94A2D', // Burnt sienna
          600: '#A13B22',
          700: '#892D1A',
          800: '#712013',
          900: '#59140D',
        },
        cream: '#F5E6D3',
      },
    },
  },
}