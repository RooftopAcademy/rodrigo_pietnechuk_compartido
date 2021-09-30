import type Book from '../entities/Book';

interface ICartItem {
  id: string;
  product: Book;
}

export default ICartItem;
