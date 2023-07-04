// let $ = document.querySelector.bind(document);
// let id = document.getElementById.bind(document);
// let title = $('.title');
// let titleName = id('name');
// console.log(titleName)
// console.log(title)

// const car = {
// 	brand : 'Renault',
// 	slogan() {
// 		console.log(`Заведи свой ${this.brand}`)
// 	}
// }
// const toyota = {brand : 'Toyota',}
// let toyotaSlogan = car.slogan.bind(toyota)
// console.log(toyotaSlogan())	





const restOne = {
	on: 2,
	calculate(total) {
		console.log(this)
		return total + total * this.on;
	}
}

const restOnePay = restOne.calculate(1000);
console.log(restOnePay)
