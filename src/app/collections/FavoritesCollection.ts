import type Book from '../entities/Book';

export default class FavoritesCollection {
  private _favorites: Book[];

  public constructor() {
    this._favorites = [];
  }

  public get favorites(): Book[] {
    return this._favorites;
  }

  public add(item: Book): void {
    this.favorites.push(item);
  }

  public remove(id: string): void {
    this._favorites = this.favorites.filter((f) => f.id != id);
  }

  }
}
