/*var arg = process.argv

arg = arg(2)
*/

function DigitalPal (currentStatus) {
	this.hungry = currentStatus.hungry,
	this.sleepy = currentStatus.sleepy,
	this.bored = currentStatus.bored,
	this.age = currentStatus.age
	this.feed = function(){
		if (!this.hungry){
			console.log("No thanks, I am full!");			
		}else{
			console.log("That was Yummy!");
			this.sleepy = true;
		}
	}
	this.status = function(){
		console.log(`Is your pet hungry? ${this.hungry}`);
		console.log(`Is your pet sleepy? ${this.sleepy}`);
		console.log(`Is your pet bored? ${this.bored}`);
		console.log(`Your pet is ${this.age} years old!`);
		console.log("================================");
	}
	this.birthday = function(){
			this.age++;
			console(`It's my Birthday! I am ${this.age} years old!`);
		}
	this.sleep = function(){
		if (!this.sleepy){
			console.log("No way! I'm Not tired!");
		}else {
			console.log("ZzzZzzzZz");
			this.sleepy = false;
			this.bored = true;
			this.birthday();
		}
	}
	this.play = function(){
		if (!this.bored){
			console.log("Yay! Let's Play!");
			this.bored = false;
			this.hungry = true;
		}else{
			console.log("Not right now. Later?");
		}
	}

};


var myNewPet = new DigitalPal({
	hungry: false,
	sleepy: false,
	bored: true,
	age: 0
});

/*var dog = new DigitalPal({
	hungry: false,
	sleepy: false,
	bored: true,
	age: 0
	outside: false,
	bark: function bark(){
		console.log("Woof Woof!")
	}

})*/
myNewPet.status();
myNewPet.play();
myNewPet.status();
myNewPet.sleep();
myNewPet.status();
myNewPet.feed();
myNewPet.status();




