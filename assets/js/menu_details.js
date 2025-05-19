class menu extends HTMLElement{
  
    connectedCallback(){
this.innerHTML = `
    <section id="menu" class="py-5">
      <div class="container">
        <h2 class="text-center section-title mb-5">Our Coffee Menu</h2>
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="card coffee-card">
            <div class="m-auto">
              <picture>
              <source srcset="./assets/images/espriso1.webp" type="image/webp">
              <source srcset="./assets/images/espriso1.jpeg" type="image/jpeg">
              <source srcset="./assets/images/espriso1.png" type="image/png">
              <img src="./assets/images/espriso1.webp" alt="Espresso">
              </picture>
            </div>
              <div class="card-body">
                <h5 class="card-title">Espresso</h5>
                <p class="card-text">
                  Pure, intense coffee flavor in a small cup. Our signature
                  blend with notes of chocolate .
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="coffee-price">$3.50</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card coffee-card">
            <div class="m-auto">            
                  <picture>
                  <source srcset="./assets/images/Americano.webp" type="image/webp">
                  <source srcset="./assets/images/Americano.jpeg" type="image/jpeg">
                  <source srcset="./assets/images/Americano.png" type="image/png">
                    <img src="./assets/images/Americano.webp" alt="Americano">
                  </picture>
            </div>
              <div class="card-body">
                <h5 class="card-title">Americano</h5>
                <p class="card-text">
                  Espresso diluted with hot water, maintaining the flavor but
                  with lower intensity. Perfect for sipping.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="coffee-price">$4.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card coffee-card">
            <div class="m-auto"> 
                  <picture>
                  <source srcset="./assets/images/Cappuccino.webp" type="image/webp">
                  <source srcset="./assets/images/Cappuccino.jpeg" type="image/jpeg">
                  <source srcset="./assets/images/Cappuccino.png" type="image/png">
                    <img src="./assets/images/Cappuccino.webp" alt="Cappuccino">
                  </picture>
            </div>
              <div class="card-body">
                <h5 class="card-title">Cappuccino</h5>
                <p class="card-text">
                  Equal parts espresso, steamed milk, and silky foam, creating a
                  perfect harmony of flavors and textures.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="coffee-price">$4.50</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card coffee-card">
            <div class="m-auto"> 
                  <picture>
                  <source srcset="./assets/images/Latte.webp" type="image/webp">
                  <source srcset="./assets/images/Latte.jpeg" type="image/jpeg">
                  <source srcset="./assets/images/Latte.png" type="image/png">
                    <img src="./assets/images/Latte.webp" alt="Latte">
                  </picture>
            </div>
              <div class="card-body">
                <h5 class="card-title">Latte</h5>
                <p class="card-text">
                  Espresso with steamed milk and a light layer of foam. Smooth
                  and mild with a creamy finish.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="coffee-price">$4.75</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card coffee-card">
            <div class="m-auto"> 
                  <picture>
                  <source srcset="./assets/images/Cold Brew.webp" type="image/webp">
                  <source srcset="./assets/images/Cold Brew.jpeg" type="image/jpeg">
                  <source srcset="./assets/images/Cold Brew.png" type="image/png">
                    <img src="./assets/images/Cold Brew.webp" alt="Cold Brew">
                  </picture>
              </div>
              <div class="card-body">
                <h5 class="card-title">Cold Brew</h5>
                <p class="card-text">
                  Steeped for 24 hours, our cold brew is smooth and refreshing
                  with low acidity and subtle sweetness.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="coffee-price">$5.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card coffee-card">
            <div class="m-auto"> 
                  <picture>
                  <source srcset="./assets/images/Mocha.webp" type="image/webp">
                  <source srcset="./assets/images/Mocha.jpeg" type="image/jpeg">
                  <source srcset="./assets/images/Mocha.png" type="image/png">
                    <img src="./assets/images/Mocha.webp" alt="Mocha">
                  </picture>  
              </div>          
              <div class="card-body">
                <h5 class="card-title">Mocha</h5>
                <p class="card-text">
                  Espresso with chocolate & milk, topped with whipped cream. A
                   treat for chocolate lovers.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="coffee-price">$5.25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
`
    }
    }
    
    customElements.define('menu-details', menu)