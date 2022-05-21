const hamburger = document.querySelector('.header__hamburger')

const navigation = document.querySelector('.navigation')

const bodyOverflow = document.querySelector('body')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('header__hamburger--open');
  navigation.classList.toggle('navigation--open');
  bodyOverflow.classList.toggle('show-main-nav--active');
})

// Убираю класс, если пользователь ресайзит  окно при открытом мобильном меню
window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 768px)").matches) {
    navigation.classList.remove('navigation--open');
    bodyOverflow.classList.remove('show-main-nav--active', 'show-main-nav');
  } else {
    bodyOverflow.classList.add('show-main-nav');
  }
});

// Это сделал для того, чтобы убрать "мерцание" пунктов меню при ресайзе с планшета на мобильный
window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 320px)").matches) {
    navigation.classList.add('navigation--mobile');
  }
  if (window.matchMedia("(min-width: 768px)").matches) {
    navigation.classList.remove('navigation--mobile');
  }
});
