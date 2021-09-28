import Header from "../components/Header";
import Brand from "../components/Brand";
import Footer from "../components/Footer";
import getHTMLElement from "./getHTMLElement";
import StoreApi from "../services/StoreApi";
import getSearchResultsInnerHTML from "../components/getSearchResultsInnerHTML";

export default function loadComponents(): void {
  // add components
  customElements.define("header-component", Header);
  customElements.define("brand-component", Brand);
  customElements.define("footer-component", Footer);

  // add events
  const header: HTMLElement = getHTMLElement("header");
  const navigation: HTMLElement = getHTMLElement(".navigation", header);
  const suggestions: HTMLUListElement = getHTMLElement(
    "#suggestions",
    navigation,
  ) as HTMLUListElement;

  getHTMLElement(".burger-menu", header).addEventListener("click", () => {
    navigation.classList.toggle("hidden");
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

    getSearchResultsInnerHTML(data, suggestions);
    Array.from(document.querySelectorAll(".option .link")).forEach((item) => {
      item.addEventListener("click", () => {
        searchBar.value = "";
        suggestions.innerHTML = "";
      });
    });
  });
}
