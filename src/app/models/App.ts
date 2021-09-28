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
    this.navigate("/");
    this.store = new Store();
    this.store.fetchCatalog();
    this.addRouterLinks("header .js-router-link");
  }

  public navigate(route: string): void {
    const routes: Record<string, (el: HTMLElement) => void> = {
      "/": home,
      "/product-list": () => {
        productList(this.el, this.store.catalog);
        this.addRouterLinks(".products-item .js-router-link");
      },
      "/product-details": productDetails,
      "/signup": signup,
    };

    const selectedRoute = routes[route];
    if (selectedRoute) {
      selectedRoute(this.el);
    } else {
      notFound(this.el);
    }
  }

  public addRouterLinks(selector: string): void {
    Array.from(document.querySelectorAll(selector)).forEach((item: Element) => {
      const link = item as HTMLLinkElement;
      link.addEventListener("click", (e: MouseEvent): void => {
        e.preventDefault();
        const target: HTMLLinkElement = e.currentTarget as HTMLLinkElement;
        const url: URL = new URL(target.href);
        sessionStorage.setItem("id", url.searchParams.get("id") || "");
        this.navigate(url.pathname);
      });
    });
  }
}
