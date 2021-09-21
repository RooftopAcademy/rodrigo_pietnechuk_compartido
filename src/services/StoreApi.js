class StoreApi {
  static getCatalog() {
    return fetch("https://my-json-server.typicode.com/ghnoob/rooftop-mock-db/catalog");
  }

  static getBookById(id) {
    return fetch(`https://my-json-server.typicode.com/ghnoob/rooftop-mock-db/catalog/${id}`);
  }
}
