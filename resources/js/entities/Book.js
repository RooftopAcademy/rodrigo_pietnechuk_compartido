export default class Book {
  constructor() {
    this._id = String();
    this._name = String();
    this._price = Number();
    this._description = String();
    this._imageURL = String();
    this._author = String();
    this._isbn = String();
    this._pages = String();
    this._publicationYear = String();
  }

  get id() {
    return this._id;
  }

  set id(value) {
    const type = typeof value;
    if (type === "string") {
      this._id = value
    } else {
      throw new TypeError(`String expected, received ${type}.`);
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    const type = typeof value;
    if (type === "string") {
      this._name = value
    } else {
      throw new TypeError(`String expected, received ${type}.`);
    }
  }

  get price() {
    return this._price;
  }

  set price(value) {
    const type = typeof value;
    if (type === "number") {
      if (value > 0) {
        this._price = value
      } else {
        throw new RangeError("Value must be greater than 0.");
      }
    } else {
      throw new TypeError(`Number expected, received ${type}.`);
    }
  }

  get description() {
    return this._description;
  }

  set description(value) {
    const type = typeof value;
    if (type === "string") {
      this._description = value
    } else {
      throw new TypeError(`String expected, received ${type}.`);
    }
  }

  get imageURL() {
    return this._imageURL;
  }

  set imageURL(value) {
    const type = typeof value;
    if (type === "string") {
      this._imageURL = value
    } else {
      throw new TypeError(`String expected, received ${type}.`);
    }
  }

  get author() {
    return this._author;
  }

  set author(value) {
    const type = typeof value;
    if (type === "string") {
      this._author = value
    } else {
      throw new TypeError(`String expected, received ${type}.`);
    }
  }

  get isbn() {
    return this._isbn;
  }

  set isbn(value) {
    const type = typeof value;
    if (type === "string") {
      this._isbn = value
    } else {
      throw new TypeError(`String expected, received ${type}.`);
    }
  }

  get pages() {
    return this._pages;
  }

  set pages(value) {
    const type = typeof value;
    if (type === "string") {
      this._pages = value
    } else {
      throw new TypeError(`String expected, received ${type}.`);
    }
  }

  get publicationYear() {
    return this._publicationYear;
  }

  set publicationYear(value) {
    const type = typeof value;
    if (type === "string") {
      this._publicationYear = value
    } else {
      throw new TypeError(`String expected, received ${type}.`);
    }
  }
}
