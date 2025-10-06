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






/* safety section */
document.querySelectorAll('.acc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const panel = document.getElementById(targetId);
    const isOpen = btn.classList.contains('active');

    // close all
    document.querySelectorAll('.acc-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.acc-panel').forEach(p => p.style.maxHeight = null);

    if (!isOpen) {
      btn.classList.add('active');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});