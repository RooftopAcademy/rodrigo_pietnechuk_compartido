import '../../public/resources/css/product-details.css';
import '../../public/resources/css/heart-button.css';
import getProductDetailsInnerHTML from '../components/getProductDetailsInnerHTML';
import getErrorMsgInnerHTML from '../components/getErrorMsgInnerHTML';
import BookInterface from '../interfaces/BookInterface';
import StoreApi from '../services/StoreApi';
import getIdFromAddressBar from '../helpers/getIdFromAddressBar';
import makeRequest from '../services/makeRequest';
import View from '../abstract/View';
import FavoritesCollection from '../collections/FavoritesCollection';
import Book from '../entities/Book';
import BookFactory from '../factories/BookFactory';
import Cart from '../collections/Cart';
import CartItem from '../entities/CartItem';
import setItemAmountInCart from '../helpers/setItemAmountInCart';

export default class ProductDetails extends View {
  private book: Book;
  private favorites: FavoritesCollection;
  private cart: Cart;
  private isFavorite: boolean;

  public constructor(el: HTMLElement) {
    super(el);
    this.book = new Book();
    this.favorites = new FavoritesCollection();
    this.cart = new Cart();
    this.isFavorite = false;
  }

  public async render(): Promise<void> {
    try {
      const data: BookInterface = await makeRequest(StoreApi.getBookById(getIdFromAddressBar()));
      this.book = BookFactory.create(data);
      this.el.innerHTML = getProductDetailsInnerHTML(this.book);
    } catch (error) {
      const err = error as Error;
      this.el.innerHTML = getErrorMsgInnerHTML(err.message);
    }
  }

  private toggleFavorite(): void {
    if (this.isFavorite) {
      this.favorites.remove(this.book.id);
    } else {
      this.favorites.add(this.book);
    }
    this.isFavorite = !this.isFavorite;
  }

  private async setupFavoriteButton(icon: HTMLElement, classes: string[]): Promise<void> {
    const [disabled, ...enabled] = classes;

    await this.favorites.fetch();

    this.isFavorite = this.favorites.getItems().some((b) => b.id == this.book.id);

    if (this.isFavorite) {
      icon.classList.add(...enabled);
    } else {
      icon.classList.add(disabled);
    }
  }

  private setCurrentProductCounter(): void {
    const amount: number = this.cart.countByProductId(this.book.id);

    const counter: HTMLSpanElement = this.el.querySelector(
      '#amount-in-cart-this-product',
    ) as HTMLSpanElement;

    counter.innerHTML = amount.toString();
  }

  private updateCartCounters(): void {
    setItemAmountInCart(this.cart.getLength());
    this.setCurrentProductCounter();
  }

  private async setupCart(): Promise<void> {
    await this.cart.fetch();
    this.updateCartCounters();
  }

  public addEvents(): void {
    const heartButton: HTMLButtonElement = this.el
      .querySelector('button.heart-button') as HTMLButtonElement;

    const heartIcon: HTMLElement = heartButton.querySelector('.heart-icon') as HTMLElement;
    const heartIconClasses: string[] = ['far', 'fa', 'heart-icon-colored'];

    this.setupFavoriteButton(heartIcon, heartIconClasses);
    this.setupCart();

    heartButton.addEventListener('click', () => {
      heartIconClasses.forEach((cssClass: string) => {
        heartIcon.classList.toggle(cssClass);
      });

      this.toggleFavorite();
    });

    this.el.querySelector('#add-to-cart')?.addEventListener('click', () => {
      this.cart.add(new CartItem(this.book));
      this.updateCartCounters();
    });

    this.el.querySelector('#remove-from-cart')?.addEventListener('click', () => {
      this.cart.removeFirstWithProductId(this.book.id);
      setItemAmountInCart(this.cart.getLength());
      this.updateCartCounters();
    });
  }
}
