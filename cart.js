function addToCart() {
    var productName = "Product Name";
    var productImageSrc = "./path/to/product-image.jpg";
    var productPrice = "₹599";
    var productContainer = document.querySelector('.product-container').cloneNode(true);
    productContainer.style.display = 'block';
    productContainer.querySelector('.product-image').src = productImageSrc;
    productContainer.querySelector('.product-price').textContent = productPrice;
    document.querySelector('.div2').appendChild(productContainer);
}
function removeFromCart(button) {
    var productContainer = button.closest('.product-container');
    productContainer.parentNode.removeChild(productContainer);
}