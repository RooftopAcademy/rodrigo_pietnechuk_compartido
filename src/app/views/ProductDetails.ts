import getProductDetailsInnerHTML from '../components/getProductDetailsInnerHTML';
import getErrorMsgInnerHTML from '../components/getErrorMsgInnerHTML';
import BookInterface from '../interfaces/BookInterface';
import StoreApi from '../services/StoreApi';
import getIdFromAddressBar from '../helpers/getIdFromAddressBar';
import makeRequest from '../services/makeRequest';

import '../../public/resources/css/product-details.css';
import View from '../abstract/View';

export default class ProductDetails extends View {
  public async render(): Promise<void> {
    try {
      const data: BookInterface = await makeRequest(StoreApi.getBookById(getIdFromAddressBar()));
      this.el.innerHTML = getProductDetailsInnerHTML(data);
    } catch (error) {
      const err = error as Error;
      this.el.innerHTML = getErrorMsgInnerHTML(err.message);
    }
  }

  public addEvents(): void {
    const heartButton: HTMLButtonElement = this.el
      .querySelector('button.heart-button') as HTMLButtonElement;

    const heartIcon: HTMLElement = heartButton.querySelector('.heart-icon') as HTMLElement;

    heartButton.addEventListener('click', () => {
      ['far', 'fa', 'heart-icon-colored'].forEach((cssClass: string) => {
        heartIcon.classList.toggle(cssClass);
      });
    });
  }
}
