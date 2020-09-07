function Animals(name, weight) {
	this.name = name;
	this.weight = weight;
	this.setName = function(name) {
		this.name = name;
	};
	this.setWeight = function(weight) {
		this.weight = weight;
	};
	this.getName = function() {
		return this.name;
	};
	this.getWeight = function() {
		return this.weight;
	};
	this.toString = function() {
		return "Name = " + this.name + ", Weight = " + this.weight;
	};
}
let objAnimals1 = new Animals("Elephant", 46.6);
console.log(objAnimals1.toString());
let objAnimals2 = new Animals();
objAnimals2.setName("Mouse");
console.log(objAnimals2.toString());
