// Своим результатом filter возвращает новый массив,
// в который войдут только те элементы, для которых коллбэк вернет true.

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let result = arr.filter(function(elem) {
	return elem % 2 == 0;
})
console.log(result) // [2, 4, 6, 8]

// Та же ф-я но через map()
let arrOne = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne = arr.map(function(elem) {
	return elem % 2 == 0;
})
console.log(resultOne); //[false, true, false, true, false, true, false, true]