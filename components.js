/* ==========================================
   EXPLORE EASY TOURS & TRAVELS
   Shared Navigation & Footer Components
   ========================================== */

// ============ SHARED NAVBAR ============
function injectNavbar() {
  const nav = document.createElement('nav');
  nav.id = 'navbar';
  nav.innerHTML = `
    <div class="nav-container">
      <a href="index.html" class="nav-logo">
        <span class="logo-main">✈ Explore Easy</span>
        <span class="logo-sub">Tours & Travels · Est. 2009</span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li class="nav-dropdown">
          <a href="packages.html">Packages</a>
          <div class="dropdown-menu">
            <a href="packages.html">All Packages</a>
            <a href="honeymoon.html">Honeymoon</a>
            <a href="student-iv.html">Student IV</a>
            <a href="bachelor.html">Bachelor's Special</a>
            <a href="group-travel.html">Group Travel</a>
            <a href="adventure.html">Adventure</a>
            <a href="cruises.html">Cruise Deals</a>
          </div>
        </li>
        <li><a href="booking.html">Book Now</a></li>
        <li><a href="destinations.html">Destinations</a></li>
        <li class="nav-dropdown">
          <a href="business.html">Services</a>
          <div class="dropdown-menu">
            <a href="insurance.html">Travel Insurance</a>
            <a href="business.html">Business Travel</a>
            <a href="documents.html">Documents Help</a>
            <a href="emergency.html">Emergency Support</a>
            <a href="agents.html">Our Agents</a>
          </div>
        </li>
        <li><a href="reviews.html">Reviews</a></li>
      </ul>
      <div class="nav-cta">
        <div class="nav-phone">
          <span>📞</span>
          <span>+91 98765 43210</span>
        </div>
        <a href="booking.html" class="btn btn-primary">Book Now</a>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  `;
  document.body.prepend(nav);
}

// ============ MOBILE NAV ============
function injectMobileNav() {
  const mob = document.createElement('div');
  mob.id = 'mobile-nav';
  mob.className = 'mobile-nav';
  mob.innerHTML = `
    <button id="close-mobile-nav" style="position:absolute;top:2rem;right:2rem;color:var(--white-60);font-size:2rem;background:none;border:none;cursor:pointer;">✕</button>
    <a href="index.html">Home</a>
    <a href="packages.html">Packages</a>
    <a href="booking.html">Book Now</a>
    <a href="destinations.html">Destinations</a>
    <a href="cruises.html">Cruises</a>
    <a href="insurance.html">Insurance</a>
    <a href="reviews.html">Reviews</a>
    <a href="agents.html">Our Agents</a>
    <a href="group-travel.html">Group Travel</a>
    <a href="honeymoon.html">Honeymoon</a>
    <a href="adventure.html">Adventure</a>
    <a href="business.html">Business Travel</a>
    <a href="documents.html">Documents</a>
    <a href="emergency.html">Emergency</a>
  `;
  document.body.append(mob);
}

// ============ SHARED FOOTER ============
function injectFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="logo-main">✈ Explore Easy</span>
          <span class="logo-sub">Tours & Travels</span>
          <p>Tamil Nadu's most trusted travel agency since 2009. We craft unforgettable journeys to every corner of the world — from the temples of Madurai to the fjords of Norway.</p>
          <div class="social-links">
            <a href="#" title="Facebook">f</a>
            <a href="#" title="Instagram">in</a>
            <a href="#" title="YouTube">▶</a>
            <a href="#" title="Twitter">𝕏</a>
            <a href="#" title="WhatsApp">💬</a>
          </div>
          <div style="margin-top:1.5rem">
            <p style="font-size:0.8rem;margin-bottom:0.5rem;color:var(--text-muted)">Subscribe for exclusive deals</p>
            <div class="newsletter-form">
              <input type="email" placeholder="Your email address">
              <button>Go</button>
            </div>
          </div>
        </div>
        <div class="footer-col">
          <h5>Packages</h5>
          <ul>
            <li><a href="packages.html">All Packages</a></li>
            <li><a href="honeymoon.html">Honeymoon</a></li>
            <li><a href="student-iv.html">Student IV</a></li>
            <li><a href="bachelor.html">Bachelor's Special</a></li>
            <li><a href="group-travel.html">Group Tours</a></li>
            <li><a href="adventure.html">Adventure</a></li>
            <li><a href="cruises.html">Cruises</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="booking.html">Flight Booking</a></li>
            <li><a href="booking.html">Hotel Booking</a></li>
            <li><a href="insurance.html">Travel Insurance</a></li>
            <li><a href="business.html">Business Travel</a></li>
            <li><a href="documents.html">Visa Assistance</a></li>
            <li><a href="emergency.html">Emergency Support</a></li>
            <li><a href="agents.html">Our Agents</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Contact Us</h5>
          <ul>
            <li style="color:var(--text-muted);font-size:0.875rem">📍 #12, Anna Salai, Chennai – 600002, Tamil Nadu</li>
            <li><a href="tel:+919876543210">📞 +91 98765 43210</a></li>
            <li><a href="tel:+914422334455">📞 044-2233-4455</a></li>
            <li><a href="mailto:info@exploreeasytoursandtravels.com">✉ info@exploreeasy.in</a></li>
            <li style="color:var(--text-muted);font-size:0.875rem">🕐 Mon–Sat: 9AM – 7PM</li>
          </ul>
          <div style="margin-top:1.5rem">
            <span class="badge badge-gold">✈ IATA Certified</span>
            <span class="badge badge-teal" style="margin-left:0.5rem">🛡 ATOL Protected</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Explore Easy Tours & Travels. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </div>
  `;
  document.querySelector('main').after(footer);
}

// ============ CURSOR ELEMENTS ============
function injectCursor() {
  const dot = document.createElement('div');
  dot.id = 'cursor-dot';
  const ring = document.createElement('div');
  ring.id = 'cursor-ring';
  document.body.prepend(ring);
  document.body.prepend(dot);
}

// ============ UTILITY BUTTONS ============
function injectUtilityBtns() {
  const btt = document.createElement('button');
  btt.id = 'back-to-top';
  btt.title = 'Back to Top';
  btt.innerHTML = '↑';
  document.body.append(btt);

  const wa = document.createElement('a');
  wa.id = 'whatsapp-btn';
  wa.href = 'https://wa.me/919876543210?text=Hello%2C%20I%20want%20to%20book%20a%20trip!';
  wa.target = '_blank';
  wa.title = 'Chat on WhatsApp';
  wa.innerHTML = '💬';
  document.body.append(wa);
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  injectCursor();
  injectNavbar();
  injectMobileNav();
  if (document.querySelector('main')) {
    injectFooter();
  }
  injectUtilityBtns();

  // ── Load chatbot on all pages ──
  const chatScript = document.createElement('script');
  chatScript.src = 'chatbot.js';
  chatScript.defer = true;
  document.body.appendChild(chatScript);
});
