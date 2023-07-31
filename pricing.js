const btns1 = document.querySelectorAll(".nav-btn-sam1");
const slides1 = document.querySelectorAll(".card-pr");
let currentSlideIndex1 = 0; 
let autoplayIntervalId1; 

var sliderNav1 = function (manual) {
  btns1.forEach((btn1, i1) => {
    btn1.classList.remove("active");
  });
  slides1.forEach((slide1, i1) => {
    slide1.classList.remove("active");
  });
  btns1[manual].classList.add("active");
  slides1[manual].classList.add("active");
  currentSlideIndex1 = manual; // Update the current slide index after navigation
  resetAutoplayInterval(); // Reset the autoplay interval after manual slide change
};
const totalSlides1 = slides1.length;
const autoplayInterval1 = 10000; // Set the time interval for autoplay (in milliseconds)

const autoplaySlides1 = () => {
  // Calculate the next slide index
  const nextSlideIndex1 = (currentSlideIndex1 + 1) % totalSlides1;
  sliderNav1(nextSlideIndex1);
};
btns1.forEach((btn1, i1) => {
  btn1.addEventListener("click", () => {
    sliderNav1(i1);
  });
});

const resetAutoplayInterval = () => {
  clearInterval(autoplayIntervalId1);
  autoplayIntervalId1 = setInterval(autoplaySlides1, autoplayInterval1);
};
autoplayIntervalId1 = setInterval(autoplaySlides1, autoplayInterval1);
