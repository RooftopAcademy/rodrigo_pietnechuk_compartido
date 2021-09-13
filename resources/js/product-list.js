const products = document.querySelector(".products");

for (let i = 0; i < 12; i++) {
  products.innerHTML += `
    <article class="products-item">
      <a class="link d-flex text-left" href="product-details.html">
        <img class="product-image" src="resources/assets/white-tshirt.png">
        <div class="caption">
          <p>Remera Blanca Algodón</p>
          <p><strong>$399,99</strong></p>
        </div>
      </a>
    </article>
  `;
}
