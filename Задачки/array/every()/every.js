
//Мeтод every() 

// Следующий метод every проверяет элементы массива и возвращает true,
// если для всех элементов массива коллбэк вернул true, в противном случае
// метод возвращает false.

let arr = [2, 4, 7, 8];
let result = arr.every(elem => elem % 2 == 0);
console.log(result); // false

let arrOne = [2, 4, 6, 8];
let resultOne = arrOne.every(elem => elem % 2 == 0);
console.log(resultOne); // true