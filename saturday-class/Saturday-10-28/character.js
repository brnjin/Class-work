function Character(characterObj) {
  this.name = characterObj.name;
  this.profession = characterObj.profession;
  this.gender = characterObj.gender;
  this.age = characterObj.age;
  this.strength = characterObj.strength;
  this.hp = characterObj.hp;

  this.isAlive = function() {
    return this.hp > 0;
  }

  this.getLivingStatus = function() {
    if (this.isAlive()) {
      console.log(`${this.name} is alive`);
    } else {
      console.log(`${this.name} be dead`);
    }
  }

  this.attack = function(character) {
    if (character.isAlive()) {
      character.hp -= this.strength;
      if (!character.isAlive()) {
        this.levelUp();
      }
    }

  }

  this.levelUp = function() {
    this.hp += 25;
    this.strength += 5;
    this.age ++;
  }

  this.printStats = function() {
    console.log('character name: ', this.name);
    console.log('character profession: ', this.profession);
    console.log('character gender: ', this.gender);
    console.log('character age:', this.age);
    console.log('character strength:', this.strength);
    console.log('character hp:', this.hp);
    console.log('-----------------')
  }
}

var batman = new Character({
  name: 'batman',
  profession: 'vigilantye',
  gender: 'male',
  age: 38,
  strength: 12,
  hp: 30,
});

var joker = new Character({
  name: 'joker',
  profession: 'mischeif archetect',
  gender: 'male',
  age: 32,
  strength: 15,
  hp: 22,
})

batman.getLivingStatus();
joker.getLivingStatus();

joker.printStats();
joker.attack(batman);
joker.attack(batman);
joker.printStats();

/** Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)

* Each character created using your constructor should have the following properties...

  * Name: The character's name --> String

  * Profession: What the character does for a living --> String

  * Gender: The character's gender --> String

  * Age: The character's age --> Integer

  * Strength: Abstraction for how strong the character is --> Integer

  * HitPoints (HP): Abstraction for how much health the character has --> Integer

  * PrintStats: Function which prints all of a character's properties to the screen

  * Once you have created your constructor, create two new characters and print their properties to the screen

  * Fool around and get comfortable with your constructor before moving onto the next parts of the activity

* Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...

  * IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.

  * Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.

  * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.

* BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!*/