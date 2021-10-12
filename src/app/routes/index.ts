import type ViewAdapter from '../types/ViewAdapter';
import ProductDetails from '../views/ProductDetails';
import ProductList from '../views/ProductList';
import Home from '../views/Home';
import Login from '../views/Login';
import NotFound from '../views/NotFound';
import Favorites from '../views/Favorites';

const routes: Map<string, ViewAdapter> = new Map([
  ['', Home],
  ['#product-list', ProductList],
  ['#product-details', ProductDetails],
  ['#favorites', Favorites],
  ['#login', Login],
  ['#404', NotFound],
]);

export default function selectRoute(route: string): ViewAdapter {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return routes.has(route) ? routes.get(route)! : routes.get('#404')!;
}
