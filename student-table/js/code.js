let arrayObject = [
	{
		'name': 'Bike',
		'surname': 'Aerk',
		'patronymic': 'Zadic',
		'birthday': '30.10.1990',
		'start': 11,
		'faculty': 'farbis',
	},

	{
		'name': 'Qike',
		'surname': 'Kerk',
		'patronymic': 'Badic',
		'birthday': '30.10.1999',
		'start': 7,
		'faculty': 'qarbis',
	},

	{
		'name': 'Sike',
		'surname': 'Perk',
		'patronymic': 'Adic',
		'birthday': '30.10.2001',
		'start': 25,
		'faculty': 'gharbis',
	},
	
	{
		'name': 'Aike',
		'surname': 'Zerk',
		'patronymic': 'Padic',
		'birthday': '30.10.995',
		'start': 1,
		'faculty': 'varbis',
	},
];

const formButton = document.getElementById('form-button');
const takeElementsTable = createItemFromBodyTable;
const tableBody = document.querySelector('.container .table .table-body');
const buttonName = document.getElementById('button-name');
const buttonSurName = document.getElementById('button-surname');
const buttonPatronymic = document.getElementById('button-patronymic');
const buttonBth = document.getElementById('button-bthday');
const buttonStart = document.getElementById('button-start-day');
const buttonFaculty = document.getElementById('button-faculty');
const allTableButtons = document.querySelectorAll('.table-button');
let path;

formButton.onclick = (e) => {
	if (checkInputValue()) { // проверка на наличие ввода всех input
		e.preventDefault();
		let newObj = createNewObject(); // создание объекта и добавление его в массив
		tableBody.append(takeElementsTable(newObj));
	}
}

allTableButtons.forEach((buttonBth) => {
	buttonBth.onclick = (e) => {
		path = e.currentTarget.dataset.path;
		if (path === 'birthday') sortData();
		arrayObject.sort((a, b) => {
			if (a[path] > b[path]) return 1;
			else return -1;
		});
		console.log(arrayObject);
	}
});

function sortData() {
	arrayObject.sort((a, b) => moment(b.date, 'DD.MM.YY') - moment(a.date, 'DD.MM.YY'))
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
		'name': document.getElementById('input-name').value,
		'surname': document.getElementById('input-surname').value,
		'patronymic': document.getElementById('input-patronymic').value,
		'birthday': document.getElementById('input-bth-day').value,
		'start': parseInt(document.getElementById('input-start').value),
		'faculty': document.getElementById('input-faculty').value,
	};
	arrayObject.push(newObject);
	return newObject;
}


