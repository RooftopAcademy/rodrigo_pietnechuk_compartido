function renderProductDetails(product) {
  if (!(product instanceof Book)) {
    throw new TypeError(`Book expected, got ${typeof product}`);
  }

  return (`
  <div class="d-flex flex-column product-info">
    <img class="image product-image" src="${product.imageURL}" alt="imagen del producto">
    <div class="d-flex flex-column product-description text-justify">
      <h2 class="text-left">${product.name}</h2>
      <p class="author">${product.author}</p>
      <h3>Sinopsis</h3>
      <p class="small-text description-text">${product.description}</p>
      <h4>Ficha técnica</h4>
      <div class="product-details">
        <ul>
          <li>Año de publicación: ${product.publicationYear}</li>
          <li>Páginas: ${product.pages}</li>
          <li>ISBN: ${product.isbn}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="d-flex cart-button-container">
    <p class="text-left price">$${product.price}</p>
    <button class="button">Agregar al carrito</button>
    <button class="heart-button"><i class="far fa-heart heart-icon"></i></button>
  </div>
  `);
}
