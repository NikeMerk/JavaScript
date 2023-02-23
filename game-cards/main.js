
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
let falsePicTimeout


function createForm() {
  let form = document.createElement('form');
  let inputWidth = document.createElement('input');
  let inputHeight = document.createElement('input');
  let formButton = document.createElement('button');
  let formBlock = document.createElement('div');

  form.classList.add('form');
  inputHeight.classList.add('form__input-height');
  inputWidth.classList.add('form__input-width');
  formButton.classList.add('form__button');

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
  return mainBlock;
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
  // cards.classList.add('card-number');
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
        console.log(cards, oneCard)
        setTimeout(() =>{
          console.log(cards, oneCard)
          cards.classList.toggle('card-disabled')
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
  container.append(startForm.form, downloadMainBlock);

  startForm.formButton.onclick = (e) => {
    let inputWidth = Number(startForm.inputWidth.value);
    let inputHeight = Number(startForm.inputHeight.value);
    let numberInput = inputWidth * inputHeight;
    checkValidInputNumber(numberInput);

    e.preventDefault();

    pushNumbersInArray(numberInput)
    downloadMainBlock.style = `grid-template-columns: repeat(${inputWidth}, 1fr);`;
    takeStyle(downloadMainBlock);
  };
}
window.startGame = startGame;
