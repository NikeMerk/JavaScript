let users = [
	{
		surname: 'Nike', 
		name: 'Merk',
		age: 27,
	},
	{
		surname: 'surname2',
		name: 'name2',
		age: 32,
	},
	{
		surname: 'surname3',
		name: 'name3',
		age: 33,
	},
];
function getTitle(titles) {
	let title = document.createElement('h6');
	title.classList.add('title');
	title.innerHTML = titles;
	return title;
}
function getInputAndButton() {
	let block = document.createElement('div');
	let inputName = document.createElement('input');
	let inputSurname = document.createElement('input');
	let inputAge = document.createElement('input');
	let button = document.createElement('button');

	block.classList.add('block');
	inputName.classList.add('input-name');
	inputSurname.classList.add('input-surname');
	inputAge.classList.add('input-age');
	button.classList.add('button');

	inputName.placeholder = 'input name';
	inputSurname.placeholder = 'input surname';
	inputAge.placeholder = 'input age';
	button.innerHTML = 'push';

	block.append(inputName, inputSurname, inputAge, button);

	return {
		block,
		inputName,
		inputSurname,
		inputAge,
		button,
	}
}

document.addEventListener('DOMContentLoaded', () => {
	let container = document.body.querySelector('.container');
	let startInputButton = getInputAndButton();

	container.append(startInputButton.block);

	container.append(getTitle(localStorage.getItem('users')));
	startInputButton.button.onclick = () => {
		let newUser = {
			name: startInputButton.inputName.value,
			surname: startInputButton.inputSurname.value,
			age: startInputButton.inputAge.value,
		};
		users.push(newUser);
		localStorage.setItem('users', JSON.stringify(users));
	}
});