import type Book from "../models/Book";

export default interface ICartItem {
  id: string,
  product: Book,
}
