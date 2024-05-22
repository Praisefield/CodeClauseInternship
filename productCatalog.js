const products = [
    { id: 1, name: "Product 1", price: 10.00, image: "Landing1.jpg" },
    { id: 2, name: "Product 2", price: 15.00, image: "Landing2.jpg" },
    { id: 3, name: "Product 3", price: 20.00, image: "Landing3.jpg" },
    { id: 4, name: "Product 4", price: 10.00, image: "Landing4.jpg" },
    { id: 5, name: "Product 5", price: 15.00, image: "Landing5.jpg" },
    { id: 6, name: "Product 6", price: 20.00, image: "Landing6.jpg" },
    // Add more products as needed. The comma then image allows the product have pictures
];

let shoppingCart = [];

// Function to display products in the catalog
function renderProductCatalog() {
    const productContainer = document.getElementById('productCatalog');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productCard);
    });
}

// Function to add items to the shopping cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    shoppingCart.push(product);
    renderShoppingCart();
    updateBasketCount();
    console.log(shoppingCart);  // Log the shopping cart to check if the products are being added
}
// Function to update the item count in the basket icon
 function updateBasketCount() {
    const itemCountDisplay = document.getElementById('itemCount');
    itemCountDisplay.textContent = shoppingCart.length;
}
// Function to toggle the display of the shopping cart
function toggleCart() {
    const cartContainer = document.getElementById('shoppingCart');
    cartContainer.classList.toggle('show-cart'); // Add a CSS class to show/hide the cart
}
function showCart(){
    window.location.href ="ShoppingCart.html"
}
// Function to display the shopping cart
function renderShoppingCart() {
   const cartItemsContainer = document.getElementById('cartItems');
    const totalCostDisplay = document.getElementById('totalCost');
    cartItemsContainer.innerHTML = '';

    let totalCost = 0;

   shoppingCart.forEach(item => {
        const cartItem = document.createElement('div');
       cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
        totalCost += item.price;
    });

    totalCostDisplay.textContent = totalCost.toFixed(2);
}

// Call the function to display the product catalog
renderProductCatalog();
// Check if there's existing cart data in localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
        renderShoppingCart();
        updateBasketCount();
    }
});

// Function to add items to the shopping cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    shoppingCart.push(product);
    
    // Update shopping cart and local storage
    updateCartAndStorage();
}

// Function to update the shopping cart and local storage
function updateCartAndStorage() {
    renderShoppingCart();
    updateBasketCount();
  
    // Update localStorage with the updated shopping cart data
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}
// On page load for shopping cart page, retrieve stored cart data from localStorage
if (window.location.href.includes('ShoppingCart.html')) {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
        renderShoppingCart();
        updateBasketCount();
    }
}