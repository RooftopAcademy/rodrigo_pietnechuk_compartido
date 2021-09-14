const heartButton = document.querySelector(".heart-button");

heartButton.addEventListener("click", () => {
  const heartIcon = document.querySelector(".heart-icon");
  heartIcon.classList.toggle("far");
  heartIcon.classList.toggle("fa");
  heartIcon.classList.toggle("heart-icon-colored");
});
