const header = document.querySelector("header");
const navigation = header.querySelector(".navigation");
const suggestions = navigation.querySelector("#suggestions");

header.querySelector(".burger-menu").addEventListener("click", () => {
  navigation.classList.toggle("hidden");
});

navigation.querySelector("#search-bar").addEventListener("input", async function() {
  const value = this.value.trim();

  if (value === "") {
    suggestions.innerHTML = "";
    return;
  }

  const res = await StoreApi.filterCatalog(value);
  const data = await res.json();

  renderSuggestions(data, suggestions);
});

const store = new Store();
