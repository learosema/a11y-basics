import { $ } from './query';
import { replaceDocument } from './replace-document';

/**
 * Load content into page without a whole page reload
 * @param {string} href URL to route to
 * @param {boolean} pushState whether to call history.pushState or not
 */
function load(href, pushState) {
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    console.log('muh');
    const newDocument = xhr.responseXML;
    replaceDocument(newDocument);
    console.log('mäh');
    if (pushState) {
      history.pushState({}, newDocument.title || '', href);
    }
  };
  xhr.onerror = () => {
    // Fallback to a regular link in case of error.
    document.location.href = href;
    reject();
  };
  xhr.open('GET', href);
  xhr.responseType = 'document';
  xhr.send();
}

/**
 * Search for a parent anchor tag outside a clicked event target
 *
 * @param {HTMLElement} el the clicked event target.
 * @param {number} maxNests max number of levels to go up.
 * @returns the anchor tag or null
 */
function findAnchorTag(el, maxNests = 3) {
  for (let i = maxNests; el && i > 0; --i, el = el.parentNode) {
    if (el.nodeName === 'A') {
      return el;
    }
  }
  return null;
}

window.addEventListener('click', function (evt) {
  let baseUrl = $('meta[name="x-base"]')?.getAttribute('content') || '/';
  const el = findAnchorTag(evt.target);
  const href = el?.getAttribute('href');
  if (el && href) {
    if (href.startsWith('#')) {
      return;
    }
    // if the URL either starts with the base url
    // or is a relative URL, then handle the link
    // as a single page application link.
    if (href.startsWith(baseUrl) || /^\w+\:\/\//.test(href) === false) {
      evt.preventDefault();
      load(href, true);
    } else {
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener nnoreferrer');
    }
  }
});

window.addEventListener('popstate', function (e) {
  load(document.location.pathname, false);
});
