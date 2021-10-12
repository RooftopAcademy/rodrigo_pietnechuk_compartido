import type Book from '../entities/Book';
import type BookInterface from '../interfaces/BookInterface';
import makeRequest from '../services/makeRequest';
import BookFactory from '../factories/BookFactory';
import StoreApi from '../services/StoreApi';
import type CollectionInterface from '../interfaces/CollectionInterface';

export default class Catalog implements CollectionInterface<Book> {
  private _items: Book[];

  public constructor() {
    this._items = [];
  }

  public getItems(): Book[] {
    return this._items;
  }

  public add(item: Book): void {
    this._items.push(item);
  }

  public remove(id: string): void {
    this._items = this._items.filter((item: Book): boolean => item.id != id);
  }

  public async fetch(): Promise<void> {
    const data: BookInterface[] = await makeRequest(StoreApi.getCatalog());
    this._items = data.map((item: BookInterface): Book => BookFactory.create(item));
  }
}
