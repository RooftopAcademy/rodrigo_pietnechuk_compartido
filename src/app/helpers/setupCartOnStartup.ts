import setItemAmountInCart from './setItemAmountInCart';

export default function setupCartOnStartup(): void {
  const cart: string[] = JSON.parse(window.localStorage.getItem('cart') ?? '[]');
  setItemAmountInCart(cart.length);
}
