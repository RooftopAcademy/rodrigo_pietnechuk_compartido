import { nanoid } from 'nanoid';
import type Book from './Book';

export default class CartItem {
  private readonly id: string;
  private readonly product: Book;

  public constructor(product: Book) {
    this.product = product;
    this.id = nanoid();
  }

  public getId(): string {
    return this.id;
  }

  public getProduct(): Book {
    return this.product;
  }
}
