const btns1 = document.querySelectorAll(".nav-btn-sam1");
  const slides1 = document.querySelectorAll(".card-pr");
  let currentSlideIndex1 = 0;
  let autoplayInterval_sam; // Variable to store the autoplay interval

  const sliderNav1 = function (manual) {
    btns1.forEach((btn1, i) => {
      btn1.classList.remove("active");
    });
    slides1.forEach((slide1, i) => {
      slide1.classList.remove("active");
    });
    btns1[manual].classList.add("active");
    slides1[manual].classList.add("active");
    currentSlideIndex1 = manual; // Update the current slide index after navigation
  };

  btns1.forEach((btn1, i) => {
    btn1.addEventListener("click", () => {
      sliderNav1(i);
      clearInterval(autoplayInterval_sam); // Reset autoplay interval when user manually navigates
    });
  });

  const autoplay = function () {
    currentSlideIndex1 = (currentSlideIndex1 + 1) % slides1.length; // Move to the next slide
    sliderNav1(currentSlideIndex1);
  };

  // Adjust the autoplay timing here (in milliseconds)
  const autoplayDelay = 10000; // 5 seconds

  autoplayInterval_sam = setInterval(autoplay, autoplayDelay); // Start the autoplay