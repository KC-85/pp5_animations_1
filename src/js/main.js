const slidesEl = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;
const total = slides.length;
let interval;

// move to given slide index
function goToSlide(idx) {
  slidesEl.style.transform = `translateX(-${idx * 100}%)`;
  index = idx;
}

// next slide
function next() {
  goToSlide((index + 1) % total);
}

// previous slide
function prev() {
  goToSlide((index - 1 + total) % total);
}

// event listeners
nextBtn.addEventListener('click', () => {
  next();
  resetInterval();
});
prevBtn.addEventListener('click', () => {
  prev();
  resetInterval();
});

// auto-play every 5s
function startInterval() {
  interval = setInterval(next, 5000);
}

// reset after manual nav
function resetInterval() {
  clearInterval(interval);
  startInterval();
}

// init
goToSlide(0);
startInterval();
