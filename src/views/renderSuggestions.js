function renderSuggestions(data, domElement) {
  const option = (item) => `
    <li class="option">
      <a class="link max-width" href="product-details?id=${item.id}">${item.name}</a>
    </li>
  `;

  domElement.innerHTML = data.reduce((acc, cur) => acc + option(cur), "");
}