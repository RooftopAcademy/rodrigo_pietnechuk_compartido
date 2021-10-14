interface View {
  addEvents?(): void;
}

abstract class View {
  protected readonly el: HTMLElement;

  public constructor(el: HTMLElement) {
    this.el = el;
  }

  public render(): void {
    if (this.addEvents) {
      this.addEvents();
    }
  }
}

export default View;
