(async function() {
  const products = document.querySelector(".products");
  try {
    await store.fetchCatalog();
    renderProductList(store.catalog.products, products);
  } catch (error) {
    renderErrorMessage(error.message, products);
  }
})();
