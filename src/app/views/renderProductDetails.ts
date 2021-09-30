import getProductDetailsInnerHTML from '../components/getProductDetailsInnerHTML';
import getErrorMsgInnerHTML from '../components/getErrorMsgInnerHTML';
import BookInterface from '../interfaces/BookInterface';
import StoreApi from '../services/StoreApi';
import getIdFromAddressBar from '../helpers/getIdFromAddressBar';
import makeRequest from '../services/makeRequest';

import '../../public/resources/css/product-details.css';

function addEvents(el: HTMLElement) {
  const heartButton: HTMLButtonElement = el
    .querySelector('button.heart-button') as HTMLButtonElement;

  const heartIcon: HTMLElement = heartButton.querySelector('.heart-icon') as HTMLElement;

  heartButton.addEventListener('click', () => {
    ['far', 'fa', 'heart-icon-colored'].forEach((cssClass: string) => {
      heartIcon.classList.toggle(cssClass);
    });
  });
}

export default async function renderProductDetails(el: HTMLElement): Promise<void> {
  try {
    const data: BookInterface = await makeRequest(StoreApi.getBookById(getIdFromAddressBar()));
    el.innerHTML = getProductDetailsInnerHTML(data);
    addEvents(el);
  } catch (error) {
    const err = error as Error;
    el.innerHTML = getErrorMsgInnerHTML(err.message);
  }
}
