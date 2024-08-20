let scrollAmount = 0;

const slider = document.querySelector('.image-slider');
const maxScroll = slider.scrollWidth - slider.clientWidth;
const scrollStep = slider.clientWidth / 2;

document.getElementById('nextButton').addEventListener('click', () => {
  if (scrollAmount < maxScroll) {
    scrollAmount += scrollStep;
  } else {
    scrollAmount = 0; // Reset to start when reaching the end
  }

  slider.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
});

document.getElementById('prevButton').addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= scrollStep;
  } else {
    scrollAmount = maxScroll; // Reset to end when reaching the start
  }

  slider.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
});
document.addEventListener('DOMContentLoaded', function() {
    const exploreButton = document.getElementById('exploreButton');
    const indiaSection = document.getElementById('indiaSection');
    
    exploreButton.addEventListener('click', function(event) {
        event.preventDefault();
        indiaSection.scrollIntoView({ behavior: 'smooth' });
    });
});
