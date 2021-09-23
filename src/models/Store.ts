import UserBase from "./UserBase";
import Catalog from "./Catalog";
import StoreApi from "../services/StoreApi";
import type IBook from "../interfaces/IBook";
import BookFactory from "../factories/BookFactory";
import type Book from "./Book";

export default class Store {
  private _users: UserBase;
  private _catalog: Catalog;

  public constructor() {
    this._users = new UserBase();
    this._catalog = new Catalog();
  }

  public get users(): UserBase {
    return this._users;
  }

  public get catalog(): Catalog {
    return this._catalog;
  }

  public async fetchCatalog(): Promise<void> {
    const res: Response = await StoreApi.getCatalog();
    if (!res.ok) {
      throw new Error(String(res.status));
    }

    const data: IBook[] = await res.json();
    this.catalog.products = data.map((item: IBook): Book => BookFactory.create(item));
  }
}
