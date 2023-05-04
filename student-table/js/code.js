let arrayObject = [];

const formButton = document.getElementById('form-button');
const takeElementsTable = createItemFromBodyTable;
const tableBody = document.querySelector('.container .table .table-body');
const buttonBth = document.getElementById('button-bthday');
const allTableButtons = document.querySelectorAll('.table-button');
let path;



// СОБЫТИЕ на кнопку form 
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

// СОБЫТИЕ на сортировочнце кнопки table
allTableButtons.forEach((buttonBth) => {
	buttonBth.onclick = (e) => {
		// удаляем данные таблицы
		deleteAllTableElements();    

		// сохраняем имя класса нажатой кнопки
		path = e.currentTarget.dataset.path; 

		// сортируем массив по заданн сдассу
		arrayObject.sort(sortFunction());    

		// выгружаем отсортированныйй массив по классу
		arrayObject.map((obj => {tableBody.append(takeElementsTable(obj))}))
	}
});






// Ф-ция сортировки массива объектов
function sortFunction() {
	return function(one, two) {
		if (one[path] > two[path]) return 1;
		else return -1;
	}
}

// Ф-ция удаления елементов таблицы
function deleteAllTableElements() {
	let allElementTable = document.querySelectorAll('.tr');
	allElementTable.forEach(elem => elem.remove());
}

// Ф-ция проверки валид input
function checkInputValue() {
	let allInput = document.querySelectorAll('input');
	let result = true;
	allInput.forEach((input) => {
		if (!input.value) result = false;
	});
	return result;
}

// Ф-ция удаления input.value
function deleteAllInputValue() {
	let allInput = document.querySelectorAll('input');
	allInput.forEach((input) => {input.value = '';});
}




