/* #Popup Gallery Slider
================================================== */
if (document.querySelector('.popup .swiper')) {
  new Swiper(".popup .swiper", {
    navigation: {
      nextEl: ".popup .next",
      prevEl: ".popup .prev",
    },
  });
}

/* #Popup
================================================== */
const body = document.querySelector('body');
const popup = document.querySelector('.popup');
const popupToggler = document.querySelector('.popup-toggler');
const popupClose = document.querySelector('.popup-close');

if (popup) {
  popupToggler.addEventListener('click', (e) => {
    popup.classList.add('show');
    body.classList.add('no-scroll');
  });

  popupClose.addEventListener('click', (e) => {
    popup.classList.remove('show');
    body.classList.remove('no-scroll');
  });
}