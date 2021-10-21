import getCurrentRoute from './helpers/getCurrentRoute';
import setupCartOnStartup from './helpers/setupCartOnStartup';
import setupLoginOnStartup from './helpers/setupLoginOnStartup';
import selectRoute from './router';

export default class App {
  private readonly el: HTMLElement;

  public constructor(el: HTMLElement) {
    this.el = el;
    window.addEventListener('hashchange', () => this.navigate(getCurrentRoute()));
    setupLoginOnStartup();
    setupCartOnStartup();
    this.navigate(getCurrentRoute());
  }

  private navigate(route: string): void {
    const SelectedRoute = selectRoute(route);
    const view = new SelectedRoute(this.el);
    view.render();
    document.querySelector('.navigation')?.classList.add('hidden');
  }
}
