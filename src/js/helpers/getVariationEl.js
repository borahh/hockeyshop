export function getVariationEl(variation, data) {
  let ul;
  variation.list.forEach((item) => {
    let el = document.querySelector(`ul[data-attribute_name="${item}"]`);
    if (el) {
      ul = el;
    }
  });

  const list = Array.from(ul.querySelectorAll('li'));

  const el =
    list.find((el) => el.getAttribute(variation.selector) === data) || false;

  return el;
}
