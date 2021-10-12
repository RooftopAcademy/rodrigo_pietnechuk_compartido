export default function setItemAmountInCart(amount: number): void {
  (<Element>document.querySelector('#amount-in-cart')).innerHTML = amount.toString();
}
