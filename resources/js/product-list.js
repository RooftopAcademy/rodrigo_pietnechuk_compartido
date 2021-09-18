const products = document.querySelector(".products");

for (let i = 0; i < 12; i++) {
  products.innerHTML += `
    <article class="products-item">
      <a class="link d-flex justify-align-center text-left" href="product-details.html">
        <img class="image product-image" src="https://catalogos.libooks.com/9789500765183_md.jpg">
        <div class="caption">
          <p class="larger-text"><em>Los pájaros negros</em></p>
          <p>Alejando Parisi</p>
          <p><strong>$399,99</strong></p>
        </div>
      </a>
    </article>
  `;
}
