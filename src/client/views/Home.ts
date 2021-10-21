import '../../../public/css/index.css';
import View from '../abstract/View';
import getRecommendedProductInnerHTML from '../components/getRecommendedProductInnerHTML';
import makeRequest from '../services/makeRequest';
import StoreApi from '../services/StoreApi';
import type Book from '../entities/Book';
import BookFactory from '../factories/BookFactory';
import getErrorMsgInnerHTML from '../components/getErrorMsgInnerHTML';

export default class Home extends View {
  public async render(): Promise<void> {
    let recommendedInnerHTML: string;

    try {
      const book: Book = BookFactory.create(await makeRequest(StoreApi.getRandomBook()));
      recommendedInnerHTML = getRecommendedProductInnerHTML(book);
    } catch (error) {
      recommendedInnerHTML = getErrorMsgInnerHTML((error as Error).message);
    }

    this.el.innerHTML = `
      <div class="landing">
        <img
          class="banner"
          src="https://s3.amazonaws.com/images-cdn.libooks.com/LBS_004_Ahora3y6_v1_desktop_8d05b503f2.jpg"
          alt="banner"
        >
        <div class="shipment mt-2 mx-1">
          <h3>Envíos</h3>
          <div class="shipment-grid small-text">
            <i class="fa fa-map-marker-alt icon"></i>
            <i class="fa fa-truck icon"></i>
            <i class="fa fa-shipping-fast icon"></i>
            <h4 class="m-0 p-0">A todo el país</h4>
            <h4 class="m-0 p-0">Gratis</h4>
            <h4 class="m-0 p-0">Express</h4>
            <p class="m-0">Recibí tu libro donde quieras</p>
            <p class="m-0">En compras de más de $3500</p>
            <p class="m-0">Para AMBA</p>
          </div>
        </div>
        <h1 class="text-left">Recomendado para tí</h1>
        <div>
          ${recommendedInnerHTML}
        </div>
      </div>
    `;
    super.render();
  }
}
