import type BookInterface from '../interfaces/BookInterface';
import getSearchResultInnerHTML from './getSearchResultInnerHTML';

export default function renderSearchResults(
  data: BookInterface[],
  domElement: HTMLUListElement,
): void {
  domElement.innerHTML = data
    .reduce((acc: string, cur: BookInterface) => acc + getSearchResultInnerHTML(cur), '');
}
