export default class UserApi {
  private static readonly fallback: string = 'https://jsonplaceholder.typicode.com';
  private static readonly baseURL: string = process.env.API_URL || this.fallback;

  public static getById(id: string): Promise<Response> {
    return fetch(`${this.baseURL}/users/${id}`);
  }

  public static getByUsernameAndEmail(username: string, email: string): Promise<Response> {
    return fetch(`/users/${this.baseURL}?username=${username}&email=${email}`);
  }
}
