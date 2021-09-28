import type Catalog from '../models/Catalog';
import renderHome from '../views/renderHome';
import renderProductList from '../views/renderProductList';
import renderLogin from '../views/renderLogin';
import renderProductDetails from '../views/renderProductDetails';

const routes: Record<string, (el: HTMLElement, catalog: Catalog) => void> = {
  '': renderHome,
  '#product-list': renderProductList,
  '#product-details': renderProductDetails,
  '#login': renderLogin,
};

export default routes;
