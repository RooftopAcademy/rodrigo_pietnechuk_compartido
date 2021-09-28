import UserBase from "./UserBase";
import Catalog from "./Catalog";
import StoreApi from "../services/StoreApi";
import type IBook from "../interfaces/IBook";
import BookFactory from "../factories/BookFactory";
import type Book from "./Book";
import makeRequest from "../services/makeRequest";

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
    const data: IBook[] = await makeRequest(StoreApi.getCatalog());
    this.catalog.products = data.map((item: IBook): Book => BookFactory.create(item));
  }
}
