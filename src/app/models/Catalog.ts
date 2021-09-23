import type Book from "./Book";

export default class Catalog {
  private _products: Book[];

  public constructor() {
    this._products = [];
  }

  public get products(): Book[] {
    return this._products;
  }

  public set products(value: Book[]) {
    this._products = value;
  }

  public add(item: Book): void {
    this.products.push(item);
  }

  public remove(id: string): void {
    this.products = this.products.filter((item: Book): boolean => item.id != id);
  }
}
