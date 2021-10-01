import View from './abstract/View';
import getCurrentRoute from './helpers/getCurrentRoute';
import setupLoginOnStartup from './helpers/setupLoginOnStartup';
import Home from './views/Home';
import Login from './views/Login';
import NotFound from './views/NotFound';
import ProductDetails from './views/ProductDetails';
import ProductList from './views/ProductList';

export default class App {
  private readonly el: HTMLElement;

  public constructor(el: HTMLElement) {
    this.el = el;
    window.addEventListener('hashchange', () => this.navigate(getCurrentRoute()));
    setupLoginOnStartup();
    this.navigate(getCurrentRoute());
  }

  private async navigate(route: string): Promise<void> {
    const routes: Record<string, typeof View> = {
      '': Home,
      '#product-list': ProductList,
      '#product-details': ProductDetails,
      '#login': Login,
    };

    // eslint-disable-next-line
    const selectedRoute: View = new (<any>routes[route])(this.el) || new NotFound(this.el);
    await selectedRoute.render();
    if (selectedRoute.addEvents) {
      selectedRoute.addEvents();
    }
  }
}
