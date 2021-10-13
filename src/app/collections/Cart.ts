import CartItem from '../entities/CartItem';
import BookFactory from '../factories/BookFactory';
import type BookInterface from '../interfaces/BookInterface';
import makeRequest from '../services/makeRequest';
import StoreApi from '../services/StoreApi';

export default class Cart {
  private _items: CartItem[];

  public constructor() {
    this._items = [];
  }

  public get items(): CartItem[] {
    return this._items;
  }

  public add(item: CartItem): void {
    this.items.push(item);
    this.updateLocalStorage();
  }

  public remove(id: string): void {
    this._items = this._items.filter((item) => item.getId() != id);
    this.updateLocalStorage();
  }

  public removeAll(): void {
    this._items = [];
    this.updateLocalStorage();
  }

  public getTotalPrice(): number {
    return this.items.reduce((a: number, b: CartItem): number => a + b.getProduct().price, 0);
  }

  public async fetch(): Promise<void> {
    const ids: string[] = JSON.parse(window.localStorage.getItem('cart') || '[]');

    const promises = await Promise.allSettled(
      ids.map((id) => makeRequest(StoreApi.getBookById(id))),
    );

    this._items = promises
      .filter((f) => f.status == 'fulfilled')
      .map((f) => new CartItem(
        BookFactory.create((<PromiseFulfilledResult<BookInterface>>f).value),
      ));

    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    window.localStorage.setItem('cart', JSON.stringify(this.items.map((f) => f.getProduct().id)));
  }
}
