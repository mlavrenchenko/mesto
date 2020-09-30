console.log('Hello, world');

const buttonOpenPopup = document.querySelector('.edit-button');
const buttonClosePopup = document.querySelector('.popup__close-btn');
const popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

const popupToggle = () => {
  console.log('printToggle')
  let popupNameInput = formElement.querySelector('.popup__name');
  let popupJobInput = formElement.querySelector('.popup__job');
  popupNameInput.value = profileName.textContent;
  popupJobInput.value = profileJob.textContent;
  popup.classList.toggle('popup_opened');
}

buttonOpenPopup.addEventListener('click', popupToggle);
buttonClosePopup.addEventListener('click', popupToggle);


function formSubmitHandler (evt) {
  evt.preventDefault();

  let nameInput = formElement.querySelector('.popup__name').value;
  let jobInput = formElement.querySelector('.popup__job').value;
  console.log(nameInput, jobInput);
  profileName.textContent = nameInput;
  profileJob.textContent = jobInput;
  popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);


