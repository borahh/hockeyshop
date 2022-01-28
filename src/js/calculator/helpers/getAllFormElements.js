export const getAllFormElements = (element) =>
  Array.from(element.elements).filter((tag) =>
    ['select', 'textarea', 'input'].includes(tag.tagName.toLowerCase()),
  );
