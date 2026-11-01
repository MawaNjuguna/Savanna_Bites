// Savannah Bites Shopping Cart

let cart = [];
let total = 0;

// Add food to cart
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    total += price;

    updateCart();
}

// Update cart display
function updateCart() {
    document.getElementById("cart-count").textContent = cart.length;

    console.log("Items in cart:", cart);
    console.log("Total price: KSh", total);
}
