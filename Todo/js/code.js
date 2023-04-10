
	let listArray = [];
	let saveList = '';

	function getSpecialId(array) { // Гениратора id 
		let maxNumber = 0;
		for (let elem of array) {
			if (elem.id > maxNumber) maxNumber = elem.id;
		}
		return maxNumber + 1;
	}

	function createTitle(title) { // Заголовок
		let todoTitle = document.createElement('h3');
		todoTitle.textContent = title;
    return todoTitle;
  }

	function createForm() { // Форма
		let form = document.createElement('form');
		let input = document.createElement('input');
		let formBlock = document.createElement('div');
		let formButton = document.createElement('button');

		form.classList.add('form');
		input.classList.add('input');
		formBlock.classList.add('form-block');
		formButton.classList.add('form-button');

		input.placeholder = 'input';
		formButton.textContent = 'push';

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
		}
	}

	function createList() { // Лист
		let list = document.createElement('ul');
		list.classList.add('list');
    return list;
	}

	function createItem(obj) { // Пункты списка

		let item = document.createElement('li');
		let span = document.createElement('span');
		let itemBlock = document.createElement('div');
		let buttonDone = document.createElement('button');
		let buttonDelete = document.createElement('button');

		item.classList.add('item');
		span.classList.add('span');
		itemBlock.classList.add('item-block');
		buttonDone.classList.add('button-done');
		buttonDelete.classList.add('button-delete');

		span.textContent = obj.name;
		buttonDone.textContent = 'done';
		buttonDelete.textContent = 'delete';

		itemBlock.append(buttonDone, buttonDelete);
		item.append(span, itemBlock);

		if (obj.done == true) {
			item.classList.toggle('item-done');
		}

		buttonDone.onclick = () => {
			item.classList.toggle('item-done');
			for (let elem of listArray) {
				if (elem.id == obj.id) elem.done = !elem.done;
				localStorage.setItem(saveList, JSON.stringify(listArray));
			}
		};

		buttonDelete.onclick = () => {
			if(confirm('Are you sure?')) {
				item.remove();
				for (let elem = 0; elem < listArray.length; elem++) {
					if (listArray[elem].id == obj.id) listArray.splice(elem, 1);
					localStorage.setItem(saveList, JSON.stringify(listArray));
				}
			}
		};

		return {
			item,
      span,
      itemBlock,
      buttonDone,
			buttonDelete,
		}
	}

	function createTodoApp(container, title) { // Приложение
		let startTitle = createTitle(title);
		let startList = createList();
		let startForm = createForm();

		container.append(startTitle, startForm.form, startList);

		let keyNameLocalStorage = title;
		saveList = keyNameLocalStorage;
		console.log(saveList)

		if (saveList != null && saveList != '') {
			listArray = JSON.parse(localStorage.getItem(saveList));
      if (listArray!= null && listArray!= '') {
        for (let elem of listArray) {
          startList.append(createItem(elem).item);
        }
      }
		}

		let formButtonClick = document.querySelector('.container .form .form-block .form-button');
		let inputValue = document.querySelector('.container .form .input');
		
		formButtonClick.onclick = (e) => {
			e.preventDefault();

			let newObj = {
				id: getSpecialId(listArray),
				name: inputValue.value,
				done: false,
			}
			listArray.push(newObj);
			startList.append(createItem(newObj).item);
			startForm.input.value = '';
			startForm.formButton.disabled = true;
			localStorage.setItem(saveList, JSON.stringify(listArray));
		}
  }

window.createTodoApp = createTodoApp;