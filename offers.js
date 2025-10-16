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








/* promo coupon */
function copyCode() {
    const code = 'TRAIN150';
    navigator.clipboard.writeText(code).then(() => {
    alert('Promo code copied to clipboard!');
    });
}








/* pulse stop when i press */
document.querySelectorAll('.offer-card').forEach(card => {
  card.addEventListener('click', () => {
    // toggle the pulsing class
    card.classList.toggle('pulsing');
    // or explicitly remove so it stops:
    // card.classList.remove('pulsing');
  });
});