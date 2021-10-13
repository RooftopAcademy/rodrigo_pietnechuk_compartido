import CartItem from '../entities/CartItem';
import BookFactory from '../factories/BookFactory';
import type BookInterface from '../interfaces/BookInterface';
import type CollectionInterface from '../interfaces/CollectionInterface';
import makeRequest from '../services/makeRequest';
import StoreApi from '../services/StoreApi';

export default class Cart implements CollectionInterface<CartItem> {
  private items: CartItem[];

  public constructor() {
    this.items = [];
  }

  public getItems(): CartItem[] {
    return this.items;
  }

  public add(item: CartItem): void {
    this.items.push(item);
    this.updateLocalStorage();
  }

  public remove(id: string): void {
    this.items = this.items.filter((item) => item.getId() != id);
    this.updateLocalStorage();
  }

  public removeAll(): void {
    this.items = [];
    this.updateLocalStorage();
  }

  public getTotalPrice(): number {
    return this.items.reduce((a: number, b: CartItem): number => a + b.getProduct().getPrice(), 0);
  }

  public getLength(): number {
    return this.items.length;
  }

  public countByProductId(id: string): number {
    return this.items.filter((item) => item.getProduct().getId() == id).length;
  }

  public removeFirstWithProductId(id: string): void {
    return this.remove(this.items.find((item) => item.getProduct().getId() == id)?.getId() ?? '');
  }

  public async fetch(): Promise<void> {
    const ids: string[] = JSON.parse(window.localStorage.getItem('cart') || '[]');

    const promises = await Promise.allSettled(
      ids.map((id) => makeRequest(StoreApi.getBookById(id))),
    );

    this.items = promises
      .filter((f) => f.status == 'fulfilled')
      .map((f) => new CartItem(
        BookFactory.create((<PromiseFulfilledResult<BookInterface>>f).value),
      ));

    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    window.localStorage.setItem(
      'cart',
      JSON.stringify(this.items.map((f) => f.getProduct().getId())),
    );
  }
}
