import type CartItem from '../entities/CartItem';

export default function getCartItemInnerHTML(cartItem: CartItem): string {
  return `
    <tr>
      <td class="cart-table-cell">${cartItem.getProduct().name}</td>
      <td class="cart-table-cell">$${cartItem.getProduct().price.toFixed(2)}</td>
      <td class="cart-table-cell">
        <button data-id="${cartItem.getId()}" class="button js-remove-item-from-cart">
          Quitar
        </button>
      </td>
    </tr>
  `;
}
