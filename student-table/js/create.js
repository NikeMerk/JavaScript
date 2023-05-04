
const $container = document.querySelector('.container');

function correctDate(num) {
	if (num >= 0 && num <= 9) return '0' + num;
	else return num;
}

function validInputValue(value) {
	return value[0].toUpperCase() + value.slice(1).toLowerCase();
}

function createNewObject() {
	let newObject = {
		'name': validInputValue(document.getElementById('input-name').value),
		'surname': validInputValue(document.getElementById('input-surname').value),
		'patronymic': validInputValue(document.getElementById('input-patronymic').value),
		'birthday': Date.parse(document.getElementById('input-bth-day').value),
		'start': parseInt(document.getElementById('input-start').value),
		'faculty': validInputValue(document.getElementById('input-faculty').value),
	};
	arrayObject.push(newObject);
	return newObject;
}

function createForm() {
	let form = document.createElement('form');

	let blockInputName = document.createElement('div');
	let blockInputSurname = document.createElement('div');
	let blockInputPatronymic = document.createElement('div');
	let blockInputBthDay = document.createElement('div');
	let blockInputStart = document.createElement('div');
	let blockInputFaculty = document.createElement('div');

	let labelForInputName = document.createElement('label');
	let labelForInputSurname = document.createElement('label');
	let labelForInputPatronymic = document.createElement('label');
	let labelForInputBthDay = document.createElement('label');
	let labelForInputStart = document.createElement('label');
	let labelForInputFaculty = document.createElement('label');

	let inputName = document.createElement('input');
	let	inputSurname = document.createElement('input');
	let inputPatronymic = document.createElement('input');
	let inputBthDay = document.createElement('input');
	let inputStart = document.createElement('input');
	let inputFaculty = document.createElement('input');
	let formButton = document.createElement('button');

	form.classList.add('form', 'form-button');

	blockInputName.classList.add('form__blok', 'block-input-name');
	blockInputSurname.classList.add('form__blok', 'block-input-surname');
	blockInputPatronymic.classList.add('form__blok', 'block-input-patronymic');
	blockInputBthDay.classList.add('form__blok', 'block-input-birthday')
	blockInputStart.classList.add('form__blok', 'block-input-start')
	blockInputFaculty.classList.add('form__blok', 'block-input-faculty')

	labelForInputName.classList.add('form__label', 'label')
	labelForInputSurname.classList.add('form__label', 'label')	
	labelForInputPatronymic.classList.add('form__label', 'label')
	labelForInputBthDay.classList.add('form__label', 'label')
	labelForInputStart.classList.add('form__label', 'label')
	labelForInputFaculty.classList.add('form__label', 'label')

	inputName.classList.add('input-name', 'input');
	inputSurname.classList.add('input-surname', 'input');
	inputPatronymic.classList.add('input-patronymic', 'input');
	inputBthDay.classList.add('input-bth-day', 'input');
	inputStart.classList.add('input-start', 'input');
	inputFaculty.classList.add('input-faculty', 'input');

	inputName.id = 'input-name';
	inputSurname.id = 'input-surname';
	inputPatronymic.id = 'input-patronymic';
	inputBthDay.id = 'input-bth-day';
	inputStart.id = 'input-start';
	inputFaculty.id = 'input-faculty';
	formButton.id = 'form-button';

	inputStart.type = Number
	inputBthDay.type = 'date';
	inputStart.type = 'date';

	inputName.setAttribute('name', 'name');
	inputSurname.setAttribute('name', 'surname');
	inputPatronymic.setAttribute('name', 'patronymic');
	inputBthDay.setAttribute('name', 'birthday');
	inputStart.setAttribute('name', 'start');
	inputFaculty.setAttribute('name', 'faculty');

	labelForInputName.setAttribute('for', 'name');
	labelForInputSurname.setAttribute('for', 'surname');
	labelForInputPatronymic.setAttribute('for', 'patronymic');
	labelForInputBthDay.setAttribute('for', 'birthday');
	labelForInputStart.setAttribute('for', 'start');
	labelForInputFaculty.setAttribute('for', 'faculty');

	inputBthDay.setAttribute("min", "2018-01-01");
	inputStart.setAttribute("min", "2000-01-01");

	formButton.innerHTML = 'add student';

	labelForInputName.textContent = 'Введите имя';
	labelForInputSurname.textContent = 'Введите фамилию';
	labelForInputPatronymic.textContent = 'Введите отчество';
	labelForInputBthDay.textContent = 'День рождения';
	labelForInputStart.textContent = 'Начало обучения';
	labelForInputFaculty.textContent = 'Факультет';

	inputName.required = true;
	inputSurname.required = true;
	inputPatronymic.required = true;
	inputBthDay.required = true;
	inputStart.required = true;
	inputFaculty.required = true;

	blockInputName.append(labelForInputName, inputName);
	blockInputSurname.append(labelForInputSurname, inputSurname);
	blockInputPatronymic.append(labelForInputPatronymic, inputPatronymic);
	blockInputBthDay.append(labelForInputBthDay, inputBthDay);
	blockInputStart.append(labelForInputStart, inputStart);
	blockInputFaculty.append(labelForInputFaculty, inputFaculty);

	form.append (
		blockInputName,
		blockInputSurname,
		blockInputPatronymic,
		blockInputBthDay,
		blockInputStart,
		blockInputFaculty,
		formButton,
	);
	
	return form, formButton

}

function createItemFromBodyTable(obj) {
	let tr = document.createElement('tr');
	let tdItemName = document.createElement('td');
	let tdItemSurName = document.createElement('td');
	let tdItemPatronymic = document.createElement('td');
	let tdItemBthDay = document.createElement('td');
	let tdItemStart = document.createElement('td');
	let tdItemFaculty = document.createElement('td');

	tr.classList.add('tr');
	tdItemName.classList.add('table__item', 'item-name');
	tdItemSurName.classList.add('table__item', 'item-surname');
	tdItemPatronymic.classList.add('table__item', 'item-patronymic');
	tdItemBthDay.classList.add('table__item', 'item-bthday');
	tdItemStart.classList.add('table__item', 'item-start');
	tdItemFaculty.classList.add('table__item', 'item-faculty');

	
	let newDate = new Date(obj.birthday);
	let resultDate = newDate.toISOString().substr(0, 10);

	tdItemName.textContent = obj.name;
	tdItemSurName.textContent = obj.surname;
	tdItemPatronymic.textContent = obj.patronymic;
	tdItemBthDay.textContent = resultDate;
	tdItemStart.textContent = obj.start;
	tdItemFaculty.textContent = obj.faculty;

	tr.append(tdItemName, tdItemSurName, tdItemPatronymic, tdItemBthDay, tdItemStart, tdItemFaculty);
	
	return tr;
}

$container.append(createForm().form);

