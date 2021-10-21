import '../../public/css/app.css';
import '@fortawesome/fontawesome-free/css/all.css';

import App from './App';
import loadComponents from './helpers/loadComponents';

loadComponents(document.body);

function run(el: HTMLElement): App {
  return new App(el);
}

const el: HTMLElement = document.querySelector('#app') as HTMLElement;
run(el);
