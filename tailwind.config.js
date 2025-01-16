module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#01BCCD',
        'primary-10': 'rgba(1, 188, 205, 0.1)',
        'secondary': '#2F4858',
        'tertiary': '#33658A',
        'neutral-gray': '#909090',
        'white-smoke': '#F2EFEF26',        
        'white-smoke-30': 'rgba(242, 239, 239, 0.3)',
        'white-smoke-15': 'rgba(242, 239, 239, 0.15)',
        'black': '#000000',
        'white': '#FFFFFF',
        'body-bg': '#F8F9FA',
        'white-edgar': '#EDEDED',
        'green': '#0EBC01',
        'red': '#FF0000'
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
