
export function createTitle(title) {
	let todoTitle = document.createElement('h2');
	todoTitle.textContent = title;
	todoTitle.classList.add('title');
	return todoTitle;
}

function createForm() {
	let form = document.createElement('form');
	let input = document.createElement('input');
	let formBlock = document.createElement('div');
	let formButton = document.createElement('button');

	form.classList.add('form');
	input.classList.add('input');
	formBlock.classList.add('form-block');
	formButton.classList.add('form-button');

	input.placeholder = 'Введите дело';
	formButton.textContent = 'Добавить';

	formBlock.append(formButton);
	form.append(input, formBlock);

	formButton.disabled = true;
	input.oninput = () => {
		input.value ? formButton.disabled = false : formButton.disabled = true;
	};

	return {
		form,
		input,
		formBlock,
		formButton,
	};
}

function createList() {
	let list = document.createElement('ul');
	list.classList.add('list');
	return list;
}

function createItem(obj, changeObj, deleteObj) {
	let item = document.createElement('li');
	let span = document.createElement('span');
	let itemBlock = document.createElement('div');
	let buttonDone = document.createElement('button');
	let buttonDelete = document.createElement('button');

	item.classList.add('item');
	span.classList.add('span');
	itemBlock.classList.add('item-block');
	buttonDone.classList.add('button-done', 'btn');
	buttonDelete.classList.add('button-delete', 'btn');

	span.textContent = obj.name;
	buttonDone.textContent = 'Готово';
	buttonDelete.textContent = 'Удалить';

	if (obj.done == true) item.classList.toggle('item-done');

	buttonDone.onclick = () => {
		changeObj(obj.done = !obj.done, obj.id);
		item.classList.toggle('item-done');
	};

	buttonDelete.onclick = () => {
		if(confirm('Вы уверены?')) {
			deleteObj(obj.id)
			item.remove();
		}
	};
	itemBlock.append(buttonDone, buttonDelete);
	item.append(span, itemBlock);
	return item
}

async function createTodoApp (container, {
	title,
	owner,
	myTodoList,
	buttonChangePost,
	buttonDeletePost,
	buttonPostOnServer, 
}) {
	const startTitle = createTitle(title);		
	const startForm = createForm();
	const startList = createList();
	const todoList = await myTodoList();

	container.append(startTitle, startForm.form, startList);
	todoList.map((obj) => {
		startList.append(createItem(obj, buttonChangePost, buttonDeletePost));
	})

	startForm.form.onsubmit = async (e) => {
		e.preventDefault();

		let obj = {
			name: startForm.input.value,
			owner: owner,
			done: false,
		};
		startList.innerHTML = '';
		await buttonPostOnServer(obj);
		const downNewTodoList = await myTodoList(owner);
		downNewTodoList.map((obj)	=> {
			startList.append(createItem(obj, buttonChangePost, buttonDeletePost));
		})
		startForm.input.value = '';
		startForm.formButton.disabled = true;
	};
}
export { createTodoApp };


