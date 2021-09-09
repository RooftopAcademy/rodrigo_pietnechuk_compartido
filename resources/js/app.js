const burguer = document.querySelector('#burguer-button');
const menu = document.querySelector('.menu');

burguer.addEventListener('click', () => {
	menu.classList.toggle('menu-show');
  menu.classList.toggle('menu-hide');
});
