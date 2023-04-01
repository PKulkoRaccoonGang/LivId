const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__list');

burger.addEventListener('click', () => {
  menu.classList.toggle('menu__list-visible');
  burger.classList.toggle('menu__burger-active');
});
