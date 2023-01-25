// Метод some()

// метод some проверяет элементы массива и возвращает true, 
// если хотя бы для одного элемента коллбэк вернул true,
// в противном случае метод возвращает false.

// Короче говоря Это функция ФЛАГ. она проверит, срабатывает ли 
// то событие которое описать в теле, если да, вернет true, если нет false

// let arr = [2, 4, 6, 8];
// let result = arr.some(elem => elem % 2 == 0);
// console.log(result);

// let arrOne = [21, 56, 25, 44, 89];
// console.log(arrOne.some(elem => elem == 20)); 

let arrTwo = ['on', 'two', 'three']
let resultTwo = arrTwo.some(elem => elem === 'one');
console.log(resultTwo); 