let mySetTimeout;
const $formButton = document.getElementById('form-button');
const $body = document.querySelector('.page');
const $blockTtyan = document.querySelector('.block-page-tyan');
const regLetter = /[A-Za-z!"№;%:?*()_=+`~@#$^/.]/g;
const regRussianWords = /([а-я]+)/uig; 
const regSpace = /\s{2,}/g;
const regHyphen = /\-{2,}/g;
const allInput = document.querySelectorAll('.input');

allInput.forEach(input => {
	input.addEventListener('input', listenerInput);
})

$formButton.addEventListener('click', funcBtnClick);

function funcBtnClick(e) {
	e.preventDefault();
	const audio = new Audio();
	audio.src = '/input/yametekudasaicat.mp3'
	audio.play();
	this.disabled = true;
	$blockTtyan.classList.toggle('tyan-visible')
	clearTimeout(mySetTimeout);
	mySetTimeout = setTimeout(() => {
		$blockTtyan.classList.toggle('tyan-visible')
		this.disabled = false;
	}, 800);
};

function listenerInput() {
	this.addEventListener('blur', listenerBlur);
	if (this.value === this.value.replace(regLetter)) {
		this.classList.remove('input-false');
		this.classList.add('input-valid')
	}
	else {
		this.value = this.value.replace(regLetter, '')
		this.classList.remove('input-valid');
		this.classList.add('input-false')
	}
}

function listenerBlur() {
	let textThisValue = this.value.trim();
	let res = textThisValue.replace(regSpace, '').replace(regHyphen, '');
	console.log(res);
	let result = res.slice(0, 1).toUpperCase() + res.slice(1);
	this.value = result;
}
