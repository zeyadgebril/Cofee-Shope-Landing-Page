class CoffeeSlider extends HTMLElement{
  
    connectedCallback(){
    this.innerHTML = `

        <section id="home" class="hero-section  mt-lg-5">
      <div id="coffeeCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#coffeeCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#coffeeCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#coffeeCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="carousel-caption text-start d-flex flex-column">
                    <div>
                      <h1>"Joy Starts with a Great Cup."</h1>
                      <h5>Rich & Bold Espresso</h5>
                      <p>
                        Experience the deep aroma and intense flavor of freshly
                        brewed espresso, crafted for true coffee lovers.
                      </p>
                    </div>
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <a href="#menu" class="btn btn-primary">View Our Menu</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div
                    class="d-flex justify-content-center align-items-center"
                  >
                  <picture>
                  <source srcset="./assets/images/espriso.webp" type="image/webp">
                  <source srcset="assets/images/coffee.jpeg" type="image/jpeg">
                  <source srcset="./assets/images/espriso.png" type="image/png">
                    <img src="./assets/images/espriso.webp" alt="Espresso"
                    class="img-fluid"
                    width="360"
                    height="360">
                  </picture>

 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="carousel-caption text-start d-flex flex-column">
                    <div>
                      <h1>"Crafted with Passion"</h1>
                      <h5>Creamy Cappuccino</h5>
                      <p>
                        Indulge in the perfect balance of espresso, steamed milk
                        and silky foam that makes our cappuccino irresistible.
                      </p>
                    </div>
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <a href="#menu" class="btn btn-primary">View Our Menu</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div
                    class="d-flex justify-content-center justify-content-end"
                  >
                  <picture>
                  <source srcset="./assets/images/latee.webp" type="image/webp">
                  <source srcset="./assets/images/latee.jepeg" type="image/jpeg">
                  <source srcset="./assets/images/latee.png" type="image/png">
                    <img src="./assets/images/latee.webp" alt="lattee"
                    class="img-fluid"
                    width="360"
                    height="360">
                  </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="carousel-caption text-start d-flex flex-column">
                    <div>
                      <h1>"Where Coffee Meets Art"</h1>
                      <h5>Signature Cold Brew</h5>
                      <p>
                        Slow-steeped for 24 hours, our cold brew offers a
                        smooth, refreshing coffee experience with subtle notes
                        of chocolate.
                      </p>
                    </div>
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <a
                        href="#menu"
                        class="btn btn-primary justify-content-center"
                        >View Our Menu</a
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div
                    class="d-flex justify-content-center justify-content-end"
                  >

                  <picture>
                  <source srcset="./assets/images/iced coffee.webp" type="image/webp">
                  <source srcset="./assets/images/iced coffee.jepeg" type="image/jpeg">
                  <source srcset="./assets/images/iced coffee.png" type="image/png">
                    <img src="./assets/images/iced coffee.webp" alt="iced coffee"
                    class="img-fluid"
                    width="360"
                    height="360">
                  </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#coffeeCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#coffeeCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
          </section>
    `;
    }
    }
    
    customElements.define('coffee-slider', CoffeeSlider)