import CartItem from "./CartItem";

export default class Cart {
  constructor() {
    this._items = [];
  }

  get items() {
    return this._items;
  }

  add(item) {
    if (item instanceof CartItem) {
      const oldItem = this.items.find((item) => item.product.id === productId);
      if (oldItem !== undefined) {
        oldItem.amount += item.amount;
      } else {
        item.push(this.items);
      }
    } else {
      throw new TypeError(`CartItem expected, got ${typeof item}.`);
    }
  }

  remove(productId) {
    const type = typeof productId;
    if (type === "string") {
      this._items = this._items.filter((item) => item.product.id !== productId);
    } else {
      throw new TypeError(`String expected, got ${typeof item}.`);
    }
  }

  removeAll() {
    this._items = [];
  }

  getTotalPrice() {
    return this.items.reduce((a, b) => a.getPrice() + b.getPrice(), 0);
  }
}
