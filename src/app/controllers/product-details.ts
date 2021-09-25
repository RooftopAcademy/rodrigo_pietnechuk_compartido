import "../../public/resources/css/product-details.css";
import getHTMLElement from "../helpers/getHTMLElement";

function addClassToggler(button: HTMLElement, icon: HTMLElement): void {
  button.addEventListener("click", () => {
    ["far", "fa", "heart-icon-colored"].forEach((cssClass: string): void => {
      icon.classList.toggle(cssClass);
    });
  });
}

export default async function loadProductDetails(): Promise<void> {
  const heartButton: HTMLElement = getHTMLElement(".product .heart-button");
  const heartIcon: HTMLElement = getHTMLElement(".heart-icon", heartButton);
  addClassToggler(heartButton, heartIcon);
}
