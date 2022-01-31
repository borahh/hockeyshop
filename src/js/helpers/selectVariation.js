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
    if (ele.getAttribute(variation.selector) == data) {
      ele.click();
      isSuccess = true;
      if (ele.classList.contains('selected')) {
        console.log(ele.getAttribute(variation.selector), data);
        isSuccess = true;
      } else {
        isSuccess = false;
      }
    }
  }

  return isSuccess;
}
