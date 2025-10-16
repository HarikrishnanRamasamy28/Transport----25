document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navBar = document.querySelector(".navBar");

  if (!hamburger || !navBar) {
    console.error("Hamburger or navBar not found", hamburger, navBar);
    return;
  }

  hamburger.addEventListener("click", function () {
    navBar.classList.toggle("active");
  });
});








/* slider js code */
const testimonials = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((card, i) => {
    card.classList.toggle('active', i === index);
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

// Initialize first testimonial
showTestimonial(currentIndex);

