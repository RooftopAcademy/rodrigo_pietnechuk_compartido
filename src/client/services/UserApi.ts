export default class UserApi {
  private static readonly baseURL: string = 'https://jsonplaceholder.typicode.com/users';

  public static getById(id: string): Promise<Response> {
    return fetch(`${this.baseURL}/${id}`);
  }

  public static getByUsernameAndEmail(username: string, email: string): Promise<Response> {
    return fetch(`${this.baseURL}?username=${username}&email=${email}`);
  }
}
