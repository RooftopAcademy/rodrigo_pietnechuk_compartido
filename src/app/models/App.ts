import Store from "./Store";
import renderHome from "../views/renderHome";
import renderNotFound from "../views/renderNotFound";
import renderProductList from "../views/renderProductList";
import renderSignup from "../views/renderSignup";
import renderProductDetails from "../views/renderProductDetails";

export default class App {
  private readonly el: HTMLElement;
  private readonly store: Store;

  public constructor(el: HTMLElement) {
    this.el = el;
    this.store = new Store();
    window.addEventListener("hashchange", () => this.navigate(window.location.hash.split("/")[0]));
    this.navigate(window.location.hash.split("/")[0]);
  }

  public navigate(route: string): void {
    const routes: Record<string, (el: HTMLElement) => void> = {
      "": renderHome,
      "#product-list": async () => {
        await this.store.fetchCatalog();
        renderProductList(this.el, this.store.catalog);
      },
      "#product-details": renderProductDetails,
      "#signup": renderSignup,
    };

    const selectedRoute = routes[route] || renderNotFound;
    selectedRoute(this.el);
  }
}
