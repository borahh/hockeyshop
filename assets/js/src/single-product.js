var limitedEl = document.querySelector('.product_content__wrap');
console.log(limitedEl);
if (limitedEl) {
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
    revealMoreEl.classList.toggle('hidden');
    revealLessEl.classList.toggle('hidden');
    limitedEl.classList.toggle('product_content--hidden');
    limitedEl.classList.toggle('product_content--full');
  }

  var galleryHeight = document.querySelector(
    '.woocommerce-product-gallery',
  ).clientHeight;
  var titleHeight = getAbsoluteHeight('.product_title');
  var priceHeight = getAbsoluteHeight('p.price');
  var revealHeight = getAbsoluteHeight('.product_content__reveal--more');

  var heightRemaining =
    galleryHeight - titleHeight - priceHeight - revealHeight;

  var hidden = document.querySelector('.product_content--hidden');
  var revealMoreEl = document.querySelector('.product_content__reveal--more');
  var revealLessEl = document.querySelector('.product_content__reveal--less');

  if (
    document.querySelector('.woocommerce-product-details__short-description')
      .clientHeight < parseInt(limitedEl.style.height, 10)
  ) {
    revealMoreEl.style.display = 'none';
    revealLessEl.style.display = 'none';
    limitedEl.classList.remove('product_content--hidden');
    limitedEl.classList.add('product_content--full');
  }

  if (hidden) {
    hidden.style.height = heightRemaining + 'px';
  }

  revealMoreEl.addEventListener('click', handleOnClick);
  revealLessEl.addEventListener('click', handleOnClick);
}
