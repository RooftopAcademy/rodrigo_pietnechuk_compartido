export default class Book {
  private id: string;
  private name: string;
  private price: number;
  private description: string;
  private imageURL: string;
  private author: string;
  private isbn: string;
  private pages: string;
  private publicationYear: string;

  public constructor() {
    this.id = '';
    this.name = '';
    this.price = 0;
    this.description = '';
    this.imageURL = '';
    this.author = '';
    this.isbn = '';
    this.pages = '';
    this.publicationYear = '';
  }

  public getId(): string {
    return this.id;
  }

  public setId(value: string): void {
    this.id = value;
  }

  public getName(): string {
    return this.name;
  }

  public setName(value: string): void {
    this.name = value;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(value: number): void {
    this.price = value >= 0 ? value : 0;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(value: string): void {
    this.description = value;
  }

  public getImageURL(): string {
    return this.imageURL;
  }

  public setImageURL(value: string): void {
    this.imageURL = value;
  }

  public getAuthor(): string {
    return this.author;
  }

  public setAuthor(value: string): void {
    this.author = value;
  }

  public getIsbn(): string {
    return this.isbn;
  }

  public setIsbn(value: string): void {
    this.isbn = value;
  }

  public getPages(): string {
    return this.pages;
  }

  public setPages(value: string): void {
    this.pages = value;
  }

  public getPublicationYear(): string {
    return this.publicationYear;
  }

  public setPublicationYear(value: string): void {
    this.publicationYear = value;
  }
}
