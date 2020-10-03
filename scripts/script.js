const buttonOpenPopup = document.querySelector('.edit-button');
const buttonClosePopup = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popupNameInput = formElement.querySelector('.popup__info_name');
let popupJobInput = formElement.querySelector('.popup__info_job');

const popupToggle = () => {
  popupNameInput.value = profileName.textContent;
  popupJobInput.value = profileJob.textContent;
  popup.classList.toggle('popup_opened');
}

buttonOpenPopup.addEventListener('click', popupToggle);
buttonClosePopup.addEventListener('click', popupToggle);


function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = popupNameInput.value;
  profileJob.textContent = popupJobInput.value;
  popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);


