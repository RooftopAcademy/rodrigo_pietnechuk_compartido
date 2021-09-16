import Book from "./Book"

export default class FavoritesCollection {
  constructor() {
    this._favorites = [];
  }

  get favorites() {
    return this._favorites;
  }

  add(item) {
    if (!(item instanceof Book)) {
      throw new TypeError(`Book expected, got ${typeof item}.`);
    }

    const find = this.favorites.find((fav) => fav.id === item.id);
    if (find === undefined) {
      this._favorites.push(item);
    }
  }

  remove(id) {
    const type = typeof id;
    if (type != "string") {
      throw new TypeError(`String expected, got ${type}.`);
    }

    this._favorites = this._favorites.filter((item) => item.id !== id);
  }
}
