export function $(sel, con) {
  return (con || document).querySelector(sel);
}

export function $$(sel, con) {
  return Array.from((con || document).querySelectorAll(sel));
}
