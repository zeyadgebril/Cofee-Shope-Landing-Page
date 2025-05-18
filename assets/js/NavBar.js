class NavBar extends HTMLElement{
  
    connectedCallback(){
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Table Roast</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home" id="homeLink">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#menu" id="menuLink">Menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about" id="aboutLink">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#testimonials" id="testimonialsLink"
                >Testimonials</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact" id="contactLink">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    `;
    }
    }
    
    customElements.define('nav-bar', NavBar)