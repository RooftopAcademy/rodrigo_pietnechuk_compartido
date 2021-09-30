import Header from '../components/Header';
import Brand from '../components/Brand';
import Footer from '../components/Footer';
import StoreApi from '../services/StoreApi';
import renderSearchResults from '../components/renderSearchResults';
import type IBook from '../interfaces/IBook';
import makeRequest from '../services/makeRequest';

async function searchProducts(
  input: HTMLInputElement,
  suggestions: HTMLUListElement,
): Promise<void> {
  const value = input.value.trim();

  if (!value) {
    suggestions.innerHTML = '';
    return;
  }

  const data: IBook[] = await makeRequest(StoreApi.filterCatalog(value));
  renderSearchResults(data, suggestions);

  Array.from(suggestions.querySelectorAll('.option')).forEach((item) => {
    item.addEventListener('click', () => {
      input.value = '';
      suggestions.innerHTML = '';
    });
  });
}

function addEvents(el: HTMLElement): void {
  const header: HTMLElement = el.querySelector('header') as HTMLElement;
  const navigation: HTMLElement = header.querySelector('.navigation') as HTMLElement;
  const suggestions: HTMLUListElement = navigation
    .querySelector('#suggestions') as HTMLUListElement;

  (<HTMLButtonElement>header.querySelector('.burger-menu')).addEventListener('click', () => {
    navigation.classList.toggle('hidden');
  });

  const searchBar: HTMLInputElement = navigation.querySelector('#search-bar') as HTMLInputElement;
  searchBar.addEventListener('input', function (this: HTMLInputElement) {
    searchProducts(this, suggestions);
  });
}

export default function loadComponents(el: HTMLElement): void {
  customElements.define('header-component', Header);
  customElements.define('brand-component', Brand);
  customElements.define('footer-component', Footer);

  addEvents(el);
}
