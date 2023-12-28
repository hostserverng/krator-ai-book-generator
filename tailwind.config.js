/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    backgroundColor: theme => ({
            ...theme('colors'),
            'primary': '#faf9f9',
            'btn' : '#7B51D6',
            'btn-blue' : '#bae5f5',
            'btn-green' : '#ccf0c0',
            'btn-purple' : '#e2d3fe',
            'grey' :'#707281'
            }),
    textColor: theme => theme('colors'),
    textColor: {
      'logo' : '#6939D1',
      'primary' : '#ffffff',
      'black' :'#000000',
      'grey' :'#707281'
    }
  },
  plugins: [],
}
