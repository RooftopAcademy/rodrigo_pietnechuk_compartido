import BookInterface from '../interfaces/BookInterface';
import Book from '../entities/Book';

export default class BookFactory {
  public static create(obj: BookInterface): Book {
    const book = new Book();
    book.setId(obj.id);
    book.setName(obj.name);
    book.setPrice(obj.price);
    book.setDescription(obj.description);
    book.setImageURL(obj.imageURL);
    book.setAuthor(obj.author);
    book.setIsbn(obj.isbn);
    book.setPages(obj.pages);
    book.setPublicationYear(obj.publicationYear);

    return book;
  }
}
