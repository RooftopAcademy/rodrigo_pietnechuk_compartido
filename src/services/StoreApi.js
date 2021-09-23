class StoreApi {
  static _baseURL = "https://my-json-server.typicode.com/ghnoob/rooftop-mock-db";

  static getCatalog() {
    return fetch(`${this._baseURL}/catalog`);
  }

  static filterCatalog(filter) {
    return fetch(`${this._baseURL}/catalog?name_like=${filter}&_limit=10`);
  }

  static getBookById(id) {
    return fetch(`${this._baseURL}/catalog/${id}`);
  }
}
