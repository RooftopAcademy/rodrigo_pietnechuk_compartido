import type Book from '../entities/Book';

export default function getListItemInnerHTML(item: Book): string {
  return `
    <article class="products-item">
      <a class="link d-flex text-left" href="#product-details/${item.id}">
        <img class="image product-image" src="${item.imageURL}">
        <div class="caption">
          <p class="larger-text"><em>${item.name}</em></p>
          <p>${item.author}</p>
          <p><strong>$${item.price}</strong></p>
        </div>
      </a>
    </article>
  `;
}
