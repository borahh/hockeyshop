export function selectVariation(variation, data, matchedVariations) {
  let ul;
  variation.list.forEach((item) => {
    let ele = document.querySelector(`ul[data-attribute_name="${item}"]`);
    if (ele) {
      ul = ele;
    }
  });

  ul.querySelectorAll('li').forEach((ele) => {
    if (
      ele.getAttribute(variation.selector) == data &&
      !ele.classList.contains('selected')
    ) {
      if (ele.classList.contains('disabled')) {
        matchedVariations = false;
      } else {
        ele.click();
      }
    }
  });
}
