// Homepage button
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('goToCafes');
  if (button) {
    button.addEventListener('click', () => {
      window.location.href = 'cafes.html';
    });
  }

  // Cafe slider
  const track = document.getElementById('sliderTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (track && prevBtn && nextBtn) {
    const slideWidth = track.querySelector('.slide').offsetWidth;
    const visibleSlides = 4;
    const totalSlides = track.querySelectorAll('.slide').length;
    let position = 0;

    nextBtn.addEventListener('click', () => {
      if (position > -(slideWidth * (totalSlides - visibleSlides))) {
        position -= slideWidth;
        track.style.transform = `translateX(${position}px)`;
      }
    });

    prevBtn.addEventListener('click', () => {
      if (position < 0) {
        position += slideWidth;
        track.style.transform = `translateX(${position}px)`;
      }
    });
  }
});
