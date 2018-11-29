/* === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

/*
function GameObject(stuff) {
	this.createdAt= stuff.createdAt;
	this.dimensions= stuff.dimensions;
} 
GameObject.prototype.destroy = function() {
  console.log(`Object was removed from the game.`);
}
*/


/*  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
function CharacterStats(stuff) {
	this.healthPoints = stuff.healthPoints;
	this.name = stuff.name;
	GameObject.call(this,stuff);
}
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  console.log(`${this.name} took damage.`);
}
*/

/*  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
function Humanoid(stuff) {
	this.team = stuff.team;
	this.weapons = stuff.weapons;
	this.language = stuff.language;
	CharacterStats.call(this,stuff);
	//GameObject.call(this,stuff);
	
}
//Humanoid.prototype = Object.create(GameObject.prototype);

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function(){
	console.log (`${this.name} offers a greeting in ${this.language}`)
}
*/

class GameObject {
	constructor(stuff3) {
		this.createdAt= stuff3.createdAt;
		this.dimensions= stuff3.dimensions;
	}

	destroy(){
		return(`Object was removed from the game.`);
	}

}


class CharacterStats extends GameObject {
	constructor (stuff2) {
		super(stuff2);
		this.healthPoints = stuff2.healthPoints;
		this.name = stuff2.name;
	}

	takeDamage() {
		return (`${this.name} took damage.`);
	}

}


class Humanoid extends CharacterStats {
	constructor(stuff) {
		super(stuff);
		this.team = stuff.team;
		this.weapons = stuff.weapons;
		this.language = stuff.language;
	}

	greet () {
		return (`${this.name} offers a greeting in ${this.language}`)
	}

}
 

//  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
//  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
//  * Instances of CharacterStats should have all of the same properties as GameObject.


// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

	mage;