export function getVariationEl(variation, data) {
  let ul;
  variation.list.forEach((item) => {
    let el = document.querySelector(`ul[data-attribute_name="${item}"]`);
    if (el) {
      ul = el;
    }
  });

  function matchEl(el) {
    return el.getAttribute(variation.selector) === data;
  }

  const li = ul.querySelectorAll('li');
  return li.find(matchEl);
}
