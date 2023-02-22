
let array = [];
let arrayNumbersCompare = [];
let arrayRandom = [];
let picTimeout;
let falseTimeout;
let textNumber;
let numberOne;
let numberTwo;


function pushNumbersInArray(number) {
  for (let i = 0; i < number / 2; i++) {
    array.push(i, i);
  }
  createArrayRandom(array);
}

function createArrayRandom(arr) { //
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
}

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

function createButtonReload() {
  let button = document.createElement('button');
  button.classList.add('button-reload');
  button.textContent = 'play again';
  return button;
}

function createMainBlock() {
  let mainBlock = document.createElement('div');
  mainBlock.classList.add('card');
  return mainBlock;
}

function createCards(i) {
  let cards = document.createElement('div');
  cards.classList.add('cards');
  cards.textContent = i;
  cards.onclick = () => {
    textNumber = i;
    clearTimeout(picTimeout);
    cards.style = 'transform: rotateY(180deg);'
    picTimeout = setTimeout(() => {
      cards.style = `background-image: url(img/pic-${i}.jpg)`;
    }, 290);
    let result = checkTwoCards(i)
    if (result == false) {
      clearInterval(falseTimeout);
      falseTimeout = setTimeout(() => {
        cards.style = 'transform: rotateY(-180deg); transition: transform, 0.9s ease';
      }, 900);
    }
  };
  return cards;
}

function checkTwoCards(number) {
  arrayNumbersCompare.push(number)
  console.log(arrayNumbersCompare)
  if (arrayNumbersCompare.length == 2) {
    if (arrayNumbersCompare[0] != arrayNumbersCompare[1]){
      console.log('false')
      return false;
    }
    else {
      return true;
    }
  }
}

function takeStyle(blocks) {
  for(let i of array) {
    blocks.append(createCards(i));
  }
}

function startGame(container) {
  const startForm = createForm();
  const downloadMainBlock = createMainBlock();
  const buttonReload = createButtonReload();
  container.append(startForm.form, downloadMainBlock);

  startForm.formButton.onclick = (e) => {
    container.append(buttonReload)
    let widthInput = Number(startForm.inputWidth.value);
    let heightInput = Number(startForm.inputHeight.value);
    let numberInput = widthInput * heightInput;
    checkValidInputNumber(numberInput);

    e.preventDefault();

    pushNumbersInArray(numberInput)
    downloadMainBlock.style = `display:grid; grid-template-columns: repeat(${widthInput}, 1fr); grid-row-gap: 10px;`;
    takeStyle(downloadMainBlock);


  };
}
window.startGame = startGame



















