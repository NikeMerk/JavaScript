
let arr = [1, 2, 4, 5, 6];
let button = document.querySelector('.container .button');
let count = 1;

button.onclick = () => {
	arr.sort((a, b) => {
		if (count >= 1) {
			if (a < b) return 1;
			else return -1;
		}else {
			if (a > b) return 1;
			else return -1;
		}
	})
	console.log(arr);
};

