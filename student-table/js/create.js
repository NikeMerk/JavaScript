function createForm() {
	let form = document.createElement('form');
	let inputName = document.createElement('input');
	let	inputSurname = document.createElement('input');
	let inputPatronymic = document.createElement('input');
	let inputBthDay = document.createElement('input');
	let inputStart = document.createElement('input');
	let inputFaculty = document.createElement('input');

	form.classList.add('form');
	inputName.classList.add('input-name');
	inputSurname.classList.add('input-surname');
	inputPatronymic.classList.add('input-patronymic');
	inputBthDay.classList.add('input-bth-day');
	inputStart.classList.add('input-start');
	inputFaculty.classList.add('input-faculty');



	inputName.placeholder = 'Введите имя';
	inputSurname.placeholder = 'Введите фамилию';
	inputPatronymic.placeholder = 'Введите отчество';
	inputBthDay.placeholder = 'День рождения';
	inputStart.placeholder = 'Начало обучения';
	inputFaculty.placeholder = 'Факультет';
}