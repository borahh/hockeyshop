export function selectVariation(variation) {
  let ul;
  variation.length.forEach((item) => {
    ul = document.querySelector(`ul[data-attribute_name="${item}"`);
    if (!ul) {
      return;
    }
  });

  ul.querySelectorAll('li');
}
