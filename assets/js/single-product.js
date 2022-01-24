/**
 *
 * Get Absolute Height including TOP-BOTTOM Margins
 *
 */
function getAbsoluteHeight(el) {
  // Get the DOM Node if you pass in a string
  el = typeof el === 'string' ? document.querySelector(el) : el;

  var styles = window.getComputedStyle(el);
  var margin =
    parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);

  return el.offsetHeight + margin;
}

/**
 *
 * Handle Onclick
 */

function handleOnClick() {
  limitedEl.classList.toggle('hbdv_content_hidden');
  limitedEl.classList.toggle('hbdv_content_full');
}

var galleryHeight = document.querySelector(
  '.woocommerce-product-gallery',
).clientHeight;
var titleHeight = getAbsoluteHeight('.product_title');
var priceHeight = getAbsoluteHeight('p.price');
var revealHeight = getAbsoluteHeight('.hbdv_reveal_more');

var heightRemaining = galleryHeight - titleHeight - priceHeight - revealHeight;

var hidden = document.querySelector('.hbdv_content_hidden');
var limitedEl = document.querySelector('.hbdv_content_wrap');
var revealMoreEl = document.querySelector('.hbdv_reveal_more');
var revealLessEl = document.querySelector('.hbdv_reveal_less');

if (
  document.querySelector('.woocommerce-product-details__short-description')
    .clientHeight < parseInt(limitedEl.style.height, 10)
) {
  revealMoreEl.style.display = 'none';
  revealLessEl.style.display = 'none';
  limitedEl.classList.remove('hbdv_content_hidden');
  limitedEl.classList.add('hbdv_content_full');
}

if (hidden) {
  hidden.style.height = heightRemaining + 'px';
}

revealMoreEl.addEventListener('click', handleOnClick);
revealLessEl.addEventListener('click', handleOnClick);
