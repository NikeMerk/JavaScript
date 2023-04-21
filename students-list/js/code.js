function createForm() {
	let form = document.createElement('form');
	let inputName = document.createElement('input');
	let inputSurName = document.createElement('input');
	let inputPatronymic = document.createElement('input');
	let inputDateOld = document.createElement('input');
	let inputDateStudies = document.createElement('input');
	let inputFaculty = document.createElement('input');
	let formButton = document.createElement('button');

	form.classList.add('form');
	inputName.classList.add('input-name');
	inputSurName.classList.add('input-surname');
	inputPatronymic.classList.add('input-patronymic');
	inputDateOld.classList.add('input-old');
	inputDateStudies.classList.add('input-study');
	inputFaculty.classList.add('input-faculty');
	formButton.classList.add('form-button');

	inputDateOld.type = 'date';
	formButton.innerHTML = 'Добавть дело'

	form.append(
		inputName, 
		inputSurName,
		inputPatronymic,
		inputDateOld,
		inputDateStudies,
		inputFaculty,
		formButton,
	);

	return {
		form,
		formButton,
	}
}

const $container = document.querySelector('.container');
$container.append(createForm().form)