class BookFactory {
  static createBook(obj) {
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
