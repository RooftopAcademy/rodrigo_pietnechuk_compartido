class Catalog {
  constructor() {
    this._products = [];
  }

  get products() {
    return this._products;
  }

  set products(value) {
    if (!(value instanceof Array)) {
      throw new TypeError(`Array expected, got ${typeof value}.`);
    }

    this._products = value;
  };

  getBookById(id) {
    const type = typeof id;
    if (type !== "string") {
      throw new TypeError(`String expected, got ${type}.`);
    }

    return this.products.find((item) => item.id === id);
  }

  add(item) {
    if (!(item instanceof Book)) {
      throw new TypeError(`Book expected, got ${typeof item}.`);
    }

    this.products.push(item);
  }

  remove(id) {
    this._products = this._products.filter((item) => item.id !== id);
  }
}
