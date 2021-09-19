const products = document.querySelector(".products");
products.innerHTML = store.catalog.products.reduce((a, b) => a + renderProductListItem(b), "");
