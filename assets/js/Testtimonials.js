class testimonials extends HTMLElement{
  
    connectedCallback(){
    this.innerHTML = `
    <section id="testimonials" class="py-5">
      <div class="container">
        <h2 class="text-center section-title">What Our Customers Say</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="testimonial-item">
              <picture>
              <source srcset="./assets/images/cutomer-1.webp" type="image/webp">
              <source srcset="./assets/images/cutomer-1.jpeg" type="image/jpeg">
              <source srcset="./assets/images/cutomer-1.png" type="image/png">
              <img
                src="./assets/images/cutomer-1.webp"
                alt="Customer"
              />
            </picture>
              <p>
                "The espresso at Table Roast is simply outstanding. Rich,
                complex, and perfectly pulled every time. This has become my
                daily ritual."
              </p>
              <h5 class="testimonial-name">Michael T.</h5>
              <p class="text-muted">Coffee Enthusiast</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="testimonial-item">
            <picture>
              <source srcset="./assets/images/cutomer-3.webp" type="image/webp">
              <source srcset="./assets/images/cutomer-3.jpeg" type="image/jpeg">
              <source srcset="./assets/images/cutomer-3.png" type="image/png">
              <img
                src="./assets/images/cutomer-3.webp"
                alt="Customer"
              />
            </picture>
              <p>
                "I love the warm atmosphere and friendly staff. The cold brew is
                my favorite - smooth with just the right amount of strength. A
                hidden gem!"
              </p>
              <h5 class="testimonial-name">Sarah J.</h5>
              <p class="text-muted">Local Writer</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="testimonial-item">
            <picture>
              <source srcset="./assets/images/cutomer-2.webp" type="image/webp">
              <source srcset="./assets/images/cutomer-2.jpeg" type="image/jpeg">
              <source srcset="./assets/images/cutomer-2.png" type="image/png">
              <img
                src="./assets/images/cutomer-2.webp"
                alt="Customer"
              />
            </picture>
              <p>
                "As someone who works remotely, I appreciate the comfortable
                space and reliable Wi-Fi. The cappuccinos keep me coming back
                day after day."
              </p>
              <h5 class="testimonial-name">David R.</h5>
              <p class="text-muted">Software Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    `;
    }
    }
    
    customElements.define('testimonials-bar', testimonials)