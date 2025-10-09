/* nav bar */
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









/* available train detals */
document.addEventListener("DOMContentLoaded", function() {
  const trainCards = document.querySelectorAll(".train-card");
  trainCards.forEach(card => {
    const btn = card.querySelector(".expand-btn");
    const collapse = card.querySelector(".train-details-collapse");
    btn.addEventListener("click", function(e) {
      e.stopPropagation();  // prevent event bubbling if needed
      const isOpen = card.classList.contains("expanded");
      if (isOpen) {
        card.classList.remove("expanded");
        btn.classList.remove("open");
      } else {
        card.classList.add("expanded");
        btn.classList.add("open");
      }
    });
  });
});









/* PNR section */
function downloadTicket() {
  alert("Ticket downloaded!");
  // Implement ticket download functionality here
}

function printTicket() {
  window.print();
}

function shareTicket() {
  alert("Ticket shared!");
  // Implement ticket sharing functionality here
}







/* FAQ section */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;  // .faq-item
    item.classList.toggle('active');
  });
});
