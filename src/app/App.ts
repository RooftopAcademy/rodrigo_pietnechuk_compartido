import type View from './abstract/View';
import getCurrentRoute from './helpers/getCurrentRoute';
import setupLoginOnStartup from './helpers/setupLoginOnStartup';
import selectRoute from './routes';

export default class App {
  private readonly el: HTMLElement;

  public constructor(el: HTMLElement) {
    this.el = el;
    window.addEventListener('hashchange', () => this.navigate(getCurrentRoute()));
    setupLoginOnStartup();
    this.navigate(getCurrentRoute());
  }

  private async navigate(route: string): Promise<void> {
    try {
      const selectedRoute: View = selectRoute(route, this.el);
      await selectedRoute.render();
      if (selectedRoute.addEvents) {
        selectedRoute.addEvents();
      }
    } catch {
      window.location.hash = '#404';
    }
  }
}
