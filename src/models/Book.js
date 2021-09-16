class Book {
  constructor() {
    this._id = String();
    this._name = String();
    this._price = 0.01;
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
    if (type !== "string") {
      throw new TypeError(`String expected, received ${type}.`);
    }

    this._id = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    const type = typeof value;
    if (type !== "string") {
      throw new TypeError(`String expected, received ${type}.`);
    }

    this._name = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    const type = typeof value;
    if (type !== "number") {
      throw new TypeError(`Number expected, received ${type}.`);
    }

    if (value <= 0) {
      throw new RangeError("Value must be greater than 0.");
    }

    this._price = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    const type = typeof value;
    if (type !== "string") {
      throw new TypeError(`String expected, received ${type}.`);
    }

    this._description = value;
  }

  get imageURL() {
    return this._imageURL;
  }

  set imageURL(value) {
    const type = typeof value;
    if (type !== "string") {
      throw new TypeError(`String expected, received ${type}.`);
    }

    this._imageURL = value
  }

  get author() {
    return this._author;
  }

  set author(value) {
    const type = typeof value;
    if (type !== "string") {
      throw new TypeError(`String expected, received ${type}.`);
    }

    this._author = value
  }

  get isbn() {
    return this._isbn;
  }

  set isbn(value) {
    const type = typeof value;
    if (type !== "string") {
      throw new TypeError(`String expected, received ${type}.`);
    }

    this._isbn = value;
  }

  get pages() {
    return this._pages;
  }

  set pages(value) {
    const type = typeof value;
    if (type !== "string") {
      throw new TypeError(`String expected, received ${type}.`);
    }

    this._pages = value;
  }

  get publicationYear() {
    return this._publicationYear;
  }

  set publicationYear(value) {
    const type = typeof value;
    if (type !== "string") {
      throw new TypeError(`String expected, received ${type}.`);
    }

    this._publicationYear = value;
  }
}
