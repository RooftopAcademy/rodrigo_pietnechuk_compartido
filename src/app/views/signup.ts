import "../../public/resources/css/signup.css";
import getHTMLElement from "../helpers/getHTMLElement";

function addEvents(): void {
  const signupForm: HTMLFormElement = getHTMLElement("#signup-form") as HTMLFormElement;

  const password: HTMLInputElement = getHTMLElement(
    "input[name=password]",
    signupForm,
  ) as HTMLInputElement;

  const confirmPassword: HTMLInputElement = getHTMLElement(
    "input[name=confirmpassword]",
    signupForm,
  ) as HTMLInputElement;

  password.addEventListener("input", function (this: HTMLInputElement) {
    this.setCustomValidity(
      this.validity.patternMismatch
        ? "Debe tener entre 8 y 30 caracteres, minúsculas, mayúsculas y números" : "",
    );
  });

  confirmPassword.addEventListener("input", function (): void {
    const validityMessage = password.value == this.value ? ""
      : "Las contraseñas no son iguales";
    this.setCustomValidity(validityMessage);
  });
}

export default function signup(el: HTMLElement): void {
  el.innerHTML = `
  <form id="signup-form" class="d-flex flex-column">
    <input class="form-input" name="last-name" type="text" placeholder="Apellido" required>
    <input class="form-input" name="first-name" type="text" placeholder="Nombre" required>
    <input class="form-input" name="username" type="text" placeholder="Usuario" required>
    <input class="form-input" name="email" type="email" placeholder="Correo electrónico" required>
    <input
      class="form-input"
      name="password"
      type="password"
      placeholder="Contraseña"
      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,30}$"
      required
    >
    <input
      class="form-input"
      name="confirmpassword"
      type="password"
      placeholder="Confirmar contraseña"
      required
    >
    <button class="button" type="submit">Registrarse</button>
  </form>
  `;

  addEvents();
}
