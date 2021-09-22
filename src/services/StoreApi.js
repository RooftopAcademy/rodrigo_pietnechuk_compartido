class StoreApi {
  static _baseURL = "https://my-json-server.typicode.com/ghnoob/rooftop-mock-db";

  static getCatalog() {
    return fetch(`${this._baseURL}/catalog`);
  }

  static getBookById(id) {
    return fetch(`${this._baseURL}/catalog/${id}`);
  }
}
