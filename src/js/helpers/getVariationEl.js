export function getVariationEl(variation, data) {
  let ul;
  variation.list.forEach((item) => {
    let ele = document.querySelector(`ul[data-attribute_name="${item}"]`);
    if (ele) {
      ul = ele;
    }
  });

  function matchEl(el) {
    return el.getAttribute(variation.selector) === data;
  }

  return ul.querySelectorAll('li').find(matchEl);
}
