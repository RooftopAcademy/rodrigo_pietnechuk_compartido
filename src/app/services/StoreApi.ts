export default class StoreApi {
  private static readonly baseURL = 'https://my-json-server.typicode.com/ghnoob/rooftop-mock-db';

  public static getCatalog(): Promise<Response> {
    return fetch(`${this.baseURL}/catalog`);
  }

  public static filterCatalog(filter: string): Promise<Response> {
    return fetch(`${this.baseURL}/catalog?name_like=${filter}&_limit=10`);
  }

  public static getBookById(id: string): Promise<Response> {
    return fetch(`${this.baseURL}/catalog/${id}`);
  }
}
