function renderProductListItem(product) {
  if (!(product instanceof Book)) {
    throw new TypeError(`Book expected, got ${typeof product}`);
  }

  return (`
    <article class="products-item">
      <a class="link d-flex text-left" href="product-details.html">
        <img class="image product-image" src="${product.imageURL}">
        <div class="caption">
          <p class="larger-text"><em>${product.name}</em></p>
          <p>${product.author}</p>
          <p><strong>$${product.price}</strong></p>
        </div>
      </a>
    </article>
  `);
}
