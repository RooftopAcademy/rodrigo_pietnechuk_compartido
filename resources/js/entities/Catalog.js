import Book from "./Book"

export default class Catalog {
  constructor() {
    this._products = [];
  }

  get products() {
    return this._products;
  }

  add(item) {
    if (!(item instanceof Book)) {
      throw new TypeError(`Book expected, received ${typeof item}.`);
    }

    this.products.push(item);
  }

  remove(id) {
    this._products = this._products.filter((item) => item.id !== id);
  }
}
