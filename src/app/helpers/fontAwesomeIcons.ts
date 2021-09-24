import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faListUl,
  faPhone,
  faHeart as faHeart2,
  faSearch,
  faShoppingCart,
  faStoreAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function loadIcons(): void {
  library.add(faStoreAlt, faListUl, faSearch, faShoppingCart, faUser, faBars, faPhone, faEnvelope);
  library.add(faHeart, faHeart2);
  library.add(faInstagram, faFacebook, faTwitter);
  dom.watch();
}
