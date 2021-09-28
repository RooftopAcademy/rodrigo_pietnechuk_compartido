import '../../public/resources/css/login.css';
import getHTMLElement from '../helpers/getHTMLElement';

function addEvents(el: HTMLElement): void {
  const loginForm: HTMLFormElement = getHTMLElement('#login-form', el) as HTMLFormElement;
  loginForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
  });
}

export default function renderLogin(el: HTMLElement): void {
  el.innerHTML = `
  <form id="login-form" class="d-flex flex-column">
    <input class="form-input" name="username" type="text" placeholder="Usuario" required>
    <input class="form-input" name="email" type="email" placeholder="Correo electrónico" required>
    <button class="button" type="submit">Iniciar sesión</button>
  </form>
  `;

  addEvents(el);
}
