import getProductDetailsInnerHTML from '../components/getProductDetailsInnerHTML';
import getErrorMsgInnerHTML from '../components/getErrorMsgInnerHTML';
import IBook from '../interfaces/IBook';
import StoreApi from '../services/StoreApi';
import getHTMLElement from '../helpers/getHTMLElement';
import getIdFromAddressBar from '../helpers/getIdFromAddressBar';
import makeRequest from '../services/makeRequest';

import '../../public/resources/css/product-details.css';

function addEvents() {
  const heartButton: HTMLElement = getHTMLElement('button.heart-button');
  const heartIcon: HTMLElement = getHTMLElement('.heart-icon', heartButton);
  heartButton.addEventListener('click', () => {
    ['far', 'fa', 'heart-icon-colored'].forEach((cssClass: string) => {
      heartIcon.classList.toggle(cssClass);
    });
  });
}

export default async function renderProductDetails(el: HTMLElement): Promise<void> {
  try {
    const data: IBook = await makeRequest(StoreApi.getBookById(getIdFromAddressBar()));
    el.innerHTML = getProductDetailsInnerHTML(data);
    addEvents();
  } catch (error) {
    const err = error as Error;
    el.innerHTML = getErrorMsgInnerHTML(err.message);
  }
}
