import CartItem from "./CartItem";

export default class Cart {
  constructor() {
    this._items = [];
  }

  get items() {
    return this._items;
  }

  _findByProductId(id) {
    return this.items.find((ci) => ci.product.id === id);
  }

  add(item) {
    if (!(item instanceof CartItem)) {
      throw new TypeError(`CartItem expected, got ${typeof item}.`);
    }

    const oldItem = this._findByProductId(item.product.id);
    if (oldItem !== undefined) {
      oldItem.amount += item.amount;
    } else {
      item.push(this.items);
    }
  }

  remove(productId) {
    const type = typeof productId;
    if (type !== "string") {
      throw new TypeError(`String expected, got ${typeof item}.`);
    }

    this._items = this._items.filter((item) => item.product.id !== productId);
  }

  removeAll() {
    this._items = [];
  }

  getTotalPrice() {
    return this.items.reduce((a, b) => a.getPrice() + b.getPrice(), 0);
  }
}
