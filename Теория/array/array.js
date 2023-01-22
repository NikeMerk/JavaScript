//                                                Массивы


                                          // !_ concat _! (обьедененяет массивы(arr.concat())):


// let a = ['a', 'v', 's'];
// let b = [1, 2, 3];
// let c = a.concat(b);
// console.log(c); // [ 'a', 'v', 's', 1, 2, 3 ]




																					// !_ reverse _!:


// let a = [1, 2, 3];
// a.reverse();
// console.log(a); // [ 3, 2, 1 ]





// 																				!_ push _! (в конец массива), !_ unshift _! (в начало массива):

// let a = [1, 2, 3];
// a.push(4, 5, 6);
// console.log(a); // [ 1, 2, 3, 4, 5, 6 ]
//---
// let a = [1, 2, 3];
// a.unshift(4, 5, 6);
// console.log(a); // [ 4, 5, 6, 1, 2, 3 ]





                                           // !_ shift _! (удал пер ел-т из мас), !_ pop _! (удал посл ел-т из масс):


// let a = ['js', 'ogogo', 'hello'];
// a.shift();
// console.log(a); // [ 'ogogo', 'hello' ]
//---
// let a = ['js', 'ogogo', 'hello'];
// a.pop();
// console.log(a); // [ 'js', 'ogogo' ]





                                            // !_ splice _! (вырезает и возвр-ет указ-ю часть масс (arr.slice(откуда отрез, докуда отрез)):


// let a = [ 1, 2, 3, 4, 5];
// let b = a.splice(0, 3);
// console.log(b); // [ 1, 2, 3 ]

//---
// let a = [ 1, 2, 3, 4, 5];
// let b = [];
// b = a.splice(1, 4);
// console.log(b); // [ 2, 3, 4 ]

//---
// let a = [1, 2, 3, 4, 5];
// a.splice(2, 1, 'd', 'gf', 'g');
// console.log(a); // [1, 2, 'd', 'gf', 'g', 4, 5] при этом 3 удалили

//---
// let myFish = ['1', '2', '3', '4', '5', '6', '7'];
// console.log(myFish.length - 3); // просто что бы посмотреть сколько это (будет '4')
// myFish.splice(myFish.length - 3, 2);
// console.log(myFish); // [ '1', '2', '3', '4', '7' ];





                                           // !_ sort _! (произв сортиров масс в лексикографич поряд):


// let arr = [1, 2, 3, 4, 8, 5, 7, 9, 6];
// console.log(arr.sort()); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ---
// let arr = ["Банан", "Апельсин", "Яблоко", "Манго"];
// console.log(arr.sort()); // [ 'Апельсин', 'Банан', 'Манго', 'Яблоко' ]




                                           // !_ Object.keys _! (возвр-ет ключи объекта в виде массива (Object.keys(объект)):


// let objNomOne = {
// 	name: 'Nikita',
// 	surname: 'Merkushev',
// 	sursurname: 'eblan',
// };
// console.log(Object.keys(objNomOne)); [ 'name', 'surname', 'sursurname' ]

// let objNomTwo = {
// 	cantre: 'russia',
// 	siti: 'zarinsk'
// };  
// console.log(Object.keys(objNomTwo)); [ 'cantre', 'siti' ]
















































