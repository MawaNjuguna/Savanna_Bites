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

function updateCart() {
    // Update the number of items in the cart
    document.getElementById("cart-count").textContent = cart.length;

    // Find the cart list in our HTML
    let cartItems = document.getElementById("cart-items");

    // Clear the old list before displaying updated items
    cartItems.innerHTML = "";

    // Display every item in the cart
    cart.forEach(function(item) {
        let li = document.createElement("li");

        li.textContent = item.name + " - KSh " + item.price;

        cartItems.appendChild(li);
    });

    // Display the total price
    document.getElementById("cart-total").textContent = total;
}
