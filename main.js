import './assets/js/Coffee_carousel.js';
import './assets/js/menu_details.js';
import './assets/js/footer.js'; 
import './assets/js/visit_contact.js'
import './assets/js/NavBar.js';
import './assets/js/Testtimonials.js';
import './assets/js/About_Us.js'

document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
        bsCollapse.hide();
      }
    });
  });
});