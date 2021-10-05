import '../../public/resources/css/heart-button.css';
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
    await this.favorites.fetchFavorites();
    this.favorites.updateLocalStorage();

    const htmlList = this.favorites.favorites
      .reduce((a: string, b: Book) => a + getFavoriteItemInnerHTML(b), '');

    this.el.innerHTML = `
      <div class="favorites">
        <h1>Favoritos</h1>
        <div class="max-width d-flex flex-column space-between small-text products">
          ${htmlList.length > 0 ? htmlList : '<p>No hay productos marcados como favoritos.</p>'}
        </div>
      </div>
    `;
  }

  public addEvents(): void {
    Array.from(this.el.querySelectorAll('.js-favorite-button')).forEach((button) => {
      button.addEventListener('click', (e: Event) => {
        const target: HTMLButtonElement = e.currentTarget as HTMLButtonElement;
        this.favorites.remove(target.dataset.id ?? '');
        this.favorites.updateLocalStorage();
        target.parentElement?.remove();
      });
    });
  }
}
