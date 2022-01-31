export function selectVariation(variation, data) {
  let ul;
  variation.list.forEach((item) => {
    let ele = document.querySelector(`ul[data-attribute_name="${item}"]`);
    if (ele) {
      ul = ele;
    }
  });

  for (const ele of ul.querySelectorAll('li')) {
    if (ele.classList.contains('selected')) {
      return true;
    }

    if (
      ele.getAttribute(variation.selector) == data &&
      !ele.classList.contains('selected')
    ) {
      if (ele.classList.contains('disabled')) {
        ele.click();
        return false;
      }
      ele.click();
      return true;
    } else {
      return false;
    }
  }
}
