import type Book from '../models/Book';

export default class FavoritesCollection {
  private _favorites: Set<Book>;

  public constructor() {
    this._favorites = new Set<Book>();
  }

  public get favorites(): Set<Book> {
    return this._favorites;
  }

  public add(item: Book): void {
    this.favorites.add(item);
  }

  public remove(id: string): void {
    const toDelete: Book | undefined = Array
      .from(this.favorites)
      .find((item: Book): boolean => item.id == id);

    if (toDelete != undefined) {
      this.favorites.delete(toDelete);
    }
  }
}
