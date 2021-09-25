import type IRoute from "../interfaces/IRoute";
import Store from "./Store";
import home from "../views/home";
import notFound from "../views/notFound";
import productList from "../views/productList";
import signup from "../views/signup";
import singupValidators from "../controllers/signup";
import productDetails from "../views/productDetails";
import productDetailsEvents from "../controllers/product-details";

export default class App {
  private readonly el: HTMLElement;
  private readonly store: Store;

  public constructor(el: HTMLElement) {
    this.el = el;
    this.navigate("/home");
    this.store = new Store();
    this.store.fetchCatalog();
    this.addRouterLinks("header .js-router-link");
  }

  public navigate(route: string): void {
    const routes: IRoute[] = [
      { path: "/home", renderFunction: home },
      {
        path: "/product-list",
        renderFunction: () => productList(this.el, this.store.catalog),
        script: () => this.addRouterLinks(".products-item .js-router-link"),
      },
      {
        path: "/product-details",
        renderFunction: productDetails,
        script: productDetailsEvents,
      },
      {
        path: "/signup",
        renderFunction: signup,
        script: singupValidators,
      },
    ];

    const selectedRoute: IRoute | undefined = routes.find((r: IRoute): boolean => r.path == route);
    if (selectedRoute) {
      selectedRoute.renderFunction(this.el);
      if (selectedRoute.script) {
        selectedRoute.script();
      }
    } else {
      notFound(this.el);
    }
  }

  private addRouterLinks(selector: string): void {
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
