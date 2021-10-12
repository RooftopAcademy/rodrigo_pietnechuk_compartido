import type Book from '../entities/Book';
import getListItemInnerHTML from '../components/getListItemInnerHTML';
import View from '../abstract/View';
import Catalog from '../collections/Catalog';

import '../../public/resources/css/product-list.css';

export default class ProductList extends View {
  public async render(): Promise<void> {
    const catalog = new Catalog();
    await catalog.fetchCatalog();

    this.el.innerHTML = `
      <div class="max-width d-flex flex-column space-between small-text products">
        ${catalog.products.reduce((a: string, b: Book): string => a + getListItemInnerHTML(b), '')}
      </div>
    `;
    super.render();
  }
}
