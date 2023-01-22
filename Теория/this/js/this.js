let input = document.querySelector('#input');
input.value = 'hello world';

// input.addEventListener('blur', () => {
// 	this.value = 'hello pig';
// console.trace();
// });


input.addEventListener('blur', getInput);
function getInput() {
	this.value = 'hello pig';
	console.trace();
};