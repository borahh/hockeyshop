export function getVariationEl(variation, data) {
  let element;
  let ul;
  variation.list.forEach((item) => {
    let ele = document.querySelector(`ul[data-attribute_name="${item}"]`);
    if (ele) {
      ul = ele;
    }
  });

  for (const ele of ul.querySelectorAll('li')) {
    if (ele.getAttribute(variation.selector) == data) {
      element = ele;
    } else {
      return false;
    }

    return element;
  }
}
