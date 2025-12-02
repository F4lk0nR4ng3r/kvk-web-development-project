function addToCartFromHTML(button) {
  var itemDiv = button.parentElement;
  var name = itemDiv.querySelector(".car-name").innerText;
  var img = itemDiv.querySelector("img").src;

  var cart = JSON.parse(localStorage.getItem("cart")) || [];

  var existing = cart.find((item) => item.name === name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name: name, image: img, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " pridėta į krepšelį!");
}
