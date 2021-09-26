import getHTMLElement from "../helpers/getHTMLElement";

export default function signupValidators(): void {
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
