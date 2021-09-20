(async function() {
  const products = document.querySelector(".products");
  try {
    await store.fetchCatalog();
    renderProductList(store.catalog.products, products);
  } catch (error) {
    products.innerHTML = `<h3 class="text-red">${error.message}</h3>`;
  }
})();
