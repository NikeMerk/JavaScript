console.log('hello world')

function getValue(array, kay) {
	console.log('hello world')
	let result = [];
	
	array.map(obj => {
		result.push(obj[kay])
	})
	return result;
}

export default getValue;