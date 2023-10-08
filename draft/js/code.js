let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('one')
	}, 1000);
	resolve();
	console.log('two')
})