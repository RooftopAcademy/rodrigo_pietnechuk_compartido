import Cart from '../collections/Cart';
import FavoritesCollection from '../collections/FavoritesCollection';

export default class User {
  private id: string;
  private name: string;
  private username: string;
  private email: string;
  private cart: Cart;
  private favorites: FavoritesCollection;

  public constructor() {
    this.id = '';
    this.name = '';
    this.username = '';
    this.email = '';
    this.cart = new Cart();
    this.favorites = new FavoritesCollection();
  }

  public getId(): string {
    return this.id;
  }

  public setId(value: string): void {
    this.id = value;
  }

  public getName(): string {
    return this.name;
  }

  public setName(value: string): void {
    this.name = value;
  }

  public getUsername(): string {
    return this.username;
  }

  public setUsername(value: string): void {
    this.username = value;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(value: string): void {
    this.email = value;
  }

  public getCart(): Cart {
    return this.cart;
  }

  public getFavorites(): FavoritesCollection {
    return this.favorites;
  }
}
