function createForm() {
	let form = document.createElement('form');
	let inputName = document.createElement('input');
	let	inputSurname = document.createElement('input');
	let inputPatronymic = document.createElement('input');
	let inputBthDay = document.createElement('input');
	let inputStart = document.createElement('input');
	let inputFaculty = document.createElement('input');

	form.classList.add('form');
	inputName.classList.add('input-name', 'input');
	inputSurname.classList.add('input-surname', 'input');
	inputPatronymic.classList.add('input-patronymic', 'input');
	inputBthDay.classList.add('input-bth-day', 'input');
	inputStart.classList.add('input-start', 'input');
	inputFaculty.classList.add('input-faculty', 'input');

	inputBthDay.type = 'date';
	inputStart.type = 'number';

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
		inputFaculty
	);

	return {
		form
	}
}

let $container = document.querySelector('.container');

$container.append(createForm().form);
console.log('hello world!');