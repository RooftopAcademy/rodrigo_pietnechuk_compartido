import "../public/resources/css/app.css";

import App from "./models/App";
import loadIcons from "./helpers/fontAwesomeIcons";
import loadComponents from "./helpers/loadComponents";
import getHTMLElement from "./helpers/getHTMLElement";

function run(): App {
  loadIcons();
  loadComponents();
  return new App(getHTMLElement("#app"));
}

run();
