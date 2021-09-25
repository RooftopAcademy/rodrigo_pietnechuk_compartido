interface IRoute {
  path: string;
  renderFunction(el: HTMLElement): void;
  script?(): void;
}

export default IRoute;
