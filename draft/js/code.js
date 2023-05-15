

const button = document.querySelector('.container .button');

button.onclick = () => {
	arr.sort((a, b) =>{
		if (a.surname === b.surname) {
			return sortOnName(a, b);
		}
		if (a.surname > b.surname) return 1;
		else return -1;
	})
	console.log(arr)
};

function sortOnName(a, b) {
	if (a.name > b.name) return 1;
	else return -1;
}




