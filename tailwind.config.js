const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./includes/**/*.{html,php}', './assets/js/**/*.js'],
  safelist: [
    'single',
    'single-product',
    'woocommerce-variation-price',
    'summary',
    'onsale',
    'woocommerce-product-gallery--with-images',
    'woo-variation-swatches',
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
        '.img-selected': {
          filter:
            'invert(10%) sepia(30%) saturate(603%) hue-rotate(\n170deg\n)',
        },
      });
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
