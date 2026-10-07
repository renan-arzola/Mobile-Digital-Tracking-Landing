'use strict';
// The public landing only needs a mobile menu; no third-party JavaScript is needed.
const menuButton = document.querySelector('.header__btn');
const menu = document.querySelector('.header__nav');
if (menuButton && menu) {
  menuButton.setAttribute('aria-label', 'Abrir menú');
  menuButton.setAttribute('aria-expanded', 'false');
  const setOpen = open => {
    menuButton.classList.toggle('header__btn--active', open);
    menu.classList.toggle('header__nav--active', open);
    document.body.classList.toggle('body--active', open);
    menuButton.setAttribute('aria-expanded', String(open));
  };
  menuButton.addEventListener('click', () => setOpen(menuButton.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', event => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setOpen(false); });
}
