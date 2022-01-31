export function selectVariation(variation, data) {
  let isSuccess = false;
  let ul;
  variation.list.forEach((item) => {
    let ele = document.querySelector(`ul[data-attribute_name="${item}"]`);
    if (ele) {
      ul = ele;
    }
  });

  for (const ele of ul.querySelectorAll('li')) {
    if (
      ele.getAttribute(variation.selector) == data &&
      !ele.classList.contains('selected')
    ) {
      if (ele.classList.contains('disabled')) {
        ele.click();
        isSuccess = false;
      }
      ele.click();
      isSuccess = true;
    }

    if (
      ele.getAttribute(variation.selector) == data &&
      ele.classList.contains('selected')
    ) {
      isSuccess = true;
    }
  }

  return isSuccess;
}
