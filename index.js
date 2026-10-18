// select box 

document.querySelectorAll(".select-box").forEach((box) => {
    const button = box.querySelector(".select-btn");
    const menu = box.querySelector(".select-menu");
    const label = button.querySelector("span");
  
    button.addEventListener("click", () => {
      document.querySelectorAll(".select-box").forEach((other) => {
        if (other !== box) other.classList.remove("open");
      });
  
      box.classList.toggle("open");
    });
  
    menu.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", () => {
        label.textContent = item.textContent;

        menu.querySelectorAll("li").forEach((li) => {
          li.classList.remove("active");
        });
  
        item.classList.add("active");
        box.dataset.value = item.dataset.value;
        box.classList.remove("open");
      });
    });
  });
  
  document.addEventListener("click", (event) => {
    document.querySelectorAll(".select-box").forEach((box) => {
      if (!box.contains(event.target)) {
        box.classList.remove("open");
      }
    });
  });
  
  const selectBoxes = document.querySelectorAll(".select-box");

selectBoxes.forEach((box) => {
  const button = box.querySelector(".select-btn");
  const menu = box.querySelector(".select-menu");
  const label = button.querySelector("span");

  menu.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      const value = item.dataset.value;
      const filter = box.dataset.filter;

      label.textContent = item.textContent;

      menu.querySelectorAll("li").forEach((li) => {
        li.classList.remove("active");
      });

      item.classList.add("active");
      box.classList.remove("open");

      console.log("Filter:", filter);
      console.log("Selected value:", value);
      filterBy(filter,value);
    });
  });
});
// price filter
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
if(priceValue){
    priceRange.addEventListener("input", () => {
        let priceRangeValue = priceRange.value;
        priceValue.textContent = `₹${Number(priceRangeValue).toLocaleString("en-IN")}`;
        currentPage = 1;
        var filteredProducts= [];
        filteredProducts = filter_data.filter(product => {
            return product.price <= priceRangeValue;
        });
        filter_data = filteredProducts;
        displayProducts(filteredProducts);

    });
}
const checkboxes = document.querySelectorAll(".description-filter");

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        const selectedValues = [...checkboxes]
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value.toLowerCase());

        const filteredProducts = products.filter((product) => {
            if (selectedValues.length === 0) {
                return true;
            }

            return selectedValues.some((value) =>
                product.description.toLowerCase().includes(value)
            );
        });
        filter_data = filteredProducts;
        displayProducts(filteredProducts);
    });
});

