import getHTMLElement from "../../src/helpers/getHTMLElement";
import StoreApi from "../../src/services/StoreApi";
import renderSuggestions from "../../src/views/renderSuggestions";
import loadProductDetails from "./product-details";
import loadProductList from "./product-list";
import loadSignupForm from "./signup";
import Header from "../../src/components/Header";
import Brand from "../../src/components/Brand";
import Footer from "../../src/components/Footer";

customElements.define("header-component", Header);
customElements.define("brand-component", Brand);
customElements.define("footer-component", Footer);

const header: HTMLElement = getHTMLElement("header");
const navigation: HTMLElement = getHTMLElement(".navigation", header);
const suggestions: HTMLUListElement = getHTMLElement(
  "#suggestions",
  navigation,
) as HTMLUListElement;

header?.querySelector(".burger-menu")?.addEventListener("click", () => {
  navigation?.classList.toggle("hidden");
});

const searchBar: HTMLInputElement = getHTMLElement("#search-bar", navigation) as HTMLInputElement;
searchBar.addEventListener("input", async function () {
  const value = this.value.trim();

  if (value == "") {
    suggestions.innerHTML = "";
    return;
  }

  const res = await StoreApi.filterCatalog(value);
  const data = await res.json();

  renderSuggestions(data, suggestions);
});

switch (window.location.pathname) {
  case "/product-list":
    loadProductList();
    break;
  case "/product-details":
    loadProductDetails();
    break;
  case "/signup":
    loadSignupForm();
    break;
  default:
    break;
}
