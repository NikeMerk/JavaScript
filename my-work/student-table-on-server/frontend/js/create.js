
// -------------------------------- Файл js с функциями создания елементов --------------------------------

const $container = document.querySelector('.container');
const arrayObject = [];

// Создание нового object c данными input
function createNewObject() {
	let newObject = {
		'name': validInputValue(document.getElementById('input-name').value),
		'surname': validInputValue(document.getElementById('input-surname').value),
		'lastname': validInputValue(document.getElementById('input-lastname').value),
		'birthday': Date.parse(document.getElementById('input-bth-day').value),
		'studyStart': parseInt(document.getElementById('input-study-start').value),
		'faculty': validInputValue(document.getElementById('input-faculty').value),
	};
  createNewPostForm(newObject);
	arrayObject.push(newObject);
	return newObject;
}

// Cоздание form
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

	form.classList.add('form');

	blockInputName.classList.add('form__blok', 'block-input-name');
	blockInputSurname.classList.add('form__blok', 'block-input-surname');
	blockInputPatronymic.classList.add('form__blok', 'block-input-lastname');
	blockInputBthDay.classList.add('form__blok', 'block-input-birthday')
	blockInputStart.classList.add('form__blok', 'block-input-study-start')
	blockInputFaculty.classList.add('form__blok', 'block-input-faculty')

	labelForInputName.classList.add('form__label', 'label')
	labelForInputSurname.classList.add('form__label', 'label')
	labelForInputPatronymic.classList.add('form__label', 'label')
	labelForInputBthDay.classList.add('form__label', 'label')
	labelForInputStart.classList.add('form__label', 'label')
	labelForInputFaculty.classList.add('form__label', 'label')

	inputName.classList.add('input-name', 'input');
	inputSurname.classList.add('input-surname', 'input');
	inputPatronymic.classList.add('input-lastname', 'input');
	inputBthDay.classList.add('input-bth-day', 'input');
	inputStart.classList.add('input-study-start', 'input');
	inputFaculty.classList.add('input-faculty', 'input');
  formButton.classList.add('form-button', 'button');

	inputName.id = 'input-name';
	inputSurname.id = 'input-surname';
	inputPatronymic.id = 'input-lastname';
	inputBthDay.id = 'input-bth-day';
	inputStart.id = 'input-study-start';
	inputFaculty.id = 'input-faculty';
	formButton.id = 'form-button';

	inputStart.type = Number
	inputBthDay.type = 'date';
	inputStart.type = 'date';

	inputName.setAttribute('name', 'name');
	inputSurname.setAttribute('name', 'surname');
	inputPatronymic.setAttribute('name', 'lastname');
	inputBthDay.setAttribute('name', 'birthday');
	inputStart.setAttribute('name', 'study-start');
	inputFaculty.setAttribute('name', 'faculty');

	labelForInputName.setAttribute('for', 'name');
	labelForInputSurname.setAttribute('for', 'surname');
	labelForInputPatronymic.setAttribute('for', 'lastname');
	labelForInputBthDay.setAttribute('for', 'birthday');
	labelForInputStart.setAttribute('for', 'study-start');
	labelForInputFaculty.setAttribute('for', 'faculty');

	let today = new Date();
	let dayDate = today.getDate();
	let monthDate = today.getMonth()+1;
	let yearDate = today.getFullYear();
	if(dayDate<10){dayDate='0'+dayDate};
	if(monthDate<10){monthDate='0'+monthDate};
	today = yearDate+'-'+monthDate+'-'+dayDate;

	inputBthDay.setAttribute("min", "1900-01-01");
	inputStart.setAttribute("min", "2000-01-01");
	inputBthDay.setAttribute("max", today);
	inputStart.setAttribute("max", today);

	formButton.innerHTML = 'Добавить студента';
  formButton.type = 'submit';

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