//product list 
const products = [
  {
      id: 1,
      name: "The Milan Elegance Watch",
      price: 6499,
      category: "accessories",
      description: "accessories",
      image: "./images/acc1.jpg"
  },
  {
      id: 2,
      name: "Isabella Leather Belt",
      price: 599,
      category: "accessories",
      description: "accessories",
      image: "./images/acc2.jpg"
  },
  {
      id: 3,
      name: "The Cloud Hobo Bag",
      price: 1599,
      category: "accessories",
      description: "accessories",
      image: "./images/acc3.jpg"
  },
  {
      id: 4,
      name: "The City Chic Bag",
      price: 999,
      category: "accessories",
      description: "accessories",
      image: "./images/acc4.jpg"
  },
  {
      id: 5,
      name: "The Amara Drop Earrings",
      price: 599,
      category: "accessories",
      description: "accessories",
      image: "./images/acc5.jpg"
  },
  {
      id: 6,
      name: "The Nova Crossbody Bag",
      price: 6999,
      category: "accessories",
      description: "accessories",
      image: "./images/acc6.jpg"
  },
  {
      id: 7,
      name: "The Sunday Bloom Set",
      price: 5999,
      category: "summer",
      description: "summer, top",
      image: "./images/sum1.avif"
  },
  {
      id: 8,
      name: "The Solana Linen Outfit",
      price: 5599,
      category: "summer",
      description: "summer, full set",
      image: "./images/sum2.jpg"
  },
  {
      id: 9,
      name: "The Coastal Breeze Set",
      price: 8999,
      category: "summer",
      description: "summer, full set",
      image: "./images/sum3.jpg"
  },
  {
      id: 10,
      name: "The Sophia Floral Dress",
      price: 4999,
      category: "summer",
      description: "summer, full set",
      image: "./images/sum4.jpg"
  },
  {
      id: 11,
      name: "The Azure Summer Set",
      price: 5099,
      category: "summer",
      description: "summer, full set",
      image: "./images/sum5.jpg"
  },
  {
      id: 12,
      name: "The Sunset Breeze Set",
      price: 6999,
      category: "summer",
      description: "summer, top",
      image: "./images/sum6.jpg"
  },
  {
      id: 13,
      name: "The Winter Muse Set",
      price: 599,
      category: "winter",
      description: "winter, top",
      image: "./images/win1.jpg"
  },
  {
      id: 14,
      name: "The Winter Luxe Set",
      price: 5299,
      category: "winter",
      description: "winter, top",
      image: "./images/win2.avif"
  },
  {
      id: 15,
      name: "The Cozy Elegance Set",
      price: 5999,
      category: "winter",
      description: "winter, top",
      image: "./images/win3.jpg"
  },
  {
      id: 16,
      name: "The Snowy Horizon Set",
      price: 1599,
      category: "winter",
      description: "winter, top",
      image: "./images/win4.jpg"
  },
  {
      id: 17,
      name: "The Winter Whisper Set",
      price: 9099,
      category: "winter",
      description: "winter, top",
      image: "./images/win5.jpg"
  },
  {
      id: 18,
      name: "The Alpine Breeze Set",
      price: 2999,
      category: "winter",
      description: "winter, top",
      image: "./images/win6.jpg"
  },
  {
      id: 19,
      name: "The Spring Blossom Set",
      price: 3599,
      category: "spring",
      description: "spring, top",
      image: "./images/spr1.jpg"
  },
  {
      id: 20,
      name: "The Spring Muse Set",
      price: 2599,
      category: "spring",
      description: "spring, full set",
      image: "./images/spr2.avif"
  },
  {
      id: 21,
      name: "The Pastel Bloom Set",
      price: 6999,
      category: "spring",
      description: "spring, full set",
      image: "./images/spr3.jpg"
  },
  {
      id: 22,
      name: "The Golden Meadow Dress",
      price: 4999,
      category: "spring",
      description: "spring, full set",
      image: "./images/spr4.jpg"
  },
  {
      id: 23,
      name: "The Rosy Horizon Set",
      price: 5099,
      category: "spring",
      description: "spring, full set",
      image: "./images/spr5.jpg"
  },
  {
      id: 24,
      name: "The Soft Petals Set",
      price: 1099,
      category: "spring",
      description: "spring, top",
      image: "./images/spr6.jpg"
  },
  {
      id: 25,
      name: "The Golden Foliage Set",
      price: 7999,
      category: "autumn",
      description: "autumn, full set",
      image: "./images/aut1.jpg"
  },
  {
      id: 26,
      name: "The Rustic Bloom Outfit",
      price: 5699,
      category: "autumn",
      description: "autumn, top",
      image: "./images/aut2.jpg"
  },
  {
      id: 27,
      name: "The Coastal Breeze Set",
      price: 9999,
      category: "autumn",
      description: "autumn, full set",
      image: "./images/aut3.jpg"
  },
  {
      id: 28,
      name: "The Maple Dusk Set",
      price: 1999,
      category: "autumn",
      description: "autumn, top",
      image: "./images/aut4.jpg"
  },
  {
      id: 29,
      name: "The Burnt Sienna Set",
      price: 9099,
      category: "autumn",
      description: "autumn, top",
      image: "./images/aut5.jpg"
  },
  {
      id: 30,
      name: "The Cinnamon Breeze Set",
      price: 6999,
      category: "autumn",
      description: "autumn, full set",
      image: "./images/aut6.jpg"
  },
  {
      id: 31,
      name: "The Urban Muse Trousers",
      price: 599,
      category: "bottom",
      description: "bottom",
      image: "./images/bot1.jpg"
  },
  {
      id: 32,
      name: "- The Sleek Silhouette Pants",
      price: 1399,
      category: "bottom",
      description: "bottom",
      image: "./images/bot2.jpg"
  },
  {
      id: 33,
      name: "The Soft Motion Joggers",
      price: 1999,
      category: "bottom",
      description: "bottom",
      image: "./images/bot3.jpg"
  },
  {
      id: 34,
      name: "The Cloud Nine Lounge Pants",
      price: 1999,
      category: "bottom",
      description: "bottom",
      image: "./images/bot4.jpg"
  },
  {
      id: 35,
      name: "The Weekend Ease Pants",
      price: 3699,
      category: "bottom",
      description: "bottom",
      image: "./images/bot5.jpg"
  },
  {
      id: 36,
      name: "The Coastal Linen Pants",
      price: 9999,
      category: "bottom",
      description: "bottom",
      image: "./images/bot6.jpg"
  }
];
var filter_data = products;
const productsPerPage = 6;
let currentPage = 1;

