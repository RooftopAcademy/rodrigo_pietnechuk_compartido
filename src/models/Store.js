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

  async fetchCatalog() {
    const res = await StoreApi.getCatalog();
    if (!res.ok) {
      throw new Error(res.status);
    }

    const data = await res.json();
    this.catalog.products = data.map((item) => BookFactory.create(item));
  }
}
