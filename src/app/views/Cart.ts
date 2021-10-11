import '../../public/resources/css/cart.css';
import '../../public/resources/css/heart-button.css';
import View from '../abstract/View';
import CartCollection from '../collections/Cart';
import CartItem from '../entities/CartItem';
import getCartItemInnerHTML from '../components/getCartItemInnerHTML';

export default class Cart extends View {
  private cart: CartCollection;

  public constructor(el: HTMLElement) {
    super(el);
    this.cart = new CartCollection();
  }

  public async render(): Promise<void> {
    await this.cart.fetch();
    this.generateHTML();
  }

  private generateHTML(): void {
    this.el.innerHTML = `
      <div class="favorites">
        <h1>Carrito</h1>
        ${this.cart.items.length > 0 ? this.generateTable() : '<p>Carrito vacío.</p>'}
      </div>
    `;

    this.addEvents();
  }

  public addEvents(): void {
    Array.from(this.el.querySelectorAll('.js-remove-item-from-cart')).forEach((button) => {
      button.addEventListener('click', (e: Event) => {
        const target: HTMLButtonElement = e.currentTarget as HTMLButtonElement;
        this.cart.remove(target.dataset.id ?? '');
        this.generateHTML();
      });
    });

    this.el.querySelector('#empty-cart')?.addEventListener('click', () => {
      this.cart.removeAll();
      this.generateHTML();
    });
  }

  private generateTable(): string {
    return `
      <div class="table-responsive">
        <table class="cart-table no-wrap text-left">
          <thead>
            <th scope="col" class="cart-table-cell">Título</th>
            <th scope="col" class="cart-table-cell">Precio</th>
          </thead>
          <tbody>
            ${this.cart.items.reduce((a: string, b: CartItem) => a + getCartItemInnerHTML(b), '')}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" class="cart-table-cell">Total</th>
              <th scope="col" class="cart-table-cell">$${this.cart.getTotalPrice().toFixed(2)}</th>
              <td class="cart-table-cell">
                <button id="empty-cart" class="button">Vaciar</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    `;
  }
}
