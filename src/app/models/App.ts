import Store from "./Store";
import home from "../views/home";
import notFound from "../views/notFound";
import productList from "../views/productList";
import signup from "../views/signup";
import productDetails from "../views/productDetails";

export default class App {
  private readonly el: HTMLElement;
  private readonly store: Store;

  public constructor(el: HTMLElement) {
    this.el = el;
    this.navigate("");
    this.store = new Store();
    this.store.fetchCatalog();
    window.addEventListener("hashchange", () => this.navigate(window.location.hash.split("/")[0]));
  }

  public navigate(route: string): void {
    const routes: Record<string, (el: HTMLElement) => void> = {
      "": home,
      "#product-list": () => productList(this.el, this.store.catalog),
      "#product-details": productDetails,
      "#signup": signup,
    };

    const selectedRoute = routes[route] || notFound;
    selectedRoute(this.el);
  }
}
