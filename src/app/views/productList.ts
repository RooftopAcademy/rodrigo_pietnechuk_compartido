import type Catalog from "../models/Catalog";
import type Book from "../models/Book";

import "../../public/resources/css/product-list.css";

export default function renderProductList(el: HTMLElement, catalog: Catalog): void {
  const listItem = (item: Book): string => `
    <article class="products-item">
      <a class="link js-router-link d-flex text-left" href="/product-details?id=${item.id}">
        <img class="image product-image" src="${item.imageURL}">
        <div class="caption">
          <p class="larger-text"><em>${item.name}</em></p>
          <p>${item.author}</p>
          <p><strong>$${item.price}</strong></p>
        </div>
      </a>
    </article>
  `;

  el.innerHTML = `
    <div class="max-width d-flex flex-column space-between small-text products">
      ${catalog.products.reduce((a: string, b: Book): string => a + listItem(b), "")}
    </div>
  `;
}
