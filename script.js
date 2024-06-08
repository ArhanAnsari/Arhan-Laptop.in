document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            name: "Alien Ware",
            price: { original: 1099, discounted: 999 },
            rating:"/assets/star1.png",
            image: "./assets/1.png",
            description: "Alienware is an American computer creating",
        },
        {
            name: "HP",
            price: { original: 29699, discounted: 6399 },
            rating:"/assets/star2.png",
            image: "./assets/2.png",
            description: "Global was founded with the goal of creating",
        },
        {
            name: "Dreamers",
            price: { original: 29699, discounted: 6399 },
            image: "./assets/3.png",
            rating:"/assets/star3.png",
            description: "Global was founded with the goal of creating",
        },
        {
            name: "Lenovo",
            price: { original: 29699, discounted: 6399 },
            image: "./assets/4.png",
            rating:"/assets/star4.png",
            description: "Global was founded with the goal of creating",
        },
        {
            name: "Dell",
            price: { original: 29699, discounted: 6399 },
            image: "./assets/6.png",
            rating:"/assets/star5.png",
            description: "Global was founded with the goal of creating",
        },
        {
            name: "HP",
            price: { original: 29699, discounted: 6399 },
            image: "./assets/6.png",
            rating:"/assets/star1.png",
            description: "Global was founded with the goal of creating",
        },
        {
            name: "Global",
            price: { original: 29699, discounted: 6399 },
            image: "./assets/1.png",
            rating:"/assets/star2.png",
            description: "Global was founded with the goal of creating",
        },
        {
            name: "Lenovo",
            price: { original: 29699, discounted: 6399 },
            image: "./assets/3.png",
            rating:"/assets/star3.png",
            description: "Global was founded with the goal of creating",
        },
        {
            name: "Dreamers",
            price: { original: 29699, discounted: 6399 },
            image: "./assets/5.png",
            rating:"/assets/star4.png",
            description: "Global was founded with the goal of creating",
        },
        {
            name: "HP",
            price: { original: 29699, discounted: 6399 },
            image: "./assets/1.png",
            rating:"/assets/star3.png",
            description: "Global was founded with the goal of creating",
        },
        {
            name: "HP",
            price: { original: 29699, discounted: 6399 },
            image: "./assets/4.png",
            rating:"/assets/star3.png",
            description: "Global was founded with the goal of creating",
        },
        {
            name: "Global",
            price: { original: 29699, discounted: 6399 },
            image: "./assets/3.png",
            rating:"/assets/star5.png",
            description: "Global was founded with the goal of creating",
        },
        // Add more products as needed
    ];

    const container = document.querySelector('.all-cards');

    products.forEach(product => {
        container.appendChild(createProductCard(product));
    });

    updateCartCount();
});

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('col-md-12', 'size', 'mb-4', 'mb-lg-0', 'card11', 'other-cards');
    card.innerHTML = `
    <div class="col-md-12 size mb-4 mb-lg-0 card11">
    <div class="card">
      <img class="myimage" src="${product.image}"
        class="card-img-top" alt="Laptop" />

      <div class="card-body">
        <div class="d-flex justify-content-between ms-3">
          <h3 class=" text-dark"><a href="#!" class="text-dark name">${product.name}</a></h1>
            
        </div>
        <div class="prd_desc">
          <p class="ms-3">${product.description}</p>
          <div class="icons ms-3">
            <!-- icons -->
          </div>
          <h class="small text-danger price-margin"><s >${product.price.original}</s><span style="color: #000000;position: relative;left:24px;bottom: 5px;">$</span> <span class="text-dark  product_price original-price ms-4">${product.price.discounted}</span></h>
        </div>
        <div class="star">

          <img src="${product.rating}" alt="">
        </div>
        <div class="d-flex justify-content-between mb-2">
          <div class="container" style="position: relative;right: 20px;">
            <p>
              <button type="button" class="btn btn-sm increment" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                <div data-tooltip="Price:-$${product.price.discounted}" class="button">
                  <div class="button-wrapper">
                    <div class="text">Buy Now</div>
                      <span class="icon">
                        <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                  </svg>
                      </span>
                    </div>
                  </div>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;

    return card;
}

function addToCart(product) {
    const data = { "product_name": product.name, "product_price": product.price.discounted, "product_image": product.image };
    const localStorageData = localStorage.getItem(product.name);

    if (localStorageData) {
        alert('Already added to cart');
    } else {
        localStorage.setItem(product.name, JSON.stringify(data));
        updateCartCount();
    }
}

function updateCartCount() {
    const cartCount = localStorage.length;
    document.getElementsByClassName('show')[0].innerHTML = cartCount;
}

function cart_icon() {
    const next_page = Number(document.getElementsByClassName('show')[0].innerHTML);

    if (next_page > 0) {
        document.getElementById('cart_icon_next_page').setAttribute('href', 'cart.html');
    } else {
        document.getElementById('cart_icon_next_page').setAttribute('href', '#');
        alert('Please add products to the cart first.');
    }
}
