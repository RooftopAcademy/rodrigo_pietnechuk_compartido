export default class Footer extends HTMLElement {
  private connectedCallback() {
    this.innerHTML = `
    <footer class="footer max-width d-flex flex-column text-left small-text">
      <p>
        Copyright &copy;
        <time datetime="2021-1-1">2021</time>
        Empresa S.A. Todos los derechos reservados.
      </p>
      <address>
        Calle 123, Ciudad, País.<br>
        <a class="link" href="tel:1234567890">
          <i class="fas fa-phone"></i> 1234567890
        </a><br>
        <a class="link" href="mailto:contacto@empresa-sa.com">
          <i class="far fa-envelope"></i> contacto@empresa-sa.com
        </a><br>
        <div class="social-media">
          <a class="link" href="https://instagram.com" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a class="link" href="https://facebook.com" target="_blank">
            <i class="fab fa-facebook"></i>
          </a>
          <a class="link" href="https://twitter.com" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </address>
    </footer>
    `;
  }
}
