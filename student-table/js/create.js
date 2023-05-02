let arrayObject = [];

const $container = document.querySelector('.container');

function createForm() {
	let form = document.createElement('form');
	let inputName = document.createElement('input');
	let	inputSurname = document.createElement('input');
	let inputPatronymic = document.createElement('input');
	let inputBthDay = document.createElement('input');
	let inputStart = document.createElement('input');
	let inputFaculty = document.createElement('input');
	let formButton = document.createElement('button');
	form.classList.add('form');
	inputName.classList.add('input-name', 'input');
	inputSurname.classList.add('input-surname', 'input');
	inputPatronymic.classList.add('input-patronymic', 'input');
	inputBthDay.classList.add('input-bth-day', 'input');
	inputStart.classList.add('input-start', 'input');
	inputFaculty.classList.add('input-faculty', 'input');
	formButton.classList.add('form-button');
	inputBthDay.type = 'date';
	inputStart.type = 'number';
	formButton.innerHTML = 'add student';
	inputName.placeholder = 'Введите имя';
	inputSurname.placeholder = 'Введите фамилию';
	inputPatronymic.placeholder = 'Введите отчество';
	inputBthDay.placeholder = 'День рождения';
	inputStart.placeholder = 'Начало обучения';
	inputFaculty.placeholder = 'Факультет';
	form.append (
		inputName,
		inputSurname,
		inputPatronymic,
		inputBthDay,
		inputStart,
		inputFaculty,
		formButton,
	);
	return {
		form
	}
}

function createItemBodyTable() {
	let tdItemName = document.createElement('td');
	let tdItemSurName = document.createElement('td');
	let tdItemPatronymic = document.createElement('td');
	let tdItemBthDay = document.createElement('td');
	let tdItemStart = document.createElement('td');
	let tdItemFaculty = document.createElement('td');

	
}
$container.append(createForm().form);
