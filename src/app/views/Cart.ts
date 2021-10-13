import '../../public/resources/css/cart.css';
import '../../public/resources/css/heart-button.css';
import View from '../abstract/View';
import CartCollection from '../collections/Cart';
import CartItem from '../entities/CartItem';
import getCartItemInnerHTML from '../components/getCartItemInnerHTML';
import setItemAmountInCart from '../helpers/setItemAmountInCart';

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
        ${this.cart.getLength() > 0 ? this.generateTable() : '<p>Carrito vacío.</p>'}
      </div>
    `;

    setItemAmountInCart(this.cart.getLength());

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
        <table class="cart-table no-wrap text-left m-auto">
          <thead>
            <th scope="col" class="px-1">Título</th>
            <th scope="col" class="px-1">Precio</th>
          </thead>
          <tbody>
        ${this.cart.getItems().reduce((a: string, b: CartItem) => a + getCartItemInnerHTML(b), '')}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" class="px-1">Total</th>
              <th scope="col" class="px-1">$${this.cart.getTotalPrice().toFixed(2)}</th>
              <td class="px-1">
                <button id="empty-cart" class="button">Vaciar</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    `;
  }
}
