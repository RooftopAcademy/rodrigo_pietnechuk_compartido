import UserBase from '../collections/UserBase';
import Catalog from '../collections/Catalog';

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
}
