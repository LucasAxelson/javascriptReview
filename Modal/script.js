'use strict';

function keyPress(e, key) {
  if (e.key === key) {
    modalClass.add(`hidden`);
    overlayClass.add(`hidden`);
  }
}

function clickButton(e, element, comment) {
  const target = e.target.closest(element);
  if (target) {
    modalClass[comment](`hidden`);
    overlayClass[comment](`hidden`);
  }
}

const modal = document.querySelector(`.modal`);
const modalClass = modal.classList;

const overlay = document.querySelector(`.overlay`);
const overlayClass = overlay.classList;

const btnCloseModal = document.querySelector(`.close-modal`);
const btnsShowModal = document.querySelectorAll(`.show-modal`);

//EventListeners for the Modal

//Open Modal
for (let i = 0; i < btnsShowModal.length; i++) {
  document.addEventListener(`click`, function (e) {
    clickButton(e, `.show-modal`, `remove`);
  });
}

//Close Modal - Click close button
document.addEventListener(`click`, function (e) {
  clickButton(e, `.close-modal`, `add`);
});

//Close Modal - Click out of overlay
document.addEventListener(`click`, function (e) {
  clickButton(e, `.overlay`, `add`);
});

//Close Modal - Press Esc key
document.addEventListener(`keyup`, function (e) {
  keyPress(e, `Escape`);
});
