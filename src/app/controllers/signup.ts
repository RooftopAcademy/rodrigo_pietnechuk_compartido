import getHTMLElement from "../helpers/getHTMLElement";

export default function loadSignupForm(): void {
  const signupForm: HTMLFormElement = getHTMLElement("#signup-form") as HTMLFormElement;

  signupForm.addEventListener("submit", (e: Event) => {
    e.preventDefault();
  });

  const password: HTMLInputElement = getHTMLElement(
    "input[name=password]",
    signupForm,
  ) as HTMLInputElement;

  const confirmPassword: HTMLInputElement = getHTMLElement(
    "input[name=password]",
    signupForm,
  ) as HTMLInputElement;

  password.addEventListener("input", function (): void {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/;
    const validityMessage = regex.test(this.value) ? ""
      : "La contraseña debe contener entre 8 y 30 caracteres, y por lo menos una minúscula"
      + " una mayúscula y un número";

    this.setCustomValidity(validityMessage);
  });

  confirmPassword.addEventListener("input", function (): void {
    const validityMessage = signupForm.password.value == this.value ? ""
      : "Las contraseñas no son iguales";
    this.setCustomValidity(validityMessage);
  });
}
