function Class() {
	this.name = "Class";
	this.surname = "Example";
}

let methods = {
	seyHello() {
		console.log(`Hello ${this.name}. Your surname is ${this.surname}`);
	}
}

Object.assign(Class.prototype, methods);
Object.defineProperty(Class.prototype, "name", {
	set(value) {
		this._name = value;
		console.log(`${this.name} is changed`)
	},
	get() {
		return this._name;
	}
});