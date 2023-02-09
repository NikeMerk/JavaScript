// let array = [[1, 2, 3, 4], [-4, 10, 37, -12], [5, -5, 34, 17]];
// let variable = 0;
// array.map((elem) => {
// 	elem.reduce((sum, num) => sum += num);
// 	if (sumArr > variable) variable = sumArr;
// });
// console.log(variable);



function makeWork(arrOfArr, func) {
	let maxSumArr = 0;
	for (let i of arrOfArr) {
		let variable = func(i);
		if (maxSumArr < variable) maxSumArr = variable;
	}
	return maxSumArr;
}
let result = makeWork([[1, 2, 3, 4], [-4, 10, 37, -12], [5, -5, 34, 17]], function worker(elem) {
	let sum = 0;
	for (let i of elem) {
		sum += i;
	}
	return sum;
});
console.log(result)