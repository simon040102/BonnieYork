/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#29B1FF',
      secondary: '#00659F',
      success: '#6E6E6E',
      white: '#FFFFFF',
      black: '#000000',
      red: '#FF6347',
      danger: '#00659F0D',
      warning: '#D6E3EB',
      footerL: '#F2F7FA',
      footerR: '#02446A',
      bgColor: '#FAFAFA',
      unSelect: '#CCCCCC',
      input: '#535353',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      large: '50px',
      block: '200px',
      card: '40px',
      login: '16px',
    },
    extend: {
      spacing: {
        800: '50rem',
        414: '26rem',
        500: '32rem',
        footer: '25.5rem',
        menu: '5rem',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
