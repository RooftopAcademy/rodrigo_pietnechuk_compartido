export default class Header extends HTMLElement {
  private connectedCallback() {
    this.innerHTML = `
    <header>
      <nav class="hidden d-flex flex-column text-left navigation">
        <a class="link" href="index.html">
          <i class="fas fa-store-alt"></i> Inicio
        </a>
        <a class="link" href="product-list.html">
          <i class="fas fa-list-ul"></i> Lista de productos
        </a>
        <a class="link" href="#">
          <i class="fas fa-search"></i> Buscar
        </a>
        <a class="link" href="#">
          <i class="fas fa-shopping-cart"></i> Carrito
        </a>
        <a class="link" href="signup.html">
          <i class="fas fa-user"></i> Iniciar sesión
        </a>
      </nav>
      <button class="burger-menu">
        <i class="fas fa-bars"></i>
      </button>
    </header>
    `;
  }
}
