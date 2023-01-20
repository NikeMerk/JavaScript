// --------- Работа с JSON в JavaScript!

// Этот формат удобен для компактного хранения данных, а также для обмена 
// данными между сайтами или между сайтом и браузером.

/*
Пример корректного json:
let json = '[0, 1, 2, 3, 4]';
--
let json = '{
	"name": "Иван",
	"age": 20,
	"online": true,
	"wife": null,
	"arr": [1, 2, 3, 4],
}';

Пример некорректного json:
let json = '{
	name: "John", --> ключ без клвычек
	"gae": '20', --> одинарные ковычки
}'
*/

// В отличие от структур JavaScript, в JSON не разрешены 
// запятые после последних элементов массивов и объектов:
// let json = '[1, 2, 3, 4, 5,]';  неверно
// let json = '[1, 2, 3, 4, 5]';  верно

// -------------  методы для работы с JSON!

/*
1) Метод JSON.parse - преобразует строку с JSON в обычный объект javascript:
let json = '{
	"name": "Иван",
	"age": 20,
	"online": true,
	"wife": null,
	"arr": [1, 2, 3, 4],
}';
 let result = JSON.parse(json);
console.log(result); --> увидим объект

2) Метод JSON.stringify - преобразует объекты JavaScript в строку JSON:
let obj = {
	name: 'ivan',
	age: 20,
	bool: true,
	arr: [1, 2, 3, 4],
};
let json = JSON.stringify(obj);
console.log(json);   увидим строку в виде объекта
*/