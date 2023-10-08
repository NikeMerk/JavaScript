
// let result =  fetchJson(url) {
// 	return fetch(url).then(response => response.json())
// }

//  function getPostData(id) {
// 	return Promise.all(
// 		fetchJson(`https://gorest.co.in/public/v2/users/${id}/posts`),
// 		fetchJson(`https://gorest.co.in/public/v2/posts/${id}/comments`),
// 		fetchJson(`https://gorest.co.in/public/v2/users/${id}/todos`),
// 	)
// 	.then(([post, comments, profile]) => {
// 		return {post, comments, profile}
// 	})
// }

// (async () => {
// 	const variable = await getPostData(1);
// })()


// function fetchJson(sec) {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve(5);
// 		}, sec)
// 	})
// }

function getPostData() {
	return Promise.all([
		fetchJson(1000),
		fetchJson(3000),
		fetchJson(2000),
	]).then(([one, two, three]) => {
		console.log(one, two, three)
	})
}
(async () => {
	const data = await getPostData();
})()

let array = [1, 2, 3];
let [one, two, three] = array
























const cssPromise = {};

function getData(src) {

	if (src.endsWith('.js')) {
		cssPromise[src] = import(src);
	}

	if (src.endsWith('.css')) {
		if (!cssPromise[src]) {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = src;
			cssPromise[src] = new Promise((resolve) => {
				link.onload = () => resolve();
			})
			document.head.appendChild(link);
		}
		return cssPromise[src];
	}

}
getData('./code.js')
getData('./style.css')
getData('./variable.js')
console.log(cssPromise);