const productList = document.getElementById("product-list");
const pagination = document.querySelector(".pagination");

function displayProducts(productData) {
    if(!productList) return;
    productList.innerHTML = "";

    if (productData.length === 0) {
        productList.innerHTML = "<p>No products found.</p>";
        return;
    }

    const startIndex = (currentPage - 1) * productsPerPage;

    const currentProducts = productData.slice(
        startIndex,
        startIndex + productsPerPage
    )

    currentProducts.forEach(product => {
        productList.innerHTML +=`
        <div class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" />
            <button class="wishlist-btn" type="button" aria-label="Add to wishlist" onclick="toggleWishlist(${product.id})">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>
              </svg>
            </button>
          </div>
      
          <h3 class="product-name">${product.name}</h3>
      
          <div class="product-buy">
            <p class="product-price">₹${product.price.toLocaleString("en-IN")}</p>
            <button data-product-id="${product.id}" class="add-to-cart" type="button" onclick="addToCartId(${product.id})">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>
              </svg>
              <span>Add to cart</span>
            </button>
          </div>
      
          <div class="product-rating"><span class="star">★</span> ${product.rating ?? 4.8}</div>
        </div>
      `;
    });
    displayPagination(productData);

}

function displayPagination(productData) {
    const totalPages = Math.ceil(productData.length / productsPerPage);
    const pagination = document.querySelector(".pagination");
    if(totalPages == 1){
        pagination.innerHTML='';
        return;
    } 
    let html = `
        <button 
            class="page-arrow prev" 
            aria-label="Previous page"
            ${currentPage === 1 ? "disabled" : ""}
        >
            &#8249;
        </button>
    `;

    // Generate page numbers dynamically
    for (let i = 1; i <= totalPages; i++) {
        html += `
            <button 
                class="page-number ${currentPage === i ? "active" : ""}"
                data-page="${i}"
                ${currentPage === i ? 'aria-current="page"' : ""}
            >
                ${i}
            </button>
        `;
    }

    html += `
        <button 
            class="page-arrow next" 
            aria-label="Next page"
            ${currentPage === totalPages ? "disabled" : ""}
        >
            &#8594;
        </button>
    `;
    pagination.innerHTML = html;
}

