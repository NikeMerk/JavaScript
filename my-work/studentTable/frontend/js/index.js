
const tableBody = document.querySelector('.container .table .table-body');
const formButton = document.getElementById('form-button');
const buttonBth = document.getElementById('button-birthday');
const buttonDelete = document.getElementById('button-delete');
const allTableButtons = document.querySelectorAll('.table-button');
const allSearchInput = document.querySelectorAll('.search-input');
const takeElementsTable = createItemFromBodyTable;
const blockSearchInput = createSearchBlockInput;
let optionsDelete = {method: 'DELETE'};
let optionsPost = {method: 'POST'};
let optionsGet = {method: 'GET'};
let declension = ['год', 'года', 'лет'];
let path;
let count = 0;

// --- --- ОСНОВНЫЕ ФУНКЦИИ --- ---

fetch('http://localhost:3000/api/students')
.then(response => response.json())
.then(result => getResponse(result));

// Кнопка Form
formButton.onclick = (e) => {
	if (checkInputValue()) {
		e.preventDefault();
    createNewObject();
    checkServer();
		deleteAllInputValue();
	}
}

// Сортировочные inputs
allSearchInput.forEach((input) => {
  input.oninput = () => {
    console.log(arrayObject)
    if (input.value.length == 0) {
      tableBody.innerHTML = '';
      arrayObject.map((obj) => {tableBody.append(takeElementsTable(obj));})
      unlockingInput();
    }else {
      // blockingInput(input); разкоментир если нужно блокироовать сортир-ные input
      path = input.name;
      deleteAllTableElements();
      arrayObject.sort(sortFunction());
      tableBody.innerHTML = '';
      chooseHowFilter(input).map((obj) => {tableBody.append(takeElementsTable(obj))});
    }

  };
});

// Кнопки фильтров
allTableButtons.forEach((buttonBth) => {
	buttonBth.onclick = (e) => {
		deleteAllTableElements();
		path = e.currentTarget.dataset.path;
    count++;
		arrayObject.sort(sortFunction());
		arrayObject.map((obj => {tableBody.append(takeElementsTable(obj))}))
	}
});


// --- --- ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ --- ---


function chooseHowFilter(input) {
  if (path === 'surname') return filterFio(input.value);
  if (path === 'birthday') return filterBirthday(input.value);
  if (path === 'study-start') return filterStartTeach(input.value);
  if (path === 'faculty') return filterFaculty(input.value);
}

function downloadLastStudentOnTable() {
  fetch('http://localhost:3000/api/students')
  .then(response => response.json())
  .then(arr => {
    let lastStudent = arr[arr.length - 1];
    tableBody.append(takeElementsTable(lastStudent));
  })
}

function getResponse(result) {
  if (result.length > 0) downloadStudentOnTable();
  else alert('Список студентов пуст')
}

function downloadStudentOnTable() {
  fetch('http://localhost:3000/api/students')
  .then(response => response.json())
  .then(arrFromServer => {
    for (let student of arrFromServer) {
      arrayObject.push(student);
      tableBody.append(takeElementsTable(student));
    }
  });
}

function deleteElem(id) {

  fetch(`http://localhost:3000/api/students/${id}`, optionsDelete)
  .then(() => {checkServer()})
}

function checkServer() {
  fetch('http://localhost:3000/api/students')
  .then(arr => arr.json())
}

function sortFunction() {
	return function(one, two) {
    if (count % 2 != 0) {
      if (one[path] === two[path]) return 0;
      if (one[path] > two[path]) return 1;
      else return -1;
    } else {
      if (one[path] === two[path]) return 0;
      if (one[path] < two[path]) return 1;
      else return -1;
    }
	}
}

function deleteAllTableElements() {
	let allElementTable = document.querySelectorAll('.tr');
	allElementTable.forEach(elem => elem.remove());
}

function blockingInput(selectedInput) {
  allSearchInput.forEach((input) => {
    if (input != selectedInput) input.disabled = true;
  })
}

function unlockingInput() {
  allSearchInput.forEach((input) => {input.disabled = false;})
}

function filterFio(inputValue) {
  let newArray = [...arrayObject];
  let result = newArray.filter((obj) => {
    if (
      obj.name.toLowerCase().includes(inputValue.trim().toLowerCase()) ||
      obj.surname.toLowerCase().includes(inputValue.trim().toLowerCase()) ||
      obj.lastname.toLowerCase().includes(inputValue.trim().toLowerCase())) {
        return true;
      }
  })
  return result;
}

function filterBirthday(inputValue) {
  let valueDate = Date.parse(inputValue)
  let newArray = [...arrayObject];
  let result = newArray.filter((obj) => {
    if (obj.birthday === valueDate) return true;
  });
return result;
}

function filterStartTeach(inputValue) {
  let newArray = [...arrayObject];
  let numberInput = Number(inputValue)

  let result = newArray.filter((obj) => {
    if (obj.studyStart === numberInput) return true;
  })
  return result;
}

function filterFaculty(inputValue) {
  let newArray = [...arrayObject];
  let result = newArray.filter((obj) => {
    if ((obj.faculty.toLowerCase()).includes((inputValue.trim()).toLowerCase())){return true;}
  })
  return result;
}

function checkInputValue() {
	let result = true;
	let allInput = document.querySelectorAll('.input');
	allInput.forEach((input) => {
		if (!input.value) result = false;
	});
	return result;
}

function deleteAllInputValue() {
	let allInput = document.querySelectorAll('input');
	allInput.forEach((input) => {input.value = '';});
}

function validInputValue(value) {
	return value[0].toUpperCase() + value.slice(1).toLowerCase();
}

function converterDate(num) {
	if (num >= 0 && num <= 9) return '0' + num;
	else return num;
}

function correctedDate(strDate) {
	return strDate.split('-').reverse().join('.');
}

function getOldStudent(birthdayStudent) {
	return ((new Date().getTime() - new Date(birthdayStudent)) / (24 * 3600 * 365.25 * 1000)) | 0;
}

function plural(number, titles) {
	cases = [2, 0, 1, 1, 1, 2];
	return titles[ (number%100>4 && number%100<20) ? 2 : cases[(number%10<5)?number%10:5] ];
}

function report(studentDate) {
	let nowDate = new Date();
	let nowYear = nowDate.getFullYear();

	let nowMonth = nowDate.getMonth() + 1;
	let howStudentTeach = nowYear - studentDate;

	if (howStudentTeach >= 4) {
		if (howStudentTeach = 4 && nowMonth >= 9) {
			return `${studentDate} (закончил)`;
		}
		return `${studentDate} (закончил)`;
	}
	else return ` ${studentDate} (${howStudentTeach} курс)`
}

