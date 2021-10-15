import logo from '../../../public/logo.png';

export default class Brand extends HTMLElement {
  private connectedCallback() {
    this.innerHTML = `
    <section class="text-center">
      <img src="${logo}" class="logo" alt="company logo">
      <h1>EMPRESA S.A.</h1>
      <p><em>Una empresa que vende libros</em></p>
    </section>
    `;
  }
}
