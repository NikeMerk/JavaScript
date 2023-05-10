
// Метод reduce

/* 
 			Синтаксис:

массив.reduce(function(промежуточный результат, элемент, индекс, массив) { 
	return новый промежуточный результат;
}, начальное значение);
*/


// Пример 
// Найдем сумму элементов массива:

let arr = [1, 2, 3, 4, 5, 6];
let result = arr.reduce(sum, elem =>  sum + elem, 0);
console.log(result); // 21

// let arrOne = [1, 2, -3, -4, -5, 6];
// let resultOne = arrOne.reduce((sum, elem, index, arr) => {
// 	if (elem >= 0) {
// 		sum += elem;
// 	}
// 	return sum;
// }, 0);
// console.log(resultOne);


