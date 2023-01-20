// Метод map();
// Этот метод работает следующим образом: принимает параметром функцию-коллбэк 
// и применяет ее для каждого элемента массива, а затем возвращает измененный массив.

let arr = ['f', 'f', 'f', 'f', 'f'];
let result = arr.map(function(elem, index) {
	return elem + index.toString();

})
console.log(result);

let arrOne = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let resultOne = arrOne.map(function(elem) {
	return elem.map(function(num) {
		return num * 2;
	});
});
console.log(resultOne);