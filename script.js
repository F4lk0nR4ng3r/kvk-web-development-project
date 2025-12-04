var cart = [];
function addToCartFromHTML(button) {
  var itemDiv = button.parentElement;
  var name = itemDiv.querySelector(".car-name").innerText;
  var img = itemDiv.querySelector("img").src;
  var existing = cart.find((item) => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name: name, image: img, quantity: 1 });
  }
  updateCartCount();
  alert(name + " pridėta į krepšelį!");
  console.log(cart);
}
var cartElement = document.getElementById("cart-items");
function showCart() {
  for (let i = 0; i < cart.length; i++) {
    show = JSON.stringify(cart[i]);
  }
}
