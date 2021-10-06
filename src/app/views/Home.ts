import '../../public/resources/css/index.css';
import View from '../abstract/View';

export default class Home extends View {
  public render(): void {
    this.el.innerHTML = `
    <section class="about">
      <h2>Sobre nosotros</h2>
      <article class="text-justify">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis laudantium modi
          provident? Fuga, nihil cupiditate ullam officia quod aut sint esse distinctio quidem
          voluptas ab at atque deserunt doloremque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis laudantium modi
          provident? Fuga, nihil cupiditate ullam officia quod aut sint esse distinctio quidem
          voluptas ab at atque deserunt doloremque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis laudantium modi
          provident? Fuga, nihil cupiditate ullam officia quod aut sint esse distinctio quidem
          voluptas ab at atque deserunt doloremque!
        </p>
      </article>
    </section>
    `;
    super.render();
  }
}
