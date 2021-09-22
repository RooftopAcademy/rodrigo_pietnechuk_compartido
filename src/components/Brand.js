class Brand extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="brand">
      <i class="fas fa-store-alt logo"></i>
      <h1>EMPRESA S.A.</h1>
      <p><em>Una empresa que vende libros</em></p>
    </section>
    `;
  }
}

customElements.define('brand-component', Brand);
