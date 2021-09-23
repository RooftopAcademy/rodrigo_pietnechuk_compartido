import Store from "../../src/models/Store";
import renderProductList from "../../src/views/renderProductList";
import renderErrorMessage from "../../src/views/renderErrorMessage";
import getHTMLElement from "../../src/helpers/getHTMLElement";

export default async function loadProductList(): Promise<void> {
  const products: HTMLElement = getHTMLElement(".products");
  const store: Store = new Store();
  try {
    await store.fetchCatalog();
    renderProductList(store.catalog, products);
  } catch (error) {
    renderErrorMessage(error.message, products);
  }
}
