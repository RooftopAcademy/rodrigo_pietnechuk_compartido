import IBook from '../interfaces/IBook';
import Book from '../models/Book';

export default class BookFactory {
  public static create(obj: IBook): Book {
    const book = new Book();
    book.id = obj.id;
    book.name = obj.name;
    book.price = obj.price;
    book.description = obj.description;
    book.imageURL = obj.imageURL;
    book.author = obj.author;
    book.isbn = obj.isbn;
    book.pages = obj.pages;
    book.publicationYear = obj.publicationYear;

    return book;
  }
}
