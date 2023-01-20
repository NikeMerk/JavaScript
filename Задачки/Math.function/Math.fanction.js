//                                             Mатематические функции JavaScript!




//                                             Работа со степенью и корнем

//              !_ Math.pow _! (возведение в степень):

// let a = 2;
// let f = 4;
// console.log(Math.pow(a, f)); // 16

// ---

// let a = 2;
// let result = Math.pow(a, 10);
// console.log(result); // 1024






//             !_ Math.sqrt _! (нахождение корня числа): (При отриц числах будет NaN)

// let a = 4;
// console.log(Math.sqrt(a)); // 2
// ---
// let a = 245;
// console.log(Math.sqrt(a)); // 15.652475842498529
// ---
// let arr = [4, 2, 5, 19, 13, 0, 10];
// let summ = 0
// for (let i of arr) {
//   summ += i
// }
// console.log(Math.sqrt(summ)); // 7.280109889280518







//                                         Работа с функциями округления!


//          !_ Math.round _! (округление до ближ цел числа): (6.4-->6; 6.6-->7)

// console.log(Math.round(6.5)); // 7
// console.log(Math.round(6.49999)); // 6







//          !_ Math.ceil _! (округление дробн числа до цел в больш сторонy):

// console.log(Math.ceil(3.000001)); // 4







//          !_ Math.floor _! (округление числа до цел в мень сторону):

// console.log(Math.floor(2.9999)); // 2






//          !_ toFixed _! (округление числа до указанного знака в дробной части):

// let a = 15;
// let result = Math.sqrt(a) // 3.872983346207417
// console.log(result.toFixed(2)); // 3.87
// ---
// let a = 3.264;
// console.log(a.toFixed()); // 3 (т.к отсутствует параметры метода)
// ---
// let a = 1.222;
// console.log(a.toFixed(6)); // 1.222000 (добав 3 Нуля. т.к праметр метод привыш кол-во знаков дроби)







//          !_ toPrecision _! (округляет число до заданного знака):


// В данном примере число 678.19324 с помощью toPrecision приведется к 4 цифрам,
// причем, так как после 1 стоит цифра 9, то по правилам математики единица преобразуется к двойке:

// let num = 135.19564;
// console.log(num.toPrecision(4)); // 135.2
// ---
// В данном примере число должно сократиться до двух знаков и будет отброшена не только дробная часть,
// но и целая. Поэтому число переведется в экспоненциальную форму:

// let num = 678.19324;
// console.log(num.toPrecision(2)); // 6.8e+2


// -------------------------------------------------------------------------------------------------------------------

//                                                      Задачи!

// let num = 379;
// let result = Math.sqrt(num); // 19.467922333931785
// console.log(Math.round(result)); // 19
// console.log(result.toFixed(1)); // 19.5
// console.log(result.toFixed(3)); // 19.468
// ---
let num = 587;
let 