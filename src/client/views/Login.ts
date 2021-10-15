import '../../../public/css/login.css';
import View from '../abstract/View';
import getUserIdFromApi from '../helpers/getUserIdFromApi';
import login from '../helpers/login';
import logout from '../helpers/logout';
import type ApiUserInterface from '../interfaces/ApiUserInterface';

export default class Login extends View {
  public render(): void {
    this.el.innerHTML = `
    <form id="login-form" class="d-flex flex-column w-75 m-auto">
      <input class="form-input" name="username" type="text" placeholder="Usuario" required>
      <input class="form-input" name="email" type="email" placeholder="Correo electrónico" required>
      <button class="button" type="submit">Iniciar sesión</button>
    </form>
    <output id="output" class="text-red">
    `;
    super.render();
  }

  private static async authenticateUser(user: string, email: string, output: HTMLOutputElement) {
    try {
      output.value = '';
      const userFromApi: ApiUserInterface = await getUserIdFromApi(user, email);
      login(userFromApi);
      window.location.hash = '';
    } catch (error) {
      const err = error as Error;
      output.value = `Error: ${err.message}`;
    }
  }

  public addEvents(): void {
    const loginForm: HTMLFormElement = this.el.querySelector('#login-form') as HTMLFormElement;
    const output: HTMLOutputElement = this.el.querySelector('#output') as HTMLOutputElement;

    logout();

    loginForm.addEventListener('submit', function (this: HTMLFormElement, e: Event) {
      e.preventDefault();
      Login.authenticateUser(this.username.value, this.email.value, output);
    });
  }
}
