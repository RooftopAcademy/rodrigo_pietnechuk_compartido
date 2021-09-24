export default function getHTMLElement(
  selector: string,
  searchFrom: HTMLElement = document.body,
): HTMLElement {
  const element: HTMLElement | null = searchFrom.querySelector(selector);
  if (element == null) {
    throw new Error(`Element '${selector}' not found.`);
  }

  return element;
}
