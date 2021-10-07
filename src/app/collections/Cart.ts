import type Book from '../entities/Book';

export default class Cart {
  private _items: Book[];

  public constructor() {
    this._items = [];
  }

  public get items(): Book[] {
    return this._items;
  }

  public add(item: Book): void {
    this.items.push(item);
  }

  public remove(position: number): void {
    this._items.splice(position, 1);
  }

  public removeAll(): void {
    this._items = [];
  }

  public getTotalPrice(): number {
    return this.items.reduce((a: number, b: Book): number => a + b.price, 0);
  }
}
