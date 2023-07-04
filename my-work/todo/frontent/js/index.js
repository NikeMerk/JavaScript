(function () {
	let listArray = [];
	let listName = localStorage.getItem('listArray');

	function createSpecialId(arr) { 
		let maxNumber = 0;
		for (let elem of arr) {
			if (elem.id > maxNumber) {
				maxNumber = elem.id;
			}
		}
		return maxNumber + 1;
	}

	function createTitle(title) {
		let todoTitle = document.createElement('h3');
		todoTitle.innerHTML = title;
		return todoTitle;
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

		button.disabled = true;
		input.oninput = () => {
			input.value ? button.disabled = false : button.disabled = true;
		};

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
		let itemButtonDelete = document.createElement('button');

		item.classList.add('item');
		itemText.classList.add('item-text');
		itemButtonDone.classList.add('button-done');
		itemButtonDelete.classList.add('button-delete');

		
		itemText.innerText = obj.name;
		itemButtonDone.innerText = 'done';
		itemButtonDelete.innerText = 'delete';

		itemBlock.append(itemButtonDone, itemButtonDelete);
		item.append(itemText, itemBlock);

		if (obj.done == true) {
			item.classList.toggle('item-done');
		}

		itemButtonDone.onclick = () => {
			item.classList.toggle('item-done');
			for (let elem of listArray) {
				if (elem.id == obj.id) elem.done = !elem.done;
			}
			localStorage.setItem('listArray', JSON.stringify(listArray));
		};

		itemButtonDelete.onclick = () => {
			if(confirm('Are you sure?')) item.remove();	
			for (let elem = 0; elem < listArray.length; elem++) {
				if (listArray[elem].id == obj.id) listArray.splice(elem, 1);
			}
			localStorage.setItem('listArray', JSON.stringify(listArray));
		};

		return {
			item, 
			itemText,
			itemBlock,
			itemButtonDone,
			itemButtonDelete,
		};
	}

	function createTodoApp(container, title) {
		let kayName = title;
		let startTitle = createTitle(title)
		let startList = createList();
		let startForm = createForm();
		container.append(startTitle, startForm.form, startList);
		
		if (listName != null && listName != '') { 
			listArray = JSON.parse(localStorage.getItem('listArray'));
			for (let elem of listArray) {
				startList.append(createItem(elem).item);
			}
		}

		startForm.button.onclick = (e) => {
			e.preventDefault();

			let inputValue = document.querySelector('.container .input').value;
			let newObj = {
				id: createSpecialId(listArray),
				name: inputValue,
				done: false,
			};
			

			listArray.push(newObj);
			startList.append(createItem(newObj).item);
			startForm.button.disabled = true;
			startForm.input.value = '';
			localStorage.setItem('kayName', JSON.stringify(listArray));
			console.log(kayName)
		}
	};
	window.createTodoApp = createTodoApp;
})();
