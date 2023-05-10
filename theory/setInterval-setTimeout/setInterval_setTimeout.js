// Планирование setTimeout и setInterval
/*
Что бы реализовать планирование есть 2 метода:
1. setTimeout позволяет  вызвать ф-ю 1 раз через определенное время
2. setInterval вызывает ф-ю регулярно через заданный временной промежуток
*/
// setInterval(ф-я или код, задержка, ...параметр);
// setTimeout(ф-я или код, задержка, ...параметр);

//------------------------------------------------------

// function showMessange(text, name) {
//   console.log(`${text}, ${name}!`);
// }
//
// setTimeout(showMessange, 1000, 'привет', 'Васёк')

//------------------------------------------------------

//щетчик от 1 до 5 setTimeout

// function showNumber(num) {
//   console.log(num);
//   if (num < 5) {
//     setTimeout(showNumber, 1000, ++num);
//   }
// }
// setTimeout(showNumber, 1000, 1)

//------------------------------------------------------

// щетчик от 1 до 5 setTimeout

// function showNumber(num) {
//   console.log(num);
//   let timeId = setTimeout(showNumber, 1000, ++num);
//   if (num === 6) {
//     clearTimeout(timeId);
//   }
// }
// setTimeout(showNumber, 1000, 1)

//------------------------------------------------------

// щетчик от 1 до 5 setInterval

// let result = 0;
//
// function showNumber(num) {
//   result += num;
//   console.log(result);
//   if (result === 5) {
//     clearInterval(timeId)
//   }
// }
//
// let timeId = setInterval(showNumber, 1000, 1);

//-----------------------------------------------------------

// Обратный отщет, setInterval:

// let input = document.body.querySelector('.container .input');
// let button = document.body.querySelector('.container .btn');
// let divNumber = document.body.querySelector('.container .timer');

// let container = 0;		// число от value
// let howMuchClick = 0; // лишние клики по button
// let mySetInterval;		// переменная для setInterval

// button.addEventListener('click', timer);

// function timer() {
// 	howMuchClick++
// 	if (howMuchClick < 2) {
// 		container = parseInt(input.value);
// 		mySetInterval = setInterval(timerStart, 1000);
// 	}
// }

// function timerStart() {
// 	container--;
// 	divNumber.textContent = container;
// 	if (container == 0) {
// 		divNumber.textContent = 0; // просто что бы было 0 включительно, а не 1-ка последняя
// 		clearInterval(mySetInterval);
// 	}
// }

//-----------------------------------------------------------

let buttonStart = document.body.querySelector('.container .buttonStart');
let buttonStop = document.body.querySelector('.container .buttonStop');















































































