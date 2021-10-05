import type CartItemInterface from '../interfaces/CartItemInterface';

export default class Cart {
  private _items: CartItemInterface[];

  public constructor() {
    this._items = [];
  }

  public get items(): CartItemInterface[] {
    return this._items;
  }

  public add(item: CartItemInterface): void {
    this.items.push(item);
  }

  public remove(id: string): void {
    this._items = this._items.filter((item: CartItemInterface): boolean => item.id != id);
  }

  public removeAll(): void {
    this._items = [];
  }

  public getTotalPrice(): number {
    return this.items.reduce((a: number, b: CartItemInterface): number => a + b.product.price, 0);
  }
}
