class ContactUs extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section id="contact" class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center section-title">Visit Us</h2>
        <div class="row">
          <div class="col-md-6 mb-4 mb-md-0">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Opening Hours</h5>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <strong>Monday - Friday:</strong> 6:00 AM - 8:00 PM
                  </li>
                  <li class="mb-2">
                    <strong>Saturday:</strong> 7:00 AM - 9:00 PM
                  </li>
                  <li class="mb-2">
                    <strong>Sunday:</strong> 8:00 AM - 6:00 PM
                  </li>
                </ul>
                <h5 class="card-title mt-4">Contact Information</h5>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <i class="fas fa-map-marker-alt me-2"></i>123 Coffee Street,
                    Bean City, BC 12345
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-phone me-2"></i>(555) 123-4567
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-envelope me-2"></i>hello@brewhaven.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Send Us a Message</h5>
                <form>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <textarea
                      class="form-control"
                      rows="4"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('contact-us', ContactUs);