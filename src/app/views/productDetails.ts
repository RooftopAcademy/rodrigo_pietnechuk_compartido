import renderErrorMessage from "../components/renderErrorMessage";
import renderProductDetails from "../components/renderProductDetails";
import IBook from "../interfaces/IBook";
import StoreApi from "../services/StoreApi";

export default async function productDetails(el: HTMLElement): Promise<void> {
  const id: string | null = sessionStorage.getItem("id");

  if (!id) {
    el.innerHTML = renderErrorMessage("No se especificó un id de producto.");
    return;
  }

  const res: Response = await StoreApi.getBookById(id);
  if (!res.ok) {
    el.innerHTML = renderErrorMessage(String(res.status));
    return;
  }

  const data: IBook = await res.json();
  el.innerHTML = renderProductDetails(data);
}
