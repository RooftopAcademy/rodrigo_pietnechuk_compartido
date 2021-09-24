export default function renderErrorMessage(msg: string, domElement: HTMLElement): void {
  domElement.innerHTML = `<h3 class="text-red">Error: ${msg}</h3>`;
}
