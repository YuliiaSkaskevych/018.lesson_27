const slider = document.querySelector('.slider');
const slider__box = document.querySelector('.slider__box');
const images = slider__box.querySelectorAll('img');
const prevButton = slider.querySelector('.prev');
const nextButton = slider.querySelector('.next');
let currentIndex = 0;
images[currentIndex].classList.add('active');

function showImage(index) {
  images[currentIndex].classList.remove('active');
  images[index].classList.add('active');
  currentIndex = index;

  if (index === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }

  if (index === images.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
}

prevButton.addEventListener('click', () => {
  showImage(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  showImage(currentIndex + 1);
});