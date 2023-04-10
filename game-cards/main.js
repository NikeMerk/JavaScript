let timeNum = 60;
let howMuchCardsMustBe = []; // массив с номерами карточек (по порядку)
let parArray = []; // массив с парными номерами
let cardClick = 0;
let temporarily;
let mySetTimeout;
let mySetInterval;
let checkFinish = 0

function createButtonReload() { // создание кнопки перезагрузки (сыграть еще)
  let button = document.createElement('button');
  button.classList.add('button-reload');
  button.innerHTML = 'Сыграть еще?';
  button.onclick = () => {
    window.location.reload()
  }
  return button;
}

function startTimerGame($titleTimer) { // запуск таймера игры 60 сек
  let $container = document.body.querySelector('.container');

  mySetInterval = setInterval(() => {
    if (timeNum == 0) {
      clearInterval(mySetInterval);
      alert('Время вышло. Вы проиграли');
      $container.classList.toggle('container-opacity');
      document.body.append(createButtonReload());
    }
    $titleTimer.textContent = timeNum;
    timeNum -= 1;
  }, 1000);

}

function checkFinishGame() { // проверка завершения игры
  let allCardInGame = howMuchCardsMustBe.length;
  let container = document.body.querySelector('.container');
  if (allCardInGame == checkFinish) {
    alert('Вы Победили!')
    container.classList.toggle('container-opacity');
    document.body.append(createButtonReload());
  }
}

function createRandomParArray() { // гениратор рандома номеров
  let m = parArray.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = parArray[m];
    parArray[m] = parArray[i];
    parArray[i] = t;
  }
}

function createParArray() { // создание парных номеров
  for (let i = 0; i < howMuchCardsMustBe.length / 2; i++) {
    parArray.push(i, i);
  }
  createRandomParArray();  // создание рандомного массива
}

function createArrAllNumbers(inputWidth, inputHeight) { // создание номеров(кол-ва) карточек
  let sum = inputHeight * inputWidth;
  for (let i = 0; i < sum; i++) {
    howMuchCardsMustBe.push(i);
  };
}

function checkValidInput(inputWidth, inputHeight) { // проверка валидности введенных данных input
  let inputSum = inputWidth * inputHeight;
  if (inputWidth == 0 || inputHeight == 0) alert('Впишите все значения'), window.location.reload();
  if (inputSum > 16) alert('Не больше 16 карточек в сумме!'), window.location.reload();
}

function createForm() { // создание form
  let form = document.createElement('form');
  let formBlock = document.createElement('div');
  let inputWidth = document.createElement('input');
  let inputHeight = document.createElement('input');
  let formButton = document.createElement('button');

  form.classList.add('form');
  formBlock.classList.add('form-block');
  inputHeight.classList.add('input', 'input-height');
  inputWidth.classList.add('input', 'input-width');
  formButton.classList.add('form__button');

  formButton.textContent = 'Старт';
  inputWidth.placeholder = 'в ширину';
  inputHeight.placeholder = 'в высоту';

  formBlock.append(inputWidth, inputHeight);
  form.append(formBlock, formButton);

  return {
    form,
    formBlock,
    inputHeight,
    inputWidth,
    formButton,
  }
}

function createMainBlock() { // создание блока в котором будут карточки
  let mainBlock = document.createElement('div');
  mainBlock.classList.add('main-block');
  return mainBlock;
}

function pushCardsInMainBlock(mainBlock, card, inputWth)  { // добавление карточек в основной блок
  mainBlock.style = `grid-template-columns: repeat(${inputWth}, 1fr);`;
  for (let i in howMuchCardsMustBe) {
    mainBlock.append(card(i).card);
  }
}

function temporarilyBlockedCard(allCards) { // Временная блокировка всех карточек
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].classList.toggle('card-block');
  }
}

function falseCoincidence(thisCard, allCards) { // несовпадение выбраных карточек
  let backCardOne = thisCard.querySelector('.card-back');
  let frontCardOne = thisCard.querySelector('.card-front');

  let backCardTwo = temporarily.querySelector('.card-back');
  let frontCardTwo = temporarily.querySelector('.card-front');

  mySetTimeout = setTimeout(() => {
    backCardOne.classList.toggle('card-back-buff');
    frontCardOne.classList.toggle('card-front-buff');
    backCardTwo.classList.toggle('card-back-buff');
    frontCardTwo.classList.toggle('card-front-buff');
    temporarilyBlockedCard(allCards);
    cardClick = 0
  }, 770);
}

function checkSelectedCard(allCards, thisCard) { // анализ(проверка) выбранных(открытых) карточек
  temporarilyBlockedCard(allCards); // блокирую карточки пока открыты 2 выбранны
  if (thisCard.textContent == temporarily.textContent) {
    thisCard.classList.toggle('block-card-ever');
    temporarily.classList.toggle('block-card-ever');
    temporarilyBlockedCard(allCards); // разблокирую все карточки кроме 2-х совпавших
    cardClick = 0
    checkFinish += 2;
    checkFinishGame(); // проверка на окончание игры
  } else {
    falseCoincidence(thisCard, allCards); // если карточки не совпали
  }
}

function createCard(id) { // создание карточки
  let card = document.createElement('div');
  let cardFront = document.createElement('div');
  let cardBack = document.createElement('div');

  card.classList.add('card');
  cardBack.style = `background-image: url(/img/pic-${parArray[id]}.jpg);`
  card.textContent = parArray[id];
  card.id = id;
  cardFront.classList.add('card-front');
  cardBack.classList.add('card-back');

  card.onclick = () => {
    cardClick++;
    cardFront.classList.toggle('card-front-buff');
    cardBack.classList.toggle('card-back-buff');
    let allCard = document.querySelectorAll('.card');
    if (cardClick == 2) {
      checkSelectedCard(allCard, card);
    };

    temporarily = card;
  }

  card.append(cardFront, cardBack);

  return {
    card,
    cardFront,
    cardBack,
  }
}

function startGame(container) { // начало игры
  let startForm = createForm();
  let startMainBlock = createMainBlock();
  const startCard = createCard;
  container.append(startForm.form, startMainBlock);

  startForm.formButton.onclick = (e) => {
		const inputWth = startForm.inputWidth.value;
    const inputHth = startForm.inputHeight.value;
    const $titleTimer = document.getElementById('min');

    // подготовка к выгрузке карточек
    checkValidInput(inputWth, inputHth); // проверка валидности input

    createArrAllNumbers(inputWth, inputHth); // создание массива с номерами всех карточек

    createParArray(inputWth, inputHth); // создание парно-номерного массива

    e.preventDefault();

    startTimerGame($titleTimer);

    pushCardsInMainBlock(startMainBlock, startCard, inputWth); // Загрузка карточек на страницу

  }
}

window.startGame = startGame;








