export function getVariationEl(variation, data) {
  let ul;
  variation.list.forEach((item) => {
    let ele = document.querySelector(`ul[data-attribute_name="${item}"]`);
    if (ele) {
      ul = ele;
    }
  });

  for (const ele of ul.querySelectorAll('li')) {
    if (ele.getAttribute(variation.selector) == data) {
      return ele;
    } else {
      return false;
    }
  }
}
