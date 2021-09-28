import type Catalog from "../models/Catalog";
import renderHome from "../views/renderHome";
import renderProductList from "../views/renderProductList";
import renderSignup from "../views/renderSignup";
import renderProductDetails from "../views/renderProductDetails";

const routes: Record<string, (el: HTMLElement, catalog: Catalog) => void> = {
  "": renderHome,
  "#product-list": renderProductList,
  "#product-details": renderProductDetails,
  "#signup": renderSignup,
};

export default routes;
