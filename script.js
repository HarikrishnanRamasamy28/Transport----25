const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});









/* optional JS to compute simple estimation */

  document.getElementById('estimatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const distance = parseFloat(document.getElementById('distance').value);
    const vehicleType = document.getElementById('vehicle').value;
    let ratePerKm;

    // simple rate logic
    switch(vehicleType) {
      case 'sedan': ratePerKm = 12; break;
      case 'van':   ratePerKm = 15; break;
      case 'suv':   ratePerKm = 20; break;
      case 'truck': ratePerKm = 30; break;
      default: ratePerKm = 0;
    }

    if (!isNaN(distance) && distance > 0) {
      const fare = distance * ratePerKm;
      document.querySelector('.fare-value').textContent = `₹ ${fare.toLocaleString()}`;
    } else {
      document.querySelector('.fare-value').textContent = '—';
    }
  });







/* Leaflet JS */
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

  // Initialize map
  const map = L.map('map').setView([20.0, 77.0], 5); // center somewhere (India approx)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  // Marker for live vehicle / shipment
  let trackingMarker = null;
  let routeLine = null;

  // Mock function: fetch tracking data from your backend
  // Replace this with real API call
  async function fetchTrackingData(trackingCode) {
    // Demo: return a fake route + current position
    // In real use, call your backend API, e.g. /api/track?code=...
    return {
      status: "In Transit",
      lastUpdated: new Date().toLocaleString(),
      route: [
        [12.9716, 77.5946],  // Bengaluru
        [13.0827, 80.2707],  // Chennai
        [13.6288, 79.4192],  // somewhere en route
      ],
      current: [13.6288, 79.4192]
    };
  }

  function updateMapWithTracking(data) {
    const { route, current } = data;

    // Remove old route line or marker if exists
    if (routeLine) {
      map.removeLayer(routeLine);
    }
    if (trackingMarker) {
      map.removeLayer(trackingMarker);
    }

    // Draw route polyline
    routeLine = L.polyline(route, { color: 'blue', weight: 4 }).addTo(map);

    // Add marker at current position
    trackingMarker = L.marker(current).addTo(map);

    // Fit map to route bounds
    const bounds = routeLine.getBounds();
    map.fitBounds(bounds, { padding: [50, 50] });
  }

  document.getElementById('trackingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const code = document.getElementById('trackingInput').value.trim();
    if (!code) return;

    // fetch tracking info
    try {
      const data = await fetchTrackingData(code);

      // update status text
      document.getElementById('statusText').textContent = data.status;
      document.getElementById('lastUpdated').textContent = data.lastUpdated;

      // update map
      updateMapWithTracking(data);
    } catch (err) {
      console.error("Error fetching tracking data:", err);
      alert("Could not fetch tracking info. Please try again.");
    }
  });




    

 


/* safety */
  // small accordion script
  document.querySelectorAll('.acc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      const open = target.style.maxHeight;
      // close all
      document.querySelectorAll('.acc-panel').forEach(p => p.style.maxHeight = null);
      if (!open) {
        target.style.maxHeight = target.scrollHeight + 'px';
      }
    });
  });

  // placeholder for Request Documents
  document.getElementById('requestDocsBtn').addEventListener('click', () => {
    const email = prompt('Enter your email to request compliance documents:');
    if (email) {
      // in real app, POST to server; here show confirmation
      alert('Thanks — we will email compliance documents to: ' + email);
    }
  });













  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // collect form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // simple validation
    if (!name || !email || !message) {
      document.getElementById('formResponse').textContent = 'Please fill all required fields.';
      document.getElementById('formResponse').style.color = 'red';
      return;
    }

    // Here you’d send the data to your backend (e.g. via fetch / AJAX)
    // For demo, just show a success message
    document.getElementById('formResponse').textContent = 'Thank you! Your message has been sent.';
    document.getElementById('formResponse').style.color = 'green';

    // optionally reset form
    this.reset();
  });
