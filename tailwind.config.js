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
    'woocommerce',
    'woo-variation-swatches',
    'hbdv_submenu_group',
    'hbdv_submenu_col',
    'hockeyshop-header',
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
        '.calculator-range': {
          margin: '2.5rem auto 5rem auto',
          display: 'block',
          background: '#c4c4c4',
          border: '1px solid #dddddd',
          boxSizing: 'border-box',
          borderRadius: '6px',
          height: '8px',
          appearance: 'none',
          cursor: 'pointer',
          width: '100%',
        },
      });
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
