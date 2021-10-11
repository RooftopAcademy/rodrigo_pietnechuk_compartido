export default class Header extends HTMLElement {
  private connectedCallback() {
    this.innerHTML = `
    <header>
      <nav class="hidden d-flex flex-column text-left navigation">
        <a class="link" href="#">
          <i class="fas fa-store-alt"></i> Inicio
        </a>
        <a class="link" href="#product-list">
          <i class="fas fa-list-ul"></i> Lista de productos
        </a>
        <div class="link">
          <i class="fas fa-search"></i>
          <input id="search-bar" type="text" placeholder="Buscar">
          <ul class="max-width suggestions" id="suggestions" class="suggestions"></ul>
        </div>
        <a class="link" href="#favorites">
          <i class="fa fa-heart"></i> Favoritos
        </a>
        <a class="link" href="#cart">
          <i class="fas fa-shopping-cart"></i> Carrito
        </a>
        <a class="link" href="#login">
          <i class="fas fa-user"></i> <span id="username"></span>
        </a>
      </nav>
      <button class="burger-menu">
        <i class="fas fa-bars"></i>
      </button>
    </header>
    `;
  }
}
