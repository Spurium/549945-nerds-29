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

const slider = document.querySelector('.carousel');

if (slider) {
  const carouselList = slider.querySelector('.carousel-list');
  const controlOne = slider.querySelector('.first');
  const controlTwo = slider.querySelector('.second');
  const controlThree = slider.querySelector('.third');

  controlOne.addEventListener('click', function (evt) {
    evt.preventDefault();

    controlOne.classList.add('active-control');
    carouselList.classList.add('slide-1');

    controlTwo.classList.remove('active-control');
    carouselList.classList.remove('slide-2');
    controlThree.classList.remove('active-control');
    carouselList.classList.remove('slide-3');
  });

  controlTwo.addEventListener('click', function (evt) {
    evt.preventDefault();

    controlTwo.classList.add('active-control');
    carouselList.classList.add('slide-2');

    controlOne.classList.remove('active-control');
    carouselList.classList.remove('slide-1');
    controlThree.classList.remove('active-control');
    carouselList.classList.remove('slide-3');
  });

  controlThree.addEventListener('click', function (evt) {
    evt.preventDefault();

    controlThree.classList.add('active-control');
    carouselList.classList.add('slide-3');

    controlOne.classList.remove('active-control');
    carouselList.classList.remove('slide-1');
    controlTwo.classList.remove('active-control');
    carouselList.classList.remove('slide-2');
  });

}
