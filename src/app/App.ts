import Store from './models/Store';
import renderNotFound from './views/renderNotFound';
import getCurrentRoute from './helpers/getCurrentRoute';
import renderHome from './views/renderHome';
import renderProductList from './views/renderProductList';
import renderLogin from './views/renderLogin';
import renderProductDetails from './views/renderProductDetails';

export default class App {
  private readonly el: HTMLElement;
  private readonly store: Store;

  public constructor(el: HTMLElement) {
    this.el = el;
    this.store = new Store();
    window.addEventListener('hashchange', () => this.navigate(getCurrentRoute()));
    this.loadRouteOnStartup();
  }

  private async loadRouteOnStartup() {
    await this.store.catalog.fetchCatalog();
    this.navigate(getCurrentRoute());
  }

  private navigate(route: string): void {
    const routes: Record<string, (el: HTMLElement) => void> = {
      '': renderHome,
      '#product-list': (el) => renderProductList(el, this.store.catalog),
      '#product-details': renderProductDetails,
      '#login': renderLogin,
    };

    const selectedRoute = routes[route] || renderNotFound;
    selectedRoute(this.el);
  }
}
