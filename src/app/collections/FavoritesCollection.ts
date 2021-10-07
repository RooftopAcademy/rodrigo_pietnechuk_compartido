import type Book from '../entities/Book';
import BookFactory from '../factories/BookFactory';
import BookInterface from '../interfaces/BookInterface';
import makeRequest from '../services/makeRequest';
import StoreApi from '../services/StoreApi';

export default class FavoritesCollection {
  private _favorites: Book[];

  public constructor() {
    this._favorites = [];
  }

  public get favorites(): Book[] {
    return this._favorites;
  }

  public add(item: Book): void {
    this.favorites.push(item);
    this.updateLocalStorage();
  }

  public remove(id: string): void {
    this._favorites = this.favorites.filter((f) => f.id != id);
    this.updateLocalStorage();
  }

  public async fetch(): Promise<void> {
    const ids: string[] = JSON.parse(window.localStorage.getItem('favorites') || '[]');

    const promises = await Promise.allSettled(
      ids.map((id) => makeRequest(StoreApi.getBookById(id))),
    );

    this._favorites = promises
      .filter((f) => f.status == 'fulfilled')
      .map((f) => BookFactory.create((<PromiseFulfilledResult<BookInterface>>f).value));

    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    window.localStorage.setItem('favorites', JSON.stringify(this.favorites.map((f) => f.id)));
  }
}
