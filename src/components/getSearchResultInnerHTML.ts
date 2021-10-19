import type BookInterface from '../interfaces/BookInterface';

export default function (item: BookInterface): string {
  return `
    <li class="option">
    <a class="link w-100" href="#product-details/${item.id}">
        ${item.name}
    </a>
    </li>
  `;
}
