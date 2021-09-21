function renderProductList(productList, domElement) {
  if (!(productList instanceof Array)) {
    throw new TypeError(`Array expected, got ${typeof productList}`);
  }

  const listItem = (item) =>`
    <article class="products-item">
      <a class="link d-flex text-left" href="product-details?id=${item.id}">
        <img class="image product-image" src="${item.imageURL}">
        <div class="caption">
          <p class="larger-text"><em>${item.name}</em></p>
          <p>${item.author}</p>
          <p><strong>$${item.price}</strong></p>
        </div>
      </a>
    </article>
  `;

  domElement.innerHTML = productList.reduce((a, b) => a + listItem(b), "");
}
