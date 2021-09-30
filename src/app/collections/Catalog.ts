import type Book from '../entities/Book';
import type IBook from '../interfaces/IBook';
import makeRequest from '../services/makeRequest';
import BookFactory from '../factories/BookFactory';
import StoreApi from '../services/StoreApi';

export default class Catalog {
  private _products: Book[];

  public constructor() {
    this._products = [];
  }

  public get products(): Book[] {
    return this._products;
  }

  public add(item: Book): void {
    this.products.push(item);
  }

  public remove(id: string): void {
    this._products = this.products.filter((item: Book): boolean => item.id != id);
  }

  public async fetchCatalog(): Promise<void> {
    const data: IBook[] = await makeRequest(StoreApi.getCatalog());
    this._products = data.map((item: IBook): Book => BookFactory.create(item));
  }
}
