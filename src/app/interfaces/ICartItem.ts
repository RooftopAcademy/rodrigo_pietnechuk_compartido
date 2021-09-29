import type Book from '../models/Book';

interface ICartItem {
  id: string;
  product: Book;
}

export default ICartItem;
