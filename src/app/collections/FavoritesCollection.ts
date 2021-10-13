import type Book from '../entities/Book';
import BookFactory from '../factories/BookFactory';
import BookInterface from '../interfaces/BookInterface';
import type CollectionInterface from '../interfaces/CollectionInterface';
import makeRequest from '../services/makeRequest';
import StoreApi from '../services/StoreApi';

export default class FavoritesCollection implements CollectionInterface<Book> {
  private _items: Book[];

  public constructor() {
    this._items = [];
  }

  public getItems(): Book[] {
    return this._items;
  }

  public add(item: Book): void {
    this._items.push(item);
    this.updateLocalStorage();
  }

  public remove(id: string): void {
    this._items = this._items.filter((f) => f.id != id);
    this.updateLocalStorage();
  }

  public async fetch(): Promise<void> {
    const ids: string[] = JSON.parse(window.localStorage.getItem('favorites') || '[]');

    const promises = await Promise.allSettled(
      ids.map((id) => makeRequest(StoreApi.getBookById(id))),
    );

    this._items = promises
      .filter((f) => f.status == 'fulfilled')
      .map((f) => BookFactory.create((<PromiseFulfilledResult<BookInterface>>f).value));

    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    window.localStorage.setItem('favorites', JSON.stringify(this._items.map((f) => f.id)));
  }
}
