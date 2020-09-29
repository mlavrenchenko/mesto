console.log('Hello, world');

const buttonOpenPopup = document.querySelector('.edit-button');
const buttonClosePopup = document.querySelector('.popup__close-btn');
const popup = document.querySelector('.popup');


const popupToggle = () => {
  popup.classList.toggle('popup_opened');
}

buttonOpenPopup.addEventListener('click', popupToggle);
buttonClosePopup.addEventListener('click', popupToggle);