if(pagination){
    pagination.addEventListener("click", (event) => {
        const button = event.target.closest("button");
    
        if (!button || button.disabled) return;
    
        const totalPages = Math.ceil(filter_data.length / productsPerPage);
    
        if (button.classList.contains("page-number")) {
            currentPage = Number(button.dataset.page);
        } 
        else if (button.classList.contains("prev")) {
            currentPage--;
        } 
        else if (button.classList.contains("next")) {
            currentPage++;
        }
    
        currentPage = Math.max(1, Math.min(currentPage, totalPages));
    
        document.querySelector("#product-list").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        displayProducts(filter_data);
        if(totalPages > 1)
            displayPagination(filter_data);
    });
}
const restFilter = document.getElementById('reset_filter');
if(restFilter){
    restFilter.addEventListener('click', () =>{
        document.getElementById('search').value = '';
        document.querySelectorAll(".select-box").forEach((box) => {
            resetSelectBox(box);
        });
        document.querySelectorAll(".description-filter").forEach((checkbox) => {
            checkbox.checked = false;
        });    
        filterBy('','');
        filter_data = products;
    })
}
function resetSelectBox(box) {
    const button = box.querySelector(".select-btn");
    const menu = box.querySelector(".select-menu");
    const label = button.querySelector("span");
    let priceRangeValue = '10000';
    priceRange.value = priceRangeValue;
    priceValue.textContent = `₹${Number(priceRangeValue).toLocaleString("en-IN")}`;
    // Reset button text
    label.textContent = label.dataset.default;

    // Reset active item
    menu.querySelectorAll("li").forEach((li) => {
        li.classList.remove("active");
    });

    // Set default option active
    const defaultItem = menu.querySelector(
        `[data-value="${box.dataset.valueDefault || "all"}"]`
    );

    if (defaultItem) {
        defaultItem.classList.add("active");
        box.dataset.value = defaultItem.dataset.value;
    }

    box.classList.remove("open");
}
const searchInput = document.querySelector("#search");
if(searchInput){
    searchInput.addEventListener("input", (event) => {
        const searchText = event.target.value.trim().toLowerCase();
    
        const filteredProducts = products.filter((product) => {
            return product.name.toLowerCase().includes(searchText);
        });
        filter_data = filteredProducts;
        displayProducts(filteredProducts);
    });
}
// filter data
function filterBy(type, filterData) {
  currentPage = 1;
  var filteredProducts= [];
  if(type == ''){
    displayProducts(products);
    return;
  }
  console.log('type: ', type)
  console.log('filterData: ', filterData);

  if(type == 'sort'){
    filteredProducts = filter_data.sort((a, b) =>{
        if(filterData == 'low-high')
            return a.price - b.price

        return b.price-a.price
    });
  }else{
    filteredProducts = filter_data.filter(product => {
        if(type == 'category'){
            return filterData === "All" || product.category == filterData;
        }else if(type == 'price'){
            let splitData = filterData.split("-");
            let from = splitData[0];
            let to = splitData[1];
            return product.price >= from && product.price <= to;
        }else{
            return product
        }
      });
  }
  filter_data = filteredProducts;
  console.log('filteredProducts: ', filteredProducts)
  displayProducts(filteredProducts);
}

displayProducts(products);

let wishlist = [];
let cart = [];

// Toggle wishlist
function toggleWishlist(productId) {
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
    } else {
        wishlist.push(productId);
    }

    updateWishlistCount();
    renderWishlist();
}

// Wishlist badge
function updateWishlistCount() {
    document.getElementById("wishlist-count").textContent =
        wishlist.length;
}

// Add to cart
function addToCartId(productId){
    const product = products.find(item => item.id === productId);
    if (product) {
        addToCart(product);
    }
}
function addToCart(product) {
    const existingProduct = cart.find(
        item => item.id === product.id
    );

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartCount();
    renderCart();
}

// Cart badge
function updateCartCount() {
    const count = cart.reduce(
        (total, item) => total + item.quantity, 0
    );

    document.getElementById("cart-count").textContent = count;
}

// Format price
function formatPrice(price) {
    return "₹" + Number(price).toLocaleString("en-IN");
}

