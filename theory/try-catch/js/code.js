

// Конструкция try-catch имеет следующий синтаксис:


try {/*код*/} 
catch (error) {/* обработка ошибки*/}

// Особенность и удобство исключений заключаются в том, что их можно ловить 
// при любом уровне вложенности кода. Посмотрим на примере. Пусть у нас есть
// функция, сохраняющая данные в локальное хранилище:
// function save(str) {
// 	localStorage.setItem('key', str);
// }
// Как вы уже знаете, при переполнении хранилища, метод setItem выбросит исключение.
// Не обязательно, однако, это исключение ловить внутри функции save. Можно 
// обернуть в try каждый вызов самой функции:
// try {
// 	save('некая строка');
// } catch (error) {
// 	alert('закончилось место в локальном хранилище!');
// }


// function getArr(json) {
// 	return JSON.parse(json);
// }
// try {
// 	let arr = getArr('[1,2w,3,4,5]');
// 	console.log(arr);
// }catch (error) {
// 	console.log(error.name); // имя ошибки
// 	console.log(error.message); // текст ошибки
// }



// let variableJson = "[1, 2, 4, 5, 6]";
// function functionOne(json) {
// 	let correctJson = JSON.parse(json);
// }
// try {
// 	functionOne(variableJson)
// }catch (e) {
// 	if (e.name == 'QuotaExceededError') console.log('Нет места в хранилице');
// 	if (e.name == 'SyntaxError') console.log('Некорректный JSON');
// }



// function div(a, b) {
// 	if (b !== 0) return a / b;
// 	else throw new Error('Ошибка! Деление на 0');
// }
// try {
// 	alert(div(2, 0));
// }catch (e) {
// 	console.log(e);
// }



// В JavaScript предусмотрено решение этой проблемы: можно выбрасывать
// исключения не только типа Error, но и любого встроенного в JavaScript
// типа ошибки, например, TypeError, SyntaxError, RangeError.
// try {
// 	throw new SyntaxError('текст исключения');
// } catch (error) {
// 	console.log(error.name); // 'SyntaxError'
// 	console.log(error.message); // 'текст исключения'
// }



// $container = document.querySelector('.container');
// $allDivElem = document.querySelectorAll('.container .elem');
// try {
// 	$allDivElem.forEach(element => {
// 		console.log(checkElement(element));
// 	});
// }catch(e) {
// 	console.log(e);
// }
// function checkElement(element) {
// 	if (element.dataset.price == '' || element.dataset.amount == '') {
// 		throw {
// 			name: "FalseProductInputPrice",
// 			message: 'Нет цены либо количестка товара',
// 		} 
// 	}else return element.dataset.price + element.dataset.amount;
// }
