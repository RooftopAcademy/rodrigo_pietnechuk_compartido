import getListItemInnerHTML from './getListItemInnerHTML';
import '../../public/resources/css/product-details.css';
import type Book from '../entities/Book';

export default function getFavoriteItemInnerHTML(item: Book): string {
  return `
    <div class="favorites-item max-width d-flex">
      <div class="favorites-item-product flex-grow-1">
        ${getListItemInnerHTML(item)}
      </div>
      <button class="js-favorite-button heart-button" data-id="${item.id}">
        <i class="fa fa-heart heart-icon-colored"></i>
      </button>
    </div>
  `;
}
