class Store {
  constructor() {
    this._users = new UserBase();
    this._catalog = new Catalog();
  }

  get users() {
    return this._users;
  }

  get catalog() {
    return this._catalog;
  }
}
