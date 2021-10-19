import type Book from '../entities/Book';

export default function getProductDetailsInnerHTML(product: Book): string {
  return `
  <div class="d-flex flex-column product-info">
    <img class="image product-image" src="${product.getImageURL()}" alt="imagen del producto">
    <div class="d-flex flex-column product-description text-justify">
      <h2 class="text-left">${product.getName()}</h2>
      <p class="author">${product.getAuthor()}</p>
      <h3>Sinopsis</h3>
      <p class="small-text description-text">${product.getDescription()}</p>
      <h4>Ficha técnica</h4>
      <div class="product-details">
        <ul>
          <li>Año de publicación: ${product.getPublicationYear()}</li>
          <li>Páginas: ${product.getPages()}</li>
          <li>ISBN: ${product.getIsbn()}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="d-flex cart-button-container">
    <p class="text-left price">$${product.getPrice()}</p>
    <p>En carrito: <span id="amount-in-cart-this-product">0</span></p>
    <button id="add-to-cart" class="button">+</button>
    <button id="remove-from-cart" class="button">-</button>
    <button class="heart-button"><i class="fa-heart heart-icon"></i></button>
  </div>
  `;
}
