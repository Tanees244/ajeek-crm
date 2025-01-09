// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Adjust this according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#01BCCD',
        'secondary': '#2F4858',
        'tertiary': '#33658A',
        'neutral-gray': '#909090',
        'black': '#000000',
        'white': '#FFFFFF',
        'body-bg': '#F8F9FA',
      },
      fontSize: {
        'h1': '32px',
        'h2': '28px',
        'h3': '24px',
        'h4': '20px',
        'h5': '16px',
        'h6': '14px',
        'paragraph': '14px',
      },
      fontFamily: {
        'primary': ['Mulish', 'sans-serif'],
        'secondary': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      spacing: {
        '15': '15px',
        '10': '10px',
      },
    },
  },
  plugins: [],
}
