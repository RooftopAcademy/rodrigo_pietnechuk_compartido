(async function() {
  const products = document.querySelector(".products");
  try {
    await store.fetchCatalog();
    products.innerHTML = store.catalog.products.reduce((a, b) => a + renderProductListItem(b), "");
  } catch (error) {
    products.innerHTML = `<h3 class="text-red">${error.message}</h3>`;
  }
})();
