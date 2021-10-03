interface View {
  addEvents?(): void;
}

abstract class View {
  protected readonly el: HTMLElement;

  public constructor(el: HTMLElement) {
    this.el = el;
  }

  public abstract render(): void;
}

export default View;
