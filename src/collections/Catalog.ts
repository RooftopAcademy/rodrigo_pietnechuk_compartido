import type Book from '../entities/Book';
import type BookInterface from '../interfaces/BookInterface';
import makeRequest from '../services/makeRequest';
import BookFactory from '../factories/BookFactory';
import StoreApi from '../services/StoreApi';
import type CollectionInterface from '../interfaces/CollectionInterface';

export default class Catalog implements CollectionInterface<Book> {
  private items: Book[];

  public constructor() {
    this.items = [];
  }

  public getItems(): Book[] {
    return this.items;
  }

  public getRandomItem(): Book {
    return this.items[Math.floor(Math.random() * this.items.length)];
  }

  public add(item: Book): void {
    this.items.push(item);
  }

  public remove(id: string): void {
    this.items = this.items.filter((item: Book): boolean => item.getId() != id);
  }

  public async fetch(): Promise<void> {
    const data: BookInterface[] = await makeRequest(StoreApi.getCatalog());
    this.items = data.map((item: BookInterface): Book => BookFactory.create(item));
  }
}
