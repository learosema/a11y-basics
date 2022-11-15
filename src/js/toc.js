const tocButton = document.querySelector('#tocButton');
const toc = document.querySelector('#tableOfContents');


tocButton.addEventListener('click', () => {
  const expanded = tocButton.getAttribute('aria-expanded') === 'true';
  const newState = !expanded;

  if (newState) {
    tocButton.setAttribute('aria-expanded', 'true');
    toc.removeAttribute('hidden');
    toc.focus();
  } else {
    tocButton.setAttribute('aria-expanded', 'false');
    toc.setAttribute('hidden', '');
    toc.focus();
  }
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
