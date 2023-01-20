let json = '["Коля", "Вася", "Петя"]';
console.log(JSON.parse(json)[1]); // "Вася" 


let variable = {
	name: "ivan",
	age: 32,
	a: "a"
};
let res = JSON.stringify(variable);
console.log(res, typeof(res));


let arr = [1, 2, 3, 'a', 'b', 'c'];
let result = JSON.stringify(JSON.stringify(arr));
console.log(result, typeof(result)); 