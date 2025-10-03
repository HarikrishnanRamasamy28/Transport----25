document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navBar = document.querySelector(".navBar");

  if (!hamburger || !navBar) {
    console.error("Hamburger or navBar not found", hamburger, navBar);
    return;
  }

  hamburger.addEventListener("click", function () {
    navBar.classList.toggle("active");
    // For debugging:
    console.log("Toggled navBar. Classes now:", navBar.classList.value);
  });
});







/* testimonials section */
const testimonials = document.querySelectorAll('.testimonial-card');
let current = 0;

function showNextTestimonial() {
  testimonials[current].classList.remove('active');
  testimonials[current].classList.add('exit-left');

  current = (current + 1) % testimonials.length;

  testimonials[current].classList.remove('exit-left');
  testimonials[current].classList.add('active');
}

// Initial display
testimonials[0].classList.add('active');

// Auto slide every 3 seconds
setInterval(showNextTestimonial, 3000);
