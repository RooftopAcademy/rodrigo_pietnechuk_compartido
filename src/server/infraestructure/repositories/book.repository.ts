import type Book from '../../domain/entities/book.entity';
import bookData from '../data/catalog.json';

class BookRepository {
  private books: Book[];

  public constructor() {
    this.books = bookData;
  }

  public async findOneById(id: string): Promise<Book | null> {
    const book: Book | undefined = this.books.find((b) => b.id == id);

    return book ?? null;
  }

  public async findAll(): Promise<Book[]> {
    return this.books;
  }

  public async findRandom(): Promise<Book | null> {
    const book: Book | undefined = this.books[Math.floor(Math.random() * this.books.length)];

    return book ?? null;
  }
}

export default new BookRepository();
