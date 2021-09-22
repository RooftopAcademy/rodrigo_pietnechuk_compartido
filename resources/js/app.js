const header = document.querySelector(".header");
const navigation = header.querySelector(".navigation");

header.querySelector(".burger-menu").addEventListener("click", () => {
  navigation.classList.toggle("hidden");
});

const store = new Store();
