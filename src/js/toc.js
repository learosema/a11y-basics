const tocButton = document.querySelector('#tocButton');
const toc = document.querySelector('#tableOfContents');

export const toggleTOC = () => {
  const expanded = tocButton.getAttribute('aria-expanded') === 'true';
  const newState = !expanded;

  if (newState) {
    showTOC();
  } else {
    hideTOC();
  }
}

export const showTOC = () => {
  tocButton.setAttribute('aria-expanded', 'true');
  toc.removeAttribute('hidden');
  toc.focus();
}

export const hideTOC = () => {
  tocButton.setAttribute('aria-expanded', 'false');
  toc.setAttribute('hidden', '');
  document.querySelector('main').focus();
}


tocButton.addEventListener('click', () => {
  toggleTOC();
});

window.addEventListener('focusin', (e) => {
  const arrowNav = document.querySelector('.arrow-nav');
  const tocIsOpen = !toc.hasAttribute('hidden');
  if (! tocIsOpen) {
    return;
  }
  if (!toc.contains(e.target) && !arrowNav.contains(e.target)) {
    console.log('focusIn', e.target);
    const firstLink = toc.querySelector('a')
    if (firstLink) {
      toc.focus();
    }
  }
});
