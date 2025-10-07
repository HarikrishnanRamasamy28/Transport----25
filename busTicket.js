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








/* filter */
document.querySelector('input[name="priceRange"]').addEventListener('input', function() {
  const value = this.value;
  const min = this.min;
  const max = this.max;
  const priceValue = document.getElementById('priceValue');
  priceValue.textContent = `₹${min} - ₹${value}`;
});





/* seat selection */
const seats = document.querySelectorAll('.seat');
const nextStepButton = document.getElementById('nextStep');
let selectedSeats = [];

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    const seatId = seat.dataset.seat;
    if (selectedSeats.includes(seatId)) {
      selectedSeats = selectedSeats.filter(s => s !== seatId);
      seat.classList.remove('selected');
    } else {
      selectedSeats.push(seatId);
      seat.classList.add('selected');
    }
    nextStepButton.disabled = selectedSeats.length === 0;
  });
});






/* passengerForm */
const passengerForm = document.getElementById('passengerForm');

passengerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(passengerForm);
  const passengerDetails = {};
  formData.forEach((value, key) => {
    passengerDetails[key] = value;
  });
  console.log('Passenger Details:', passengerDetails);
  // Proceed to payment step
});







/* paymentForm */
const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const paymentMethod = document.getElementById('paymentMethod').value;
  console.log('Payment Method:', paymentMethod);
  // Proceed with payment processing
});


