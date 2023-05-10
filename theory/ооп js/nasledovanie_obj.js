// let object = {
// 	'name': 'Nikita',
// 	'surname': 'Merk',
// 	'old': 26,
// };
// console.log(object);

// let result = {
// 	'name': 'Sanek',
// 	__proto__: object,
// };
// console.log(result);

// let finish = {
// 	'color': 'red',
// 	'people': 45,
// 	__proto__:result,
// };
// console.log(finish);
// console.log(finish.hasOwnProperty('name')); //hasOwnProperty-проверяет есть ли ключ в конкретном объекте, не проваливается в proto

// --------------------------------------------------------------------------------------------------------------------------------------------------

user.password = 'hello'; 
console.log(user.validatePassword());// false

user_profile.age = 26;
user_profile.name = 'Nikita';
console.log(user_profile);