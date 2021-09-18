class Store {
  constructor() {
    this._users = new UserBase();
    this._catalog = new Catalog();
    this.fetchCatalog();
  }

  get users() {
    return this._users;
  }

  get catalog() {
    return this._catalog;
  }

  fetchCatalog() {
    this.catalog.products = MockAPI.getCatalog().map((item) => BookFactory.createBook(item));
  }
}
