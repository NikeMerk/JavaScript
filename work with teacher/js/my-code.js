let button = document.querySelector('.container .button');
let answerTitle = document.querySelector('.container .answers')
let gameArrayCity = [];
let input = document.querySelector('.container .input');
let checkButton = document.querySelector('.container .button-input');
(function newArr() {
	for (let elem of cities) {
		gameArrayCity.push(elem);
	}
})();


// ---------------------- основной код --------------------------------

document.addEventListener('DOMContentLoaded', () => {
	let inputNameCity = input.value;
	checkButton.disabled = true;
	input.oninput = () => {
		input.value ? checkButton.disabled = false : checkButton.disabled = true;
	};
	button.onclick = () => {
		setInterval(() => {
			alert('ВНИМАНИЕ! Города должны быть написаны с маленькой буквы!');
		}, 500);
		setInterval(() => {
			main(prompt('Введите название города.'))
			function main(checkNameCity) {  // проверка на наличие города в массиве с городами
			
				let result = gameArrayCity.some(elem => elem == checkNameCity);
				result ? deleteCity(checkNameCity) : alert('либо город уже был, либо некоректно написан.'), 
				main(prompt(`введите город. Вам на: ${checkNameCity[0]}.`));
			}
			
			function deleteCity(nameCity) {  // удаление названного города из массива
			
				let lustLetterNameCity = checkLustLetterNameCity(nameCity); 
				for (let i = 0; i < gameArrayCity.length; i++) {
					if (gameArrayCity[i] == nameCity) {
						gameArrayCity.splice(i, 1);
						break;
					}
				}
				getCityOnLustLetter(lustLetterNameCity);
			}
			
			function checkLustLetterNameCity(elem) {	// определение последней буквы города
			
				if (elem[elem.length - 1] == 'ъ' || elem[elem.length - 1] == 'ь' || elem[elem.length - 1] == 'ы') {
					return elem[elem.length - 2];
				}
				else {
					return elem[elem.length - 1];
				}
			}
			
			function getCityOnLustLetter(lustLetter) {
				for (let i = 0; i < gameArrayCity.length; i++) {
					if (gameArrayCity[i][0] == lustLetter) {
						gameArrayCity.splice(i, 1);
						main(prompt(`${gameArrayCity[i]}, вам на: ${checkLustLetterNameCity(gameArrayCity[i])}.`));
					} 
					else answerTitle.textContent = 'Городов на эту букву не найдено. Вы выйграли!'; 
				}
			}
		}, 900);
	};
});











