class AboutUs extends HTMLElement{
  
    connectedCallback(){
    this.innerHTML = `
    <section id="about" class="about-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <picture>
              <source srcset="./assets/images/shop image.webp" type="image/webp">
              <source srcset="./assets/images/shop image.jpeg" type="image/jpeg">
              <source srcset="./assets/images/shop image.png" type="image/png">
              <img
                src="./assets/images/shop image.webp"
                class="img-fluid about-img"
                alt="About Table Roast"
              />
            </picture>
          </div>
          <div class="col-lg-6">
            <h2 class="section-title text-center text-lg-start">Our Story</h2>
            <p>
              Table Roast was born from a passion for exceptional coffee and a
              desire to create a warm, welcoming space for our community.
              Founded in 2015, our journey began with a simple mission: to serve
              the perfect cup every time.
            </p>
            <p>
              We source our beans directly from sustainable farms around the
              world, ensuring fair prices for farmers and the highest quality
              for our customers. Each batch is roasted in small quantities at
              our local roastery to bring out the unique character of every
              origin.
            </p>
            <p>
              Our baristas are trained in the art and science of coffee
              preparation, dedicated to crafting beverages that delight the
              senses and create memorable experiences.
            </p>
            <p>
              At Table Roast, we're more than just a coffee shop - we're a
              gathering place where ideas are shared, friendships are formed,
              and the community thrives.
            </p>
          </div>
        </div>
      </div>
    </section>
    `;
    }
    }
    
    customElements.define('about-us', AboutUs)