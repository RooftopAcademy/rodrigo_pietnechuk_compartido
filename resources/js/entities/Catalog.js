import Book from "./Book"

export default class Catalog {
  constructor() {
    this._products = [];
  }

  get products() {
    return this._products;
  }

  add(item) {
    if (item instanceof Book) {
      this.products.push(item);
    } else {
      throw new TypeError(`Book expected, received ${typeof item}.`);
    }
  }

  remove(id) {
    this._products = this._products.filter((item) => item.id !== id);
  }
}
