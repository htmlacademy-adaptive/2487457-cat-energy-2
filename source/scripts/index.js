/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const navList = document.querySelector('.main-nav__list');
const mainHeader = document.querySelector('.main-header');

mainHeader.classList.remove('main-header--nojs');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navList.classList.contains('main-nav__list--opened')) {
    navList.classList.remove('main-nav__list--opened');
    navToggle.classList.remove('main-nav__toggle--opened');
    navToggle.classList.add('main-nav__toggle--closed');
  } else {
    navList.classList.add('main-nav__list--opened');
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
  }
});
