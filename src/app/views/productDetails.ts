import getProductDetailsInnerHTML from "../components/getProductDetailsInnerHTML";
import getErrorMsgInnerHTML from "../components/getErrorMsgInnerHTML";
import IBook from "../interfaces/IBook";
import StoreApi from "../services/StoreApi";
import getHTMLElement from "../helpers/getHTMLElement";

import "../../public/resources/css/product-details.css";

function addEvents() {
  const heartButton: HTMLElement = getHTMLElement("button.heart-button");
  const heartIcon: HTMLElement = getHTMLElement(".heart-icon", heartButton);
  heartButton.addEventListener("click", () => {
    ["far", "fa", "heart-icon-colored"].forEach((cssClass: string) => {
      heartIcon.classList.toggle(cssClass);
    });
  });
}

export default async function productDetails(el: HTMLElement): Promise<void> {
  const id: string = window.location.hash.split("/").at(-1) || "";

  if (!id) {
    el.innerHTML = getErrorMsgInnerHTML("No se especificó un id de producto.");
    return;
  }

  const res: Response = await StoreApi.getBookById(id);
  if (!res.ok) {
    el.innerHTML = getErrorMsgInnerHTML(String(res.status));
    return;
  }

  const data: IBook = await res.json();
  el.innerHTML = getProductDetailsInnerHTML(data);

  addEvents();
}
