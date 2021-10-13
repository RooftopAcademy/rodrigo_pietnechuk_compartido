import type Book from '../entities/Book';
import BookFactory from '../factories/BookFactory';
import BookInterface from '../interfaces/BookInterface';
import type CollectionInterface from '../interfaces/CollectionInterface';
import makeRequest from '../services/makeRequest';
import StoreApi from '../services/StoreApi';

export default class FavoritesCollection implements CollectionInterface<Book> {
  private items: Book[];

  public constructor() {
    this.items = [];
  }

  public getItems(): Book[] {
    return this.items;
  }

  public add(item: Book): void {
    this.items.push(item);
    this.updateLocalStorage();
  }

  public remove(id: string): void {
    this.items = this.items.filter((f) => f.getId() != id);
    this.updateLocalStorage();
  }

  public async fetch(): Promise<void> {
    const ids: string[] = JSON.parse(window.localStorage.getItem('favorites') || '[]');

    const promises = await Promise.allSettled(
      ids.map((id) => makeRequest(StoreApi.getBookById(id))),
    );

    this.items = promises
      .filter((f) => f.status == 'fulfilled')
      .map((f) => BookFactory.create((<PromiseFulfilledResult<BookInterface>>f).value));

    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    window.localStorage.setItem('favorites', JSON.stringify(this.items.map((f) => f.getId())));
  }
}
