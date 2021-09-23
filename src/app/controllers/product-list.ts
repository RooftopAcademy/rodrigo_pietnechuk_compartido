import Store from "../models/Store";
import renderProductList from "../views/renderProductList";
import renderErrorMessage from "../views/renderErrorMessage";
import getHTMLElement from "../helpers/getHTMLElement";

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
