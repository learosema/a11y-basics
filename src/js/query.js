export function $(sel, con) {
  return (con || document).querySelector(sel);
}

export function $$(sel, con) {
  return Array.from((con || document).querySelectorAll(sel));
}

export function create(tagName, attributes) {
  const element = document.createElement(tagName);
  if (typeof attributes === 'object') {
    attribs(element, attributes);
  }
  return element;
}

export function attribs(element, attributes) {
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
}
