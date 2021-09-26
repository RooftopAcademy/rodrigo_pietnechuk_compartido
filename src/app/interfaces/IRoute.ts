interface IRoute {
  path: string;
  renderFunction(el: HTMLElement): void;
}

export default IRoute;
