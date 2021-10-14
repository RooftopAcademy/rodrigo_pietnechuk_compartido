import type Book from '../entities/Book';

export default function getListItemInnerHTML(item: Book): string {
  return `
    <article class="products-item p-1">
      <a class="link d-flex text-left" href="#product-details/${item.getId()}">
        <img class="image product-image" src="${item.getImageURL()}">
        <div class="caption">
          <p class="larger-text"><em>${item.getName()}</em></p>
          <p>${item.getAuthor()}</p>
          <p><strong>$${item.getPrice()}</strong></p>
        </div>
      </a>
    </article>
  `;
}
