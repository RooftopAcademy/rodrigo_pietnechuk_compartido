import '../../public/resources/css/index.css';
import View from '../abstract/View';
import Catalog from '../collections/Catalog';
import getRecommendedProductInnerHTML from '../components/getRecommendedProductInnerHTML';

export default class Home extends View {
  public async render(): Promise<void> {
    const catalog: Catalog = new Catalog();
    await catalog.fetch();

    this.el.innerHTML = `
      <div class="landing">
        <img
          class="banner"
          src="https://s3.amazonaws.com/images-cdn.libooks.com/LBS_004_Ahora3y6_v1_desktop_8d05b503f2.jpg"
          alt="banner"
        >
        <h1 class="text-left">Recomendado para tí</h1>
        <div>
          ${getRecommendedProductInnerHTML(catalog.getRandomItem())}
        </div>
      </div>
    `;
    super.render();
  }
}
