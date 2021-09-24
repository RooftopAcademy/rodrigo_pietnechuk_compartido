import "../../public/resources/css/product-list.css";

import Store from "../models/Store";
import renderProductList from "../components/renderProductList";
import renderErrorMessage from "../components/renderErrorMessage";
import getHTMLElement from "../helpers/getHTMLElement";

export default async function loadProductList(): Promise<void> {
  const products: HTMLElement = getHTMLElement(".products");
  const store: Store = new Store();
  try {
    await store.fetchCatalog();
    renderProductList(store.catalog, products);
  } catch (error) {
    const err: Error = error as Error;
    renderErrorMessage(err.message, products);
  }
}
