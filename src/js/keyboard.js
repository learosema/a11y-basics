window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    const prevButton = document.querySelector('#previousSlideButton');
    if (prevButton) {
      document.location.href = prevButton.getAttribute('href');
    }
    e.preventDefault();
  }
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    const nextButton = document.querySelector('#nextSlideButton');
    if (nextButton) {
      document.location.href = nextButton.getAttribute('href');
    }
    e.preventDefault();
  }
});
