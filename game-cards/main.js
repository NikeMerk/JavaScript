let min = 60;
let array = [];
let howMuchCardsMustBe = [];
let arrayObjects = [];
let checkTwoObjects = [];
let picTimeout;
let variable = 0;
let pushed = 0;
let loop = 0;
let oneCard;
let falseSetTimeout;
let falsePicTimeout;
let myInterval;
let title = document.getElementById('title');
let titleMin = document.getElementById('min');

function createForm() {
  let form = document.createElement('form');
  let inputWidth = document.createElement('input');
  let inputHeight = document.createElement('input');
  let formButton = document.createElement('button');
  let formBlock = document.createElement('div');

  form.classList.add('form');
  form.id = 'form';
  formBlock.classList.add('form-block');
  inputHeight.classList.add('form__input-height', 'input');
  inputWidth.classList.add('form__input-width', 'input');
  formButton.classList.add('form__button');
  formButton.id = 'form-button'

  inputHeight.placeholder = 'height';
  inputWidth.placeholder = 'in width';
  formButton.textContent = 'Play';

  formBlock.append(inputWidth, inputHeight,)
  form.append(formBlock, formButton);

  return {
    form,
    inputWidth,
    inputHeight,
    formButton,
  }
}

function createMainBlock() {
  let mainBlock = document.createElement('div');
  mainBlock.classList.add('card');
  mainBlock.id = 'card';
  return mainBlock;
}

function createReloadButton(text) {
  let button = document.createElement('button');
  button.classList.add('button-reload');
  button.id = ('button-reload');
  button.textContent = text;

  button.onclick = () => {
    window.location.reload();
  };
  return button;
}

function createArrayRandom(arr) {
  let m = arr.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
}

function checkValidInputNumber(numberInput) {
  if (numberInput % 2 != 0) {
    alert('Please, inter even numbers!');
    startGame();
  }
  if (numberInput > 16) {
    alert('Sum can not be more than 16');
    startGame();
  }
}

function pushNumbersInArray(number) {
  for (let i = 0; i < number; i++) {
    howMuchCardsMustBe.push(i);
  }
  for (let i = 0; i < howMuchCardsMustBe.length / 2; i++) {
    array.push(i);
    array.push(i);
  }
  createArrayRandom(array);
}

function createCards(obj) {
  let cards = document.createElement('div');
  cards.classList.add('cards');
  cards.id = obj.id;

  cards.textContent = obj.textNumber;

  cards.onclick = () => {
    cards.classList.toggle('reverse-cards');
    clearTimeout(picTimeout);
    picTimeout = setTimeout(() => {
      cards.style = `background-image: url(/img/pic-${obj.textNumber}.jpg)`
    }, 290);
    if (loop > 0) {
      if (oneCard.textContent != cards.textContent) {
        falseSetTimeout = setTimeout(() =>{
          cards.classList.toggle('reverse-cards');
          oneCard.classList.toggle('reverse-cards');
          falsePicTimeout = setTimeout(() =>{
            cards.style = `background-image: none)`;
            oneCard.style = `background-image: none)`;
          },290);
        },900);
        loop = 0;
      }else {
        setTimeout(() =>{
          console.log(cards, oneCard);
          cards.classList.toggle('card-disabled');
          oneCard.classList.toggle('card-disabled');
          loop = 0;
        }, 800)
      }
    }else oneCard = cards, loop++ ;
  };

  return cards;
}

function takeStyle(blocks) {
  for (let i of howMuchCardsMustBe) {
    let obj = {
      id: i,
    }
    arrayObjects.push(obj);
  }
  for (let elem of arrayObjects) {
    elem['textNumber'] = array[pushed];
    pushed++;
  }
  for(let i of arrayObjects) {
    blocks.append(createCards(i));
  }
}

function startGame(container) {
  const startForm = createForm();
  const downloadMainBlock = createMainBlock();
  const pushButton = createReloadButton('Play again?');
  container.append(startForm.form, downloadMainBlock);

  startForm.formButton.onclick = (e) => {
    let inputWidth = Number(startForm.inputWidth.value);
    let inputHeight = Number(startForm.inputHeight.value);
    if (inputWidth == 0 || inputHeight == 0) {
      alert('Please enter all input');
      window.location.reload();
    }
    let numberInput = inputWidth * inputHeight;
    checkValidInputNumber(numberInput);

    e.preventDefault();

    let form = document.getElementById('form');
    let mainBlock = document.getElementById('card');
    title.classList.toggle('title-animation');
    startForm.formButton.disabled = true;
    setTimeout(() => {
      form.classList.toggle('form-display');
      mainBlock.classList.toggle('card-opacity');
    }, 1000);
    startForm.form.classList.toggle('form-none');

    pushNumbersInArray(numberInput);
    downloadMainBlock.style = `grid-template-columns: repeat(${inputWidth}, 1fr);`;
    takeStyle(downloadMainBlock);
    myInterval = setInterval(() => {
      if (min == '0') {
        clearInterval(myInterval);
        titleMin.textContent = 'you lose';
        container.classList.toggle('container-opacity');
        document.body.append(pushButton);
      }
      titleMin.textContent = String(min);
      min--;
    }, 1000);
  };
}

window.startGame = startGame;
