let allCity = [];
let arrayUsCity = [];
let arrLustLatter = [];
let variable = 0;
(function newArr() {
	for (let elem of cities) {
		allCity.push(elem);
	}
})();


// ---------------------- основной код --------------------------------


function checkLustLetterNameCity(elem) {	// определение последней буквы города
	if (elem[elem.length - 1] == 'ъ' || elem[elem.length - 1] == 'ь' || elem[elem.length - 1] == 'ы') {
		return elem[elem.length - 2];
	}
	else {
		return elem[elem.length - 1];
	}
}

function main(inputCity) {  
	let result = allCity.some(elem => elem == nameCity);
	result ? continues(inputCity) : inputErrors(inputCity);
}


function continues(nameCity) {  
	let lustLatter = checkLustLetterNameCity(nameCity);
	for (let i = 0; i < allCity.length; i++) {
		if (allCity[i] == nameCity) {
			arrayUsCity.push(allCity[i]);
			allCity.splice(i, 1);
			break;
		}
	}
	getCity(lustLatter);
}

function inputErrors() {
	if (variable == 0) main(prompt('Впишите город правильно!'));
// not eat
}

function getCity(lustLatter) {
	for (let i = 0; i < allCity.length; i++)  {
		let firstLetterCity = allCity[i][0];
		if (firstLetterCity == lustLatter) {
			arrayUsCity.push(allCity[i]);
			arrLustLatter.push(allCity[i][allCity.length - 1]);
			allCity.splice(i, 1);
		}
	}
}