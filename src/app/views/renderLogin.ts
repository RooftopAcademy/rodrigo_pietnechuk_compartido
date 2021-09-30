import '../../public/resources/css/login.css';
import getUserIdFromApi from '../helpers/getUserIdFromApi';
import login from '../helpers/login';
import logout from '../helpers/logout';
import type ApiUserInterface from '../interfaces/ApiUserInterface';

async function authenticateUser(username: string, email: string, output: HTMLOutputElement) {
  try {
    output.value = '';
    const user: ApiUserInterface = await getUserIdFromApi(username, email);
    login(user);
    window.location.hash = '';
  } catch (error) {
    const err = error as Error;
    output.value = `Error: ${err.message}`;
  }
}

function addEvents(el: HTMLElement): void {
  const loginForm: HTMLFormElement = el.querySelector('#login-form') as HTMLFormElement;
  const output: HTMLOutputElement = el.querySelector('#output') as HTMLOutputElement;

  logout();

  loginForm.addEventListener('submit', function (this: HTMLFormElement, e: Event) {
    e.preventDefault();
    authenticateUser(this.username.value, this.email.value, output);
  });
}

export default function renderLogin(el: HTMLElement): void {
  el.innerHTML = `
  <form id="login-form" class="d-flex flex-column">
    <input class="form-input" name="username" type="text" placeholder="Usuario" required>
    <input class="form-input" name="email" type="email" placeholder="Correo electrónico" required>
    <button class="button" type="submit">Iniciar sesión</button>
  </form>
  <output id="output" class="text-red">
  `;

  addEvents(el);
}
