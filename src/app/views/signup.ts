import "../../public/resources/css/signup.css";

export default function signup(): string {
  return `
  <form id="signup-form" class="d-flex flex-column">
    <input class="form-input" name="last-name" type="text" placeholder="Apellido" required>
    <input class="form-input" name="first-name" type="text" placeholder="Nombre" required>
    <input class="form-input" name="username" type="text" placeholder="Usuario" required>
    <input class="form-input" name="email" type="email" placeholder="Correo electrónico" required>
    <input class="form-input" name="password" type="password" placeholder="Contraseña" required>
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
}