// Render wishlist products
function renderWishlist() {
    const container = document.getElementById("wishlist-items");

    if (wishlist.length === 0) {
        container.innerHTML =
            '<p class="empty-message">Your wishlist is empty.</p>';
        return;
    }

    const wishlistProducts = products.filter(product =>
        wishlist.includes(product.id)
    );

    container.innerHTML = wishlistProducts.map(product => `
        <div class="panel-product">
            <img src="${product.image}" alt="${product.name}">

            <div class="panel-product-info">
                <h3>${product.name}</h3>
                <p>${formatPrice(product.price)}</p>

                <div class="panel-actions">
                    <button data-action="move-to-cart"
                            data-id="${product.id}">
                        Add to Cart
                    </button>

                    <button data-action="remove-wishlist"
                            data-id="${product.id}">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

// Render cart products
function renderCart() {
    const container = document.getElementById("cart-items");
    console.log('cart', cart);
    
    if (cart.length === 0) {
        container.innerHTML =
            '<p class="empty-message">Your shopping bag is empty.</p>';
    } else {
        container.innerHTML = cart.map(product => `
            <div class="panel-product">
                <img src="${product.image}" alt="${product.name}">

                <div class="panel-product-info">
                    <h3>${product.name}</h3>
                    <p>${formatPrice(product.price)}</p>

                    <div class="panel-actions">
                        <button data-action="decrease"
                                data-id="${product.id}"
                                aria-label="Decrease quantity">−</button>

                        <span>${product.quantity}</span>

                        <button data-action="increase"
                                data-id="${product.id}"
                                aria-label="Increase quantity">+</button>

                        <button data-action="remove-cart"
                                data-id="${product.id}">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        `).join("");
    }

    const total = cart.reduce(
        (sum, product) =>
            sum + Number(product.price) * product.quantity,
        0
    );

    document.getElementById("cart-total").textContent =
        formatPrice(total);
}

// Handle sidebar buttons
document.addEventListener("click", function (event) {
    const button = event.target.closest("[data-action]");

    if (!button) return;

    const id = Number(button.dataset.id);
    const action = button.dataset.action;

    if (action === "remove-wishlist") {
        wishlist = wishlist.filter(productId => productId !== id);

        updateWishlistCount();
        renderWishlist();
    }

    if (action === "move-to-cart") {
        const product = products.find(item => item.id === id);

        if (product) {
            addToCart(product);

            // Remove from wishlist after adding to cart
            wishlist = wishlist.filter(productId => productId !== id);

            updateWishlistCount();
            renderWishlist();
        }
    }

    if (action === "increase") {
        const item = cart.find(product => product.id === id);

        if (item) item.quantity++;

        updateCartCount();
        renderCart();
    }

    if (action === "decrease") {
        const item = cart.find(product => product.id === id);

        if (item) {
            item.quantity--;

            if (item.quantity <= 0) {
                cart = cart.filter(product => product.id !== id);
            }
        }

        updateCartCount();
        renderCart();
    }

    if (action === "remove-cart") {
        cart = cart.filter(product => product.id !== id);

        updateCartCount();
        renderCart();
    }
});


const wishlistSidebar = document.getElementById("wishlist-sidebar");
const cartSidebar = document.getElementById("cart-sidebar");
const overlay = document.getElementById("panel-overlay");

document.getElementById("wishlist-toggle").addEventListener("click", e => {
    e.preventDefault();

    wishlistSidebar.classList.add("active");
    cartSidebar.classList.remove("active");
    overlay.classList.add("active");

    renderWishlist();
});

document.getElementById("cart-toggle").addEventListener("click", e => {
    e.preventDefault();

    cartSidebar.classList.add("active");
    wishlistSidebar.classList.remove("active");
    overlay.classList.add("active");

    renderCart();
});

function closeSidebars() {
    wishlistSidebar.classList.remove("active");
    cartSidebar.classList.remove("active");
    overlay.classList.remove("active");
}

document.querySelectorAll(".close-panel").forEach(button => {
    button.addEventListener("click", closeSidebars);
});

overlay.addEventListener("click", closeSidebars);