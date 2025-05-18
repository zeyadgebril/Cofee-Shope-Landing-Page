class FooterCoffee extends HTMLElement{
  
    connectedCallback(){
    this.innerHTML = `
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-4 mb-lg-0">
            <h3 class="footer-title">Table Roast</h3>
            <p>
              Where every cup tells a story and every visit feels like coming
              home. Join us for quality coffee in a warm, welcoming atmosphere.
            </p>
            <div class="social-links mt-3">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-pinterest"></i></a>
            </div>
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0">
            <h3 class="footer-title">Quick Links</h3>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#home" class="text-white text-decoration-none">Home</a>
              </li>
              <li class="mb-2">
                <a href="#menu" class="text-white text-decoration-none"
                  >Our Menu</a
                >
              </li>
              <li class="mb-2">
                <a href="#about" class="text-white text-decoration-none"
                  >About Us</a
                >
              </li>
              <li class="mb-2">
                <a href="#testimonials" class="text-white text-decoration-none"
                  >Testimonials</a
                >
              </li>
              <li class="mb-2">
                <a href="#contact" class="text-white text-decoration-none"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
          <div class="col-lg-4">
            <h3 class="footer-title">Newsletter</h3>
            <p>
              Subscribe to our newsletter for updates, special offers, and
              coffee tips.
            </p>
            <form class="mt-3">
              <div class="input-group mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  required
                />
                <button class="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div class="text-center copyright">
          <p>
            &copy; 2025 Table Roast Coffee Shop. All Rights Reserved. Developed
            by Zeyad Gebril.
          </p>
        </div>
      </div>
    </footer>
    `;
    }
    }
    
    customElements.define('footer-coffee', FooterCoffee)