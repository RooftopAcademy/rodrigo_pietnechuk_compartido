import type IBook from "../interfaces/IBook";
import getSearchResultInnerHTML from "./getSearchResultInnerHTML";

export default function renderSearchResults(
  data: IBook[],
  domElement: HTMLUListElement,
): void {
  domElement.innerHTML = data
    .reduce((acc: string, cur: IBook) => acc + getSearchResultInnerHTML(cur), "");
}
