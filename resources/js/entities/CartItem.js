import Book from "./Book";

export default class CartItem {
  constructor() {
    this._product = Book();
    this._amount = 1;
  }

  get product() {
    return this._product;
  }

  set product(value) {
    if (value instanceof Book) {
      this._product = value;
    } else {
      throw new TypeError(`Book expected, received ${typeof value}`);
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    const type = typeof value;
    if (type === "number") {
      if (value > 0) {
        this._amount = value;
      } else {
        throw new RangeError("The value provided must be greater than 0.")
      }
    } else {
      throw new TypeError(`Expected Number, got ${type}`);
    }
  }

  getPrice() {
    return this.product.price * this.amount;
  }
}
