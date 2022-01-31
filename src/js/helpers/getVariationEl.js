export function getVariationEl(variation, data) {
  let ul;
  variation.list.forEach((item) => {
    let el = document.querySelector(`ul[data-attribute_name="${item}"]`);
    if (el) {
      ul = el;
    }
  });

  const el = ul
    .querySelectorAll('li')
    .find((el) => el.getAttribute(variation.selector) === data);
  return el;
}
