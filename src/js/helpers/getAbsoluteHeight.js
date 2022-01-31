/**
 *
 * Get Absolute Height including TOP-BOTTOM Margins
 *
 */

export function getAbsoluteHeight(el) {
  // Get the DOM Node if you pass in a string
  el = typeof el === 'string' ? document.querySelector(el) : el;

  var styles = window.getComputedStyle(el);
  var margin =
    parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);

  return el.offsetHeight + margin;
}
