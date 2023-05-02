let arrayObject = [];

const formButton = document.getElementById('form-button');
const takeElementsTable = createItemFromBodyTable;
const tableBody = document.querySelector('.container .table .table-body');

formButton.onclick = (e) => {

	if (checkInputValue()) { // проверка на наличие ввода всех input
		e.preventDefault();

		let newObj = createNewObject(); // создание объекта и добавление его в массив
		tableBody.append(takeElementsTable(newObj));
		console.log(newObj);
	}
}

function checkInputValue() {
	let allInput = document.querySelectorAll('input');
	let result = true;
	allInput.forEach((input) => {
		if (!input.value) result = false;
	});
	return result;
}

function createNewObject() {
	let newObject = {
		name: document.getElementById('input-name').value,
		surname: document.getElementById('input-surname').value,
		patronymic: document.getElementById('input-patronymic').value,
		birthday: document.getElementById('input-bth-day').value,
		start: document.getElementById('input-start').value,
		faculty: document.getElementById('input-faculty').value,
	};
	arrayObject.push(newObject);
	console.log(arrayObject);
	return newObject;
}