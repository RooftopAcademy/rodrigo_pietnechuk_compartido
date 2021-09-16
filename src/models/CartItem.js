class CartItem {
  constructor() {
    this._product = new Book();
    this._amount = 1;
  }

  get product() {
    return this._product;
  }

  set product(value) {
    if (!(value instanceof Book)) {
      throw new TypeError(`Book expected, received ${typeof value}`);
    }

    this._product = value;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    const type = typeof value;
    if (type !== "number") {
      throw new TypeError(`Expected Number, got ${type}`);
    }

    if (value <= 0) {
      throw new RangeError("The value provided must be greater than 0.");
    }

    this._amount = value;
  }

  getPrice() {
    return this.product.price * this.amount;
  }
}
