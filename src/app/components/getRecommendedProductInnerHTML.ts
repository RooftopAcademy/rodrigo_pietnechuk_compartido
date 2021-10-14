import type Book from '../entities/Book';

export default function getRecommendedProductInnerHTML(product: Book): string {
  return `
  <div class="d-flex flex-column product-info">
  <img class="image product-image" src="${product.getImageURL()}" alt="imagen del producto">
  <div class="d-flex flex-column product-description text-justify">
    <h2 class="text-left">${product.getName()}</h2>
    <p class="author">${product.getAuthor()}</p>
    <details>
      <summary>Sinopsis</summary>
      ${product.getDescription()}
    </details>
    <p><strong>$${product.getPrice()}</strong></p>
    <a href="#product-details/${product.getId()}">
      <button class="button">Ver detalles</button>
    </a>
  </div>
  `;
}
