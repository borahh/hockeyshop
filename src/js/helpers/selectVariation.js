export function selectVariation(variation, data) {
  console.log(variation, data);
  let ul;
  variation.length.forEach((item) => {
    ul = document.querySelector(`ul[data-attribute_name="${item}"`);
    if (!ul) {
      return;
    }
  });

  ul.querySelectorAll('li').forEach((ele) => {
    if (ele.getAttribute(variation.selector) == data.toLowerCase()) {
      ele.click();
    }
  });
}
