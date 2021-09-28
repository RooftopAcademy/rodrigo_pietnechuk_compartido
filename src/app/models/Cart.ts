import type ICartItem from '../interfaces/ICartItem';

export default class Cart {
  private _items: ICartItem[];

  public constructor() {
    this._items = [];
  }

  public get items(): ICartItem[] {
    return this._items;
  }

  public set items(value: ICartItem[]) {
    this._items = value;
  }

  public add(item: ICartItem): void {
    this.items.push(item);
  }

  public remove(id: string): void {
    this._items = this._items.filter((item: ICartItem): boolean => item.id != id);
  }

  public removeAll(): void {
    this._items = [];
  }

  public getTotalPrice(): number {
    return this.items.reduce((a: number, b: ICartItem): number => a + b.product.price, 0);
  }
}
