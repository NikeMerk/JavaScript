
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

	inputStart.type = Number

	form.classList.add('form');
	inputName.classList.add('input-name', 'input');
	inputName.id = 'input-name';
	inputSurname.classList.add('input-surname', 'input');
	inputSurname.id = 'input-surname';
	inputPatronymic.classList.add('input-patronymic', 'input');
	inputPatronymic.id = 'input-patronymic';
	inputBthDay.classList.add('input-bth-day', 'input');
	inputBthDay.id = 'input-bth-day';
	inputStart.classList.add('input-start', 'input');
	inputStart.id = 'input-start';
	inputFaculty.classList.add('input-faculty', 'input');
	inputFaculty.id = 'input-faculty';
	formButton.classList.add('form-button');
	formButton.id = 'form-button';

	inputBthDay.type = 'date';
	inputStart.type = 'number';

	formButton.innerHTML = 'add student';
	inputName.placeholder = 'Введите имя';
	inputSurname.placeholder = 'Введите фамилию';
	inputPatronymic.placeholder = 'Введите отчество';
	inputBthDay.placeholder = 'День рождения';
	inputStart.placeholder = 'Начало обучения';
	inputFaculty.placeholder = 'Факультет';

	inputName.required = true;
	inputSurname.required = true;
	inputPatronymic.required = true;
	inputBthDay.required = true;
	inputStart.required = true;
	inputFaculty.required = true;

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

function createItemFromBodyTable(obj) {

	let tr = document.createElement('tr');
	let tdItemName = document.createElement('td');
	let tdItemSurName = document.createElement('td');
	let tdItemPatronymic = document.createElement('td');
	let tdItemBthDay = document.createElement('td');
	let tdItemStart = document.createElement('td');
	let tdItemFaculty = document.createElement('td');

	tdItemName.classList.add('table__item', 'item-name');
	tdItemSurName.classList.add('table__item', 'item-surname');
	tdItemPatronymic.classList.add('table__item', 'item-patronymic');
	tdItemBthDay.classList.add('table__item', 'item-bthday');
	tdItemStart.classList.add('table__item', 'item-start');
	tdItemFaculty.classList.add('table__item', 'item-faculty');

	tdItemName.textContent = obj.name;
	tdItemSurName.textContent = obj.surname;
	tdItemPatronymic.textContent = obj.patronymic;
	tdItemBthDay.textContent = obj.birthday;
	tdItemStart.textContent = obj.start;
	tdItemFaculty.textContent = obj.faculty;

	tr.append(tdItemName, tdItemSurName, tdItemPatronymic, tdItemBthDay, tdItemStart, tdItemFaculty);
	
	return tr;
}
$container.append(createForm().form);
