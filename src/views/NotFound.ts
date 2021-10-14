import View from '../abstract/View';

export default class NotFound extends View {
  public render(): void {
    this.el.innerHTML = '<p class="text-red">Error 404: la página solicitada no fue encontrada</p>';
    super.render();
  }
}
