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


// Находим форму в DOM
// let formElement = document.querySelector()

// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
// function formSubmitHandler (evt) {
// 	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
// 												// Так мы можем определить свою логику отправки.
// 												// О том, как это делать, расскажем позже.

// 	// Находим поля формы в DOM
// 	let nameInput = // Воспользуйтесь инструментом .querySelector()
// 	let jobInput = // Воспользуйтесь инструментом .querySelector()

// 	// Получите значение полей из свойства value

// 	// Выберите элементы, куда должны быть вставлены значения полей

// 	// Вставьте новые значения с помощью textContent
// }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
