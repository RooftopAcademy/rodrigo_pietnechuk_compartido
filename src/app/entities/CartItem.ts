import Book from './Book';

export default class CartItem {
  public readonly product: Book;
  private _amount!: number;

  public constructor(product: Book, amount = 1) {
    this.product = product;
    this.amount = amount;
  }

  public get amount(): number {
    return this._amount;
  }

  public set amount(value: number) {
    this._amount = value >= 0 ? value : 0;
  }
}
