let listArray = [];
let saveList = [];

function createSpecialId(arr) {
	let maxNumber = 0;
	for (let elem of arr) {
		if (elem.id == maxNumber) maxNumber = elem.id;
	}
	return maxNumber + 1;
}

function createList() {
	let list = document.createElement('ul');
	list.classList.add('list');
	return list;
}

function createForm() {
	let form = document.createElement('form');
	let input = document.createElement('input');
	let button = document.createElement('button');

	form.classList.add('form');
	input.classList.add('input');
	button.classList.add('button');

	input.placeholder = 'input placeholder';
	button.textContent = 'push me';


	form.append(input, button);

	return {
		form,
		input,
		button,
	}
}

function createItem(obj) {
	let item = document.createElement('li');
  let itemText = document.createElement('span');
	let itemBlock = document.createElement('div');
	let itemButtonDone = document.createElement('button');
	let itemBButtonDelete = document.createElement('button');

	item.classList.add('item');
	itemText.classList.add('item-text');
	itemButtonDone.classList.add('button-done');
	itemBButtonDelete.classList.add('button-delete');

	
	itemText.innerText = obj.name;
	itemButtonDone.innerText = 'done';
	itemBButtonDelete.innerText = 'delete';

	itemBlock.append(itemButtonDone, itemBButtonDelete);
	item.append(itemText, itemBlock);

  return {
		item, 
		itemText,
		itemBlock,
    itemButtonDone,
    itemBButtonDelete,
	};
}

document.addEventListener('DOMContentLoaded', () => {

	let container = document.querySelector('.container');
	let startList = createList();
	let startForm = createForm();
	if (saveList.length != 0) {
		for (let elem of saveList) {
			startList.appendChild(createItem(elem).item);
		}
	}

  container.append(startForm.form, startList);	

	document.querySelector('.container .form .button').onclick = (e) => {
		e.preventDefault();
		let inputValue = document.querySelector('.container .input').value;
		let newObj = {
			name: inputValue,
		};
		listArray.push(newObj);
		startList.append(createItem(newObj).item);
		console.log(listArray);
		}
});
	