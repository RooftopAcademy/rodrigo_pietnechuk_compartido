import type Catalog from "../models/Catalog";
import type Book from "../models/Book";

export default function renderProductList(catalog: Catalog, domElement: HTMLElement): void {
  const listItem = (item: Book): string => `
    <article class="products-item">
      <a class="link d-flex text-left" href="product-details.html?id=${item.id}">
        <img class="image product-image" src="${item.imageURL}">
        <div class="caption">
          <p class="larger-text"><em>${item.name}</em></p>
          <p>${item.author}</p>
          <p><strong>$${item.price}</strong></p>
        </div>
      </a>
    </article>
  `;

  domElement.innerHTML = catalog
    .products
    .reduce((a: string, b: Book): string => a + listItem(b), "");
}
