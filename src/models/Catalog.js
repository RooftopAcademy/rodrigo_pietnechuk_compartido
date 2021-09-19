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
