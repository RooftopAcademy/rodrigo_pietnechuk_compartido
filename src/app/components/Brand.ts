export default class Brand extends HTMLElement {
  private connectedCallback() {
    this.innerHTML = `
    <section class="text-center">
      <i class="fas fa-store-alt logo"></i>
      <h1>EMPRESA S.A.</h1>
      <p><em>Una empresa que vende libros</em></p>
    </section>
    `;
  }
}
