export function selectVariation(variation, data) {
  let ul;
  variation.list.forEach((item) => {
    let ele = document.querySelector(`ul[data-attribute_name="${item}"]`);
    if (ele) {
      ul = ele;
    } else {
      return;
    }
  });

  ul.querySelectorAll('li').forEach((ele) => {
    if (ele.getAttribute(variation.selector) == data.toLowerCase()) {
      ele.click();
    }
  });
}
