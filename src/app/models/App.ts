import Store from "./Store";
import renderNotFound from "../views/renderNotFound";
import getCurrentRoute from "../helpers/getCurrentRoute";
import routes from "../routes";

export default class App {
  private readonly el: HTMLElement;
  private readonly store: Store;

  public constructor(el: HTMLElement) {
    this.el = el;
    this.store = new Store();
    window.addEventListener("hashchange", () => this.navigate(getCurrentRoute()));
    this.loadRouteOnStartup();
  }

  private async loadRouteOnStartup() {
    await this.store.fetchCatalog();
    this.navigate(getCurrentRoute());
  }

  private navigate(route: string): void {
    const selectedRoute = routes[route] || renderNotFound;
    selectedRoute(this.el, this.store.catalog);
  }
}
