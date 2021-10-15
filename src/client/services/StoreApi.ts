export default class StoreApi {
  private static readonly fallback: string = 'https://my-json-server.typicode.com/ghnoob/rooftop-mock-db';
  private static readonly baseURL: string = process.env.API_URL || this.fallback;

  public static getCatalog(): Promise<Response> {
    return fetch(`${this.baseURL}/catalog`);
  }

  // TODO: add filetering to api
  public static filterCatalog(filter: string): Promise<Response> {
    return fetch(`${this.fallback}/catalog?name_like=${filter}&_limit=10`);
  }

  public static getBookById(id: string): Promise<Response> {
    return fetch(`${this.baseURL}/catalog/${id}`);
  }

  public static getRandomBook(): Promise<Response> {
    return fetch(`${this.baseURL}/catalog/random`);
  }
}
