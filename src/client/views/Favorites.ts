import '../../../public/css/heart-button.css';
import '../../../public/css/favorites.css';
import View from '../abstract/View';
import getFavoriteItemInnerHTML from '../components/getFavoriteItemInnerHTML';
import FavoritesCollection from '../collections/FavoritesCollection';
import type Book from '../entities/Book';

export default class Favorites extends View {
  private favorites: FavoritesCollection;

  public constructor(el: HTMLElement) {
    super(el);
    this.favorites = new FavoritesCollection();
  }

  public async render(): Promise<void> {
    await this.favorites.fetch();

    const htmlList = this.favorites.getItems()
      .reduce((a: string, b: Book) => a + getFavoriteItemInnerHTML(b), '');

    this.el.innerHTML = `
      <div class="favorites">
        <h1>Favoritos</h1>
        <div class="d-flex flex-column small-text favorites-container">
          ${htmlList.length > 0 ? htmlList : '<p>No hay productos marcados como favoritos.</p>'}
        </div>
      </div>
    `;
    super.render();
  }

  public addEvents(): void {
    Array.from(this.el.querySelectorAll('.js-favorite-button')).forEach((button) => {
      button.addEventListener('click', (e: Event) => {
        const target: HTMLButtonElement = e.currentTarget as HTMLButtonElement;
        this.favorites.remove(target.dataset.id ?? '');
        target.parentElement?.remove();
      });
    });
  }
}
