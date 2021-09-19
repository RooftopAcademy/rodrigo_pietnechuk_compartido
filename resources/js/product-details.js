const product = document.querySelector(".product");

function getProductDetailsHTML() {
  const productDeatailsparams = new URLSearchParams(window.location.search);
  const notFound = "<p>No se ha encontrado el artículo especificado en nuestra base de datos.</p>";

  if (!productDeatailsparams.has('id')) {
    return notFound;
  }

  const book = store.catalog.getBookById(productDeatailsparams.get('id'));
  if (!book) {
    return notFound;
  }

  return renderProductDetails(book);
}

product.innerHTML = getProductDetailsHTML();

const heartButton = product.querySelector(".heart-button");
if (heartButton) {
  heartButton.addEventListener("click", () => {
    const heartIcon = product.querySelector(".heart-icon");
    heartIcon.classList.toggle("far");
    heartIcon.classList.toggle("fa");
    heartIcon.classList.toggle("heart-icon-colored");
  });
}
