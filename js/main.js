const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__list');
const body = document.querySelector('body');
const btn = document.querySelector('.header__buttons');
const head = document.querySelector('.header__wrapper');

burger.addEventListener('click', () => {
  menu.classList.toggle('menu__list-visible');
  burger.classList.toggle('menu__burger-active');
  body.classList.toggle('active');
  btn.classList.toggle('header__buttons-active');
  head.classList.toggle('header__wrapper-active');
});
