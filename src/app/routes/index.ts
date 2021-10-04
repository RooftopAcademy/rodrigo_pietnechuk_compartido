import type View from '../abstract/View';
import ProductDetails from '../views/ProductDetails';
import ProductList from '../views/ProductList';
import Home from '../views/Home';
import Login from '../views/Login';
import NotFound from '../views/NotFound';
import Favorites from '../views/Favorites';

const routes: Record<string, typeof View> = {
  '': Home,
  '#product-list': ProductList,
  '#product-details': ProductDetails,
  '#favorites': Favorites,
  '#login': Login,
  '#404': NotFound,
};

export default function selectRoute(route: string, el: HTMLElement): View {
  // eslint-disable-next-line
  return new (<any>routes[route])(el);
}
