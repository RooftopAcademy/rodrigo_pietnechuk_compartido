const burguerMenu = document.querySelector(".burger-menu");

burguerMenu.addEventListener("click", () => {
  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("hidden");
});

const store = new Store();
