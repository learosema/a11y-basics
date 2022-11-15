import { $ } from './query';
import { wait } from './wait';
import { animate } from 'motion';

const directions = ['top', 'right', 'bottom', 'left'];

const transforms = {
  top: 'translateY(-100%)',
  right: 'translateX(100%)',
  bottom: 'translateY(100%)',
  left: 'translateX(-100%)',
};

const oppositeOf = (direction) => {
  const idx = directions.indexOf(direction);
  if (idx < 0) {
    return null;
  }

  return directions[(idx + 2) % 4];
};

const addSlideNoMotion = (newSlide) => {
  const currentSlide = $('.slide:not([aria-hidden="true"])');
  if (!currentSlide) {
    return;
  }
  newSlide.setAttribute('aria-hidden', 'true');
  newSlide.setAttribute('tabindex', -1);
  document.body.insertBefore(newSlide, currentSlide);
  currentSlide.remove();
};

let busy = false;

/**
 * Adds a new slide to the left/right/top/bottom,
 * scrolls it into the view and removes the old one
 *
 * @param {HTMLElement} newSlide element of the new slide
 * @param {'left'|'right'|'top'|'bottom'} where where to add the new slide
 */
export const addSlide = async (newSlide, where) => {
  if (!where) {
    addSlideNoMotion(newSlide);
    return;
  }
  const opposite = oppositeOf(where);

  const currentSlide = $('.slide:not([aria-hidden="true"])');

  if (busy || !currentSlide || opposite === null) {
    return false;
  }

  busy = true;

  currentSlide.removeAttribute('id');
  currentSlide.setAttribute('aria-hidden', 'true');
  // angela schickt mich ins Bett
  newSlide.setAttribute('aria-hidden', 'true');
  newSlide.setAttribute('tabindex', -1);
  newSlide.style.transform = transforms[where];
  await wait(0);
  document.body.insertBefore(newSlide, currentSlide);

  await Promise.all([
    animate(
      currentSlide,
      { transform: transforms[opposite] },
      { duration: 0.5 }
    ).finished,
    animate(
      newSlide,
      { transform: 'translateX(0) translateY(0)' },
      { duration: 0.5 }
    ).finished,
  ]);

  currentSlide.remove();
  newSlide.removeAttribute('aria-hidden');
  newSlide.focus();
  busy = false;

  return true;
};
