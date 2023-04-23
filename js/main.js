const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__list');
const buttons = document.querySelector('.header__buttons');

burger.addEventListener('click', () => {
  menu.classList.toggle('menu__list-visible');
  burger.classList.toggle('menu__burger-active');
  buttons.classList.toggle('header__buttons-visible');
});
