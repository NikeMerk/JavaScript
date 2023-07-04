// let $ = document.querySelector.bind(document);
// const $container = $('.container');
// const Create = document.createElement.bind(document);

// function onButtonClick() {

// 	// This в обр-е событий всегда будет тем елементом на котором весит обработчик
// 	this.innerHTML = String(Number(this.innerHTML) + 1)
// }	

// function createButton() {
// 	let count = 0;
// 	while(count != 5) {
// 		let button = Create('button');
// 		button.textContent = 0
// 		button.addEventListener('click', onButtonClick);
// 		$container.append(button);
// 		count++
// 	}
// }

// createButton()