(function () {
	
	let listArray = [];
	let localKey = '';
	
	function saveLocalKey() {
		localStorage.setItem(localKey, JSON.stringify(listArray));
	}

	function getSpecialId(arr) {
		let maxNumber = 0;
		for (let elem of arr) {
			if (elem.id > maxNumber) maxNumber = elem.id;
		}
		return maxNumber + 1;
	}

	function createTitle(title) {
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

	function createItem(obj) {
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

		itemBlock.append(buttonDone, buttonDelete);
		item.append(span, itemBlock);

		if (obj.done == true) item.classList.toggle('item-done');

		buttonDone.onclick = () => {
			item.classList.toggle('item-done');
			for (let elem of listArray) {
				if (elem.id == obj.id) elem.done = !elem.done;
			}
			saveLocalKey();
		};

    buttonDelete.onclick = () => {
			if(confirm('Вы уверены?')) {
				item.remove();
				for (let elem = 0; elem < listArray.length; elem++) {
					if (listArray[elem].id == obj.id) listArray.splice(elem, 1);
				}
				saveLocalKey();
			}
		};

		return {
			item,
      span,
      itemBlock,
			buttonDone,
      buttonDelete,
    };
	}

  function createList() {
		let list = document.createElement('ul');
		list.classList.add('list');
    return list;
  }

	function createTodoApp (container, title = 'Список дел', nameLocalKey) {
		
		let startTitle = createTitle(title);		
		let startForm = createForm();
		let startList = createList();

		localKey = nameLocalKey;
		let saveLocalKay = localStorage.getItem(localKey);

		container.append(startTitle);
		container.append(startForm.form);
		container.append(startList);

		if (saveLocalKay != null && saveLocalKay != '') {
			listArray = JSON.parse(saveLocalKay);
			for (let elem of listArray) {
				startList.append(createItem(elem).item);
      }
		}

		startForm.form.onsubmit = (e) => {
			e.preventDefault();

			let inputValue = startForm.input.value;
			let obj = {
				id: getSpecialId(listArray),
				name: inputValue,
				done: false,
      };
			listArray.push(obj);
			startList.append(createItem(obj).item);
			startForm.input.value = '';
			startForm.formButton.disabled = true;
			saveLocalKey();
		};
	}
	window.createTodoApp = createTodoApp;
}());