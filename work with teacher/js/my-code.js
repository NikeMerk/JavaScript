let button = document.querySelector('.container .button');
let answerTitle = document.querySelector('.container .answer')
let gameArrayCity = [];
let arrayCityUs = [];
let variable = 0;
(function newArr() {
	for (let elem of cities) {
		gameArrayCity.push(elem);
	}
})();


// ---------------------- основной код --------------------------------

button.style.display = 'none';
alert('ВНИМАНИЕ! Все города должны быть написаны с маленькой буквы!');
	main(prompt('Введите название города.'))
	function main(checkNameCity) {  // проверка на наличие города в массиве с городами
	
		let result = gameArrayCity.some(elem => elem == checkNameCity);
		result ? deleteCity(checkNameCity) : checkWareIsCity(checkNameCity), 
		main(prompt(`введите город. Вам на: ${checkNameCity[0]}.`));
	}
	
	function checkWareIsCity(wareCity) {
		arrayCityUs.some(elem => elem == wareCity) ? alert('Город уже называли!') : main(prompt(`Введите город корректно. Вам на: ${wareCity[0]}.`));
	}

	function deleteCity(nameCity) {  // удаление названного города из массива
	
		let lustLetterNameCity = checkLustLetterNameCity(nameCity); 
		for (let i = 0; i < gameArrayCity.length; i++) {
			if (gameArrayCity[i] == nameCity) {
				arrayCityUs.push(gameArrayCity[i]);
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
				arrayCityUs.push(gameArrayCity[i]);
				gameArrayCity.splice(i, 1);
				main(prompt(`${gameArrayCity[i]}, вам на: ${checkLustLetterNameCity(gameArrayCity[i])}.`));
			} 
			else answerTitle.textContent = 'Городов на эту букву не найдено. Вы выйграли!'; 
		}
	}





