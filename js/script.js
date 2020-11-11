const buttonOpen = document.querySelector('#btn-contact-modal');
const buttonClose = document.querySelector('#btn-close-modal');
const modal = document.querySelector('#contact-modal');

function openModal(e) {
  e.preventDefault();
  modal.classList.add('modal-window-show');
}

function closeModal() {
  modal.classList.remove('modal-window-show');
}

buttonClose.addEventListener('click', closeModal);
buttonOpen.addEventListener('click', openModal);
