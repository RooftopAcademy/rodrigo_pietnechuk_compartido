import IBook from "../interfaces/IBook";
import app from "../main";

export default function renderSuggestions(data: IBook[], domElement: HTMLUListElement): void {
  const option = (item: IBook): string => `
    <li class="option">
      <a class="link js-router-link max-width" href="/product-details?id=${item.id}">
        ${item.name}
      </a>
    </li>
  `;

  domElement.innerHTML = data.reduce((acc: string, cur: IBook) => acc + option(cur), "");
  app.addRouterLinks(".option .js-router-link");
}
