// --- 1. Master Data (Warehouse) ---
const products = [
    { id: 1, name: "Samsung Galaxy", price: 15000, image: "📱" },
    { id: 2, name: "HP Laptop", price: 45000, image: "💻" },
    { id: 3, name: "Boat Headphones", price: 2000, image: "🎧" },
    { id: 4, name: "Apple Watch", price: 30000, image: "⌚" }
];

// --- 2. State (Hamari Tokri) ---
let cart = [];

// --- 3. Render Products (Map use karke list banana) ---
function displayProducts() {
    const productList = document.getElementById("product-list");
    
    productList.innerHTML = products.map(p => `
        <div class="card">
            <h1>${p.image}</h1>
            <h3>${p.name}</h3>
            <p>Price: ₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join("");
}

// --- 4. Add to Cart Logic (Find + Spread) ---
function addToCart(id) {
    const item = products.find(p => p.id === id);
    
    // Spread operator se naya array banana (Immutability)
    cart = [...cart, item];
    
    updateUI();
}

// --- 5. Remove from Cart (Filter) ---
function removeFromCart(index) {
    // Index ke base par filter karke item hatana
    cart = cart.filter((_, i) => i !== index);
    updateUI();
}

// --- 6. Total Calculation (Reduce) ---
function updateUI() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    // Cart list dikhana (Map)
    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>₹${item.price} <span class="remove-btn" onclick="removeFromCart(${index})">X</span></span>
        </div>
    `).join("");

    // Total nikalna (Reduce)
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPrice.innerText = total;
}

// --- 7. Clear Cart ---
function clearCart() {
    cart = [];
    updateUI();
}

// Page load hote hi products dikhao
displayProducts();