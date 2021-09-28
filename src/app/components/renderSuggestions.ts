import IBook from "../interfaces/IBook";

export default function renderSuggestions(data: IBook[], domElement: HTMLUListElement): void {
  const option = (item: IBook): string => `
    <li class="option">
      <a class="link max-width" href="#product-details/${item.id}">
        ${item.name}
      </a>
    </li>
  `;

  domElement.innerHTML = data.reduce((acc: string, cur: IBook) => acc + option(cur), "");
}
