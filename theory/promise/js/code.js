
// У промиса есть 2 сосотояния Pending - ожидание
// меняеться на full-filled при вызове resolve or reject 

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
// 	fetch('https://jsonplaceholder.typicode.com/posts')
// 	.then((result) => {
// 		console.log(result);
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
// 	fetch('https://gorest.co.in/public/v2/users', {
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
// 	userId: 1,
// 	title: 'hello world',
// 	body: 'my name is Nike',
// });


function deletePost(id) {
	fetch(`https://gorest.co.in/public/v2/posts/${id}`, {
		method: 'DELETE',
		headers: {
			authorization: 'Bearer 5b0b8afdb9b4d40cf681127bd78140c4d27d604f581d9c9c306719c42fc947a0', 
		}
	})
	.then(result => {
		return result.json();
	})
	.then(abc => {
		console.log(abc);
	})
	.catch(e => {console.log(e.message);});
}
deletePost(29304)




