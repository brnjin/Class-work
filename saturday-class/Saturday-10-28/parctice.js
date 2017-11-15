/*var arg = process.argv

arg = arg(2);
console.log(arg(2));

var dogs = {
	"raining": true,
	"noise": "Woof!",
	"makeNoise": function sound() {
		if (this.raining)
			console.log(this.noise);
	}
}
var cats = {
	"raining": false,
	"noise": "Meow!",
	"makeNoise": function sound(){
		if (this.raining)
			console.log(this.noise);
	}
}*/

//Good to make constructors capitalized
function Animal(raining,noise) {
	this.raining = raining;
	this.noise = noise;
	this.makeNoise = function() {
		if (this.raining) {
			console.log(this.noise)
		}
	}
}
var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();

function makeHysteria(animal1, animal2) {
	if (animal1.raining && animal2.raining) {
		console.log("Dogs and cats living in mass hysteria!");
	}
}

makeHysteria(cats, dogs);