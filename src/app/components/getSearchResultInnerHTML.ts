import type IBook from "../interfaces/IBook";

export default function (item: IBook): string {
  return `
    <li class="option">
    <a class="link max-width" href="#product-details/${item.id}">
        ${item.name}
    </a>
    </li>
  `;
}
