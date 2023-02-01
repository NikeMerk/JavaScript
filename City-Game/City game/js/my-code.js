let allCity = [];
let arrayUsCity = [];
let arrLustLatter = [];
let variable = 0;
(function newArr() {
	for (let elem of cities) {
		allCity.push(elem);
	}
})();

// ---------------------- Основные функции --------------------------------

alert('Внимание! Все города должны быть написаны с маленькой буквы!');
main(prompt('Введите город.'));

function main(inputCity) {  // основная(начальная) функция
	let result = allCity.some(elem => elem == inputCity);
	result ? continues(inputCity) : inputErrors(inputCity);
}

function continues(nameCity) {  // инспектор done input
	let lustLatter = getLastLetterCity(nameCity);

	for (let i = 0; i < allCity.length; i++) {
		if (allCity[i] == nameCity) {
			arrayUsCity.push(allCity[i]);
			variable++;
			allCity.splice(i, 1);
			break;
		}
	}
	getCityOnLustLetter(lustLatter);
}

function inputErrors(city) {  // инспектор error input
	if (variable == 0) main(prompt(`Не успели начать, а уже ошибка. Введите имя города корректно пожалуйста!`));
	else {
		checkCorrectInputLetter(city);
	}
}

// ---------------------- функции проверки --------------------------------

function checkCorrectInputLetter(inputCityName) {  // глобальная проверка введенного города
	let firstLetterInputCityName = inputCityName[0];
	let lastLetterInArrLetter = arrLustLatter[arrLustLatter.length - 1];
	let getUsCity = arrayUsCity.some(elem => elem == inputCityName);
	let getAllCity = allCity.some(elem => elem == inputCityName);

	if (firstLetterInputCityName != lastLetterInArrLetter) {
		checkCorrectInputLetter(prompt(`Вы написали город не на ту букву. Вам на: ${lastLetterInArrLetter}.`));
	}
	else {
		if (getUsCity == true) { // проверка на наличие введенного города в массиве ИСПОЛЬЗОВАННЫХ городов
			checkCorrectInputLetter(prompt(`Город уже называли. давайте снова. Вам на: ${lastLetterInArrLetter}.`));
		}
		else {
			if(getAllCity) { // проверка на наличие введенного города в массиве ВСЕХ городов
				main(inputCityName);
			}
			else {
				checkCorrectInputLetter(prompt(`Введите город правильно. Вам на: ${lastLetterInArrLetter}.`))
			}
		}
	}
}

function getCityOnLustLetter(lustLatter) { // выдать игроку город на посл-ю бук-у его города
	let resultPc = allCity.some(elem => elem[0] == lustLatter);
	if (!resultPc) {
		alert(`Вы победили!`);
		return;
	}else {
		for (let i = 0; i < allCity.length; i++) {
			let firstLetterCity = allCity[i][0];
			let cityOnThisLatter = allCity[i];

			if (firstLetterCity == lustLatter) {
				arrayUsCity.push(cityOnThisLatter);
				arrLustLatter.push(getLastLetterCity(cityOnThisLatter));
				allCity.splice(i, 1);
				let resultUser = allCity.some(elem => elem[0] == arrLustLatter[arrLustLatter.length - 1]);
				if (!resultUser) {
					alert(`Вы Проиграли!`);
					return;
				}else {
					checkCorrectInputLetter(prompt(`${cityOnThisLatter}, вам на: ${arrLustLatter[arrLustLatter.length - 1]}`));
				}
			}
		}
	}
}

function getLastLetterCity(elem) {	// определение последней буквы города
	let lastLetterCity = elem[elem.length - 1];
	if (lastLetterCity == 'ъ' || lastLetterCity == 'ь' || lastLetterCity == 'ы') {
		return elem[elem.length - 2];
	}else {
		return elem[elem.length - 1];
	}
}

