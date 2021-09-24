import "../public/resources/css/app.css";
import "../public/resources/css/index.css";

import loadIcons from "./helpers/fontAwesomeIcons";
import loadComponents from "./helpers/loadComponents";
import loadProductDetails from "./controllers/product-details";
import loadProductList from "./controllers/product-list";
import loadSignupForm from "./controllers/signup";

loadIcons();
loadComponents();

const paths: string[] = window.location.pathname.split(/\//);
const link: string = paths[paths.length - 1].split(".html")[0];
switch (link) {
  case "product-list":
    loadProductList();
    break;
  case "product-details":
    loadProductDetails();
    break;
  case "signup":
    loadSignupForm();
    break;
  default:
    break;
}
