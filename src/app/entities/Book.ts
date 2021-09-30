import type BookInterface from '../interfaces/BookInterface';

export default class Book implements BookInterface {
  private _id: string;
  private _name: string;
  private _price: number;
  private _description: string;
  private _imageURL: string;
  private _author: string;
  private _isbn: string;
  private _pages: string;
  private _publicationYear: string;

  public constructor() {
    this._id = '';
    this._name = '';
    this._price = 0;
    this._description = '';
    this._imageURL = '';
    this._author = '';
    this._isbn = '';
    this._pages = '';
    this._publicationYear = '';
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

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    this._price = value >= 0 ? value : 0;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get imageURL(): string {
    return this._imageURL;
  }

  public set imageURL(value: string) {
    this._imageURL = value;
  }

  public get author(): string {
    return this._author;
  }

  public set author(value: string) {
    this._author = value;
  }

  public get isbn(): string {
    return this._isbn;
  }

  public set isbn(value: string) {
    this._isbn = value;
  }

  public get pages(): string {
    return this._pages;
  }

  public set pages(value: string) {
    this._pages = value;
  }

  public get publicationYear(): string {
    return this._publicationYear;
  }

  public set publicationYear(value: string) {
    this._publicationYear = value;
  }
}
