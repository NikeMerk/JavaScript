
// -------------------------------- Основной Файл js с  --------------------------------

let arrayObject = [];
const formButton = document.getElementById('form-button');
const takeElementsTable = createItemFromBodyTable;
const tableBody = document.querySelector('.container .table .table-body');
const buttonBth = document.getElementById('button-bthday');
const allTableButtons = document.querySelectorAll('.table-button');
let declension = ['год', 'года', 'лет'];
let path;



// --- --- ОСНОВНЫЕ ФУНКЦИИ --- ---


// СОБЫТИЕ на кнопку form (добавление студента)
formButton.onclick = (e) => {

	// проверка на наличие ввода всех input
	if (checkInputValue()) {                
		e.preventDefault();

		// создание объекта и добавление его в массив
		let newObj = createNewObject();  
		
		// добавление елементов таблицы
		tableBody.append(takeElementsTable(newObj));

		// удаление (очищение) всех введенных input
		deleteAllInputValue();
	}
}

// СОБЫТИЕ на кнопки сортировки
allTableButtons.forEach((buttonBth) => {
	buttonBth.onclick = (e) => {
		// удаляем данные таблицы
		deleteAllTableElements();    

		// сохраняем имя класса нажатой кнопки
		path = e.currentTarget.dataset.path; 

		// сортируем массив по заданн сдассу
		arrayObject.sort(sortFunction());    

		// выгружаем данные отсорт-ого массива в таблицу по классу
		arrayObject.map((obj => {tableBody.append(takeElementsTable(obj))}))
		console.log(arrayObject)
	}
});



// --- --- ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ --- ---


// сортировка массива объектов
function sortFunction() {
	return function(one, two) {
		if (one[path] > two[path]) return 1;
		else return -1;
	}
}

// удаление елементов таблицы
function deleteAllTableElements() {
	let allElementTable = document.querySelectorAll('.tr');
	allElementTable.forEach(elem => elem.remove());
}

// проверка валид input
function checkInputValue() {
	let allInput = document.querySelectorAll('input');
	let result = true;
	allInput.forEach((input) => {
		if (!input.value) result = false;
	});
	return result;
}

// удаление input.value
function deleteAllInputValue() {
	let allInput = document.querySelectorAll('input');
	allInput.forEach((input) => {input.value = '';});
}

// валидация введенного инпута (1-я --> Заглав, ост-е --> с мал)
function validInputValue(value) {
	return value[0].toUpperCase() + value.slice(1).toLowerCase();
}

// проверка даты на наличие нуля перед цифрой есл < 10;
function converterDate(num) {
	if (num >= 0 && num <= 9) return '0' + num;
	else return num;
}

// валидация выводимой в таблицу даты (c 1900-01-01 на 01.01.1990)
function correctedDate(strDate) {
	return strDate.split('-').reverse().join('.');
}

// вычисление возраста студента
function getOldStudent(birthdayStudent) {
	return ((new Date().getTime() - new Date(birthdayStudent)) / (24 * 3600 * 365.25 * 1000)) | 0;
}

// корректная выдача года -> (1 год, 4 года, 5 лет)
function plural(number, titles) {  
	cases = [2, 0, 1, 1, 1, 2];  
	return titles[ (number%100>4 && number%100<20) ? 2 : cases[(number%10<5)?number%10:5] ];  
}

// отчет оставшихся лет учебы
function report(studentDate) {
	let nowDate = new Date();
	let nowYear = nowDate.getFullYear();

	let nowMonth = nowDate.getMonth() + 1;
	let howStudentTeach = nowYear - studentDate;

	if (howStudentTeach >= 4) {
		if (howStudentTeach = 4 && nowMonth >= 9) {
			return `${studentDate} (закончил)`;
		}
		return `${studentDate} (закончил)`;
	}
	else return ` ${studentDate} (${howStudentTeach} курс)`
}

