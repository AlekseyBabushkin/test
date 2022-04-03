/* eslint-disable prefer-destructuring */
const modalBtn = document.querySelector('.fullscreen__btn');
const modal = document.querySelector('.modal');
const body = document.body;

modalBtn.addEventListener('click', () => {
  modal.classList.remove('modal--hidden');
  body.classList.toggle('none-scroll');
});

modal.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('modal__overlay') || target.classList.contains('modal__close')) {
    modal.classList.add('modal--hidden');
    body.classList.remove('none-scroll');
  }
});
