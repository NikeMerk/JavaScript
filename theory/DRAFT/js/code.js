function func(id, callback) {
	let arr = [1, 2, 3, 4, 5];
	setTimeout(() => {
		callback(arr[id]);
	},1000)
}
func(4, function (num) {
	console.log(num + num)
});