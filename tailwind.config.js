const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./includes/**/*.{html,php}', './assets/js/**/*.js'],
  safelist: [
    'single',
    'single-product',
    'woocommerce-variation-price',
    'summary',
  ],
  theme: {
    extend: {
      colors: {
        light: '#f3f4f6',
        accent: '#1768d2',
      },
      fontFamily: {
        'social-gothic': 'Social Gothic, sans-serif',
        'gt-america': 'GT America',
      },
    },
  },
  plugins: [
    plugin(function ({ theme, addComponents }) {
      addComponents({
        '.btn-nav': {
          display: 'flex',
          width: 'fit-content',
          lineHeight: '30px',
          fontSize: '21px',
          alignItems: 'center',
          color: theme('colors')['accent'],
          whiteSpace: 'wrap',
        },
      });
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
