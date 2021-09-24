import "../../public/resources/css/product-details.css";

import StoreApi from "../services/StoreApi";
import renderProductDetails from "../views/renderProductDetails";
import renderErrorMessage from "../views/renderErrorMessage";
import BookFactory from "../factories/BookFactory";
import type IBook from "../interfaces/IBook";
import getHTMLElement from "../helpers/getHTMLElement";
import getURLSearchParams from "../helpers/getURLSearchParam";

async function fetchBookFromAPI(id: string): Promise<IBook> {
  const res: Response = await StoreApi.getBookById(id);

  if (!res.ok) {
    throw new Error(res.status.toString());
  }

  const data: IBook = await res.json();
  return data;
}

function addClassToggler(button: HTMLElement, icon: HTMLElement): void {
  button.addEventListener("click", () => {
    ["far", "fa", "heart-icon-colored"].forEach((cssClass: string): void => {
      icon.classList.toggle(cssClass);
    });
  });
}

export default async function loadProductDetails(): Promise<void> {
  const product: HTMLElement = getHTMLElement(".product");
  try {
    const id: string = getURLSearchParams("id", "404");
    const book: IBook = await fetchBookFromAPI(id);
    renderProductDetails(BookFactory.create(book), product);
    const heartButton: HTMLElement = getHTMLElement(".heart-button", product);
    const heartIcon: HTMLElement = getHTMLElement(".heart-icon", heartButton);
    addClassToggler(heartButton, heartIcon);
  } catch (error) {
    renderErrorMessage(error.message, product);
  }
}