// Cоздание сортировочных input
function createSearchBlockInput() {
  let title = document.createElement('h3');
  let mainBlock = document.createElement('div');
  let blockLeft = document.createElement('div');
  let blockRight = document.createElement('div');
  let blockInputName = document.createElement('div');
  let blockInputBirthday = document.createElement('div');
  let blockInputStart = document.createElement('div');
  let blockInputFaculty = document.createElement('div');

  let inputName = document.createElement('input');
  let inputBirthday = document.createElement('input');
  let inputStart = document.createElement('input');
  let inputFaculty = document.createElement('input');

  let labelInputName = document.createElement('label');
  let labelInputBirthday = document.createElement('label');
  let labelInputStart = document.createElement('label');
  let labelInputFaculty = document.createElement('label');

  title.classList.add('search-title');

  blockLeft.classList.add('block-left');
  blockRight.classList.add('block-right');
  blockInputName.classList.add('search-block-input');
  blockInputBirthday.classList.add('search-block-input');
  blockInputStart.classList.add('search-block-input');
  blockInputFaculty.classList.add('search-block-input');

  mainBlock.classList.add('main-block');
  inputName.classList.add('search-input-name', 'search-input');
  inputBirthday.classList.add('search-input-inputBirthday', 'search-input');
  inputStart.classList.add('search-input-inputStart', 'search-input');
  inputFaculty.classList.add('search-input-inputFaculty', 'search-input');

  title.textContent = 'Сортировать по:'

  labelInputName.textContent = 'ФИО';
  labelInputBirthday.textContent = 'Дата рождения';
  labelInputStart.textContent = 'Год нач. обучения';
  labelInputFaculty.textContent = 'Факультет';

 inputName.placeholder = 'Иванов Иван Иванович'
 inputStart.placeholder = '2000г'
 inputFaculty.placeholder = 'Химии'

  inputName.type = 'text';
  inputBirthday.type = 'date';
  inputStart.type = 'number';
  inputFaculty.type = 'text';

  labelInputName.setAttribute('for', 'name');
  labelInputBirthday.setAttribute('for', 'birthday');
  labelInputStart.setAttribute('for', 'study-start');
  labelInputFaculty.setAttribute('for', 'faculty');

  inputName.setAttribute('name', 'surname');
  inputBirthday.setAttribute('name', 'birthday');
  inputStart.setAttribute('name', 'study-start');
  inputFaculty.setAttribute('name', 'faculty');

  blockInputName.append(labelInputName, inputName);
  blockInputBirthday.append(labelInputBirthday, inputBirthday);
  blockInputStart.append(labelInputStart, inputStart);
  blockInputFaculty.append(labelInputFaculty, inputFaculty);



  blockLeft.append(title);
  blockRight.append(blockInputName,
    blockInputBirthday,
    blockInputStart,
    blockInputFaculty
  )

  mainBlock.append(
    blockLeft,
    blockRight
  );


  return mainBlock;
}

// Создание елемента таблицы
function createItemFromBodyTable(obj) {
	let tr = document.createElement('tr');
	let tdItemName = document.createElement('td');
	let tdItemSurName = document.createElement('td');
	let tdItemPatronymic = document.createElement('td');
	let tdItemBthDay = document.createElement('td');
	let tdItemStart = document.createElement('td');
	let tdItemFaculty = document.createElement('td');
  let buttonDelete = document.createElement('button');
  let imgDelete = document.createElement('img');

	tr.classList.add('tr');
	tdItemName.classList.add('table__item', 'item-name');
	tdItemSurName.classList.add('table__item', 'item-surname');
	tdItemPatronymic.classList.add('table__item', 'item-lastname');
	tdItemBthDay.classList.add('table__item', 'item-birthday');
	tdItemStart.classList.add('table__item', 'item-study-start');
	tdItemFaculty.classList.add('table__item', 'item-faculty');
  buttonDelete.classList.add('table__button', 'button-delete');
  buttonDelete.id = 'button-delete'
  imgDelete.classList.add('table__img', 'img-delete');

	let newDate = new Date(Number(obj.birthday));
	let dateBirthday = correctedDate(converterDate(newDate.toISOString().substr(0, 10)));
	let howOldStudent = getOldStudent(newDate);

  buttonDelete.setAttribute('title', 'Удалить студента');
	tdItemName.textContent = obj.name;
	tdItemSurName.textContent = obj.surname;
	tdItemPatronymic.textContent = obj.lastname;
	tdItemBthDay.textContent = `${dateBirthday} (${howOldStudent} ${plural(howOldStudent, declension)})`;
	tdItemStart.textContent = report(obj.studyStart);
	tdItemFaculty.textContent = obj.faculty;

  buttonDelete.onclick = () => {
    for (let i = 0; i < arrayObject.length; i++) {
      if (arrayObject[i].name == tdItemName.textContent) {
        arrayObject.splice(i, 1);
        console.log(arrayObject)
      }
    }
    deleteElem(obj.id);
    tr.remove();
    // console.log(arrayObject);
    // console.log(arrayObject.length);
  }

  buttonDelete.append(imgDelete);
  tdItemFaculty.append(buttonDelete);
	tr.append (
		tdItemName,
		tdItemSurName,
		tdItemPatronymic,
		tdItemBthDay,
		tdItemStart,
		tdItemFaculty
	);
	return tr;
}

// Создание поста на каждого студента
function createNewPostForm(obj) {
  fetch('http://localhost:3000/api/students', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(obj => obj.json())
  .then(() => downloadLastStudentOnTable())
}

$container.append(createForm().form, createSearchBlockInput());

