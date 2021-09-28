import Cart from './Cart';
import FavoritesCollection from './FavoritesCollection';

export default class User {
  private _id: string;
  private _name: string;
  private _username: string;
  private _email: string;
  private _cart: Cart;
  private _favorites: FavoritesCollection;

  public constructor() {
    this._id = '';
    this._name = '';
    this._username = '';
    this._email = '';
    this._cart = new Cart();
    this._favorites = new FavoritesCollection();
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get cart(): Cart {
    return this._cart;
  }

  public set cart(value: Cart) {
    this._cart = value;
  }

  public get favorites(): FavoritesCollection {
    return this._favorites;
  }

  public set favorites(value: FavoritesCollection) {
    this._favorites = value;
  }
}
