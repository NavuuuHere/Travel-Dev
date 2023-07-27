var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    grabCursor: 'true',
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });


// Function to handle the intersection of slide content
function handleSlideContentIntersect(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate"); // Apply the animation class
    } else {
      entry.target.classList.remove("animate"); // Remove the animation class if not intersecting
    }
  });
}

// Set up the Intersection Observer
const slideContentObserver = new IntersectionObserver(handleSlideContentIntersect, {
  threshold: 0.2, // Adjust the threshold as needed
});

// Get all slide content elements and observe them
const slideContents = document.querySelectorAll(".slide-content");
slideContents.forEach(content => {
  slideContentObserver.observe(content);
});
