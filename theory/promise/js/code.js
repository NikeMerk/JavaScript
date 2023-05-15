console.log('hello world');

// пример работы с ассинхронностями
// типо тут кароче это, ну...с сервака грузится чё то короче, 
// вот, ну и типо короче загрузилось да... воооот, а надо добавить
// ключ в объект но прежде, дождаться скачивания...короче ты понял 
// да...хыыы еба..

// console.log('Downloading object...');
// setTimeout(() => {
// 	let object = {
// 		name: 'Nike',
// 		surname: 'Merkushev',
// 	};
// 	console.log(object);
// 	console.log('Push in object kay "age"');
// 	setTimeout(() => {
// 		object.age = 45;
// 		console.log(object)		
// 	}, 1000);
// },1000);


console.log('Downloading object...');
const promiseOne = new Promise(function(resolve, reject) {

	setTimeout(() => {
		let object = {
			name: 'Nike',
			surname: 'Merkushev',
		};
		resolve(object);
	}, 1000);
})

promiseOne.then(() => {
	console.log('promise resolved')
});