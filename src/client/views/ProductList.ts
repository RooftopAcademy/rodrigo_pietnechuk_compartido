import type Book from '../entities/Book';
import getListItemInnerHTML from '../components/getListItemInnerHTML';
import View from '../abstract/View';
import Catalog from '../collections/Catalog';

import '../../public/css/product-list.css';

export default class ProductList extends View {
  public async render(): Promise<void> {
    const catalog = new Catalog();
    await catalog.fetch();

    this.el.innerHTML = `
      <div class="w-100 d-flex flex-column space-between small-text products">
        ${catalog.getItems().reduce((a: string, b: Book) => a + getListItemInnerHTML(b), '')}
      </div>
    `;
    super.render();
  }
}
