let modal = document.getElementById('modal');
let modalInner = document.getElementById('modal-inner');
let buttonsOrder = document.querySelectorAll('.button-order');

// обработка каждой кнопки, убирает стандартное действие у ссылки
for (var i = 0; i < buttonsOrder.length; i++) {
  buttonsOrder[i].onclick = function () {
    event.preventDefault();
    modal.classList.add('modal--show');
  };
}

// Закрытие модалки по клику вне области модального окна
modal.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(modalInner);

  if (!withinBoundaries) {
    modal.classList.remove('modal--show');
  }
})

// закрытие модалки по кнопке Esc
document.addEventListener('keydown', function (event) {
  if (event.code == 'Escape') {
    modal.classList.remove('modal--show');
  }
});
