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

  public remove(id: string): void {
    this._items = this._items.filter((item: Book): boolean => item.id != id);
  }

  public removeAll(): void {
    this._items = [];
  }

  public getTotalPrice(): number {
    return this.items.reduce((a: number, b: Book): number => a + b.price, 0);
  }

  public async fetch(): Promise<void> {
    
  }
}
