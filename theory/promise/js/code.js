
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('hello world');
		resolve(text);
	}, 1000)
})
promise
.then((text) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {	
			console.log(text + ' My name is Nike')
			resolve(text)
		}, 1000);
	});
})
.then((text) => {console.log(text + ' My name is')})

// У промиса есть 2 сосотояния Pending - ожидание
// меняеться на full-filled при вызове resolve or reject 

// метод fetch() --> и есть promise
// Пример для наглядности. Синтаксис Promise:

// let promise = new Promise((resolve, reject) => {});
// promise
// .then((result) => {})
// .catch((e) => {});

// Синтаксис fetch:

// fetch('ccылка')
// .then((result) => {})
// .catch((e) => {});



// let a = 5;
// let b = 10;

// let promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (b > a) resolve('да больше'); // создающий код
// 		else reject('нет, меньше');
// 	}, 1000);
// });
// promise
// .then((result) => {
// 	console.log(result);
// })
// .catch((e) => {
// 	console.log(e)
// })




// function getTodo() {
// 	fetch('http://localhost:3000/api/students')
// 	.then((result) => {
// 		// console.log(result);
// 		return result.json();
// 	})
// 	.then((result) => {
// 		console.log(result);	
// 	})
// }
// getTodo();


// async function getTodoOne() {
// 	let awaitOne = await fetch('https://jsonplaceholder.typicode.com/posts');
// 	let awaitTwo =  await awaitOne.json();
// 	return awaitTwo;
// }
// getTodoOne().then((result) => {console.log(result);});



// function addPost(obj) {
// 	fetch('http://localhost:3000/api/students', {
// 		method: 'POST',
// 		body: JSON.stringify(obj),
// 		headers: {
// 			'Content-Type': 'application/json',
// 		}
// 	})
// 	.then(result => {
// 		return result.json();
// 	})
// 	.then(result => {console.log(result);});
// }
// addPost({
// 		name: 'Василий',
// 		surname: 'Мостовой',
// 		lastname: 'Васильевич',
// 		birthday: '2000-03-03T13:07:29.554Z',
// 		studyStart: '2010',
// 		faculty: 'Исторический',
// });


// function deletePost(id) {
// 	fetch(`https://gorest.co.in/public/v2/posts/${id}`, {
// 		method: 'DELETE',
// 		headers: {
// 			authorization: 'Bearer 5b0b8afdb9b4d40cf681127bd78140c4d27d604f581d9c9c306719c42fc947a0', 
// 		}
// 	})
// 	.then(result => {
// 		return result.json();
// 	})
// 	.then(abc => {
// 		console.log(abc);
// 	})
// 	.catch(e => {console.log(e.message);});
// }
// deletePost(29304)




// ----------------------------------------------------------------

$container = document.querySelector('.container');
$mainBlock = document.querySelector('.container .main-block');


// function createCards(obj) {
// 	let card = document.createElement('div');
// 	let img = document.createElement('img');
// 	let text = document.createElement('p');
// 	let span = document.createElement('span');
// 	let blockButton = document.createElement('div'); 
// 	let button = document.createElement('button');

// 	card.classList.add('main-block__card');
// 	img.classList.add('img');
// 	text.classList.add('text');
// 	span.classList.add('span');
// 	button.classList.add('button');

// 	img.src = obj.image;
// 	text.textContent = obj.title;
// 	span.textContent = obj.price;
// 	button.textContent = 'By';

// 	blockButton.append(button);

// 	card.append(img, text, span, blockButton);
// 	return card;
// }

// function getCard() {
// 	fetch('https://fakestoreapi.com/products')
// 	.then(result => result.json())
// 	.then(json => getCardByOne(json))
// }getCard();

// function getCardByOne(json) {
// 	for (let obj of json) {
// 		$mainBlock.appendChild(createCards(obj));
// 	}
// }