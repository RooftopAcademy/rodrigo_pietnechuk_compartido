(async function () {
  const product = document.querySelector(".product");

  const id = new URLSearchParams(window.location.search).get('id');
  const res = await StoreApi.getBookById(id);
  if (res.ok) {
    const data = await res.json();
    product.innerHTML = renderProductDetails(BookFactory.createBook(data));

    const heartButton = product.querySelector(".heart-button");
    heartButton.addEventListener("click", () => {
      const heartIcon = heartButton.querySelector(".heart-icon");
      ["far", "fa", "heart-icon-colored"].forEach(function(cssClass) {
        heartIcon.classList.toggle(cssClass);
      });
    });
  } else {
    product.innerHTML = `<h3 class="text-red">Error: ${res.status}</h3>`
  }
})();
