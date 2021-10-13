import type CartItem from '../entities/CartItem';

export default function getCartItemInnerHTML(cartItem: CartItem): string {
  return `
    <tr>
      <td class="px-1">${cartItem.getProduct().getName()}</td>
      <td class="px-1">$${cartItem.getProduct().getPrice().toFixed(2)}</td>
      <td class="px-1">
        <button data-id="${cartItem.getId()}" class="button js-remove-item-from-cart">
          Quitar
        </button>
      </td>
    </tr>
  `;
}
