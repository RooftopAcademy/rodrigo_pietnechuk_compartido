import StoreApi from "../../src/services/StoreApi";
import renderProductDetails from "../../src/views/renderProductDetails";
import renderErrorMessage from "../../src/views/renderErrorMessage";
import BookFactory from "../../src/factories/BookFactory";
import type IBook from "../../src/interfaces/IBook";
import getHTMLElement from "../../src/helpers/getHTMLElement";
import getURLSearchParams from "../../src/helpers/getURLSearchParam";

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
