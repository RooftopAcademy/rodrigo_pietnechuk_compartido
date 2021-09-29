import '../public/resources/css/app.css';
import '@fortawesome/fontawesome-free/css/all.css';

import App from './App';
import loadComponents from './helpers/loadComponents';
import getHTMLElement from './helpers/getHTMLElement';

function run(): App {
  loadComponents();
  return new App(getHTMLElement('#app'));
}

run();
